import { projects } from "../utils/data";
import Title from "./Title";

export default function Work() {
  return (
    <section id="work" className="relative px-6 pb-[20vh] pt-28 md:px-12">
      <div className="mx-auto max-w-6xl">
        <Title>Selected work</Title>

        <ol className="mt-16">
          {projects.map((p, i) => (
            <li
              key={p.title}
              className="sticky mb-[12vh]"
              style={{
                top: `calc(12vh + ${i * 28}px)`,
              }}
            >
              <article className="grid gap-8 overflow-hidden border border-gold/20 bg-[#0c0b0a] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.9)] md:grid-cols-[1fr_0.9fr] md:items-center md:gap-10 md:p-10 lg:p-12">
                <div className="flex flex-col items-start">
                  <p className="text-sm tracking-wide text-gold">{p.type}</p>

                  <h3 className="mt-3 font-display text-4xl font-light md:text-5xl lg:text-6xl">
                    {p.title}
                  </h3>

                  <p className="mt-5 max-w-lg leading-relaxed text-dim">
                    {p.text}
                  </p>

                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-block border-b border-gold/60 pb-1 text-sm transition-colors duration-300 hover:border-gold hover:text-gold"
                    >
                      Visit {p.host} ↗
                    </a>
                  )}

                  <ul className="mt-8 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-film/80 md:text-sm"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="group relative min-h-55 overflow-hidden rounded-sm border border-gold/15 bg-[#11100e] sm:min-h-70 md:min-h-80 lg:min-h-90">
                  {p.image ? (
                    <>
                      <img
                        src={p.image}
                        alt={`${p.title} project preview`}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-linear-to-t from-[#0c0b0a]/60 via-transparent to-[#0c0b0a]/10" />

                      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-gold/70 to-transparent" />
                    </>
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_center,rgba(184,148,76,0.12),transparent_65%)] p-6 text-center">
                      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 text-gold">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          className="h-8 w-8"
                        >
                          <rect x="3" y="5" width="18" height="14" rx="2" />
                          <path d="M7 10h4M7 14h2M15 10h2M15 14h2" />
                        </svg>
                      </div>

                      <p className="font-display text-2xl tracking-[0.2em] text-gold/80">
                        TVDS
                      </p>

                      <p className="mt-3 text-xs tracking-[0.15em] text-dim">
                        VEHICLE INTELLIGENCE SYSTEM
                      </p>

                      <div className="mt-6 h-px w-20 bg-gold/30" />
                    </div>
                  )}

                  <div className="pointer-events-none absolute left-3 top-3 h-6 w-6 border-l border-t border-gold/40" />
                  <div className="pointer-events-none absolute bottom-3 right-3 h-6 w-6 border-b border-r border-gold/40" />
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
