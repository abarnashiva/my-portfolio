import { motion, useReducedMotion } from "framer-motion";
import { media, profile } from "../utils/data";

const links = ["About", "Work", "Skills", "Experience", "Contact"];
const ease = [0.16, 1, 0.3, 1] as const;
const bar = "absolute inset-x-0 z-30 h-[72px] bg-black px-6 md:px-12";
const inner = "mx-auto flex h-full w-full max-w-6xl";

export default function Hero() {
  const reduce = useReducedMotion();
  return (
    <header className="relative h-screen min-h-160 overflow-hidden">
      {media.heroVideo ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          src={media.heroVideo}
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
      ) : (
        <>
          <motion.div
            aria-hidden
            animate={{ opacity: [0.2, 0.45, 0.2], scale: [1, 1.15, 1] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-24 top-1/4 h-136 w-136 rounded-full bg-gold/30 blur-[150px]"
          />
          <motion.div
            aria-hidden
            animate={{ opacity: [0.35, 0.15, 0.35] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-40 -left-20 h-112 w-md rounded-full bg-ember/40 blur-[150px]"
          />
        </>
      )}

      {media.heroImage && (
        <div className="absolute inset-x-0 bottom-18 top-18 z-10 px-6 opacity-35 md:px-12 md:opacity-100">
          <div className="relative mx-auto h-full max-w-6xl">
            <motion.img
              src={media.heroImage}
              alt={profile.name}
              initial={
                reduce ? false : { opacity: 0, x: 40, filter: "blur(12px)" }
              }
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ delay: 1.6, duration: 1.6, ease }}
              className="absolute bottom-0 right-0 h-[88%] w-auto max-w-none object-contain object-bottom drop-shadow-[0_0_60px_rgba(214,168,92,0.18)]"
            />
          </div>
        </div>
      )}
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-t from-ink via-transparent to-ink/60"
      />
      <div
        aria-hidden
        className="absolute inset-y-0 left-0 z-10 w-2/3 bg-linear-to-r from-ink/80 to-transparent"
      />

      {!reduce && (
        <>
          <motion.div
            aria-hidden
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            transition={{ duration: 1.4, delay: 0.3, ease }}
            className="pointer-events-none absolute inset-x-0 top-0 z-40 h-1/2 bg-black"
          />
          <motion.div
            aria-hidden
            initial={{ y: 0 }}
            animate={{ y: "100%" }}
            transition={{ duration: 1.4, delay: 0.3, ease }}
            className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-1/2 bg-black"
          />
        </>
      )}

      <div className={`${bar} top-0`}>
        <div className={`${inner} items-center justify-between`}>
          <a href="#" className="font-display text-2xl">
            {profile.name}
          </a>
          <nav className="hidden gap-8 text-sm text-dim md:flex">
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="transition-colors hover:text-gold"
              >
                {l}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="relative z-20 h-full px-6 md:px-12">
        <div className="mx-auto flex h-full max-w-6xl flex-col justify-end pb-24 md:pb-28">
          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="mb-3 text-lg text-gold"
          >
            {profile.role} · {profile.location}
          </motion.p>
          <h1
            aria-label={profile.name}
            className="font-display text-[24vw] font-light leading-[0.85] md:text-[13vw]"
            style={{ textShadow: "0 0 80px rgba(214,168,92,0.25)" }}
          >
            {profile.name.split("").map((c, i) => (
              <motion.span
                key={i}
                aria-hidden
                className="inline-block"
                initial={
                  reduce
                    ? false
                    : { opacity: 0, y: "30%", filter: "blur(16px)" }
                }
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 1.2 + i * 0.08, duration: 1.2, ease }}
              >
                {c === " " ? "\u00A0" : c}
              </motion.span>
            ))}
          </h1>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 1, ease }}
            className="mt-8"
          >
            <p className="max-w-sm leading-relaxed text-film/75">
              {profile.tagline}
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="#work"
                className="rounded-full border border-gold bg-gold/10 px-7 py-3 transition-colors hover:bg-gold hover:text-ink"
              >
                View work
              </a>
              <a
                href="/Abarna_K_Software_Developer_Resume_Oct_2026.pdf"
                download="Abarna_K_Software_Developer_Resume_Oct_2026.pdf"
                className="rounded-full border border-white/20 px-7 py-3 text-film/80 transition-colors hover:border-film"
              >
                Download resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className={`${bar} bottom-0`}>
        <div
          className={`${inner} items-center justify-between text-sm text-dim`}
        >
          <span>
            React.js · Next.js · TypeScript · Tailwind CSS · Framer Motion
          </span>

          <div className="flex items-center gap-3">
            <span>Scroll</span>

            <div className="h-0.5 w-12 overflow-hidden">
              <motion.div
                initial={{ width: "20%" }}
                animate={{ width: ["20%", "100%", "20%"] }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-full bg-gold"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
