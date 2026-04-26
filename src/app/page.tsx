import { HoverLink } from '@/components/HoverLink';
import { ExperienceCard } from '@/components/ExperienceCard';
import { ProjectCard } from '@/components/ProjectCard';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-center font-sans bg-white">
        <main className="flex w-full max-w-2xl flex-col items-start justify-start py-8 px-8">
          <Header />
          <ul className="text-base text-gray-500 pt-2 list-disc list-outside pl-8">
            <li>cs @ <HoverLink href="https://uwaterloo.ca"><img src="/uw.jpeg" alt="uwaterloo" className="inline h-[1em] w-auto" /> uwaterloo</HoverLink>, originally from toronto</li>
            <li>currently @ <HoverLink href="https://www.untolabs.com"><img src="/experience/untolabs.png" alt="unto labs" className="inline h-[1em] w-auto rounded-sm" /> unto labs</HoverLink>, incoming @ <HoverLink href="https://www.phoebe.work"><img src="/experience/phoebe_logo.jpeg" alt="phoebe" className="inline h-[1em] w-auto rounded-sm" /> phoebe</HoverLink> in nyc</li>
            <li>exploring infra and product engineering, dabbling in other areas too!</li>
          </ul>
          <h2 className="text-1xl font-semibold text-black pt-2">work</h2>
          <ExperienceCard
            logo="/experience/phoebe_logo.jpeg"
            company="Phoebe"
            role="incoming engineering intern"
            backgroundImage="/experience/phoebe_banner.svg"
            gradientOverlay="linear-gradient(to right, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.3) 15%, rgba(255, 255, 255, 0) 35%)"
            gradientOnTop={true}
            href="https://www.phoebe.work"
            index={1}
          />
          <ExperienceCard 
            logo="/experience/untolabs.png"
            company="Unto Labs"
            role="software engineering intern"
            backgroundImage="/experience/unto.svg"
            backgroundSize="auto 90%"
            backgroundPosition="right bottom"
            darkOnHover={true}
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
              description={<>first attempt at building. bad product but got some views + monetized on youtube</>}
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
