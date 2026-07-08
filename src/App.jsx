import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StackLoop from "./components/StackLoop";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BlobCursor from "./react-bits/BlobCursor";
import { useSectionReveal } from "./hooks/useSectionReveal";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function PortfolioShell({ theme, onToggleTheme }) {
  const appRef = useRef(null);

  useSectionReveal(appRef);

  return (
    <div ref={appRef} className="app-shell">
      <BlobCursor />
      <Navbar theme={theme} onToggleTheme={onToggleTheme} />
      <main>
        <Hero />
        <StackLoop />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");

    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }

    return "dark";
  });

  const handlePreloaderFinish = useCallback(() => {
    setIsReady(true);
  }, []);

  const handleToggleTheme = useCallback(() => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  if (!isReady) {
    return <Preloader onFinish={handlePreloaderFinish} />;
  }

  return <PortfolioShell theme={theme} onToggleTheme={handleToggleTheme} />;
}
