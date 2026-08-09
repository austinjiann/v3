import { HoverLink } from '@/components/HoverLink';
import { Row } from '@/components/Row';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ThemeToggle } from '@/components/ThemeToggle';

const workItems = [
  {
    logo: '/experience/phoebe_logo.jpeg',
    title: 'phoebe',
    description:
      "phoebe builds ai agents for home healthcare agencies. I'm helping develop the agent and eval harness and also build features",
    right: '2026',
    href: 'https://www.phoebe.work',
  },
  {
    logo: '/experience/untolabs.png',
    title: 'unto labs',
    description: (
      <>
        unto is building{' '}
        <span className="relative z-10">
          <HoverLink href="https://www.thru.org">
            <img src="/experience/thru.png" alt="" className="inline h-[1em] w-auto rounded-sm align-[-0.15em]" /> thru
          </HoverLink>
        </span>
        , an L1 blockchain. I did some product engineering with a consumer app and briefly touched
        some blockchain and agent work
      </>
    ),
    right: '2026',
    href: 'https://www.untolabs.com',
  },
];

const projectItems = [
  {
    logo: '/projects/flowboard.png',
    title: 'flowboard',
    description: 'a node-based creative canvas tool that turns rough sketches into infinitely long context-aware videos. 250k+ views, 150+ stars',
    right: '2025',
    href: 'https://github.com/austinjiann/FlowBoard',
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center bg-[var(--background)] font-sans">
      <main className="flex min-h-screen w-full max-w-xl flex-col px-6 py-12 sm:px-8">
        <header className="flex items-center justify-between">
          <Header />
          <ThemeToggle />
        </header>

        <div className="mt-6 space-y-4 leading-relaxed text-[var(--text-secondary)]">
          <p>
            I study computer science at the{' '}
            <HoverLink href="https://uwaterloo.ca">
              <img src="/uw.png" alt="" className="inline h-[1em] w-auto rounded-full align-[-0.15em]" /> university of waterloo
            </HoverLink>
            . I&apos;m currently based in nyc, where I work at{' '}
            <HoverLink href="https://www.phoebe.work">
              <img src="/experience/phoebe_logo.jpeg" alt="" className="inline h-[1em] w-auto rounded-sm align-[-0.15em]" /> phoebe
            </HoverLink>
            , but I&apos;m from toronto.
          </p>
          <p>
            interested in all areas of tech, especially infra, distributed systems, product engineering, and consumer apps
          </p>
          <p>
            reach out to my socials or austinjian07@gmail.com for all inquiries
          </p>
        </div>

        <p className="mt-6 text-[var(--text-muted)]">
          <HoverLink href="https://twitter.com/austinjian_">twitter</HoverLink>
          <span className="px-2"></span>
          <HoverLink href="https://github.com/austinjiann">github</HoverLink>
          <span className="px-2"></span>
          <HoverLink href="https://linkedin.com/in/austinjian">linkedin</HoverLink>
        </p>

        <section className="mt-10">
          <h2 className="text-lg font-medium text-[var(--text-primary)]">
            work <sup className="text-[0.6rem] text-[var(--text-faint)]">{workItems.length}</sup>
          </h2>
          <div className="mt-2 flex flex-col">
            {workItems.map((item, i) => (
              <Row key={item.title} {...item} index={i} />
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-lg font-medium text-[var(--text-primary)]">
            projects <sup className="text-[0.6rem] text-[var(--text-faint)]">{projectItems.length}</sup>
          </h2>
          <div className="mt-2 flex flex-col">
            {projectItems.map((item, i) => (
              <Row key={item.title} {...item} index={workItems.length + i} />
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
