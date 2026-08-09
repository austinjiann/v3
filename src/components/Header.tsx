'use client';

import * as motion from 'motion/react-client';

export function Header() {
  return (
    <motion.h1
      className="text-base font-semibold text-[var(--text-primary)]"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      austin jian
    </motion.h1>
  );
}
