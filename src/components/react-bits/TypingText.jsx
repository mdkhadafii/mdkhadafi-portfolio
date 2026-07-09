import { useEffect, useMemo, useState } from "react";

export default function TypingText({
  text,
  items,
  delay = 850,
  typeSpeed = 70,
  deleteSpeed = 38,
  holdDuration = 2200,
  className = ""
}) {
  const phrases = useMemo(() => {
    const source = items?.length ? items : [text];
    return source.filter(Boolean);
  }, [items, text]);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);

  const currentPhrase = phrases[phraseIndex] || "";

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      setDisplayedText(phrases[0] || "");
      return undefined;
    }

    setDisplayedText("");
    setIsDeleting(false);
    setPhraseIndex(0);

    return undefined;
  }, [phrases]);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !currentPhrase) return undefined;

    const isFirstCharacter = phraseIndex === 0 && displayedText.length === 0 && !isDeleting;
    const isPhraseComplete = !isDeleting && displayedText === currentPhrase;
    const isPhraseDeleted = isDeleting && displayedText.length === 0;
    let timeoutDelay = isDeleting ? deleteSpeed : typeSpeed;

    if (isFirstCharacter) {
      timeoutDelay = delay;
    } else if (isPhraseComplete) {
      timeoutDelay = holdDuration;
    }

    const timer = window.setTimeout(() => {
      if (isPhraseComplete) {
        setIsDeleting(true);
        return;
      }

      if (isPhraseDeleted) {
        setIsDeleting(false);
        setPhraseIndex((currentIndex) => (currentIndex + 1) % phrases.length);
        return;
      }

      const nextLength = displayedText.length + (isDeleting ? -1 : 1);
      setDisplayedText(currentPhrase.slice(0, nextLength));
    }, timeoutDelay);

    return () => window.clearTimeout(timer);
  }, [
    currentPhrase,
    delay,
    deleteSpeed,
    displayedText,
    holdDuration,
    isDeleting,
    phraseIndex,
    phrases.length,
    typeSpeed
  ]);

  return (
    <span className={`typing-text ${className}`} aria-label={phrases.join(", ")}>
      <span aria-hidden="true">{displayedText}</span>
      <span className="typing-text__cursor" data-deleting={isDeleting} aria-hidden="true" />
    </span>
  );
}
