import { useEffect, useState } from 'react';
import { selectActiveSection } from './selection.js';

export default function useActiveSection(options, headerRef) {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const sections = options
      .map(({ url }) => document.getElementById(url.slice(1)))
      .filter(Boolean);
    let frame = null;

    const update = () => {
      frame = null;
      const headerBottom = headerRef.current?.getBoundingClientRect().bottom ?? 0;
      const activationLine = Math.max(headerBottom + 64, window.innerHeight * 0.25);
      const atPageEnd = window.scrollY > 0
        && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
      setActiveSection(selectActiveSection(
        sections.map((section) => ({ id: section.id, top: section.getBoundingClientRect().top })),
        activationLine,
        atPageEnd,
      ));
    };
    const scheduleUpdate = () => {
      if (frame === null) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    window.addEventListener('hashchange', scheduleUpdate);
    // Recalcula quando os projetos, imagens ou fontes alterarem o layout.
    const observer = new ResizeObserver(scheduleUpdate);
    observer.observe(document.body);
    if (headerRef.current) observer.observe(headerRef.current);

    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      window.removeEventListener('hashchange', scheduleUpdate);
      observer.disconnect();
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, [options, headerRef]);

  return activeSection;
}
