import Icon from './Icon';
import { Reveal, Section, SectionHeading } from './Section';
import { projects } from '../data/content';

/** Gradient SVG fallback shown if a project thumbnail fails to load. */
function thumbFallback(title) {
  const initials = title
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='675'>
    <defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
      <stop offset='0' stop-color='#60a5fa'/><stop offset='1' stop-color='#a855f7'/>
    </linearGradient></defs>
    <rect width='1200' height='675' fill='#0a0a0f'/>
    <rect width='1200' height='675' fill='url(#g)' opacity='0.25'/>
    <text x='600' y='372' font-family='Space Grotesk, Arial, sans-serif' font-size='140'
      font-weight='700' fill='#ffffff' text-anchor='middle'>${initials}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function ProjectCard({ project, delay }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="glass group flex h-full flex-col overflow-hidden rounded-3xl transition duration-300 hover:-translate-y-1.5 hover:border-blue-400/30 hover:shadow-2xl hover:shadow-blue-500/20">
        {/* Cover image */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = thumbFallback(project.title);
            }}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
          {/* Hover action buttons */}
          <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 transition duration-300 group-hover:opacity-100">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} live demo`}
                className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg transition hover:scale-105"
              >
                <Icon name="external" size={15} /> Live
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} source code`}
                className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/90 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:scale-105"
              >
                <Icon name="github" size={15} /> GitHub
              </a>
            )}
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">{project.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            {project.description}
          </p>

          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-blue-400/10 px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-300"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Things I've built"
        subtitle="A selection of projects that showcase how I design, engineer and automate."
      />

      <div className="grid gap-7 sm:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} delay={(i % 2) * 0.1} />
        ))}
      </div>
    </Section>
  );
}
