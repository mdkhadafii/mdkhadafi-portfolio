import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SpotlightCard from "../react-bits/SpotlightCard";
import { skills } from "../data/portfolio";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const skillsRef = useRef(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion) return;

      gsap.fromTo(
        ".skill-card__bar span",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1,
          ease: "power3.out",
          transformOrigin: "left",
          stagger: 0.05,
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 72%"
          }
        }
      );
    },
    { scope: skillsRef }
  );

  return (
    <section id="skills" ref={skillsRef} className="section skills">
      <div className="container">
        <div className="section-heading" data-reveal>
          <span className="section-kicker">Skills</span>
          <h2>Tools dan skill yang saya gunakan.</h2>
          <p>
            Skill ditampilkan dalam bentuk card interaktif agar terasa modern, informatif, dan tidak
            terlalu ramai.
          </p>
        </div>

        <div className="skills__grid" data-stagger>
          {skills.map((skill) => (
            <SpotlightCard className="skill-card" key={skill.name} data-stagger-item>
              <div className="skill-card__top">
                <span className="skill-card__emoji">{skill.icon}</span>
                <span className="skill-card__level">{skill.level}%</span>
              </div>

              <h3>{skill.name}</h3>

              <div className="skill-card__bar" aria-label={`${skill.name} skill level ${skill.level}%`}>
                <span style={{ width: `${skill.level}%` }} />
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
