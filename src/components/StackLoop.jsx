import LogoLoop from "../react-bits/LogoLoop";
import { techStack } from "../data/portfolio";

export default function StackLoop() {
  return (
    <section className="stack-loop" aria-label="Tech stack">
      <div className="container">
        <div className="stack-loop__inner" data-reveal>
          <span className="section-kicker">Tech Stack</span>
          <LogoLoop items={techStack} />
        </div>
      </div>
    </section>
  );
}
