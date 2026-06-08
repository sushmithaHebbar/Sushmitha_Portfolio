"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function About() {
    return (
        <section id="about" className="py-16 px-6 md:py-24 md:px-[10%] bg-primary/50">
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="max-w-4xl mx-auto text-center"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                    About <span className="text-accent">Me</span>
                </h2>

                <div className="space-y-6 text-lg leading-relaxed text-gray-300 text-justify">
                    {portfolioData.description.map((para, index) => (
                        <p key={index}>{para}</p>
                    ))}
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    {portfolioData.education.map((edu, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="p-6 bg-primary border border-accent/20 rounded-xl shadow-lg"
                        >
                            <h4 className="text-accent font-bold mb-2">{edu.degree}</h4>
                            <p className="text-sm font-medium">{edu.institution}</p>
                            {edu.percentage && <p className="text-xs text-gray-400 mt-1">Score: {edu.percentage}</p>}
                            {edu.status && <p className="text-xs text-gray-400 mt-1">Status: {edu.status}</p>}
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
