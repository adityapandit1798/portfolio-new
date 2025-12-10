"use client"

import React, { useState, useEffect } from 'react';
// Import your real links
import { socialLinks } from '@/data/portfolio';

export const ContactSection = () => {
    const [, setHoveredIndex] = useState<number | null>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Map your real data to the visual card design
    const getLink = (name: string) => socialLinks.find(s => s.title === name)?.href || '#';

    const socialPlatforms = [
        {
            name: 'LinkedIn',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
            gradient: 'from-blue-600 to-cyan-500', // Adjusted to Cyan
            shadowColor: 'rgba(6, 182, 212, 0.5)',
            link: getLink('LinkedIn'),
            description: 'Professional Network'
        },
        {
            name: 'GitHub',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            ),
            gradient: 'from-gray-700 to-gray-500',
            shadowColor: 'rgba(75, 85, 99, 0.5)',
            link: getLink('GitHub'),
            description: 'Code Repository'
        },
        {
            name: 'Email',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
            ),
            gradient: 'from-emerald-600 to-emerald-400', // Adjusted to Emerald
            shadowColor: 'rgba(16, 185, 129, 0.5)',
            link: getLink('Email'),
            description: 'Contact Me'
        }
    ];

    return (
        <div id="contact" className="min-h-[80vh] flex flex-col justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden relative w-full py-20">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent"></div>

                {/* Animated Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center justify-center p-8">
                {/* Header Section */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-block mb-4 px-4 py-1.5 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-full border border-cyan-500/20">
                        <span className="text-sm font-medium bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                            Ready to Collaborate?
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        <span className="bg-gradient-to-br from-white via-white to-slate-400 bg-clip-text text-transparent">
                            Get In Touch
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Whether you need a Zero-Trust audit or a Kubernetes scale-up strategy, I am just a message away.
                    </p>
                </div>

                {/* Social Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {socialPlatforms.map((platform, index) => (
                        <a
                            key={platform.name}
                            href={platform.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group relative transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Card Container */}
                            <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 overflow-hidden transition-all duration-500 hover:scale-105 hover:border-cyan-500/30">
                                {/* Hover Gradient Effect */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                                ></div>

                                {/* Glow Effect */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{
                                        background: `radial-gradient(circle at 50% 50%, ${platform.shadowColor}, transparent 70%)`,
                                        filter: 'blur(40px)'
                                    }}
                                ></div>

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Icon Container */}
                                    <div className={`mb-4 inline-flex p-3 rounded-xl bg-gradient-to-br ${platform.gradient} text-white transform transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}>
                                        {platform.icon}
                                    </div>

                                    {/* Text */}
                                    <h3 className="text-white font-semibold text-lg mb-1 transition-colors duration-300">
                                        {platform.name}
                                    </h3>
                                    <p className="text-slate-400 text-sm transition-colors duration-300 group-hover:text-slate-300">
                                        {platform.description}
                                    </p>

                                    {/* Arrow Icon */}
                                    <div className="mt-4 flex items-center text-slate-500 group-hover:text-white transition-all duration-300">
                                        <span className="text-sm font-medium group-hover:translate-x-0 transition-all duration-300">
                                            Connect
                                        </span>
                                        <svg
                                            className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* Mouse Follow Light */}
            <div
                className="pointer-events-none fixed w-96 h-96 rounded-full opacity-20 blur-[100px] transition-all duration-200 ease-out z-0"
                style={{
                    background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15), transparent)', // Cyan light
                    left: `${mousePosition.x - 192}px`,
                    top: `${mousePosition.y - 192}px`,
                }}
            />
        </div>
    );
};
