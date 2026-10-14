import { skills } from "../utils/data";
import Title from "./Title";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-28 md:px-12">
      <div className="mx-auto max-w-6xl">
        <Title>The toolkit</Title>
        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {skills.map((g) => (
            <div key={g.group} className="border-t border-gold/30 pt-6">
              <h3 className="font-display text-3xl font-light text-gold">
                {g.group}
              </h3>
              <ul className="mt-6 space-y-2.5">
                {g.items.map((s) => (
                  <li
                    key={s}
                    className="text-dim transition-all duration-300 hover:translate-x-2 hover:text-film"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
