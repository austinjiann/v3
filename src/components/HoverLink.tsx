'use client';
import React from 'react';
export const HoverLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: 'inherit',
        fontWeight: 'inherit',
        textDecorationLine: 'underline',
        textDecorationColor: 'var(--link-underline-muted)',
        textDecorationThickness: '1px',
        textUnderlineOffset: '4px',
        transition: 'color 180ms ease, text-decoration-color 180ms ease, text-shadow 180ms ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = 'var(--link-underline)';
        e.currentTarget.style.textDecorationColor = 'var(--link-underline)';
        e.currentTarget.style.textShadow = '0 0 12px var(--link-glow)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = 'inherit';
        e.currentTarget.style.textDecorationColor = 'var(--link-underline-muted)';
        e.currentTarget.style.textShadow = 'none';
      }}
    >
      {children}
    </a>
  );
};
