import { useRef } from "react";

export default function ProfileMotionCard({ profile, note }) {
  const cardRef = useRef(null);

  const handlePointerMove = (event) => {
    const card = cardRef.current;
    if (!card || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * -8;
    const rotateY = ((x / rect.width) - 0.5) * 8;

    card.dataset.active = "true";
    card.style.setProperty("--profile-x", `${x}px`);
    card.style.setProperty("--profile-y", `${y}px`);
    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(0, -8px, 0)`;
  };

  const handlePointerLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    card.dataset.active = "false";
    card.style.setProperty("--profile-x", "50%");
    card.style.setProperty("--profile-y", "50%");
    card.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg) translate3d(0, 0, 0)";
  };

  return (
    <article className="hero__portrait-card" aria-label={`Foto profil ${profile.name}`}>
      <div
        ref={cardRef}
        className="profile-motion-card"
        data-active="false"
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        <div className="profile-motion-card__surface">
          <span className="profile-motion-card__spotlight" />
          <span className="profile-motion-card__grid" />

          <div className="hero__portrait-frame profile-motion-card__frame">
            {profile.photo ? (
              <img src={profile.photo} alt={`Foto ${profile.name}`} />
            ) : (
              <span>{profile.shortName.charAt(0)}</span>
            )}
          </div>

          <p className="hero__note">{note}</p>
        </div>
      </div>
    </article>
  );
}
