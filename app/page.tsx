import { HoverLink } from '@/components/hoverlink';
import { Box, Theme } from "@radix-ui/themes";
import { ExperienceCard } from '@/components/experiencecard';
import { ProjectCard } from '@/components/projectcard';
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import { Footer } from '@/components/footer';
export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-center font-sans bg-white">
        <main className="flex w-full max-w-2xl flex-col items-start justify-start py-8 px-8">
          <div className="flex items-center justify-between w-full">
            <h2 className="text-1xl font-semibold text-black">austin jian</h2>
            <div className="flex items-center gap-3">
              <a href="https://linkedin.com/in/austin-jian" target="_blank" rel="noopener noreferrer" className="text-black hover:text-black transition-colors">
                <LinkedInLogoIcon width={20} height={20} />
              </a>
              <a href="https://twitter.com/austinjian_" target="_blank" rel="noopener noreferrer" className="text-black hover:text-black transition-colors">
                <TwitterLogoIcon width={20} height={20} />
              </a>
              <a href="https://github.com/austinjiann" target="_blank" rel="noopener noreferrer" className="text-black hover:text-black transition-colors">
                <GitHubLogoIcon width={20} height={20} />
              </a>
            </div>
          </div>
          <p className="text-lg text-black pt-2">studying cs <HoverLink href="https://uwaterloo.ca"><img src="/uw.jpeg" alt="uwaterloo" className="inline h-[1em] w-auto" /> @uwaterloo</HoverLink> & building beautiful software</p>
          <h2 className="text-1xl font-semibold text-black pt-2">what i've been up to</h2>
          <ExperienceCard 
            logo="/experience/untolabs.png"
            company="Unto Labs"
            role="swe intern"
            backgroundImage="/experience/unto.svg"
            gradientOverlay="linear-gradient(to right, rgba(245, 245, 245, 1) 0%, rgba(245, 245, 245, 1) 25%, rgba(180, 180, 180, 1) 45%, rgba(100, 100, 100, 1) 65%, rgba(50, 50, 50, 1) 85%, rgba(35, 35, 35, 1) 100%)"
            href="https://www.untolabs.com"
          />
          <ExperienceCard 
            logo="/experience/ht6.jpeg"
            company="Hack the 6ix"
            role="organizer"
            backgroundImage="/experience/ht6.svg"
            gradientOverlay="linear-gradient(to right, rgba(245, 245, 245, 1) 0%, rgba(245, 245, 245, 1) 25%, rgba(245, 245, 245, 0.8) 40%, rgba(245, 245, 245, 0.4) 55%, rgba(245, 245, 245, 0.1) 75%, rgba(245, 245, 245, 0) 100%)"
            gradientOnTop={true}
            href="https://hackthe6ix.com"
          />
          <h2 className="text-1xl font-semibold text-black pb-2">cool projects</h2>
          <div className="grid grid-cols-2 gap-6 w-full">
            <ProjectCard
              image="/projects/pindex.png"
              title="pindex"
              year="2026"
              description="agentic index funds for polymarket. winner @ nexhacks"
              glowColor="rgba(30, 58, 138, 0.5)"
              href="https://github.com/dtpu/Pindex"
            />
            <ProjectCard
              image="/projects/flowboard.png"
              title="flowboard"
              year="2025"
              description="rough sketches to animations, frame by frame. 100+ stars & 100k+ views"
              glowColor="rgba(236, 72, 153, 0.5)"
              href="/flowboard"
            />
            <ProjectCard
              image="/projects/planthopper.png"
              title="plant hopper"
              year="2025"
              description="auto aim and water plants based on moisture levels. 1st @ hack the valley"
              glowColor="rgba(120, 100, 80, 0.5)"
              href="/planthopper"
            />
            <ProjectCard
              image="/projects/playcreate.png"
              title="playcreate"
              year="2025"
              description="ai coaching tool, 15m+ views on socials, won startup comp, flown out to sf"
              glowColor="rgba(34, 197, 94, 0.5)"
              href="/playcreate"
            />
          </div>
          <Footer />
        </main>
    </div>
  );
}
