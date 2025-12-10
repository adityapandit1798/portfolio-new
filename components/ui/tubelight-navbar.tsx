"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
    name: string
    url: string
    icon: LucideIcon
}

interface NavBarProps {
    items: NavItem[]
    className?: string
}

export function NavBar({ items, className }: NavBarProps) {
    const [activeTab, setActiveTab] = useState(items[0].name)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }

        const handleScroll = () => {
            const sections = items
                .map((item) => {
                    if (!item.url.startsWith("#")) return null
                    const element = document.getElementById(item.url.substring(1))
                    if (!element) return null
                    return { name: item.name, element }
                })
                .filter((section): section is { name: string; element: HTMLElement } => section !== null)

            const scrollPosition = window.scrollY + window.innerHeight / 3

            for (const section of sections) {
                const { element } = section
                const { offsetTop, offsetHeight } = element

                if (
                    scrollPosition >= offsetTop &&
                    scrollPosition < offsetTop + offsetHeight
                ) {
                    setActiveTab(section.name)
                }
            }
        }

        handleResize()
        handleScroll()
        window.addEventListener("resize", handleResize)
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("resize", handleResize)
            window.removeEventListener("scroll", handleScroll)
        }
    }, [items])

    return (
        <div
            className={cn(
                "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6 pointer-events-none",
                className,
            )}
        >
            <div className="flex items-center gap-3 bg-slate-950/80 border border-white/10 backdrop-blur-xl py-1 px-1 rounded-full shadow-2xl pointer-events-auto">
                {items.map((item) => {
                    const Icon = item.icon
                    const isActive = activeTab === item.name

                    return (
                        <Link
                            key={item.name}
                            href={item.url}
                            onClick={() => setActiveTab(item.name)}
                            className={cn(
                                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                                "text-slate-400 hover:text-cyan-400",
                                isActive && "bg-white/5 text-cyan-400",
                            )}
                        >
                            <span className="hidden md:inline">{item.name}</span>
                            <span className="md:hidden">
                                <Icon size={18} strokeWidth={2.5} />
                            </span>
                            {isActive && (
                                <motion.div
                                    layoutId="lamp"
                                    className="absolute inset-0 w-full bg-cyan-500/5 rounded-full -z-10"
                                    initial={false}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 30,
                                    }}
                                >
                                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-cyan-500 rounded-t-full">
                                        <div className="absolute w-12 h-6 bg-cyan-500/20 rounded-full blur-md -top-2 -left-2" />
                                        <div className="absolute w-8 h-6 bg-cyan-500/20 rounded-full blur-md -top-1" />
                                        <div className="absolute w-4 h-4 bg-cyan-500/20 rounded-full blur-sm top-0 left-2" />
                                    </div>
                                </motion.div>
                            )}
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
