'use client';

import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
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
        >
          <LinkedInLogoIcon width={20} height={20} />
        </a>
        <a 
          href="https://twitter.com/austinjian_" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-black hover:opacity-70 transition-opacity"
        >
          <TwitterLogoIcon width={20} height={20} />
        </a>
        <a 
          href="https://github.com/austinjiann" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-black hover:opacity-70 transition-opacity"
        >
          <GitHubLogoIcon width={20} height={20} />
        </a>
      </div>
    </motion.div>
  );
}
