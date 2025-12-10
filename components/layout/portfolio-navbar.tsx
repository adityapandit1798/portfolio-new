"use client";
import { Home, User, Briefcase, FileText, Cpu, Layers } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function PortfolioNavbar() {
    const navItems = [
        { name: 'Home', url: '#hero', icon: Home },
        { name: 'Skills', url: '#skills', icon: Cpu },
        { name: 'Experience', url: '#experience', icon: Briefcase },
        { name: 'Projects', url: '#projects', icon: Layers },
        // If you have a resume file in /public, use this:
        { name: 'Resume', url: '/resume.pdf', icon: FileText }
    ]

    return <NavBar items={navItems} />
}
