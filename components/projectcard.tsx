'use client';

import type { ReactNode } from 'react';

interface ProjectCardProps {
    image: string;
    title: string;
    year: string;
    description: ReactNode;
    href?: string;
    glowColor?: string;
    external?: boolean;
}

export const ProjectCard = ({
    image,
    title,
    year,
    description,
    href,
    glowColor,
    external = false,
}: ProjectCardProps) => {
    return (
        <a
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            className="block group"
        >
            <div 
                className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100 transition-shadow duration-300 group-hover:shadow-[0_0_30px_var(--glow-color)]"
                style={{ '--glow-color': glowColor } as React.CSSProperties}
            >
                <img src={image} alt={title} className="h-full w-full object-cover"/>
            </div>
            <div className="flex items-center justify-between pt-3">
                <h3 className="font-semibold text-black">{title}</h3>
                <span className="text-gray-500">{year}</span>
            </div>
            <p className="text-gray-500 pt-1">{description}</p>
        </a>
    )
}
