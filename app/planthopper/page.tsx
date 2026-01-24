import Content from './content.mdx';
import { CaseStudyHeader } from '@/components/casestudyheader';
import { TableOfContents } from '@/components/tableofcontents';
import { Footer } from '@/components/footer';
import { HoverLink } from '@/components/hoverlink';
import { CaseStudyContent } from '@/components/casestudycontent';

const tocItems = [
  { id: 'overview', label: 'Overview' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'results', label: 'Results' },
];

export default function PlanthopperPage() {
  return (
    <div className="flex min-h-screen justify-center font-sans bg-white">
      <main className="flex w-full max-w-2xl flex-col items-start justify-start py-8 px-8 text-black">
        <CaseStudyHeader links={{ github: "https://github.com/eu-lee/PlantHopper" }} />
        <CaseStudyContent
          title="Plant Hopper — 1st at Hack the Valley"
          image="/projects/planthopper.png"
          imageAlt="PlantHopper"
          timeline={<>timeline: October 2025 • team: <HoverLink href="https://www.linkedin.com/in/seanchansato">Sean Chan-Sato</HoverLink>, <HoverLink href="https://www.linkedin.com/in/jason-liu-646b30273">Jason Liu</HoverLink>, <HoverLink href="https://www.linkedin.com/in/eugene-lee-597a0235a">Eugene Lee</HoverLink></>}
          techStack="Arduino, C++, Python, Next.js, React, Tailwind CSS, Firebase, OpenCV"
        >
          <Content />
        </CaseStudyContent>
        <Footer />
      </main>
      <TableOfContents items={tocItems} />
    </div>
  );
}
