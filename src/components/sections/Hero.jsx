import { useRef } from "react";
import { ArrowDownRight, ArrowUpRight, Sparkles } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MagnetButton, PixelBlast, ProfileMotionCard, SplitRevealText, TypingText } from "../react-bits";
import { profile } from "../../features/portfolio";

const profileNote =
  "Saya membuat interface yang tidak hanya terlihat rapi, tapi juga terasa nyaman dipakai, cepat dipahami, dan siap dikembangkan.";
const roleLoop = [
  profile.role,
  "React Developer fokus UI interaktif",
  "Membangun website modern dan responsif",
  "UI/UX Enthusiast dengan detail visual"
];

export default function Hero() {
  const heroRef = useRef(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion) return;

      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      timeline
        .from(".hero__eyebrow", { opacity: 0, y: 18, duration: 0.7 })
        .from(".hero__portrait-card", { opacity: 0, x: -38, rotate: -2, duration: 0.9 }, "-=0.35")
        .from(".hero__title", { opacity: 0, y: 20, duration: 0.4 }, "-=0.55")
        .from(
          ".hero__title .split-reveal-text__char",
          { opacity: 0, yPercent: 110, rotateX: -40, stagger: 0.045, duration: 0.65 },
          "-=0.16"
        )
        .from(".hero__role", { opacity: 0, y: 18, duration: 0.7 }, "-=0.45")
        .from(".hero__social-link", { opacity: 0, x: 18, stagger: 0.07, duration: 0.55 }, "-=0.35")
        .from(".hero__description", { opacity: 0, y: 22, duration: 0.75 }, "-=0.45")
        .from(".hero__actions", { opacity: 0, y: 20, duration: 0.65 }, "-=0.35");
    },
    { scope: heroRef }
  );

  return (
    <section ref={heroRef} id="home" className="hero section">
      <PixelBlast />
      <div className="hero__watermark" aria-hidden="true">
        <span>PORTFOLIO</span>
        <span>PORTFOLIO</span>
        <span>PORTFOLIO</span>
      </div>

      <div className="container hero__grid hero__grid--portfolio">
        <ProfileMotionCard profile={profile} note={profileNote} />

        <div className="hero__content hero__content--portfolio">
          <div className="hero__eyebrow">
            <Sparkles size={18} />
            Front-end developer untuk web modern
          </div>

          <p className="hero__overline">Personal Portfolio</p>
          <SplitRevealText as="h1" text="Portfolio" className="hero__title" />
          <p className="hero__role">
            &gt; <TypingText items={roleLoop} />
          </p>

          <div className="hero__socials" aria-label="Social links">
            {profile.socials.map((social) => {
              const Icon = social.icon;
              const isEmail = social.href.startsWith("mailto:");

              return (
                <a
                  className="hero__social-link"
                  href={social.href}
                  key={social.label}
                  target={isEmail ? undefined : "_blank"}
                  rel={isEmail ? undefined : "noreferrer"}
                >
                  <span className="hero__social-code">{social.label.slice(0, 2).toUpperCase()}</span>
                  <Icon size={17} />
                  <span>{social.label}</span>
                  <ArrowUpRight size={15} />
                </a>
              );
            })}
          </div>

          <p className="hero__description">{profile.description}</p>

          <div className="hero__actions">
            <MagnetButton href="#projects" className="button button--primary">
              Lihat Project <ArrowDownRight size={18} />
            </MagnetButton>
            <MagnetButton href="#contact" className="button button--ghost">
              Hubungi Saya
            </MagnetButton>
          </div>
        </div>
      </div>
    </section>
  );
}
