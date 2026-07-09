import { MapPin } from "lucide-react";

export default function ProfileCard({ profile, highlights }) {
  return (
    <article className="hero__panel profile-card">
      <span className="profile-card__shine" />

      <div className="profile-card__header">
        <div className="profile-card__avatar">
          {profile.photo ? (
            <img src={profile.photo} alt={`Foto ${profile.name}`} />
          ) : (
            <span>{profile.shortName.charAt(0)}</span>
          )}
        </div>

        <div className="profile-card__identity">
          <p className="hero__panel-label">Personal Portfolio</p>
          <h2>{profile.name}</h2>
          <p>{profile.role}</p>
        </div>
      </div>

      <div className="profile-card__location">
        <MapPin size={17} />
        <span>{profile.location}</span>
      </div>

      <div className="hero__stats">
        {highlights.map((item) => (
          <div className="hero__stat" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      <div className="profile-card__socials">
        {profile.socials.map((social) => {
          const Icon = social.icon;
          const isEmail = social.href.startsWith("mailto:");

          return (
            <a
              href={social.href}
              key={social.label}
              aria-label={social.label}
              target={isEmail ? undefined : "_blank"}
              rel={isEmail ? undefined : "noreferrer"}
            >
              <Icon size={18} />
              <span>{social.label}</span>
            </a>
          );
        })}
      </div>
    </article>
  );
}
