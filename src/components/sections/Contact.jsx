import { useState } from "react";
import { Send } from "lucide-react";
import { MagnetButton, SpotlightCard } from "../react-bits";
import { profile } from "../../features/portfolio";

const fallbackContactEndpoint = `https://formsubmit.co/ajax/${profile.email}`;
const contactEndpoint = import.meta.env.VITE_CONTACT_API_ENDPOINT?.trim() || fallbackContactEndpoint;

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

    if (formData.get("_honey")) {
      formElement.reset();
      return;
    }

    formData.set("_subject", `Pesan portfolio baru dari ${profile.shortName}`);
    formData.set("_template", "table");
    formData.set("_captcha", "false");
    formData.set("_replyto", formData.get("email"));
    formData.set("source", window.location.href);

    setSubmitState({
      status: "loading",
      message: "Mengirim pesan..."
    });

    try {
      const response = await fetch(contactEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json"
        },
        body: formData
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok || result.success === false) {
        throw new Error(result.message || "Pesan belum bisa dikirim.");
      }

      setSubmitState({
        status: "success",
        message: "Pesan terkirim. Saya akan membalas lewat email secepatnya."
      });
      formElement.reset();
    } catch (error) {
      setSubmitState({
        status: "error",
        message:
          error.message ||
          "Pesan gagal dikirim. Coba lagi atau hubungi saya langsung melalui email."
      });
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
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                className="contact-form__honeypot"
                name="_honey"
                type="text"
                tabIndex="-1"
                autoComplete="off"
                aria-hidden="true"
              />

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
