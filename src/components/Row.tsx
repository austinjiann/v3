'use client';

import * as motion from 'motion/react-client';
import React from 'react';

interface RowProps {
    logo?: string;
    title: string;
    meta?: string;
    description?: React.ReactNode;
    right?: string;
    href?: string;
    index?: number;
}

export const Row = ({ logo, title, meta, description, right, href, index = 0 }: RowProps) => {
    const titleInner = (
        <span className="flex items-center gap-2 text-[var(--text-primary)]">
            {logo && (
                <img
                    src={logo}
                    alt={title}
                    className="h-[1.05em] w-auto shrink-0 rounded-sm"
                />
            )}
            {title}
        </span>
    );

    const className =
        'group relative -mx-3 flex items-start gap-3 rounded-md px-3 py-3 transition-colors duration-300 hover:bg-[var(--surface-hover)]';
    const animationProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, delay: 0.2 + index * 0.1 },
    } as const;

    return (
        <motion.div className={className} {...animationProps}>
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
                {description && <p className="mt-1 text-sm text-[var(--text-muted)]">{description}</p>}
            </div>
        </motion.div>
    );
};
