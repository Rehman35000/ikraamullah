import { motion, useReducedMotion } from 'framer-motion';
import Icon from './Icon';
import { profile } from '../data/content';

export default function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
  };
  const item = {
    hidden: reduce ? {} : { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20">
      {/* Right-side ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-full sm:w-3/4"
        style={{
          background:
            'radial-gradient(55% 55% at 82% 38%, rgba(96,165,250,0.22), transparent 70%), radial-gradient(45% 45% at 95% 75%, rgba(168,85,247,0.16), transparent 70%)',
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-6xl px-5 sm:px-8"
      >
        {/* Badge */}
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white/60 px-4 py-1.5 font-mono text-xs text-slate-600 backdrop-blur-sm sm:text-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
        >
          <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse-glow" />
          {profile.badge}
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={item}
          className="mt-7 font-display text-5xl font-bold leading-[1.03] sm:text-7xl lg:text-8xl"
        >
          <span className="block text-slate-900 dark:text-white">{profile.firstName}</span>
          <span className="block text-gradient">{profile.lastName}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={item}
          className="mt-5 max-w-2xl text-base font-medium text-slate-600 sm:text-xl dark:text-slate-300"
        >
          {profile.title}
        </motion.p>

        {/* Bio with highlighted phrases */}
        <motion.p variants={item} className="mt-5 max-w-2xl leading-relaxed text-slate-500 dark:text-slate-400">
          {profile.bioSegments.map((seg, i) =>
            seg.highlight ? (
              <span key={i} className="font-medium text-slate-900 dark:text-white">
                {seg.text}
              </span>
            ) : (
              <span key={i}>{seg.text}</span>
            ),
          )}
        </motion.p>

        {/* Buttons */}
        <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-blue-400 px-6 py-3 text-sm font-semibold text-[#0a0a0f] glow-blue transition hover:bg-blue-300 sm:text-base"
          >
            View Projects
            <Icon
              name="arrowRight"
              size={18}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>

          <a
            href={profile.resume}
            download
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/60 px-6 py-3 text-sm font-semibold text-slate-800 backdrop-blur-sm transition hover:bg-white sm:text-base dark:border-white/15 dark:bg-white/5 dark:text-slate-100 dark:hover:border-white/30 dark:hover:bg-white/10"
          >
            <Icon name="download" size={18} />
            Download CV
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold text-slate-600 transition hover:text-slate-900 sm:text-base dark:text-slate-300 dark:hover:text-white"
          >
            <Icon name="mail" size={18} />
            Contact
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
