'use client';

import React, { useLayoutEffect, useRef, useState } from 'react';

export function ReadMore({ intro, more }: { intro: React.ReactNode; more: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState<number | undefined>(undefined);
  const innerRef = useRef<HTMLParagraphElement>(null);

  // Track the paragraph's natural height so the wrapper can animate between sizes.
  useLayoutEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    const update = () => setHeight(el.offsetHeight);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Re-measure synchronously on toggle so the animation starts immediately.
  useLayoutEffect(() => {
    if (innerRef.current) setHeight(innerRef.current.offsetHeight);
  }, [open]);

  return (
    <div
      style={{
        height,
        overflow: 'hidden',
        transition: 'height 400ms ease-in-out',
      }}
    >
      <p ref={innerRef}>
        {intro}
        {open && (
          <span style={{ animation: 'readmore-fade-in 400ms ease-out' }}>
            {' '}
            {more}
          </span>
        )}{' '}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="cursor-pointer text-[var(--text-faint)] transition-colors duration-200 hover:text-[var(--text-muted)]"
        >
          {open ? 'read less' : 'read more'}
        </button>
      </p>
    </div>
  );
}
