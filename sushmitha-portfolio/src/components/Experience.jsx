"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Experience() {
    return (
        <section id="experience" className="py-24 px-[10%] bg-primary/50 text-white">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="max-w-4xl mx-auto"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                    Professional <span className="text-accent">Experience</span>
                </h2>

                <div className="space-y-8">
                    {portfolioData.experience.map((exp, index) => (
                        <div key={index} className="relative pl-8 border-l-2 border-accent">
                            <div className="absolute -left-[11px] top-0 w-5 h-5 bg-accent rounded-full shadow-[0_0_10px_#0ef]"></div>
                            <div className="p-8 bg-primary border border-accent/20 rounded-2xl shadow-xl hover:shadow-[0_0_20px_#0ef/20] transition-shadow duration-300">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-accent">{exp.role}</h3>
                                        <p className="text-lg font-semibold text-gray-300">{exp.company}</p>
                                    </div>
                                    <span className="px-4 py-1 bg-accent/10 text-accent text-sm font-bold rounded-full border border-accent/30 self-start">
                                        {exp.duration}
                                    </span>
                                </div>
                                <p className="text-gray-400 leading-relaxed text-lg italic mb-4">
                                    {exp.description}
                                </p>
                                {exp.tech && exp.tech.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {exp.tech.map((t, i) => (
                                            <span key={i} className="text-xs font-bold text-accent/80 uppercase tracking-wider bg-accent/10 px-2.5 py-1 rounded-md border border-accent/20">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
