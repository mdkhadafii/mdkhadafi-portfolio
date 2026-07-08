import { useEffect } from "react";
import { Code2 } from "lucide-react";
import { profile } from "../data/portfolio";

const LOADING_DURATION = 2600;

export default function Preloader({ onFinish }) {
  useEffect(() => {
    const timer = window.setTimeout(onFinish, LOADING_DURATION);

    return () => window.clearTimeout(timer);
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
          <span>100%</span>
        </div>

        <div className="preloader__bar" aria-hidden="true">
          <span />
        </div>
      </div>
    </section>
  );
}
