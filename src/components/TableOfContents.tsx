'use client';

import { useEffect, useState } from 'react';

interface TOCItem {
  id: string;
  label: string;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0% -80% 0%' }
    );

    items.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="hidden lg:block fixed top-1/3 left-[calc(50%+350px)] w-48">
      <p className="text-xs font-semibold text-gray-400 tracking-wider mb-4">CONTENTS</p>
      <ul className="space-y-3">
        {items.map(({ id, label }) => (
          <li key={id}>
            <button
              onClick={() => handleClick(id)}
              className={`text-sm transition-colors text-left cursor-pointer ${
                activeId === id ? 'text-black font-medium' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
