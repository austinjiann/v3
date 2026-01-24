'use client';

import { ReactNode } from 'react';

interface ProjectCardProps {
    image: string;
    title: string;
    year: string;
    description: ReactNode;
    href?: string;
}

export const ProjectCard = ({
    image,
    title,
    year,
    description,
    href
}: ProjectCardProps) => {
    const content = (
        <>
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100">
                <img src={image} alt={title} className="h-full w-full object-cover"/>
            </div>
            <div className="flex items-center justify-between pt-3">
                <h3 className="font-semibold text-black">{title}</h3>
                <span className="text-gray-500">{year}</span>
            </div>
            <p className="text-gray-500 pt-1">{description}</p>
        </>
    );

    if (href) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
            >
                {content}
            </a>
        );
    }

    return <div className="block">{content}</div>;
}
