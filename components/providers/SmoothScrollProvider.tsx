"use client";

import { type ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type SmoothScrollProviderProps = {
  children: ReactNode;
};

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({
      autoRaf: false, // We drive raf from GSAP ticker for stable sync.
      anchors: true,
      smoothWheel: true,
      syncTouch: true,
      lerp: 0.08,
    });

    const handleScroll = () => ScrollTrigger.update();
    lenis.on("scroll", handleScroll);

    const updateTicker = (time: number) => {
      // GSAP ticker time is in seconds; Lenis expects milliseconds.
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
      ScrollTrigger.refresh();
    });
    resizeObserver.observe(document.body);

    const animations = gsap.utils
      .toArray<HTMLElement>("[data-parallax]")
      .map((node) => {
        const strength = node.dataset.parallax === "medium" ? 72 : 42;

        return gsap.fromTo(
          node,
          { y: -strength * 0.2 },
          {
            y: strength,
            ease: "none",
            scrollTrigger: {
              trigger: node,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          },
        );
      });

    ScrollTrigger.refresh();

    return () => {
      resizeObserver.disconnect();
      gsap.ticker.remove(updateTicker);
      lenis.off("scroll", handleScroll);
      lenis.destroy();

      animations.forEach((animation) => {
        animation.scrollTrigger?.kill();
        animation.kill();
      });
    };
  }, [pathname]);

  return <>{children}</>;
}
