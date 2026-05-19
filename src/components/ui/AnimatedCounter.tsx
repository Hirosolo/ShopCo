"use client";

import {
  KeyframeOptions,
  animate,
  useInView,
  useIsomorphicLayoutEffect,
} from "framer-motion";
import { useRef } from "react";

type AnimatedCounterProps = {
  from: number;
  to: number;
  animationOptions?: KeyframeOptions;
};

const AnimatedCounter = ({
  from,
  to,
  animationOptions,
}: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;

    if (!element) return;
    if (!inView) return;

    // Reserve final width to avoid layout shifts and lock width to avoid reflows
    const finalText = Number(to).toLocaleString();
    element.style.width = `${finalText.length}ch`;
    element.style.display = "inline-block";
    element.style.textAlign = "right";

    // Set initial value
    element.textContent = String(from);

    // If reduced motion is enabled in system's preferences
    if (window.matchMedia("(prefers-reduced-motion)").matches) {
      element.textContent = String(to);
      return;
    }

    let raf = 0;
    const controls = animate(from, to, {
      duration: 6,
      ease: "easeOut",
      ...animationOptions,
      onUpdate(value) {
        // Batch DOM update to the next animation frame to avoid forced synchronous layout
        if (raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          element.textContent = Number(value.toFixed(0)).toLocaleString();
        });
      },
    });

    // Cancel on unmount
    return () => {
      controls.stop();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ref, inView, from, to]);

  return <span ref={ref} />;
};

export default AnimatedCounter;
