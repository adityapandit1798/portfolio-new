"use client"

import React from "react"
import Timeline3D from "@/components/ui/3d-interactive-timeline"
import { EXPERIENCE_EVENTS } from "@/data/portfolio"

const ExperienceSection: React.FC = () => {
    return (
        <section id="experience" className="bg-slate-950">
            <Timeline3D
                events={EXPERIENCE_EVENTS}
                primaryColor="bg-indigo-600"
                secondaryColor="bg-violet-500"
                accentColor="bg-emerald-500"
                textColor="text-white"
                backgroundColor="bg-slate-950"
                showImages
            />
        </section>
    )
}

export default ExperienceSection
