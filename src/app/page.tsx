import { HoverLink } from '@/components/HoverLink';
import { Row } from '@/components/Row';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ReadMore } from '@/components/ReadMore';

const workItems = [
  {
    title: 'vercel',
    right: '2027',
    href: 'https://vercel.com',
  },
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
    title: 'orbis engine',
    description: "turn videos into 4d scenes you can walk around in. hack the north '26 finalist",
    right: '2026',
    href: 'https://devpost.com/software/temp-jcyltx',
  },
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
    <div className="flex min-h-screen justify-center bg-[var(--background)] font-sans font-medium">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex min-h-screen w-full max-w-xl flex-col justify-center px-6 py-12 sm:px-8">
        <header className="flex items-center justify-between">
          <Header />
          <nav className="flex items-center gap-4 text-[var(--text-primary)]">
            <HoverLink href="https://x.com/austinjian_">x</HoverLink>
            <HoverLink href="https://github.com/austinjiann">github</HoverLink>
            <HoverLink href="https://linkedin.com/in/austinjian">linkedin</HoverLink>
          </nav>
        </header>

        <div className="mt-5 space-y-3 leading-relaxed text-[var(--text-secondary)]">
          <p>
            i&apos;m a software engineer and cs student at the <HoverLink href="https://uwaterloo.ca">university of waterloo</HoverLink>.
          </p>
          <ReadMore
            intro={
              <>
                currently in school and based in toronto. in january, i&apos;ll be moving to san francisco to intern at{' '}
                <HoverLink href="https://vercel.com">vercel</HoverLink>.
              </>
            }
            more={
              <>
                most recently, i spent a summer in nyc working at{' '}
                <HoverLink href="https://www.phoebe.work">phoebe</HoverLink> and previously at{' '}
                <HoverLink href="https://www.untolabs.com">unto labs</HoverLink>.
              </>
            }
          />
          <p>
            i&apos;m open to full-time and internship engineering roles. feel free to reach out at austinjian07@gmail.com or on any of my socials
          </p>
        </div>

        <section className="mt-8">
          <h2 className="text-lg font-semibold tracking-tight text-[var(--text-primary)]">
            work
          </h2>
          <div className="group/list mt-1 flex flex-col">
            {workItems.map((item, i) => (
              <Row key={item.title} {...item} index={i} />
            ))}
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-semibold tracking-tight text-[var(--text-primary)]">
            projects
          </h2>
          <div className="group/list mt-1 flex flex-col">
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
