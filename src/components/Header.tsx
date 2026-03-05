'use client';

import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { RiTwitterXFill } from 'react-icons/ri';
import * as motion from 'motion/react-client';

export function Header() {
  return (
    <motion.div 
      className="flex items-center justify-between w-full"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-1xl font-semibold text-black">austin jian</h2>
      <div className="flex items-center gap-3">
        <a
          href="https://linkedin.com/in/austin-jian"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:opacity-70 transition-opacity"
          aria-label="LinkedIn"
        >
          <LinkedInLogoIcon width={20} height={20} />
        </a>
        <a
          href="https://twitter.com/austinjian_"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:opacity-70 transition-opacity"
          aria-label="Twitter"
        >
          <RiTwitterXFill size={20} />
        </a>
        <a
          href="https://github.com/austinjiann"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:opacity-70 transition-opacity"
          aria-label="GitHub"
        >
          <GitHubLogoIcon width={20} height={20} />
        </a>
      </div>
    </motion.div>
  );
}
