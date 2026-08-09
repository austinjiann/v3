'use client';

import { WebringBadge } from '@/components/WebringBadge';
import * as motion from 'motion/react-client';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <motion.footer
      className="mt-auto flex w-full items-center justify-between border-t border-[var(--border-subtle)] pt-6 pb-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <p className="text-sm text-[var(--text-faint)]">© austin jian {year}</p>
      <WebringBadge siteUrl="austinjian.ca" />
    </motion.footer>
  );
}
