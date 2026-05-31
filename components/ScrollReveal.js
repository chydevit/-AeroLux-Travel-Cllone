"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(document.querySelectorAll("main section"));
    const targets = els.filter((el, i) => i > 0 && el.id !== "about");
    targets.forEach((el, i) => el.classList.add("reveal", i % 2 ? "reveal-right" : "reveal-left"));

    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("in"));
      return;
    }
    const ob = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            ob.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    targets.forEach((el) => ob.observe(el));
    return () => ob.disconnect();
  }, [pathname]);

  return null;
}
