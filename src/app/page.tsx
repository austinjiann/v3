import { HoverLink } from '@/components/HoverLink';
import { Row } from '@/components/Row';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ThemeToggle } from '@/components/ThemeToggle';

const workItems = [
  {
    title: 'phoebe',
    description:
      "worked on eval infra, agent harness, and built some features",
    right: '2026',
    href: 'https://www.phoebe.work',
  },
  {
    title: 'unto labs',
    description: (
      <>
        product engineering & consumer app with the <HoverLink href="https://www.thru.org">thru</HoverLink> blockchain
      </>
    ),
    right: '2026',
    href: 'https://www.untolabs.com',
  },
];

const projectItems = [
  {
    title: '24/7 multi-agent simulation',
    description: "20 ai agents use phoebe's product to catch regressions and find edge cases",
    right: '2026',
    href: 'https://x.com/austinjian_/status/2087977300406976682',
  },
  {
    title: 'flowboard',
    description: 'turn drawings into infinitely long videos. 250k+ views, 150+ stars',
    right: '2025',
    href: 'https://github.com/austinjiann/FlowBoard',
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://austinjian.ca/#person",
      name: "Austin Jian",
      url: "https://austinjian.ca",
      email: "mailto:austinjian07@gmail.com",
      sameAs: [
        "https://twitter.com/austinjian_",
        "https://github.com/austinjiann",
        "https://linkedin.com/in/austinjian",
      ],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "University of Waterloo",
        url: "https://uwaterloo.ca",
      },
      knowsAbout: [
        "AI agents",
        "eval infrastructure",
        "product engineering",
        "distributed systems",
        "creative tools",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://austinjian.ca/#website",
      url: "https://austinjian.ca",
      name: "Austin Jian",
      author: {
        "@id": "https://austinjian.ca/#person",
      },
    },
    {
      "@type": "ItemList",
      "@id": "https://austinjian.ca/#projects",
      name: "Projects",
      itemListElement: projectItems.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.title,
        description: item.description,
        url: item.href,
      })),
    },
  ],
};

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center bg-[var(--background)] font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex min-h-screen w-full max-w-xl flex-col justify-center px-6 py-12 sm:px-8">
        <header className="flex items-center justify-between">
          <Header />
          <ThemeToggle />
        </header>

        <div className="mt-6 space-y-4 leading-relaxed text-[var(--text-secondary)]">
          <p>
            I study computer science at the <HoverLink href="https://uwaterloo.ca">university of waterloo</HoverLink>.
          </p>
          <p>
            austinjian07@gmail.com for all inquiries
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
            work
          </h2>
          <div className="group/list mt-2 flex flex-col">
            {workItems.map((item, i) => (
              <Row key={item.title} {...item} index={i} />
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-lg font-medium text-[var(--text-primary)]">
            projects
          </h2>
          <div className="group/list mt-2 flex flex-col">
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
