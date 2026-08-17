'use client';

import * as motion from 'motion/react-client';
import React from 'react';

interface RowProps {
    title: string;
    meta?: string;
    description?: React.ReactNode;
    right?: string;
    href?: string;
    index?: number;
}

export const Row = ({ title, meta, description, right, href, index = 0 }: RowProps) => {
    const titleInner = (
        <span className="text-[var(--text-primary)]">
            {title}
        </span>
    );

    const className =
        'group relative -mx-3 flex items-start gap-3 rounded-md px-3 py-3 opacity-100 transition-opacity duration-300 group-hover/list:opacity-35 hover:!opacity-100 focus-within:!opacity-100';
    const animationProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, delay: 0.2 + index * 0.1 },
    } as const;

    return (
        <motion.div {...animationProps}>
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
                        <div className="mt-1 grid grid-rows-[1fr] opacity-100 transition-[grid-template-rows,margin-top,opacity] duration-300 ease-out sm:mt-0 sm:grid-rows-[0fr] sm:opacity-0 sm:group-hover:mt-1 sm:group-hover:grid-rows-[1fr] sm:group-hover:opacity-100 sm:group-focus-within:mt-1 sm:group-focus-within:grid-rows-[1fr] sm:group-focus-within:opacity-100">
                            <p className="relative z-10 min-h-0 translate-y-0 overflow-hidden text-sm text-[var(--text-muted)] transition-transform duration-300 ease-out sm:translate-y-1 sm:group-hover:translate-y-0 sm:group-focus-within:translate-y-0">
                                {description}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};
