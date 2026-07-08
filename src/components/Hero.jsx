import { useRef } from "react";
import { ArrowDownRight, Sparkles } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import MagnetButton from "../react-bits/MagnetButton";
import PixelBlast from "../react-bits/PixelBlast";
import ProfileCard from "../react-bits/ProfileCard";
import { highlights, profile } from "../data/portfolio";

export default function Hero() {
  const heroRef = useRef(null);
  const title = profile.headline;

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion) return;

      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      timeline
        .from(".hero__eyebrow", { opacity: 0, y: 18, duration: 0.7 })
        .from(".hero__title .char", { opacity: 0, yPercent: 110, rotateX: -70, stagger: 0.018, duration: 0.8 }, "-=0.35")
        .from(".hero__description", { opacity: 0, y: 22, duration: 0.75 }, "-=0.45")
        .from(".hero__actions", { opacity: 0, y: 20, duration: 0.65 }, "-=0.35")
        .from(".hero__panel", { opacity: 0, scale: 0.92, y: 34, duration: 0.8 }, "-=0.65")
        .from(".hero__stat", { opacity: 0, y: 20, stagger: 0.08, duration: 0.6 }, "-=0.45");
    },
    { scope: heroRef }
  );

  return (
    <section ref={heroRef} id="home" className="hero section">
      <PixelBlast />

      <div className="container hero__grid">
        <div className="hero__content">
          <div className="hero__eyebrow">
            <Sparkles size={18} />
            Available for creative web projects
          </div>

          <h1 className="hero__title" aria-label={title}>
            {title.split("").map((character, index) => (
              <span className="char-wrap" key={`${character}-${index}`}>
                <span className="char">{character === " " ? "\u00A0" : character}</span>
              </span>
            ))}
          </h1>

          <p className="hero__description">{profile.description}</p>

          <div className="hero__actions">
            <MagnetButton href="#projects" className="button button--primary">
              View Projects <ArrowDownRight size={18} />
            </MagnetButton>
            <MagnetButton href="#contact" className="button button--ghost">
              Contact Me
            </MagnetButton>
          </div>

          <div className="hero__meta">
            <span>React.js</span>
            <span>GSAP Motion</span>
            <span>Clean UI</span>
          </div>
        </div>

        <ProfileCard profile={profile} highlights={highlights} />
      </div>
    </section>
  );
}
