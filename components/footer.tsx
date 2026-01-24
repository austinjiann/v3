'use client';

import { WebringBadge } from '@/components/webringbage';
import * as motion from 'motion/react-client';

export function Footer() {
  return (
    <motion.footer 
      className="w-full flex items-center justify-between pt-8 pb-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <p className="text-gray-400 text-sm">© austin jian 2026</p>
      <WebringBadge siteUrl="austinjian.ca" />
    </motion.footer>
  );
}
