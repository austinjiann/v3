import { HoverLink } from '@/components/HoverLink';
import { ExperienceCard } from '@/components/ExperienceCard';
import { ProjectCard } from '@/components/ProjectCard';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
export default function Home() {
  return (
    <div className="flex min-h-screen items-stretch justify-center font-sans bg-white">
        <main className="flex min-h-screen w-full max-w-2xl flex-col items-start justify-start py-8 px-8">
          <Header />
          <ul className="text-base text-gray-500 pt-2 list-disc list-outside pl-8">
            <li>I study computer science @ the <HoverLink href="https://uwaterloo.ca"><img src="/uw.jpeg" alt="uwaterloo" className="inline h-[1em] w-auto" /> university of waterloo</HoverLink></li>
            <li>currently based in nyc working @ <HoverLink href="https://www.phoebe.work"><img src="/experience/phoebe_logo.jpeg" alt="phoebe" className="inline h-[1em] w-auto rounded-sm" /> phoebe</HoverLink>, doing work w/ agents
              <ul className="list-[circle] list-outside pl-6">
                <li>I previously did a bit of everything @ <HoverLink href="https://www.untolabs.com"><img src="/experience/untolabs.png" alt="unto labs" className="inline h-[1em] w-auto rounded-sm" /> unto labs</HoverLink>, ranging from product engineering, blockchain, and agents</li>
              </ul>
            </li>
            <li>Interested in distributed systems, infra, and all other areas of tech!</li>
          </ul>
          <h2 className="text-1xl font-semibold text-black pt-2">work</h2>
          <ExperienceCard
            logo="/experience/phoebe_logo.jpeg"
            company="Phoebe"
            role="software engineering intern"
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
            backgroundSize="100% 108%"
            backgroundPosition="center top"
            backgroundColor="#000000"
            gradientOverlay="linear-gradient(to right, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 15%, rgba(0, 0, 0, 0) 35%)"
            gradientOnTop={true}
            darkOnHover={true}
            href="https://www.untolabs.com"
            index={0}
          />
          <h2 className="text-1xl font-semibold text-black pb-2">projects</h2>
          <div className="grid grid-cols-2 gap-6 w-full">
            
            <ProjectCard
              image="/projects/flowboard.png"
              title="FlowBoard"
              description="turn rough sketches to animations on a canvas. 100+ stars & 200k+ views."
              href="https://github.com/austinjiann/FlowBoard"
              icons={[{ type: 'github' }]}
              index={1}
            />
            <ProjectCard
              image="/projects/arcki.png"
              title="Arcki"
              description="generate 3d models and visualize them on a stunning world map."
              href="https://github.com/jli2007/Arcki"
              icons={[{ type: 'github', href: 'https://github.com/jli2007/Arcki' }]}
              index={3}
            />
          </div>
          <Footer />
        </main>
    </div>
  );
}
