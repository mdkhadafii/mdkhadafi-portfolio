import { SpotlightCard } from "../react-bits";
import { aboutCards, profile } from "../../features/portfolio";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-heading" data-reveal>
          <span className="section-kicker">About</span>
          <h2>Mengenal saya lebih dekat.</h2>
          <p>
            Portfolio ini dirancang untuk menampilkan identitas, skill, project, dan pengalaman
            dengan visual modern yang tetap ringan digunakan.
          </p>
        </div>

        <div className="about__grid">
          <div className="about__story" data-reveal>
            <p>
              Halo, saya <strong>{profile.name}</strong>. Saya menyukai proses membuat tampilan
              website dari ide mentah menjadi interface yang rapi, hidup, dan nyaman digunakan.
              Fokus utama saya ada pada front-end development, UI/UX, animasi web, serta
              pengembangan aplikasi berbasis data dan AI.
            </p>
            <p>
              Dalam membangun produk digital, saya memperhatikan struktur komponen, konsistensi
              desain, aksesibilitas sederhana, performa animasi, dan pengalaman pengguna di berbagai
              ukuran layar.
            </p>
          </div>

          <div className="about__cards" data-stagger>
            {aboutCards.map((card) => {
              const Icon = card.icon;

              return (
                <SpotlightCard className="about-card" key={card.title} data-stagger-item>
                  <div className="about-card__icon">
                    <Icon size={24} />
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
