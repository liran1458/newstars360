import { type ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface SectionRevealProps { children: ReactNode; className?: string; id?: string; }

const SectionReveal = ({ children, className = '', id }: SectionRevealProps) => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.section
      id={id}
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 56 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: .82, ease: [0.22, 1, 0.36, 1] }}
    >{children}</motion.section>
  );
};

export default SectionReveal;
