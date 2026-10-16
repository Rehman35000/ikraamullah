import { useEffect, useState } from 'react';

/**
 * Returns the id of the section currently in view.
 * Uses IntersectionObserver so the matching nav link can be highlighted.
 *
 * @param {string[]} ids - section ids to observe, in document order
 */
export default function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top of the viewport that is visible.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) setActive(visible[0].target.id);
      },
      {
        // Account for the sticky navbar height.
        rootMargin: '-40% 0px -55% 0px',
        threshold: 0,
      },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
