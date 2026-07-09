import { useEffect, useState } from "react";
import { Code2 } from "lucide-react";
import { profile } from "../../features/portfolio";

const LOADING_DURATION = 2600;
const PROGRESS_DURATION = 2350;
const easeOutCubic = (value) => 1 - Math.pow(1 - value, 3);

export default function Preloader({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(onFinish, LOADING_DURATION);
    let animationFrame;

    if (reduceMotion) {
      setProgress(100);
      return () => window.clearTimeout(timer);
    }

    const startTime = performance.now();

    const updateProgress = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progressRatio = Math.min(elapsed / PROGRESS_DURATION, 1);
      const nextProgress = Math.round(easeOutCubic(progressRatio) * 100);

      setProgress(nextProgress);

      if (progressRatio < 1) {
        animationFrame = window.requestAnimationFrame(updateProgress);
      }
    };

    animationFrame = window.requestAnimationFrame(updateProgress);

    return () => {
      window.clearTimeout(timer);
      window.cancelAnimationFrame(animationFrame);
    };
  }, [onFinish]);

  return (
    <section className="preloader" aria-label="Loading portfolio">
      <div className="preloader__grid" />

      <div className="preloader__content">
        <div className="preloader__mark" aria-hidden="true">
          <Code2 size={34} />
        </div>

        <p className="preloader__kicker">Portfolio</p>
        <h1>{profile.shortName}</h1>

        <div className="preloader__status">
          <span>Preparing experience</span>
          <span>{progress}%</span>
        </div>

        <div className="preloader__bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow={progress}>
          <span style={{ transform: `scaleX(${progress / 100})` }} />
        </div>
      </div>
    </section>
  );
}
