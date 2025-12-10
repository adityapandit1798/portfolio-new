"use client"

import React, { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { PROJECTS } from "@/data/portfolio"

interface ProjectsSectionProps {
    className?: string
}

// Hook to detect outside click
function useOutsideClick(ref: React.RefObject<HTMLDivElement | null>, callback: () => void) {
    useEffect(() => {
        const listener = (event: any) => {
            if (!ref.current || ref.current.contains(event.target)) {
                return
            }
            callback()
        }

        document.addEventListener("mousedown", listener)
        document.addEventListener("touchstart", listener)

        return () => {
            document.removeEventListener("mousedown", listener)
            document.removeEventListener("touchstart", listener)
        }
    }, [ref, callback])
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ className }) => {
    const [selectedId, setSelectedId] = useState<string | null>(null)
    const ref = useRef<HTMLDivElement>(null)

    useOutsideClick(ref, () => setSelectedId(null))

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedId) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
        return () => {
            document.body.style.overflow = "auto"
        }
    }, [selectedId])

    const selectedProject = PROJECTS.find((p) => p.id === selectedId)

    return (
        <section
            id="projects"
            className={cn(
                "w-full py-16 md:py-20 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900",
                className
            )}
        >
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10 md:mb-14">
                    <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-slate-400">
                        Projects &amp; Case Studies
                    </p>
                    <h2 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
                        Platforms I&apos;ve architected and shipped
                    </h2>
                    <p className="mt-3 text-sm md:text-base text-slate-300 max-w-2xl mx-auto">
                        A selection of security, autoscaling, and identity platforms focused on Zero-Trust,
                        GitOps, and cost-optimized cloud infrastructure.
                    </p>
                </div>

                <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {PROJECTS.map((project) => (
                        <motion.div
                            key={project.id}
                            layoutId={`card-${project.id}`}
                            onClick={() => setSelectedId(project.id)}
                            className="cursor-pointer group rounded-[22px] bg-slate-950/95 border border-slate-800/80 hover:border-slate-700/80 transition-colors relative z-20 overflow-hidden"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="p-4 sm:p-6 flex flex-col h-full">
                                <div className="flex items-center justify-between gap-2">
                                    <div className="flex items-center gap-2">
                                        <motion.span
                                            layoutId={`icon-${project.id}`}
                                            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 border border-slate-700/80"
                                        >
                                            <project.icon className={project.iconClass} />
                                        </motion.span>
                                        <div className="flex flex-col">
                                            <motion.p layoutId={`timeframe-${project.id}`} className="text-xs font-mono text-slate-400">{project.timeframe}</motion.p>
                                            <motion.p layoutId={`role-${project.id}`} className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                                                {project.role}
                                            </motion.p>
                                        </div>
                                    </div>
                                </div>

                                <motion.div layoutId={`image-${project.id}`} className="mt-4 relative w-full h-40 rounded-2xl overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>

                                <div className="mt-4 flex-1 flex flex-col">
                                    <motion.h3 layoutId={`title-${project.id}`} className="text-base md:text-lg font-semibold text-white">
                                        {project.title}
                                    </motion.h3>

                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {project.tech.slice(0, 3).map((t) => (
                                            <Badge
                                                key={t}
                                                variant="outline"
                                                className="border-slate-700/80 bg-slate-900/60 text-slate-100 text-[11px] font-normal"
                                            >
                                                {t}
                                            </Badge>
                                        ))}
                                        {project.tech.length > 3 && (
                                            <Badge
                                                variant="outline"
                                                className="border-slate-700/80 bg-slate-900/60 text-slate-100 text-[11px] font-normal"
                                            >
                                                +{project.tech.length - 3}
                                            </Badge>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedId && selectedProject && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                                onClick={() => setSelectedId(null)}
                            />
                            <motion.div
                                layoutId={`card-${selectedId}`}
                                ref={ref}
                                className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-[22px] overflow-hidden relative z-10 shadow-2xl flex flex-col max-h-[90vh]"
                            >
                                <div className="p-6 overflow-y-auto custom-scrollbar">
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="flex items-center gap-3">
                                            <motion.span
                                                layoutId={`icon-${selectedId}`}
                                                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 border border-slate-700"
                                            >
                                                <selectedProject.icon className={selectedProject.iconClass} />
                                            </motion.span>
                                            <div>
                                                <motion.h3 layoutId={`title-${selectedId}`} className="text-xl md:text-2xl font-semibold text-white">
                                                    {selectedProject.title}
                                                </motion.h3>
                                                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-1">
                                                    <motion.p layoutId={`role-${selectedId}`} className="text-xs uppercase tracking-wider text-slate-400">
                                                        {selectedProject.role}
                                                    </motion.p>
                                                    <span className="hidden sm:inline text-slate-600">•</span>
                                                    <motion.p layoutId={`timeframe-${selectedId}`} className="text-sm font-mono text-slate-400">
                                                        {selectedProject.timeframe}
                                                    </motion.p>
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => setSelectedId(null)}
                                            className="p-2 rounded-full bg-slate-800/50 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                                        >
                                            <X className="w-5 h-5" />
                                        </button>
                                    </div>

                                    <motion.div layoutId={`image-${selectedId}`} className="relative w-full h-48 sm:h-64 rounded-xl overflow-hidden mb-8">
                                        <Image
                                            src={selectedProject.image}
                                            alt={selectedProject.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </motion.div>

                                    <div className="space-y-8">
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1 }}
                                        >
                                            <h4 className="text-sm font-medium text-emerald-400 uppercase tracking-wider mb-3">Project Overview</h4>
                                            <p className="text-slate-300 text-base leading-relaxed">
                                                {selectedProject.summary}
                                            </p>
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            <h4 className="text-sm font-medium text-emerald-400 uppercase tracking-wider mb-3">Key Impact &amp; Results</h4>
                                            <ul className="space-y-3">
                                                {selectedProject.impact.map((item, i) => (
                                                    <li key={i} className="flex gap-3 text-slate-300 text-sm">
                                                        <span className="mt-[6px] h-[6px] w-[6px] rounded-full bg-emerald-400 shrink-0 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                                                        <span className="leading-relaxed">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 }}
                                        >
                                            <h4 className="text-sm font-medium text-emerald-400 uppercase tracking-wider mb-3">Technology Stack</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedProject.tech.map((t) => (
                                                    <Badge
                                                        key={t}
                                                        variant="outline"
                                                        className="border-slate-700 bg-slate-800/50 text-slate-200 px-3 py-1"
                                                    >
                                                        {t}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    )
}

export default ProjectsSection
