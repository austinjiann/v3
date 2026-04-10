'use client';

import { motion } from 'motion/react';

type FlowerConfig = {
    src: string;
    right: string;
    bottom: string;
    heightPct: string;
    zIndex: number;
    glow: string;
    growthFrames: number[];
    growthDuration: number;
    growthDelay: number;
    swayFrames: number[];
    swayDuration: number;
    widthFrames: number[];
    widthDuration: number;
    skewFrames: number[];
    skewDuration: number;
};

type FlowerBaseConfig = Omit<
    FlowerConfig,
    | 'growthFrames'
    | 'growthDuration'
    | 'growthDelay'
    | 'swayFrames'
    | 'swayDuration'
    | 'widthFrames'
    | 'widthDuration'
    | 'skewFrames'
    | 'skewDuration'
>;

const createSeed = (value: string) => {
    let hash = 2166136261;

    for (let index = 0; index < value.length; index += 1) {
        hash ^= value.charCodeAt(index);
        hash = Math.imul(hash, 16777619);
    }

    return hash >>> 0;
};

const createRandom = (seed: number) => {
    let state = seed;

    return () => {
        state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
        return state / 4294967296;
    };
};

const randomBetween = (random: () => number, min: number, max: number) =>
    min + random() * (max - min);

const randomSigned = (random: () => number, min: number, max: number) =>
    randomBetween(random, min, max) * (random() > 0.5 ? 1 : -1);

const flowerBases: FlowerBaseConfig[] = [
    {
        src: '/experience/orange_phoebe.svg',
        right: '41%',
        bottom: '-3%',
        heightPct: '70%',
        zIndex: 2,
        glow: 'rgba(239, 108, 76, 0.18)',
    },
    {
        src: '/experience/peach_phoebe.svg',
        right: '29%',
        bottom: '-1%',
        heightPct: '80%',
        zIndex: 1,
        glow: 'rgba(243, 156, 128, 0.16)',
    },
    {
        src: '/experience/yellow_phoebe.svg',
        right: '13%',
        bottom: '-4%',
        heightPct: '64%',
        zIndex: 2,
        glow: 'rgba(243, 184, 77, 0.16)',
    },
    {
        src: '/experience/red_phoebe.svg',
        right: '-1%',
        bottom: '-2%',
        heightPct: '96%',
        zIndex: 3,
        glow: 'rgba(230, 90, 97, 0.2)',
    },
];

const flowers: FlowerConfig[] = flowerBases.map((flower) => {
    const random = createRandom(createSeed(`${flower.src}-${flower.right}-${flower.bottom}`));
    const rest = randomBetween(random, 0.94, 0.98);
    const firstSway = randomSigned(random, 2.6, 4.8);
    const secondSway = randomSigned(random, 4.4, 7.4);
    const thirdSway = randomSigned(random, 2.8, 5.2);
    const firstSkew = randomSigned(random, 0.45, 1.15);
    const secondSkew = randomSigned(random, 0.8, 1.7);
    const thirdSkew = randomSigned(random, 0.45, 1.2);

    return {
        ...flower,
        growthFrames: [
            rest,
            randomBetween(random, 1.01, 1.04),
            randomBetween(random, 0.98, 1),
            randomBetween(random, 1.04, 1.08),
            randomBetween(random, 0.98, 1),
            randomBetween(random, 1.01, 1.03),
            rest,
        ],
        growthDuration: randomBetween(random, 18, 24),
        growthDelay: randomBetween(random, 0.15, 1.5),
        swayFrames: [
            0,
            firstSway,
            firstSway,
            secondSway,
            secondSway,
            thirdSway,
            thirdSway,
            0,
        ],
        swayDuration: randomBetween(random, 23, 31),
        widthFrames: [
            1,
            randomBetween(random, 0.992, 0.998),
            randomBetween(random, 0.992, 0.998),
            randomBetween(random, 1.006, 1.014),
            randomBetween(random, 1.006, 1.014),
            randomBetween(random, 0.994, 1.003),
            randomBetween(random, 0.994, 1.003),
            1,
        ],
        widthDuration: randomBetween(random, 18, 24),
        skewFrames: [
            0,
            firstSkew,
            firstSkew,
            secondSkew,
            secondSkew,
            thirdSkew,
            thirdSkew,
            0,
        ],
        skewDuration: randomBetween(random, 20, 26),
    };
});

export const PhoebeBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden">
            <div
                className="absolute inset-0"
                style={{
                    background: `
                        linear-gradient(135deg,
                            rgba(255, 253, 249, 1) 0%,
                            rgba(255, 245, 235, 0.96) 18%,
                            rgba(255, 233, 219, 0.86) 38%,
                            rgba(249, 224, 216, 0.74) 58%,
                            rgba(250, 231, 206, 0.58) 82%,
                            rgba(252, 240, 216, 0.5) 100%
                        )
                    `,
                }}
            />
            <div
                className="absolute inset-0"
                style={{
                    background: `
                        radial-gradient(circle at 52% 60%, rgba(245, 155, 123, 0.16) 0%, transparent 28%),
                        radial-gradient(circle at 82% 64%, rgba(230, 90, 97, 0.12) 0%, transparent 24%),
                        radial-gradient(circle at 73% 38%, rgba(243, 184, 77, 0.1) 0%, transparent 20%)
                    `,
                }}
            />
            <div
                className="absolute inset-0"
                style={{
                    background: 'linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.88) 22%, rgba(255, 255, 255, 0.1) 42%, rgba(255, 255, 255, 0) 54%)',
                }}
            />

            {flowers.map((flower) => (
                <motion.div
                    key={flower.src}
                    className="absolute"
                    style={{
                        right: flower.right,
                        bottom: flower.bottom,
                        height: flower.heightPct,
                        aspectRatio: '1',
                        zIndex: flower.zIndex,
                        transformOrigin: 'bottom center',
                        filter: `drop-shadow(0 14px 24px ${flower.glow})`,
                    }}
                    animate={{ scaleY: flower.growthFrames }}
                    transition={{
                        duration: flower.growthDuration,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: flower.growthDelay,
                    }}
                >
                    <motion.div
                        className="h-full w-full"
                        style={{ transformOrigin: 'bottom center' }}
                        animate={{
                            rotate: flower.swayFrames,
                            scaleX: flower.widthFrames,
                            skewX: flower.skewFrames,
                        }}
                        transition={{
                            rotate: {
                                duration: flower.swayDuration,
                                repeat: Infinity,
                                ease: 'easeInOut',
                                delay: flower.growthDelay,
                            },
                            scaleX: {
                                duration: flower.widthDuration,
                                repeat: Infinity,
                                ease: 'easeInOut',
                                delay: flower.growthDelay,
                            },
                            skewX: {
                                duration: flower.skewDuration,
                                repeat: Infinity,
                                ease: 'easeInOut',
                                delay: flower.growthDelay,
                            },
                        }}
                    >
                        <motion.img
                            src={flower.src}
                            alt=""
                            className="block h-full w-full object-contain"
                        />
                    </motion.div>
                </motion.div>
            ))}
        </div>
    );
};
