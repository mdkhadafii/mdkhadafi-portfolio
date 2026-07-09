export default function SplitRevealText({ as: Tag = "span", text, className = "" }) {
  return (
    <Tag className={`split-reveal-text ${className}`} aria-label={text}>
      {Array.from(text).map((character, index) => (
        <span className="split-reveal-text__char-wrap" aria-hidden="true" key={`${character}-${index}`}>
          <span className="split-reveal-text__char">{character === " " ? "\u00A0" : character}</span>
        </span>
      ))}
    </Tag>
  );
}
