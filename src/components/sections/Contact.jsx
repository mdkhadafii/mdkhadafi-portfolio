import { useState } from "react";
import { Send } from "lucide-react";
import { MagnetButton, SpotlightCard } from "../react-bits";
import { profile } from "../../features/portfolio";

const netlifyFormName = "contact";
const fallbackContactEndpoint = `https://formsubmit.co/ajax/${profile.email}`;
const fallbackContactFormEndpoint = `https://formsubmit.co/${profile.email}`;
const contactEndpoint = "/";

const isNetworkError = (error) =>
  error instanceof TypeError || /failed to fetch|network|load failed/i.test(error.message || "");

const createContactPayload = (formElement) => {
  const formData = new FormData(formElement);
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const message = String(formData.get("message") || "").trim();

  return {
    name,
    email,
    message,
    _subject: `Pesan portfolio baru dari ${name || profile.shortName}`,
    _template: "table",
    _captcha: "false",
    _replyto: email,
    source: window.location.href
  };
};

const submitWithNetlifyForms = async (payload) => {
  const encodedPayload = new URLSearchParams({
    "form-name": netlifyFormName,
    ...payload
  }).toString();

  const response = await fetch(contactEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: encodedPayload
  });

  if (!response.ok) {
    throw new Error("Pesan belum bisa dikirim.");
  }
};

const submitWithFormSubmitAjax = async (payload) => {
  const response = await fetch(fallbackContactEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(payload)
  });
  const result = await response.json().catch(() => ({}));

  if (!response.ok || result.success === false) {
    throw new Error(result.message || "Pesan belum bisa dikirim.");
  }
};

const submitWithFormFallback = (payload) =>
  new Promise((resolve, reject) => {
    const iframeName = `contact-submit-${Date.now()}`;
    const iframe = document.createElement("iframe");
    const form = document.createElement("form");
    let submitted = false;

    const cleanup = () => {
      window.setTimeout(() => {
        iframe.remove();
        form.remove();
      }, 800);
    };

    const timeoutId = window.setTimeout(() => {
      cleanup();
      reject(new Error("Pesan gagal dikirim. Coba lagi atau hubungi saya langsung melalui email."));
    }, 15000);

    iframe.name = iframeName;
    iframe.hidden = true;
    iframe.title = "Contact form submit";
    iframe.addEventListener("load", () => {
      if (!submitted) return;

      window.clearTimeout(timeoutId);
      cleanup();
      resolve();
    });

    form.action = fallbackContactFormEndpoint;
    form.method = "POST";
    form.target = iframeName;
    form.style.display = "none";

    Object.entries(payload).forEach(([name, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value;
      form.appendChild(input);
    });

    document.body.append(iframe, form);
    submitted = true;
    form.submit();
  });

export default function Contact() {
  const [submitState, setSubmitState] = useState({
    status: "idle",
    message: ""
  });

  const isSubmitting = submitState.status === "loading";

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);
    const payload = createContactPayload(formElement);

    if (formData.get("_honey")) {
      formElement.reset();
      return;
    }

    setSubmitState({
      status: "loading",
      message: "Mengirim pesan..."
    });

    try {
      await submitWithNetlifyForms(payload);
      setSubmitState({
        status: "success",
        message: "Pesan terkirim. Saya akan membalas lewat email secepatnya."
      });
      formElement.reset();
    } catch (error) {
      try {
        await submitWithFormSubmitAjax(payload);
        setSubmitState({
          status: "success",
          message: "Pesan terkirim. Saya akan membalas lewat email secepatnya."
        });
        formElement.reset();
        return;
      } catch {
        // Try a normal form post below when browser fetch is blocked or third-party AJAX fails.
      }

      try {
        await submitWithFormFallback(payload);
        setSubmitState({
          status: "success",
          message: "Pesan terkirim. Saya akan membalas lewat email secepatnya."
        });
        formElement.reset();
        return;
      } catch (fallbackError) {
        setSubmitState({
          status: "error",
          message: isNetworkError(error)
            ? fallbackError.message
            : error.message || fallbackError.message
        });
        return;
      }
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact__grid">
          <div className="contact__content" data-reveal>
            <span className="section-kicker">Contact</span>
            <h2>Mari ngobrol soal project berikutnya.</h2>
            <p>
              Punya ide website, dashboard, portfolio, atau aplikasi interaktif? Kirim pesan melalui
              form ini atau hubungi saya lewat sosial media.
            </p>

            <div className="contact__socials">
              {profile.socials.map((social) => {
                const Icon = social.icon;
                const isEmail = social.href.startsWith("mailto:");

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target={isEmail ? undefined : "_blank"}
                    rel={isEmail ? undefined : "noreferrer"}
                  >
                    <Icon size={18} />
                    {social.label}
                  </a>
                );
              })}
            </div>
          </div>

          <SpotlightCard className="contact__form-card" data-reveal>
            <form
              className="contact-form"
              name={netlifyFormName}
              action="/"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="_honey"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value={netlifyFormName} />
              <input
                className="contact-form__honeypot"
                name="_honey"
                type="text"
                tabIndex="-1"
                autoComplete="off"
                aria-hidden="true"
              />
              <input type="hidden" name="_subject" value={`Pesan portfolio baru dari ${profile.shortName}`} />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />

              <label>
                Nama
                <input
                  name="name"
                  type="text"
                  placeholder="Masukkan nama kamu"
                  autoComplete="name"
                  required
                  disabled={isSubmitting}
                />
              </label>

              <label>
                Email
                <input
                  name="email"
                  type="email"
                  placeholder="nama@email.com"
                  autoComplete="email"
                  required
                  disabled={isSubmitting}
                />
              </label>

              <label>
                Pesan
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tulis pesan kamu di sini..."
                  required
                  disabled={isSubmitting}
                />
              </label>

              <MagnetButton
                type="submit"
                className="button button--primary contact-form__button"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Mengirim..." : "Kirim Pesan"} <Send size={17} />
              </MagnetButton>

              {submitState.message && (
                <p
                  className={`contact-form__status contact-form__status--${submitState.status}`}
                  role="status"
                  aria-live="polite"
                >
                  {submitState.message}
                </p>
              )}
            </form>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
