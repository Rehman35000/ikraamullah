import Icon from './Icon';
import { Reveal, Section, SectionHeading } from './Section';
import { timeline } from '../data/content';

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Experience & Education"
        subtitle="My journey so far — where I've worked and what I've studied."
      />

      <div className="relative mx-auto max-w-3xl">
        {/* Vertical line */}
        <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-blue-400 to-purple-500 opacity-40 md:left-1/2" />

        <ol className="space-y-10">
          {timeline.map((entry, i) => {
            const isLeft = i % 2 === 0;
            const isWork = entry.type === 'work';
            return (
              <li key={`${entry.title}-${entry.period}`} className="relative">
                <div
                  className={`flex flex-col gap-8 md:flex-row md:items-center ${
                    isLeft ? '' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Card */}
                  <Reveal
                    y={30}
                    className={`ml-14 w-auto md:ml-0 md:w-1/2 ${
                      isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'
                    }`}
                  >
                    <div className="glass rounded-2xl p-6 transition hover:-translate-y-1 hover:border-blue-400/30 hover:shadow-xl hover:shadow-blue-500/10">
                      <span className="inline-block rounded-full bg-blue-400/10 px-3 py-1 font-mono text-xs font-semibold text-blue-600 dark:text-blue-300">
                        {entry.period}
                      </span>
                      <h3 className="mt-3 text-lg font-bold text-slate-900 dark:text-white">
                        {entry.title}
                      </h3>
                      <p className="text-sm font-medium text-purple-600 dark:text-purple-400">{entry.org}</p>
                      <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                        {entry.description}
                      </p>
                    </div>
                  </Reveal>

                  {/* Spacer for the opposite column */}
                  <div className="hidden md:block md:w-1/2" />
                </div>

                {/* Node */}
                <span className="absolute left-5 top-6 grid h-10 w-10 -translate-x-1/2 place-items-center rounded-full border border-slate-200 bg-white text-blue-500 shadow-md md:left-1/2 dark:border-white/10 dark:bg-[#0a0a0f] dark:text-blue-400">
                  <Icon name={isWork ? 'briefcase' : 'graduation'} size={18} />
                </span>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
