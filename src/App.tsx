import Lenis from "lenis";
import { useReducedMotion } from "framer-motion";
import { lazy, Suspense, useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Work from "./components/Work";

const Scene3D = lazy(() => import("./components/Scene3D"));

export default function App() {
  const reduce = useReducedMotion();
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ anchors: true });
    let id = requestAnimationFrame(function raf(t) {
      lenis.raf(t);
      id = requestAnimationFrame(raf);
    });
    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
    };
  }, []);
  return (
    <div className="min-h-screen overflow-x-clip">
      {!reduce && (
        <Suspense fallback={null}>
          <Scene3D />
        </Suspense>
      )}
      <Cursor />
      <main className="relative z-10">
        <Hero />
        <About />
        <Work />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
