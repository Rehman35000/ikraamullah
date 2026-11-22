import { motion, useReducedMotion } from 'framer-motion';

/**
 * Reusable scroll-reveal wrapper.
 * Fades + slides its children into view once, when scrolled into the viewport.
 * Respects the user's "reduce motion" preference.
 */
export function Reveal({ children, className = '', delay = 0, y = 24 }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Standard <section> wrapper with consistent spacing and max width.
 */
export function Section({ id, className = '', children }) {
  return (
    <section id={id} className={`mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-28 ${className}`}>
      {children}
    </section>
  );
}

/**
 * Section heading with an optional gradient eyebrow label and subtitle.
 */
export function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      {eyebrow && (
        <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl dark:text-white">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-slate-500 dark:text-slate-400">{subtitle}</p>}
    </Reveal>
  );
}
