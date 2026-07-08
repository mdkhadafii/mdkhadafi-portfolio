import { Send } from "lucide-react";
import MagnetButton from "../react-bits/MagnetButton";
import SpotlightCard from "../react-bits/SpotlightCard";
import { profile } from "../data/portfolio";

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());

    console.log("Contact form submitted:", payload);
    alert("Pesan berhasil disiapkan. Hubungkan form ini ke EmailJS, Formspree, atau backend kamu.");
    event.currentTarget.reset();
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
              <label>
                Nama
                <input name="name" type="text" placeholder="Masukkan nama kamu" required />
              </label>

              <label>
                Email
                <input name="email" type="email" placeholder="nama@email.com" required />
              </label>

              <label>
                Pesan
                <textarea name="message" rows="5" placeholder="Tulis pesan kamu di sini..." required />
              </label>

              <MagnetButton type="submit" className="button button--primary contact-form__button">
                Kirim Pesan <Send size={17} />
              </MagnetButton>
            </form>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
