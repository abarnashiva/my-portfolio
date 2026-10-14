import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";
export default function Cursor() {
  const x = useMotionValue(-100),
    y = useMotionValue(-100);
  const rx = useSpring(x, { stiffness: 420, damping: 36, mass: 0.4 });
  const ry = useSpring(y, { stiffness: 420, damping: 36, mass: 0.4 });
  const [big, setBig] = useState(false);
  const glow = useMotionTemplate`radial-gradient(480px circle at ${x}px ${y}px, rgba(214,168,92,0.10), transparent 70%)`;
  useEffect(() => {
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setBig(!!(e.target as HTMLElement).closest("a,button"));
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);
  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-30"
        style={{ background: glow }}
      />
      <motion.div
        aria-hidden
        animate={{ scale: big ? 3.2 : 1 }}
        style={{ x: rx, y: ry }}
        className="pointer-events-none fixed left-0 top-0 z-50 -ml-1.5 -mt-1.5 h-3 w-3 rounded-full border border-gold bg-gold/70 pointer-coarse:hidden"
      />
    </>
  );
}
