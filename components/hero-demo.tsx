"use client"

import { useEffect } from "react"
import { motion, stagger, useAnimate } from "motion/react"

import Floating, {
    FloatingElement,
} from "@/components/ui/parallax-floating"

const heroImages = [
    {
        url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2400&auto=format&fit=crop",
        title: "Cloud Infrastructure",
        author: "Unsplash",
    },
    {
        url: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2400&auto=format&fit=crop",
        title: "DevOps & Automation",
        author: "Unsplash",
    },
    {
        url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2400&auto=format&fit=crop",
        title: "Engineering Focus",
        author: "Unsplash",
    },
    {
        url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2400&auto=format&fit=crop",
        title: "Kubernetes & Cloud",
        author: "Unsplash",
    },
    {
        url: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2400&auto=format&fit=crop",
        title: "Secure Pipelines",
        author: "Unsplash",
    },
    {
        url: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2400&auto=format&fit=crop",
        title: "Monitoring & Observability",
        author: "Unsplash",
    },
    {
        url: "https://images.unsplash.com/photo-1517512006864-7edc3b933137?q=80&w=2400&auto=format&fit=crop",
        title: "Cloud Architecture",
        author: "Unsplash",
    },
    {
        url: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=2400&auto=format&fit=crop",
        title: "Data Center",
        author: "Unsplash",
    },
]

const Preview = () => {
    const [scope, animate] = useAnimate()

    useEffect(() => {
        animate(
            "img",
            { opacity: [0, 1] },
            { duration: 0.5, delay: stagger(0.15) }
        )
    }, [animate])

    const scrollToProjects = () => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div
            id="hero"
            className="flex w-full h-full min-h-screen justify-center items-center bg-gradient-to-b from-black via-slate-950 to-slate-900 overflow-hidden relative"
            ref={scope}
        >
            <motion.div
                className="z-50 text-center space-y-4 items-center flex flex-col px-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.88, delay: 1.5 }}
            >
                <p className="text-sm md:text-base font-medium uppercase tracking-[0.25em] text-emerald-400 drop-shadow-sm">
                    Cloud &amp; DevSecOps Engineer
                </p>
                <p className="text-4xl md:text-6xl lg:text-7xl z-50 text-white font-semibold">
                    Aditya&nbsp;Pandit
                </p>
                <p className="text-sm md:text-base text-slate-300 max-w-xl">
                    I design secure, cost-optimized AWS &amp; Kubernetes platforms using
                    GitOps, Zero-Trust security, and automation.
                </p>

                <div className="flex flex-wrap justify-center gap-3 pt-2">
                    <span className="rounded-full border border-slate-700/70 bg-slate-900/60 px-4 py-1 text-xs md:text-sm text-slate-200">
                        40% lower AWS compute spend
                    </span>
                    <span className="rounded-full border border-slate-700/70 bg-slate-900/60 px-4 py-1 text-xs md:text-sm text-slate-200">
                        35% faster incident recovery (MTTR)
                    </span>
                    <span className="rounded-full border border-slate-700/70 bg-slate-900/60 px-4 py-1 text-xs md:text-sm text-slate-200">
                        Terraform · EKS · Vault · ArgoCD
                    </span>
                </div>

                <div className="flex flex-wrap justify-center gap-4 pt-4">
                    <button
                        onClick={scrollToProjects}
                        className="rounded-full bg-white text-black text-xs md:text-sm font-medium px-6 py-2 hover:scale-105 transition-transform cursor-pointer"
                    >
                        View Projects
                    </button>
                    <button className="rounded-full border border-slate-500 text-slate-100 text-xs md:text-sm font-medium px-6 py-2 hover:bg-slate-900/60 hover:scale-105 transition-all">
                        Download Resume
                    </button>
                </div>
            </motion.div>

            <Floating sensitivity={-1} className="overflow-hidden">
                <FloatingElement depth={0.5} className="top-[8%] left-[11%]">
                    <motion.img
                        initial={{ opacity: 0 }}
                        src={heroImages[0].url}
                        alt={heroImages[0].title}
                        className="w-32 h-32 md:w-48 md:h-48 rounded-xl object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
                    />
                </FloatingElement>
                <FloatingElement depth={1} className="top-[10%] left-[32%]">
                    <motion.img
                        initial={{ opacity: 0 }}
                        src={heroImages[1].url}
                        alt={heroImages[1].title}
                        className="w-28 h-28 md:w-40 md:h-40 rounded-xl object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
                    />
                </FloatingElement>
                <FloatingElement depth={2} className="top-[2%] left-[53%]">
                    <motion.img
                        initial={{ opacity: 0 }}
                        src={heroImages[2].url}
                        alt={heroImages[2].title}
                        className="w-40 h-56 md:w-56 md:h-72 rounded-xl object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
                    />
                </FloatingElement>
                <FloatingElement depth={1} className="top-[0%] left-[83%]">
                    <motion.img
                        initial={{ opacity: 0 }}
                        src={heroImages[3].url}
                        alt={heroImages[3].title}
                        className="w-32 h-32 md:w-48 md:h-48 rounded-xl object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
                    />
                </FloatingElement>

                <FloatingElement depth={1} className="top-[40%] left-[2%]">
                    <motion.img
                        initial={{ opacity: 0 }}
                        src={heroImages[4].url}
                        alt={heroImages[4].title}
                        className="w-36 h-36 md:w-52 md:h-52 rounded-xl object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
                    />
                </FloatingElement>
                <FloatingElement depth={2} className="top-[70%] left-[77%]">
                    <motion.img
                        initial={{ opacity: 0 }}
                        src={heroImages[7].url}
                        alt={heroImages[7].title}
                        className="w-36 h-36 md:w-52 md:h-64 rounded-xl object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
                    />
                </FloatingElement>

                <FloatingElement depth={4} className="top-[73%] left-[15%]">
                    <motion.img
                        initial={{ opacity: 0 }}
                        src={heroImages[5].url}
                        alt={heroImages[5].title}
                        className="w-56 md:w-80 h-full rounded-xl object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
                    />
                </FloatingElement>
                <FloatingElement depth={1} className="top-[80%] left-[50%]">
                    <motion.img
                        initial={{ opacity: 0 }}
                        src={heroImages[6].url}
                        alt={heroImages[6].title}
                        className="w-32 h-32 md:w-48 md:h-48 rounded-xl object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
                    />
                </FloatingElement>
            </Floating>
        </div>
    )
}

export { Preview }
