import { navLinks, profile } from "../../features/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNav = (event, href) => {
    event.preventDefault();

    const target = document.querySelector(href);
    if (!target) return;

    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {year} {profile.name}. All rights reserved.</p>

        <div className="footer__links">
          {navLinks.slice(0, 4).map((link) => (
            <a href={link.href} key={link.href} onClick={(event) => handleNav(event, link.href)}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
