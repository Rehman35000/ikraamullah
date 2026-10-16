import {
  ArrowRight,
  ArrowUp,
  Award,
  BadgeCheck,
  Bot,
  Briefcase,
  Check,
  Code2,
  Cpu,
  Download,
  ExternalLink,
  GraduationCap,
  LayoutGrid,
  Mail,
  MapPin,
  Medal,
  Menu,
  MessageCircle,
  Moon,
  Send,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Sun,
  Terminal,
  Wrench,
  X,
  Zap,
} from 'lucide-react';

/* Brand icons (lucide removed brand logos) — simple inline SVGs. */
const Github = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.83 1.24 1.83 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.39 1.24-3.23-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.23 0 4.63-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z" />
  </svg>
);

const Linkedin = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
  </svg>
);

const Instagram = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.9A3.85 3.85 0 0 0 3.9 7.75v8.5a3.85 3.85 0 0 0 3.85 3.85h8.5a3.85 3.85 0 0 0 3.85-3.85v-8.5a3.85 3.85 0 0 0-3.85-3.85h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.9a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2Zm5.25-2.65a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3Z" />
  </svg>
);

/**
 * Icon registry — maps string names (used in content.js) to components.
 * Add new icons here and reference them by key anywhere in the site.
 */
const registry = {
  // brands
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  // contact / ui
  mail: Mail,
  mapPin: MapPin,
  send: Send,
  external: ExternalLink,
  arrowRight: ArrowRight,
  arrowUp: ArrowUp,
  download: Download,
  menu: Menu,
  close: X,
  sun: Sun,
  moon: Moon,
  sparkles: Sparkles,
  code: Code2,
  chat: MessageCircle,
  bot: Bot,
  zap: Zap,
  check: Check,
  terminal: Terminal,
  // skill groups
  layout: LayoutGrid,
  server: Server,
  smartphone: Smartphone,
  cpu: Cpu,
  wrench: Wrench,
  // timeline
  briefcase: Briefcase,
  graduation: GraduationCap,
  // certifications
  award: Award,
  badgeCheck: BadgeCheck,
  shieldCheck: ShieldCheck,
  medal: Medal,
};

export default function Icon({ name, size = 20, className = '', ...rest }) {
  const Cmp = registry[name] ?? Sparkles;
  return <Cmp size={size} className={className} aria-hidden="true" {...rest} />;
}
