import Icon from './Icon';
import { Reveal, Section, SectionHeading } from './Section';
import { aboutStory, profile, stats } from '../data/content';

export default function About() {
  return (
    <Section id="about">
      <SectionHeading eyebrow="About" title="A bit about me" />

      <div className="grid items-center gap-12 lg:grid-cols-5">
        {/* Photo */}
        <Reveal className="mx-auto w-full max-w-xs lg:col-span-2">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-blue-400 to-purple-500 opacity-25 blur-3xl" />
            <div className="glass relative overflow-hidden rounded-[2rem] p-2">
              <img
                src={profile.photo}
                alt={`${profile.name} — ${profile.title}`}
                loading="lazy"
                width="440"
                height="440"
                className="aspect-square w-full rounded-[1.6rem] object-cover"
              />
            </div>
          </div>
        </Reveal>

        {/* Story + stats */}
        <Reveal delay={0.1} className="lg:col-span-3">
          {aboutStory.map((para) => (
            <p key={para} className="mb-4 leading-relaxed text-slate-500 last:mb-0 dark:text-slate-400">
              {para}
            </p>
          ))}

          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-2">
              <Icon name="mapPin" size={18} className="text-blue-400" />
              {profile.location}
            </span>
            <span className="inline-flex items-center gap-2">
              <Icon name="graduation" size={18} className="text-purple-400" />
              {profile.education}
            </span>
          </div>

          {/* Stats */}
          <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-2xl p-4 text-center transition hover:-translate-y-1"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-3xl font-bold text-gradient">
                  {stat.value}
                </dd>
                <dd className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>

          <a
            href={profile.resume}
            download
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/60 px-6 py-3 font-semibold text-slate-800 transition hover:bg-white dark:border-white/15 dark:bg-white/5 dark:text-slate-100 dark:hover:border-white/30 dark:hover:bg-white/10"
          >
            <Icon name="download" size={18} />
            Download CV
          </a>
        </Reveal>
      </div>
    </Section>
  );
}
