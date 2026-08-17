'use client';

import React from 'react';

interface RowProps {
    title: string;
    meta?: string;
    description?: React.ReactNode;
    right?: string;
    href?: string;
    index?: number;
}

export const Row = ({ title, meta, description, right, href }: RowProps) => {
    const titleInner = (
        <span className="text-[var(--text-primary)]">
            {title}
        </span>
    );

    const className =
        'portfolio-row group relative -mx-3 flex items-start gap-3 rounded-md px-3 py-3 opacity-100 transition-opacity duration-300 group-hover/list:opacity-35 hover:!opacity-100 focus-within:!opacity-100';

    return (
        <div>
            <div className={className}>
                <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-3">
                        {href ? (
                            <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-fit after:absolute after:inset-0 after:content-['']"
                            >
                                {titleInner}
                            </a>
                        ) : (
                            titleInner
                        )}
                        {meta && <span className="min-w-0 truncate text-[var(--text-muted)]">{meta}</span>}
                        {right && <span className="ml-auto shrink-0 text-[var(--text-faint)] tabular-nums">{right}</span>}
                    </div>
                    {description && (
                        <div className="portfolio-row-detail mt-1 grid grid-rows-[1fr] opacity-100 transition-[grid-template-rows,margin-top,opacity] duration-300 ease-out">
                            <p className="portfolio-row-description relative z-10 min-h-0 translate-y-0 overflow-hidden text-sm text-[var(--text-muted)] transition-transform duration-300 ease-out">
                                {description}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
