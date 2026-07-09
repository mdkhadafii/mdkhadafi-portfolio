import { useRef } from "react";

export default function MagnetButton({
  children,
  className = "",
  href,
  type = "button",
  onClick,
  strength = 0.24,
  ...props
}) {
  const buttonRef = useRef(null);
  const Tag = href ? "a" : "button";

  const handleMouseMove = (event) => {
    const element = buttonRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const relX = event.clientX - rect.left - rect.width / 2;
    const relY = event.clientY - rect.top - rect.height / 2;

    element.style.transform = `translate(${relX * strength}px, ${relY * strength}px)`;
  };

  const handleMouseLeave = () => {
    const element = buttonRef.current;
    if (!element) return;
    element.style.transform = "translate(0px, 0px)";
  };

  return (
    <Tag
      ref={buttonRef}
      href={href}
      type={href ? undefined : type}
      onClick={onClick}
      className={`magnet-button ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <span>{children}</span>
    </Tag>
  );
}
