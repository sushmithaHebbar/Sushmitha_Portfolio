"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { CheckCircle2 } from "lucide-react";

export default function Skills() {
    return (
        <section id="skills" className="py-16 px-6 md:py-24 md:px-[10%] bg-primary">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="max-w-4xl mx-auto"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                    Technical <span className="text-accent">Skills</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {portfolioData.skills.map((cat, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            className="p-8 bg-primary/40 border border-accent/20 rounded-2xl shadow-lg hover:shadow-[0_0_20px_rgba(0,238,255,0.15)] transition-all"
                        >
                            <h3 className="text-xl font-bold mb-4 text-accent border-b border-accent/10 pb-2">
                                {cat.category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {cat.items.map((skill, sIdx) => (
                                    <div
                                        key={sIdx}
                                        className="flex items-center gap-2 px-3 py-1.5 bg-primary/80 border border-accent/10 rounded-lg"
                                    >
                                        <CheckCircle2 className="text-accent" size={16} />
                                        <span className="font-medium text-sm text-gray-200">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 bg-primary/30 p-8 rounded-2xl border border-accent/10">
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        <span className="w-10 h-1 bg-accent rounded-full inline-block"></span>
                        Other Passions
                    </h3>
                    <div className="flex flex-wrap gap-4">
                        {portfolioData.hobbies.map((hobby, index) => {
                            const isDrawing = hobby.toLowerCase() === "drawing";
                            return isDrawing ? (
                                <a
                                    key={index}
                                    href="#drawings"
                                    className="px-6 py-2 bg-accent/10 text-accent border border-accent/30 rounded-full font-medium hover:bg-accent/20 transition-all hover:scale-105 cursor-pointer"
                                >
                                    {hobby}
                                </a>
                            ) : (
                                <span
                                    key={index}
                                    className="px-6 py-2 bg-accent/10 text-accent border border-accent/30 rounded-full font-medium"
                                >
                                    {hobby}
                                </span>
                            );
                        })}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
