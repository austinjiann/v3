'use client';

import Link from 'next/link';
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';

export function CaseStudyHeader() {
  return (
    <div className="flex items-center justify-between w-full mb-6">
      <Link href="/" className="text-1xl font-semibold text-black hover:opacity-70 transition-opacity">
        austin jian
      </Link>
      <div className="flex items-center gap-3">
        <a href="https://linkedin.com/in/austin-jian" target="_blank" rel="noopener noreferrer" className="text-black hover:opacity-70 transition-opacity">
          <LinkedInLogoIcon width={20} height={20} />
        </a>
        <a href="https://twitter.com/austinjian_" target="_blank" rel="noopener noreferrer" className="text-black hover:opacity-70 transition-opacity">
          <TwitterLogoIcon width={20} height={20} />
        </a>
        <a href="https://github.com/austinjiann" target="_blank" rel="noopener noreferrer" className="text-black hover:opacity-70 transition-opacity">
          <GitHubLogoIcon width={20} height={20} />
        </a>
      </div>
    </div>
  );
}
