'use client';

import Link from 'next/link';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { FiExternalLink } from 'react-icons/fi';
import * as motion from 'motion/react-client';

interface CaseStudyHeaderProps {
  links?: {
    external?: string;
    github?: string;
  };
}

export function CaseStudyHeader({ links }: CaseStudyHeaderProps) {
  return (
    <motion.div 
      className="flex items-center justify-between w-full mb-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link href="/" className="text-1xl font-semibold text-black hover:opacity-70 transition-opacity">
        austin jian
      </Link>
      <div className="flex items-center gap-3">
        {links?.external && (
          <a href={links.external} target="_blank" rel="noopener noreferrer" className="text-black hover:opacity-70 transition-opacity">
            <FiExternalLink size={20} />
          </a>
        )}
        {links?.github && (
          <a href={links.github} target="_blank" rel="noopener noreferrer" className="text-black hover:opacity-70 transition-opacity">
            <GitHubLogoIcon width={20} height={20} />
          </a>
        )}
      </div>
    </motion.div>
  );
}
