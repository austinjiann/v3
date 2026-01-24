import Content from './content.mdx';
import { CaseStudyHeader } from '@/components/casestudyheader';
import { TableOfContents } from '@/components/tableofcontents';
import { Footer } from '@/components/footer';
import { HoverLink } from '@/components/hoverlink';

const tocItems = [
  { id: 'overview', label: 'Overview' },
  { id: 'inspiration', label: 'Inspiration' },
  { id: 'how-it-works-technically', label: 'How It Works' },
  { id: 'results', label: 'Results' },
];

export default function FlowboardPage() {
  return (
    <div className="flex min-h-screen justify-center font-sans bg-white">
      <main className="flex w-full max-w-2xl flex-col items-start justify-start py-8 px-8 text-black">
        <CaseStudyHeader />
        <h1 className="text-3xl font-bold text-black mb-4">FlowBoard — Viral Open Source Project</h1>
        <img 
          src="/projects/flowboard.png" 
          alt="FlowBoard"
          className="w-full rounded-xl mb-2"
        />
        <p className="text-sm text-gray-500 mb-1">timeline: November 2025 • team: <HoverLink href="https://jame.li">James Li</HoverLink>, <HoverLink href="https://www.danielpu.dev/">Daniel Pu</HoverLink>, <HoverLink href="https://www.linkedin.com/in/ferdinand-simmons-zhang-39ba62297">Ferdinand Zhang</HoverLink></p>
        <p className="text-sm text-gray-500 mb-4">tech stack: TypeScript, React, Vite, Python, Google Cloud Platform, Redis, IndexedDB, Gemini, TlDraw, Tailwind CSS</p>
        <Content />
        <Footer />
      </main>
      <TableOfContents items={tocItems} />
    </div>
  );
}
