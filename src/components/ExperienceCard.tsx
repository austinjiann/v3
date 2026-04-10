'use client';

import type { ReactNode } from 'react';
import * as motion from 'motion/react-client';

interface ExperienceCardProps {
    logo: string;
    company: string;
    role?: string;
    backgroundImage?: string;
    gradientOverlay?: string;
    gradientOnTop?: boolean;
    customBackground?: ReactNode;
    href?: string;
    index?: number;
}

export const ExperienceCard = ({
    logo,
    company,
    role,
    backgroundImage,
    gradientOverlay,
    gradientOnTop = false,
    customBackground,
    href,
    index = 0
}: ExperienceCardProps) => {
    const cardClasses = "group relative block w-full overflow-hidden rounded-xl border border-transparent hover:border-gray-200 bg-white transition-colors duration-500 cursor-pointer";
    const animationProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, delay: 0.2 + index * 0.1 }
    } as const;

    const cardContent = (
        <>
            <div className="relative z-10 flex items-center gap-4 p-4">
                <img src={logo} alt={company} className="h-14 w-14 rounded-xl ring-1 ring-gray-200"/>
                <div>
                    <p className="font-semibold text-black">{company}</p>
                    {role && <p className="text-gray-500 transition-opacity duration-500 group-hover:opacity-0">{role}</p>}
                </div>
            </div>

            {customBackground ? (
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                    {customBackground}
                </div>
            ) : (backgroundImage || gradientOverlay) ? (
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                    {!gradientOnTop && gradientOverlay && (
                        <div
                            className="absolute inset-0"
                            style={{ background: gradientOverlay }}
                        />
                    )}

                    {backgroundImage && (
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage: `url(${backgroundImage})`,
                                backgroundSize: 'auto 100%',
                                backgroundPosition: 'right center',
                                backgroundRepeat: 'no-repeat',
                            }}
                        />
                    )}

                    {gradientOnTop && gradientOverlay && (
                        <div
                            className="absolute inset-0"
                            style={{ background: gradientOverlay }}
                        />
                    )}
                </div>
            ) : null}
        </>
    );

    if (!href) {
        return (
            <motion.div
                className={cardClasses}
                {...animationProps}
            >
                {cardContent}
            </motion.div>
        );
    }

    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cardClasses}
            {...animationProps}
        >
            {cardContent}
        </motion.a>
    )
}
