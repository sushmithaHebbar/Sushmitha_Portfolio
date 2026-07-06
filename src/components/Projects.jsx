"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Code } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import Image from "next/image";

export default function Projects() {
    const [expanded, setExpanded] = useState({});

    const toggleExpand = (index) => {
        setExpanded((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <section id="projects" className="py-20 px-6 md:py-28 md:px-[10%] bg-slate-50/50 relative">
            <div className="max-w-7xl mx-auto">
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary inline-block" />
                        <h2 className="text-xs font-bold text-slate-900 uppercase tracking-widest">
                            Featured Projects
                        </h2>
                    </div>
                    
                    <a
                        href={portfolioData.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary-hover group transition-colors"
                    >
                        View All Projects 
                        <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioData.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/10 transition-all duration-350 flex flex-col h-full"
                        >
                            {/* Card Image Block */}
                            <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 border-b border-slate-100 shrink-0">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                                />
                                
                                {/* Hover Tech Badges Layer */}
                                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-6 text-white z-15">
                                    <div className="flex items-center gap-1.5 mb-3">
                                        <Code size={14} className="text-cyan-300" />
                                        <span className="text-xs font-bold uppercase tracking-widest text-cyan-300">
                                            Technologies Used
                                        </span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t, i) => (
                                            <span
                                                key={i}
                                                className="text-[10px] sm:text-xs font-bold bg-white/10 border border-white/20 px-2.5 py-1 rounded-md"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Card Content Footer block */}
                            <div className="p-6 flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-start gap-4">
                                        <div className="space-y-1">
                                            {/* Category */}
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                                                {project.category}
                                            </span>
                                            {/* Title */}
                                            <h3 className="text-lg md:text-xl font-extrabold text-slate-800 leading-snug group-hover:text-primary transition-colors duration-300">
                                                {project.title}
                                            </h3>
                                        </div>
                                        
                                        {/* Circular Action Button */}
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-11 h-11 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 hover:text-white hover:bg-primary hover:border-primary group-hover:shadow-md transition-all duration-300 shrink-0"
                                        >
                                            <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform duration-300" />
                                        </a>
                                    </div>

                                    {/* Project Description Summary */}
                                    <div className="mt-4 border-t border-slate-50 pt-4">
                                        <p className={`text-slate-500 text-xs font-medium leading-relaxed transition-all duration-350 ${
                                            expanded[index] ? "" : "line-clamp-2"
                                        }`}>
                                            {project.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Toggle Action & GitHub Link */}
                                <div className="mt-4 pt-3 border-t border-slate-50 flex items-center justify-between">
                                    <button
                                        onClick={() => toggleExpand(index)}
                                        className="text-primary hover:text-primary-hover text-[11px] font-bold uppercase tracking-wider transition-colors cursor-pointer"
                                    >
                                        {expanded[index] ? "Read Less" : "Read More"}
                                    </button>

                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 font-bold text-slate-400 hover:text-primary transition-colors text-xs"
                                            title="View Code on GitHub"
                                        >
                                            {expanded[index] && <span className="text-[10px] uppercase tracking-wider">GitHub</span>}
                                            <Github size={16} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
