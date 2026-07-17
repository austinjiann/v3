'use client';

import { WebringBadge } from '@/components/WebringBadge';
import * as motion from 'motion/react-client';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <motion.footer 
      className="mt-auto w-full flex items-center justify-between pt-6 pb-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <p className="text-gray-400 dark:text-neutral-500 text-sm">© austin jian {year}</p>
      <WebringBadge siteUrl="austinjian.ca" />
    </motion.footer>
  );
}
