import { useEffect, useRef } from "react";

export default function BlobCursor() {
  const blobRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;

    if (reduceMotion || isCoarsePointer) return undefined;

    let animationFrame = 0;
    let currentX = window.innerWidth / 2;
    let currentY = window.innerHeight / 2;
    let targetX = currentX;
    let targetY = currentY;

    const moveBlob = () => {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;

      if (blobRef.current) {
        blobRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
        blobRef.current.dataset.visible = "true";
      }

      animationFrame = window.requestAnimationFrame(moveBlob);
    };

    const handlePointerMove = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    animationFrame = window.requestAnimationFrame(moveBlob);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <div ref={blobRef} className="blob-cursor" aria-hidden="true" />;
}
