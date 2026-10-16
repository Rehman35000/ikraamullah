import { useEffect, useState } from 'react';

/**
 * Manages light/dark theme.
 * - Defaults to dark (site is designed dark-first).
 * - Persists the choice in localStorage.
 * - Toggles the `dark` class on <html>.
 */
export default function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    root.style.colorScheme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return { theme, toggleTheme };
}
