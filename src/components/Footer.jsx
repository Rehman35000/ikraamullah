import Icon from './Icon';
import { navLinks, profile, socials } from '../data/content';

// Computed once at module load (keeps render pure).
const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-white/10">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        {/* Brand */}
        <div>
          <a href="#home" className="flex items-center gap-2.5 font-bold text-slate-900 dark:text-white">
            <span className="rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-[2px]">
              <img src={profile.photo} alt={profile.name} className="h-8 w-8 rounded-full object-cover" />
            </span>
            {profile.name}
          </a>
          <p className="mt-4 max-w-xs text-sm text-slate-500 dark:text-slate-400">{profile.title}</p>
        </div>

        {/* Quick links */}
        <nav aria-label="Footer">
          <h4 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Quick Links
          </h4>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="text-slate-500 transition hover:text-blue-500 dark:text-slate-400 dark:hover:text-blue-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Socials */}
        <div>
          <h4 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Connect
          </h4>
          <div className="mt-4 flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-slate-600 transition hover:-translate-y-1 hover:border-blue-400/50 hover:text-blue-500 dark:border-white/10 dark:text-slate-300 dark:hover:text-blue-400"
              >
                <Icon name={s.icon} size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 py-6 text-center text-sm text-slate-500 dark:border-white/10">
        © {YEAR} {profile.name}. All rights reserved.
      </div>
    </footer>
  );
}
