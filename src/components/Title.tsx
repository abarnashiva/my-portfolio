import { motion } from "framer-motion";
export default function Title({ children }: { children: string }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-4xl font-display text-5xl font-light leading-[0.95] md:text-7xl"
    >
      {children}
    </motion.h2>
  );
}
