"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

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
    mousePosition: { x: number; y: number }
    activeEvent: string | null
    setActiveEvent: (id: string | null) => void
}> = ({ event, index, primaryColor, accentColor, mousePosition, activeEvent, setActiveEvent }) => {
    const [ref, inView] = useInView({
        threshold: 0.3,
        triggerOnce: false,
    })
    const controls = useAnimation()

    useEffect(() => {
        if (inView) {
            controls.start("visible")
        }
    }, [controls, inView])

    const isEven = index % 2 === 0
    const eventColor = event.color ? `bg-${event.color}-500` : primaryColor

    return (
        <motion.div
            key={event.id}
            ref={ref}
            className={`relative mb-16 md:mb-24 ${isEven ? "md:ml-auto" : "md:mr-auto"
                } md:w-1/2 flex ${isEven ? "md:justify-start" : "md:justify-end"}`}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: {
                    opacity: 0,
                    x: isEven ? 50 : -50,
                    y: 20,
                },
                visible: {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    transition: {
                        duration: 0.8,
                        ease: "easeOut",
                    },
                },
            }}
        >
            {/* Timeline node */}
            <div
                className={`absolute left-1/2 md:left-auto ${isEven ? "md:left-0" : "md:right-0"
                    } top-0 transform -translate-x-1/2 ${isEven ? "md:translate-x-0" : "md:translate-x-0"
                    } z-20`}
            >
                <motion.div
                    className={`w-10 h-10 rounded-full ${eventColor} flex items-center justify-center border-4 border-slate-950 cursor-pointer`}
                    whileHover={{ scale: 1.2 }}
                    onClick={() => setActiveEvent(activeEvent === event.id ? null : event.id)}
                    animate={{
                        boxShadow:
                            activeEvent === event.id
                                ? [
                                    "0 0 0 rgba(255,255,255,0.4)",
                                    "0 0 20px rgba(255,255,255,0.9)",
                                    "0 0 0 rgba(255,255,255,0.4)",
                                ]
                                : "0 0 0 rgba(255,255,255,0)",
                    }}
                    transition={{
                        repeat: activeEvent === event.id ? Infinity : 0,
                        duration: 1.5,
                    }}
                >
                    {event.icon ? <event.icon className={event.iconClass} /> : <span className="text-white font-bold">{index + 1}</span>}
                </motion.div>
            </div>

            {/* Content card */}
            <motion.div
                className={`relative z-10 bg-slate-900/90 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl w-full md:w-[calc(100%-2rem)] ${isEven ? "md:ml-12" : "md:mr-12"
                    } border border-slate-800`}
                whileHover={{
                    y: -5,
                    x: isEven ? 5 : -5,
                    transition: { duration: 0.3 },
                }}
                style={{
                    transformStyle: "preserve-3d",
                    transform: `perspective(1000px) rotateY(${mousePosition.x * (isEven ? -3 : 3)
                        }deg) rotateX(${mousePosition.y * -3}deg)`,
                }}
                onMouseEnter={() => setActiveEvent(event.id)}
                onMouseLeave={() => setActiveEvent(null)}
            >
                {event.image && (
                    <div className="relative h-40 md:h-48 overflow-hidden">
                        <motion.img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover"
                            initial={{ scale: 1.1 }}
                            animate={{
                                scale: activeEvent === event.id ? 1.03 : 1,
                                y: activeEvent === event.id ? -6 : 0,
                            }}
                            transition={{ duration: 0.8 }}
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

                <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                        <span
                            className={`text-xs md:text-sm font-mono ${accentColor.replace(
                                "bg-",
                                "text-"
                            )} tracking-wider`}
                        >
                            {event.date}
                        </span>

                        <motion.div
                            className={`w-3 h-3 rounded-full ${eventColor}`}
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.7, 1, 0.7],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 2,
                                repeatType: "reverse",
                            }}
                        />
                    </div>

                    <h3 className="text-lg md:text-2xl font-semibold text-white mb-1">
                        {event.title}
                    </h3>

                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                            height: activeEvent === event.id ? "auto" : 0,
                            opacity: activeEvent === event.id ? 1 : 0,
                        }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                    >
                        <p className="text-sm md:text-base text-slate-300 mt-2 leading-relaxed">
                            {event.description}
                        </p>

                        {event.link && (
                            <a
                                href={event.link.url}
                                className={`inline-block mt-4 px-4 py-2 ${primaryColor} hover:bg-opacity-80 rounded-lg font-medium text-sm transition-all duration-200 transform hover:-translate-y-1`}
                            >
                                {event.link.text}
                            </a>
                        )}
                    </motion.div>
                </div>

                <motion.div
                    className={`absolute bottom-0 left-0 h-1 ${eventColor}`}
                    initial={{ width: "0%" }}
                    animate={{ width: activeEvent === event.id ? "100%" : "0%" }}
                    transition={{ duration: 0.5 }}
                />
            </motion.div>
        </motion.div>
    )
}

export const Timeline3D: React.FC<Timeline3DProps> = ({
    events,
    backgroundColor = defaultColors.background,
    primaryColor = defaultColors.primary,
    secondaryColor = defaultColors.secondary,
    textColor = defaultColors.text,
    accentColor = defaultColors.accent,
    showImages = true,
    className = "",
}) => {
    const [activeEvent, setActiveEvent] = useState<string | null>(null)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return
            const rect = containerRef.current.getBoundingClientRect()
            setMousePosition({
                x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
                y: ((e.clientY - rect.top) / rect.height) * 2 - 1,
            })
        }

        const container = containerRef.current
        if (container) {
            container.addEventListener("mousemove", handleMouseMove)
        }

        return () => {
            if (container) {
                container.removeEventListener("mousemove", handleMouseMove)
            }
        }
    }, [])

    return (
        <div
            className={`w-full ${backgroundColor} py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden ${textColor} ${className}`}
            ref={containerRef}
        >
            <div className="max-w-5xl lg:max-w-6xl mx-auto relative">
                {/* Decorative elements - subtle floating blobs */}
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

                {/* Main timeline content */}
                <motion.div
                    className="relative z-10"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="text-center mb-12 md:mb-16">
                        <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-slate-400">
                            Experience
                        </p>
                        <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight">
                            <span className="relative inline-block">
                                <span className={`absolute -inset-1 rounded-lg ${accentColor} blur opacity-25`} />
                                <span className="relative">Roles &amp; Impact Timeline</span>
                            </span>
                        </h2>
                        <p className="mt-3 text-sm md:text-base text-slate-300 max-w-2xl mx-auto">
                            A journey from Infrastructure as Code and cloud-native migrations to Zero-Trust
                            security, GitOps, and cost-optimized Kubernetes platforms.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Central line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[3px] bg-slate-800 rounded-full" />

                        {/* Timeline events */}
                        {events.map((event, index) => (
                            <TimelineItem
                                key={event.id}
                                event={event}
                                index={index}
                                primaryColor={primaryColor}
                                accentColor={accentColor}
                                mousePosition={mousePosition}
                                activeEvent={activeEvent}
                                setActiveEvent={setActiveEvent}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Timeline3D

// Safelist for dynamic classes used in this component
// bg-indigo-500 bg-emerald-500 bg-violet-500
// text-indigo-500 text-emerald-500 text-violet-500
