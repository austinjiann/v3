'use client';

import type { CSSProperties, ReactNode } from 'react';
import * as motion from 'motion/react-client';
import { GitHubLogoIcon, ExternalLinkIcon } from '@radix-ui/react-icons';
import { RiYoutubeFill } from 'react-icons/ri';

interface ProjectIcon {
    type: 'github' | 'external' | 'youtube';
    href?: string;
}

interface ProjectCardProps {
    image: string;
    title: string;
    description: ReactNode;
    href?: string;
    glowColor?: string;
    glowGradient?: string;
    icons?: ProjectIcon[];
    objectFit?: 'cover' | 'contain';
    imageScale?: number;
    imagePosition?: string;
    index?: number;
}

export const ProjectCard = ({
    image,
    title,
    description,
    href,
    glowColor,
    glowGradient,
    icons,
    objectFit = 'cover',
    imageScale = 1,
    imagePosition = 'center',
    index = 0,
}: ProjectCardProps) => {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
        >
            <div className="relative isolate">
                {glowGradient && (
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -inset-6 rounded-[2.5rem] opacity-95 blur-[76px] transition-all duration-300 group-hover:scale-[1.04] group-hover:opacity-100"
                        style={{ background: glowGradient }}
                    />
                )}
                <div
                    className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100 transition-shadow duration-300 group-hover:shadow-[0_0_72px_-14px_var(--glow-color)]"
                    style={{ '--glow-color': glowColor } as CSSProperties}
                >
                    <img
                        src={image}
                        alt={title}
                        className={`h-full w-full ${objectFit === 'contain' ? 'object-contain' : 'object-cover'}`}
                        style={{
                            objectPosition: imagePosition,
                            transform: imageScale === 1 ? undefined : `scale(${imageScale})`,
                            transformOrigin: 'center',
                        }}
                    />
                </div>
            </div>
            <div className="flex items-center justify-between pt-3">
                <h3 className="font-semibold text-black">{title}</h3>
                {icons && icons.length > 0 && (
                    <div className="flex items-center gap-2">
                        {icons.map((ic, i) => {
                            const iconClass = "text-black hover:opacity-70 transition-opacity duration-300";
                            const iconEl = ic.type === 'github' ? <GitHubLogoIcon width={18} height={18} /> :
                                           ic.type === 'youtube' ? <RiYoutubeFill size={20} /> :
                                           <ExternalLinkIcon width={18} height={18} />;
                            if (ic.href) {
                                return (
                                    <a key={i} href={ic.href} target="_blank" rel="noopener noreferrer" className={iconClass}
                                       onClick={(e) => e.stopPropagation()}>
                                        {iconEl}
                                    </a>
                                );
                            }
                            return <span key={i} className={iconClass}>{iconEl}</span>;
                        })}
                    </div>
                )}
            </div>
            <p className="text-gray-500 pt-1">{description}</p>
        </motion.a>
    )
}
