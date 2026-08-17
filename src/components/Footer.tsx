'use client';

import { WebringBadge } from '@/components/WebringBadge';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="mt-6 flex w-full items-center justify-between border-t border-[var(--border-subtle)] pt-6 pb-4"
    >
      <p className="text-sm text-[var(--text-faint)]">© austin jian {year}</p>
      <WebringBadge siteUrl="austinjian.ca" />
    </footer>
  );
}
