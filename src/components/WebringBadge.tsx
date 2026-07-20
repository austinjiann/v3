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
        className="text-[0.95rem] text-gray-400 no-underline hover:opacity-70 transition-opacity duration-300"
      >
        ←
      </a>
      <a
        href={hub}
        target="_blank"
        rel="noreferrer"
        className="text-black hover:opacity-70 transition-opacity duration-300"
      >
        <img
          src="https://cs.uwatering.com/icon.black.svg"
          alt="CS Webring"
          className="h-auto w-5"
        />
      </a>
      <a
        href={next}
        aria-label="Next site"
        className="text-[0.95rem] text-gray-400 no-underline hover:opacity-70 transition-opacity duration-300"
      >
        →
      </a>
    </div>
  );
};
