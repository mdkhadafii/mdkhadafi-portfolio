import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { navLinks, profile } from "../../features/portfolio";

export default function Navbar({ theme, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);

      const sections = navLinks
        .map((link) => document.querySelector(link.href))
        .filter(Boolean);

      const current = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 140 && rect.bottom >= 140;
      });

      if (current) setActive(`#${current.id}`);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (event, href) => {
    event.preventDefault();

    const target = document.querySelector(href);
    if (!target) return;

    setIsOpen(false);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <a href="#home" onClick={(event) => handleNav(event, "#home")} className="navbar__brand">
        <span className="navbar__logo">
          {profile.photo ? (
            <img src={profile.photo} alt="" />
          ) : (
            profile.shortName.charAt(0)
          )}
        </span>
        <span>{profile.shortName}</span>
      </a>

      <nav className={`navbar__links ${isOpen ? "navbar__links--open" : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(event) => handleNav(event, link.href)}
            className={active === link.href ? "is-active" : ""}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="navbar__actions">
        <button
          className="navbar__theme"
          type="button"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          onClick={onToggleTheme}
        >
          {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
        </button>

        <button
          className="navbar__toggle"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
