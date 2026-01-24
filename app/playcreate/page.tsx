import Content from './content.mdx';
import { CaseStudyHeader } from '@/components/casestudyheader';
import { TableOfContents } from '@/components/tableofcontents';
import { Footer } from '@/components/footer';
import { HoverLink } from '@/components/hoverlink';
import { CaseStudyContent } from '@/components/casestudycontent';

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
        <CaseStudyHeader links={{ external: "https://tryplaycreate.com"}} />
        <CaseStudyContent
          title="PlayCreate — Won Us a Trip to SF"
          image="/projects/playcreate.png"
          imageAlt="PlayCreate"
          timeline={<>timeline: August 2025 - October 2025 • team: <HoverLink href="https://www.linkedin.com/in/victorg8182">Victor Guo</HoverLink>, <HoverLink href="https://www.linkedin.com/in/david-liang-012357267">David Liang</HoverLink>, <HoverLink href="https://www.linkedin.com/in/muhammadalimamdani">Muhammad Mamdani</HoverLink></>}
          techStack="React, TypeScript, TailWind CSS, Next.js, Node.js, PostgreSQL"
        >
          <Content />
        </CaseStudyContent>
        <Footer />
      </main>
      <TableOfContents items={tocItems} />
    </div>
  );
}
