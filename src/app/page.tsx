import { HoverLink } from '@/components/HoverLink';
import { ExperienceCard } from '@/components/ExperienceCard';
import { ProjectCard } from '@/components/ProjectCard';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { PhoebeBackground } from '@/components/PhoebeBackground';
export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-center font-sans bg-white">
        <main className="flex w-full max-w-2xl flex-col items-start justify-start py-8 px-8">
          <Header />
          <p className="text-lg text-black pt-2">cs @ <HoverLink href="https://uwaterloo.ca"><img src="/uw.jpeg" alt="uwaterloo" className="inline h-[1em] w-auto" /> uwaterloo</HoverLink></p>
          <h2 className="text-1xl font-semibold text-black pt-2">work</h2>
          <ExperienceCard
            logo="/experience/orange_phoebe.svg"
            company="Phoebe"
            role="incoming engineering intern"
            customBackground={<PhoebeBackground />}
            href="https://www.phoebe.work"
            index={1}
          />
          <ExperienceCard 
            logo="/experience/untolabs.png"
            company="Unto Labs"
            role="software engineering intern"
            backgroundImage="/experience/unto.svg"
            gradientOverlay="linear-gradient(to right, rgba(245, 245, 245, 1) 0%, rgba(245, 245, 245, 1) 25%, rgba(180, 180, 180, 1) 45%, rgba(100, 100, 100, 1) 65%, rgba(50, 50, 50, 1) 85%, rgba(35, 35, 35, 1) 100%)"
            href="https://www.untolabs.com"
            index={0}
          />
          <h2 className="text-1xl font-semibold text-black pb-2">projects</h2>
          <div className="grid grid-cols-2 gap-6 w-full">
            
            <ProjectCard
              image="/projects/flowboard.png"
              title="FlowBoard"
              description="turn rough sketches to animations, frame by frame. 100+ stars & 200k+ views"
              glowColor="rgba(125, 211, 252, 0.8)"
              glowGradient="radial-gradient(circle at bottom right, rgba(125, 211, 252, 0.64), transparent 54%)"
              href="https://github.com/austinjiann/FlowBoard"
              icons={[{ type: 'github' }]}
              index={1}
            />
            <ProjectCard
              image="/projects/arcki.png"
              title="Arcki"
              description="generate 3d models and visualize them on a stunning world map. 60 stars"
              glowColor="rgba(45, 212, 191, 0.62)"
              glowGradient="radial-gradient(circle at top left, rgba(74, 222, 128, 0.44), transparent 46%), radial-gradient(circle at bottom right, rgba(56, 189, 248, 0.46), transparent 56%)"
              href="https://arcki.tech"
              icons={[{ type: 'github', href: 'https://github.com/jli2007/Arcki' }, { type: 'external' }]}
              index={3}
            />
            <ProjectCard
              image="/projects/playcreate.png"
              title="PlayCreate"
              description={<>ai sports coaching tool, 30m+ views on socials, <HoverLink href="https://www.unfounders.com/">unfounders</HoverLink> startup comp winner</>}
              glowColor="rgba(74, 222, 128, 0.58)"
              glowGradient="radial-gradient(circle at top left, rgba(187, 247, 208, 0.5), transparent 44%), radial-gradient(circle at bottom right, rgba(74, 222, 128, 0.46), transparent 52%)"
              href="https://tryplaycreate.com"
              icons={[{ type: 'youtube', href: 'https://www.youtube.com/@playcreate-yt' }, { type: 'external' }]}
              index={2}
            />
            <ProjectCard
              image="/projects/pindex.svg"
              title="Pindex"
              description={<>chrome extension to create index funds for polymarket. winner @ <HoverLink href="https://www.nexhacks.com/">nexhacks</HoverLink></>}
              glowColor="rgba(30, 58, 138, 0.66)"
              glowGradient="radial-gradient(circle at top left, rgba(96, 165, 250, 0.38), transparent 42%), radial-gradient(circle at bottom right, rgba(37, 99, 235, 0.44), transparent 54%)"
              href="https://github.com/dtpu/Pindex"
              icons={[{ type: 'github' }]}
              index={0}
            />
          </div>
          <Footer />
        </main>
    </div>
  );
}
