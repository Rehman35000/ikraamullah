import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Icon from './Icon';
import { navLinks, profile } from '../data/content';
import useActiveSection from '../hooks/useActiveSection';

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const ids = useMemo(() => navLinks.map((l) => l.id), []);
  const active = useActiveSection(ids);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-4 sm:pt-4">
      <nav
        className={`w-full max-w-4xl rounded-full border border-slate-200/70 bg-white/70 backdrop-blur-xl transition-all duration-300 dark:border-white/10 dark:bg-white/[0.04] ${
          scrolled ? 'shadow-lg shadow-black/5 dark:shadow-black/40' : 'shadow-md shadow-black/5'
        }`}
      >
        <div className="flex items-center justify-between gap-2 px-2.5 py-2 sm:px-3">
          {/* Left: profile photo + name */}
          <a href="#home" className="flex items-center gap-2.5 rounded-full pr-2">
            <span className="rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-[2px] shadow-md shadow-blue-500/20">
              <img
                src={profile.photo}
                alt={profile.name}
                width="32"
                height="32"
                className="h-8 w-8 rounded-full object-cover"
              />
            </span>
            <span className="hidden text-sm font-bold text-slate-800 sm:block dark:text-white">
              {profile.brand || profile.name}
            </span>
          </a>

          {/* Center: links */}
          <ul className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => {
              const isActive = active === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-slate-900 dark:text-white'
                        : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 -z-10 rounded-full bg-slate-900/[0.06] dark:bg-white/10"
                        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      />
                    )}
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right: theme toggle + mobile menu */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="grid h-9 w-9 place-items-center rounded-xl border border-slate-200/80 text-slate-600 transition hover:bg-slate-900/5 dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/10"
            >
              <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={17} />
            </button>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="grid h-9 w-9 place-items-center rounded-xl border border-slate-200/80 text-slate-600 lg:hidden dark:border-white/10 dark:text-slate-300"
            >
              <Icon name={open ? 'close' : 'menu'} size={18} />
            </button>
          </div>
        </div>

        {/* Mobile dropdown (inside the pill) */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden lg:hidden"
            >
              <ul className="flex flex-col gap-1 px-3 pb-3">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={() => setOpen(false)}
                      className={`block rounded-2xl px-4 py-2.5 text-sm font-medium transition ${
                        active === link.id
                          ? 'bg-slate-900/[0.06] text-slate-900 dark:bg-white/10 dark:text-white'
                          : 'text-slate-500 hover:bg-slate-900/5 dark:text-slate-300 dark:hover:bg-white/5'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
