import Content from './content.mdx';
import { CaseStudyHeader } from '@/components/casestudyheader';
import { TableOfContents } from '@/components/tableofcontents';
import { Footer } from '@/components/footer';
import { HoverLink } from '@/components/hoverlink';
import { CaseStudyContent } from '@/components/casestudycontent';

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
        <CaseStudyHeader links={{ external: "https://flowboard.tech", github: "https://github.com/austinjiann/FlowBoard" }} />
        <CaseStudyContent
          title="FlowBoard — Viral Open Source Project"
          image="/projects/flowboard.png"
          imageAlt="FlowBoard"
          timeline={<>timeline: November 2025 • team: <HoverLink href="https://jame.li">James Li</HoverLink>, <HoverLink href="https://www.danielpu.dev/">Daniel Pu</HoverLink>, <HoverLink href="https://www.linkedin.com/in/ferdinand-simmons-zhang-39ba62297">Ferdinand Zhang</HoverLink></>}
          techStack="TypeScript, React, Vite, Python, Google Cloud Platform, Redis, IndexedDB, Gemini, TlDraw, Tailwind CSS"
        >
          <Content />
        </CaseStudyContent>
        <Footer />
      </main>
      <TableOfContents items={tocItems} />
    </div>
  );
}
