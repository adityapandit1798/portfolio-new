"use client"

import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export interface TimelineEvent {
    id: string
    date: string
    title: string
    description: string
    icon?: React.ElementType
    iconClass?: string
    image?: string
    category?: string
    color?: string
    link?: {
        url: string
        text: string
    }
}

interface Timeline3DProps {
    events: TimelineEvent[]
    backgroundColor?: string
    primaryColor?: string
    secondaryColor?: string
    textColor?: string
    accentColor?: string
    showImages?: boolean
    className?: string
}

const defaultColors = {
    background: "bg-slate-950",
    primary: "bg-indigo-600",
    secondary: "bg-violet-500",
    text: "text-white",
    accent: "bg-emerald-500",
}

const TimelineItem: React.FC<{
    event: TimelineEvent
    index: number
    primaryColor: string
    accentColor: string
}> = ({ event, index, primaryColor, accentColor }) => {
    const eventColor = event.color ? `bg-${event.color}-500` : primaryColor

    return (
        <div className="relative w-[80vw] md:w-[600px] flex-shrink-0 px-4 md:px-8">
            {/* Timeline node */}
            <div className="absolute top-0 left-4 md:left-8 z-20 -translate-y-1/2">
                <div
                    className={`w-12 h-12 rounded-full ${eventColor} flex items-center justify-center border-4 border-slate-950 shadow-lg`}
                >
                    {event.icon ? <event.icon className={event.iconClass} /> : <span className="text-white font-bold">{index + 1}</span>}
                </div>
            </div>

            {/* Content card */}
            <div
                className={`relative z-10 bg-slate-900/90 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl border border-slate-800 h-full flex flex-col`}
            >
                {event.image && (
                    <div className="relative h-48 md:h-64 overflow-hidden flex-shrink-0">
                        <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

                        {event.category && (
                            <div className="absolute top-4 right-4">
                                <span className={`${accentColor} px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase`}>
                                    {event.category}
                                </span>
                            </div>
                        )}
                    </div>
                )}

                <div className="p-6 md:p-8 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                        <span
                            className={`text-xs md:text-sm font-mono ${accentColor.replace(
                                "bg-",
                                "text-"
                            )} tracking-wider`}
                        >
                            {event.date}
                        </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                        {event.title}
                    </h3>

                    <p className="text-sm md:text-base text-slate-300 leading-relaxed flex-1">
                        {event.description}
                    </p>

                    {event.link && (
                        <a
                            href={event.link.url}
                            className={`inline-block mt-6 px-4 py-2 ${primaryColor} hover:bg-opacity-80 rounded-lg font-medium text-sm transition-all duration-200 w-fit`}
                        >
                            {event.link.text}
                        </a>
                    )}
                </div>

                <div className={`h-1 w-full ${eventColor}`} />
            </div>
        </div>
    )
}

export const Timeline3D: React.FC<Timeline3DProps> = ({
    events,
    backgroundColor = defaultColors.background,
    primaryColor = defaultColors.primary,
    secondaryColor = defaultColors.secondary,
    textColor = defaultColors.text,
    accentColor = defaultColors.accent,
    className = "",
}) => {
    const targetRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
    })

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-55%"])

    return (
        <section ref={targetRef} className={`relative h-[300vh] ${backgroundColor} ${className}`}>
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className={`absolute rounded-full opacity-10 ${i % 2 === 0 ? primaryColor : secondaryColor
                                }`}
                            animate={{
                                x: [`${20 + i * 10}%`, `${30 + i * 8}%`, `${15 + i * 12}%`, `${20 + i * 10}%`],
                                y: [`${10 + i * 12}%`, `${20 + i * 10}%`, `${30 + i * 8}%`, `${10 + i * 12}%`],
                                scale: [1, 1.25, 1.1, 1],
                            }}
                            transition={{
                                duration: 26 + i * 3,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            style={{
                                width: `${60 + i * 24}px`,
                                height: `${60 + i * 24}px`,
                                filter: "blur(10px)",
                                zIndex: 0,
                            }}
                        />
                    ))}
                </div>

                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full">
                    <div className="mb-12 md:mb-16 max-w-2xl">
                        <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-slate-400">
                            Experience
                        </p>
                        <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight">
                            <span className="relative inline-block">
                                <span className={`absolute -inset-1 rounded-lg ${accentColor} blur opacity-25`} />
                                <span className="relative">Roles &amp; Impact Timeline</span>
                            </span>
                        </h2>
                        <p className="mt-3 text-sm md:text-base text-slate-300">
                            A journey from Infrastructure as Code and cloud-native migrations to Zero-Trust
                            security, GitOps, and cost-optimized Kubernetes platforms.
                        </p>
                    </div>

                    <motion.div style={{ x }} className="flex gap-8 items-center pl-4">
                        {/* Horizontal Line */}
                        <div className="absolute top-0 left-0 w-[200vw] h-1 bg-slate-800 -translate-y-1/2 top-1/2 hidden md:block" />

                        {events.map((event, index) => (
                            <TimelineItem
                                key={event.id}
                                event={event}
                                index={index}
                                primaryColor={primaryColor}
                                accentColor={accentColor}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Timeline3D
