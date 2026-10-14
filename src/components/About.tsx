import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { media, profile, stats } from "../utils/data";
import Title from "./Title";

const corners = [
  "left-0 top-0 border-l border-t",
  "right-0 top-0 border-r border-t",
  "bottom-0 left-0 border-b border-l",
  "bottom-0 right-0 border-b border-r",
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0),
    my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), {
    stiffness: 200,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), {
    stiffness: 200,
    damping: 18,
  });
  const onMove = (e: React.MouseEvent) => {
    const r = ref.current!.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  return (
    <section id="about" className="relative px-6 py-28 md:px-12">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <Title>Interfaces that feel like a film, built like a system.</Title>
          <p className="mt-8 max-w-xl leading-relaxed text-dim">
            {profile.summary}
          </p>
          <dl className="mt-12 grid grid-cols-2 gap-8 border-t border-gold/20 pt-8 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-5xl font-light text-gold">
                  {s.value}
                </dt>
                <dd className="mt-1 text-sm leading-snug text-dim">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex justify-center perspective-distant">
          <motion.div
            ref={ref}
            onMouseMove={onMove}
            onMouseLeave={() => {
              mx.set(0);
              my.set(0);
            }}
            style={{ rotateX, rotateY }}
            className="relative aspect-4/5 w-full max-w-sm overflow-hidden border border-gold/25 bg-[radial-gradient(circle_at_50%_30%,rgba(214,168,92,0.22),#0d0c0a_70%)] shadow-[0_30px_80px_rgba(0,0,0,0.9)]"
          >
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(214,168,92,0.28),transparent_70%)]"
            />
            {media.portrait ? (
              <img
                src={media.portrait}
                alt={profile.name}
                className="relative h-full w-full object-cover object-top"
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_50%_30%,rgba(214,168,92,0.25),transparent_65%)] font-display text-[9rem] font-light text-gold/80">
                AK
              </div>
            )}
            <div
              aria-hidden
              className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent"
            />
            <p className="absolute bottom-5 left-5 font-display text-2xl italic">
              {profile.name}
            </p>
            {corners.map((c) => (
              <span
                key={c}
                aria-hidden
                className={`absolute m-3 h-6 w-6 border-gold ${c}`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
