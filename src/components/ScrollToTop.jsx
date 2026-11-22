import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Icon from './Icon';

/** Floating "back to top" button (bottom-left, so it clears the chat widget). */
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
          className="fixed bottom-6 left-6 z-40 grid h-12 w-12 place-items-center rounded-full border border-slate-200 bg-white/70 text-slate-600 backdrop-blur-xl transition hover:border-blue-400/50 hover:text-blue-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-blue-400"
        >
          <Icon name="arrowUp" size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
