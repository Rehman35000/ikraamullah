import Icon from './Icon';
import { Reveal, Section, SectionHeading } from './Section';
import { certifications } from '../data/content';

export default function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeading
        eyebrow="Certifications"
        title="Certificates & Licences"
        subtitle="Credentials I've earned to sharpen and validate my skills."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => (
          <Reveal key={cert.title} delay={(i % 3) * 0.08} className="h-full">
            <article className="glass group flex h-full flex-col overflow-hidden rounded-3xl transition duration-300 hover:-translate-y-1 hover:border-purple-400/30 hover:shadow-xl hover:shadow-purple-500/10">
              {/* Certificate preview image (optional) */}
              {cert.image && (
                <div className="relative aspect-[16/10] overflow-hidden border-b border-slate-200/70 dark:border-white/10">
                  <img
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute right-3 top-3 rounded-full bg-black/55 px-3 py-1 font-mono text-xs font-semibold text-white backdrop-blur-sm">
                    {cert.year}
                  </span>
                </div>
              )}

              <div className="flex flex-1 flex-col p-6">
                {/* Icon badge + year (only when there's no preview image) */}
                {!cert.image && (
                  <div className="mb-5 flex items-start justify-between">
                    <span className="inline-grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-blue-400 to-purple-500 text-white shadow-lg shadow-purple-500/30">
                      <Icon name={cert.icon} size={22} />
                    </span>
                    <span className="rounded-full bg-blue-400/10 px-3 py-1 font-mono text-xs font-semibold text-blue-600 dark:text-blue-300">
                      {cert.year}
                    </span>
                  </div>
                )}

                <h3 className="text-base font-bold leading-snug text-slate-900 dark:text-white">
                  {cert.title}
                </h3>
                <p className="mt-1.5 text-sm text-purple-600 dark:text-purple-400">{cert.issuer}</p>

                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 transition hover:text-blue-500 md:mt-auto md:pt-5 dark:text-slate-300 dark:hover:text-blue-400"
                  >
                    <Icon name="external" size={15} />
                    Verify credential
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
