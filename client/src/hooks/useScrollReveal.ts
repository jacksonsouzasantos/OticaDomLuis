/**
 * useScrollReveal Hook
 * Anima elementos quando entram no viewport
 */

import { useEffect, useRef } from "react";
import { useAnimation, useInView } from "framer-motion";

export function useScrollReveal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return { ref, controls };
}
