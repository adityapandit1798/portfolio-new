"use client"

import type { FC } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { SKILL_CATEGORIES } from "@/data/portfolio"

interface SkillsSectionProps {
    className?: string
}

export const SkillsSection: FC<SkillsSectionProps> = ({ className }) => {
    return (
        <section
            id="skills"
            className={cn(
                "w-full py-16 md:py-20 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900",
                className
            )}
        >
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10 md:mb-14">
                    <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-slate-400">
                        Skills &amp; Tech Stack
                    </p>
                    <h2 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
                        Cloud, DevOps &amp; DevSecOps capabilities
                    </h2>
                    <p className="mt-3 text-sm md:text-base text-slate-300 max-w-2xl mx-auto">
                        A focused skill set around AWS, Kubernetes, GitOps, Infrastructure as Code,
                        and Zero-Trust security to build secure, reliable, and cost-optimized platforms.
                    </p>
                </div>

                <div className="grid gap-5 sm:gap-6 md:gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {SKILL_CATEGORIES.map((category) => (
                        <Card
                            key={category.id}
                            className="border-slate-800/80 bg-slate-900/60 backdrop-blur-sm"
                        >
                            <CardHeader className="flex flex-row items-start gap-3 pb-2">
                                <div className="mt-1 rounded-lg border border-slate-700/70 bg-slate-900/80 p-2">
                                    <category.icon className="h-6 w-6 text-slate-200" />
                                </div>
                                <div>
                                    <CardTitle className="text-lg md:text-xl text-white">
                                        {category.title}
                                    </CardTitle>
                                    <p className="mt-1 text-sm text-slate-300">
                                        {category.description}
                                    </p>
                                </div>
                            </CardHeader>
                            <CardContent className="pt-2">
                                <div className="flex flex-wrap gap-3">
                                    {category.items.map((item) => (
                                        <Badge
                                            key={item.name}
                                            variant="outline"
                                            className="border-slate-700/80 bg-slate-900/40 text-slate-200 text-base font-normal flex items-center gap-2.5 py-2 px-4"
                                        >
                                            {item.icon && (
                                                <item.icon className={cn("h-5 w-5", item.color)} />
                                            )}
                                            {item.name}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SkillsSection
