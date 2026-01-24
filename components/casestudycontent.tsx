'use client';

import * as motion from 'motion/react-client';
import type { ReactNode } from 'react';

interface CaseStudyContentProps {
  title: string;
  image: string;
  imageAlt: string;
  timeline: ReactNode;
  techStack: string;
  children: ReactNode;
}

export function CaseStudyContent({ title, image, imageAlt, timeline, techStack, children }: CaseStudyContentProps) {
  return (
    <>
      <motion.h1 
        className="text-3xl font-bold text-black mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {title}
      </motion.h1>
      <motion.img 
        src={image} 
        alt={imageAlt}
        className="w-full rounded-xl mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
      <motion.p 
        className="text-sm text-gray-500 mb-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {timeline}
      </motion.p>
      <motion.p 
        className="text-sm text-gray-500 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.35 }}
      >
        tech stack: {techStack}
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {children}
      </motion.div>
    </>
  );
}
