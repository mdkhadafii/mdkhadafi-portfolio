import { Code2, ExternalLink } from "lucide-react";
import { MagnetButton, SpotlightCard } from "../react-bits";
import { projects } from "../../features/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-heading" data-reveal>
          <span className="section-kicker">Projects</span>
          <h2>Beberapa project pilihan.</h2>
          <p>
            Card project dibuat dengan hover spotlight, tilt movement, tech chips, dan tombol aksi
            agar terlihat seperti portfolio developer profesional.
          </p>
        </div>

        <div className="projects__grid" data-stagger>
          {projects.map((project, index) => (
            <SpotlightCard className="project-card" key={project.title} data-stagger-item>
              <div className={`project-card__preview project-card__preview--${index + 1}`}>
                <span>{project.imageLabel}</span>
                <div className="project-card__window">
                  <i />
                  <i />
                  <i />
                </div>
              </div>

              <div className="project-card__body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-card__tech">
                  {project.tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <div className="project-card__actions">
                  <MagnetButton href={project.live} className="button button--small button--primary">
                    Live Demo <ExternalLink size={16} />
                  </MagnetButton>

                  <MagnetButton href={project.github} className="button button--small button--ghost">
                    GitHub <Code2 size={16} />
                  </MagnetButton>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
