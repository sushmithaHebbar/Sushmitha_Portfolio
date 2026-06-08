"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { ExternalLink, Github, Folder } from "lucide-react";

export default function Projects() {
    return (
        <section id="projects" className="py-16 px-6 md:py-24 md:px-[10%] bg-primary">
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="max-w-6xl mx-auto"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                    Latest <span className="text-accent">Projects</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioData.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            className="group relative p-8 bg-primary/40 border-2 border-accent/10 rounded-3xl overflow-hidden hover:border-accent/40 transition-all duration-300 shadow-xl"
                        >
                            <div className="flex justify-between items-center mb-6">
                                <Folder className="text-accent" size={40} />
                                <div className="flex gap-4">
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                                            <Github size={22} />
                                        </a>
                                    )}
                                    {project.link && project.link !== "#" && project.link !== project.github && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                                            <ExternalLink size={22} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="text-xs font-bold text-accent/80 uppercase tracking-wider">
                                        #{t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
