type Props = { siteUrl: string; };

export const WebringBadge = ({ siteUrl }: Props) => {
  const prev = `https://cs.uwatering.com/#${siteUrl}?nav=prev`;
  const hub  = `https://cs.uwatering.com/#${siteUrl}`;
  const next = `https://cs.uwatering.com/#${siteUrl}?nav=next`;

  const linkStyle = {
    color: '#9ca3af',
    textDecoration: 'none',
    fontSize: '0.95rem',
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      <a href={prev} aria-label="Previous site" style={linkStyle}>←</a>
      <a href={hub} target="_blank" rel="noreferrer">
        <img
          src="https://cs.uwatering.com/icon.black.svg"
          alt="CS Webring"
          style={{ width: '20px', height: 'auto', opacity: 0.6 }}
        />
      </a>
      <a href={next} aria-label="Next site" style={linkStyle}>→</a>
    </div>
  );
};