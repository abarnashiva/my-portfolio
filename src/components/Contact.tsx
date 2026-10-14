import { profile } from "../utils/data";
import Title from "./Title";

export default function Contact() {
  const btn =
    "rounded-full border border-white/20 px-7 py-3 transition-colors hover:border-gold hover:text-gold";
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 pb-10 pt-32 md:px-12"
    >
      <div
        aria-hidden
        className="absolute left-1/2 top-1/3 h-120 w-120 -translate-x-1/2 rounded-full bg-gold/15 blur-[160px]"
      />
      <div className="relative mx-auto max-w-6xl">
        <Title>Let's build something worth watching.</Title>
        <a
          href={`mailto:${profile.email}`}
          className="mt-12 block break-all font-display text-3xl font-light transition-colors hover:text-gold md:text-6xl"
        >
          {profile.email}
        </a>
        <div className="mt-10 flex flex-wrap gap-4">
          <a className={btn} href={`tel:${profile.phone.replace(/\s/g, "")}`}>
            {profile.phone}
          </a>
          <a
            className={btn}
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a className={btn} href="/resume.pdf" download>
            Download resume
          </a>
        </div>
        <p className="mt-28 text-sm text-dim">
          © 2026 {profile.name} · {profile.location}
        </p>
      </div>
    </section>
  );
}
