import Icon from './Icon';
import { Reveal, Section, SectionHeading } from './Section';
import { skillGroups } from '../data/content';

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="Tech I work with"
        subtitle="A toolkit I use to design, build, ship and automate modern products."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={(i % 3) * 0.08} className="h-full">
            <div className="glass group h-full rounded-3xl p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:shadow-xl hover:shadow-blue-500/10">
              <div className="mb-5 inline-grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-blue-400 to-purple-500 text-white shadow-lg shadow-blue-500/30">
                <Icon name={group.icon} size={22} />
              </div>
              <h3 className="mb-4 text-lg font-bold text-slate-900 dark:text-white">
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-slate-200/80 bg-white/60 px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:border-purple-400/50 hover:text-purple-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-white"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
