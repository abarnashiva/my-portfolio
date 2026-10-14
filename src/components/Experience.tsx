import { education, experience } from "../utils/data";
import Title from "./Title";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-28 md:px-12">
      <div className="mx-auto max-w-6xl">
        <Title>Where I've worked</Title>
        <ol className="mt-16 space-y-20">
          {experience.map((job) => (
            <li
              key={job.company}
              className="grid gap-6 md:grid-cols-[220px_1fr]"
            >
              <p className="text-gold">{job.period}</p>
              <div>
                <h3 className="font-display text-4xl font-light md:text-5xl">
                  {job.role}
                </h3>
                <p className="text-dim">{job.company}</p>
                <ul className="mt-6 max-w-2xl space-y-3 border-l border-gold/30 pl-6 leading-relaxed text-film/80">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-24 grid gap-6 border-t border-gold/20 pt-10 md:grid-cols-[220px_1fr]">
          <p className="text-gold">Education</p>
          <div>
            <h3 className="font-display text-3xl font-light">
              {education.degree}
            </h3>
            <p className="text-dim">{education.school}</p>
            <p className="text-dim">{education.detail}</p>
            <p className="mt-3 text-sm text-film/70">{education.extra}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
