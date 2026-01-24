import { WebringBadge } from '@/components/webringbage';

export function Footer() {
  return (
    <footer className="w-full flex items-center justify-between pt-8 pb-4">
      <p className="text-gray-400 text-sm">© austin jian 2026</p>
      <WebringBadge siteUrl="austinjian.ca" />
    </footer>
  );
}
