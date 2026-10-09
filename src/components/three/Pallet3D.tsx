"use client";

import dynamic from "next/dynamic";
import { Component, useEffect, useRef, useState, type ReactNode } from "react";

const PalletScene = dynamic(() => import("./PalletScene"), {
  ssr: false,
  loading: () => null,
});

class SceneBoundary extends Component<{ fallback: ReactNode; children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

function hasWebGL() {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

/** 3D paleta koja se pauzira van ekrana i pada na statičnu sliku bez WebGL-a. */
export function Pallet3D({ fallback, className }: { fallback: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [supported, setSupported] = useState(true);
  const [inView, setInView] = useState(true);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setSupported(hasWebGL());
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    setMounted(true);

    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      rootMargin: "120px",
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {mounted && supported ? (
        <SceneBoundary fallback={fallback}>
          <PalletScene active={inView} reduced={reduced} />
        </SceneBoundary>
      ) : mounted ? (
        fallback
      ) : null}
    </div>
  );
}
