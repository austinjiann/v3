'use client';

import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';
import * as motion from 'motion/react-client';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch {}
  };

  return (
    <motion.button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="cursor-pointer text-gray-400 transition-colors duration-300 hover:text-black dark:text-neutral-500 dark:hover:text-white"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Avoid a hydration mismatch: render nothing until we know the theme */}
      {mounted && (isDark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />)}
    </motion.button>
  );
}
