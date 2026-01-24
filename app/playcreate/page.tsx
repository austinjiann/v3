import Content from './content.mdx';
import { CaseStudyHeader } from '@/components/casestudyheader';
import { TableOfContents } from '@/components/tableofcontents';
import { Footer } from '@/components/footer';
import { HoverLink } from '@/components/hoverlink';

const tocItems = [
  { id: 'overview', label: 'Overview' },
  { id: 'the-mission', label: 'The Mission' },
  { id: 'how-it-works-technically', label: 'How It Works' },
  { id: 'virality', label: 'Virality' },
  { id: 'results', label: 'Results' },
];

export default function PlaycreatePage() {
  return (
    <div className="flex min-h-screen justify-center font-sans bg-white">
      <main className="flex w-full max-w-2xl flex-col items-start justify-start py-8 px-8 text-black">
        <CaseStudyHeader />
        <h1 className="text-3xl font-bold text-black mb-4">PlayCreate — Won Us a Trip to SF</h1>
        <img 
          src="/projects/playcreate.png" 
          alt="PlayCreate"
          className="w-full rounded-xl mb-2"
        />
        <p className="text-sm text-gray-500 mb-1">timeline: August 2025 - October 2025 • team: <HoverLink href="https://www.linkedin.com/in/victorg8182">Victor Guo</HoverLink>, <HoverLink href="https://www.linkedin.com/in/david-liang-012357267">David Liang</HoverLink>, <HoverLink href="https://www.linkedin.com/in/muhammadalimamdani">Muhammad Mamdani</HoverLink></p>
        <p className="text-sm text-gray-500 mb-4">tech stack: React, TypeScript, TailWind CSS, Next.js, Node.js, PostgreSQL</p>
        <Content />
        <Footer />
      </main>
      <TableOfContents items={tocItems} />
    </div>
  );
}
