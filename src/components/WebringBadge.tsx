/* eslint-disable @next/next/no-img-element */

type Props = { siteUrl: string; };

export const WebringBadge = ({ siteUrl }: Props) => {
  const prev = `https://cs.uwatering.com/#${siteUrl}?nav=prev`;
  const hub  = `https://cs.uwatering.com/#${siteUrl}`;
  const next = `https://cs.uwatering.com/#${siteUrl}?nav=next`;

  return (
    <div className="flex items-center gap-2">
      <a
        href={prev}
        aria-label="Previous site"
        className="text-[0.95rem] text-[var(--text-faint)] no-underline transition-opacity duration-300 hover:opacity-70"
      >
        ←
      </a>
      <a
        href={hub}
        target="_blank"
        rel="noreferrer"
        className="opacity-60 transition-opacity duration-300 hover:opacity-80"
      >
        <img
          src="https://cs.uwatering.com/icon.black.svg"
          alt="CS Webring"
          className="h-auto w-5 dark:invert"
        />
      </a>
      <a
        href={next}
        aria-label="Next site"
        className="text-[0.95rem] text-[var(--text-faint)] no-underline transition-opacity duration-300 hover:opacity-70"
      >
        →
      </a>
    </div>
  );
};
