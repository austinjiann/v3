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
        textDecoration: 'none',
        backgroundImage: 'linear-gradient(to right, #000, #000), linear-gradient(to right, #aaa, #aaa)',
        backgroundSize: '0% 1px, 100% 1px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left bottom, left bottom',
        transition: 'background-size 1s ease-in-out',
        paddingBottom: '2px',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundSize = '100% 1px, 100% 1px';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundSize = '0% 1px, 100% 1px';
      }}
    >
      {children}
    </a>
  );
};