"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Star } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Skills() {
    return (
        <section id="skills" className="py-20 px-6 md:py-28 md:px-[10%] bg-white relative">
            <div className="max-w-7xl mx-auto">
                
                {/* Header for Tools & Skills */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary inline-block" />
                        <h2 className="text-xs font-bold text-slate-900 uppercase tracking-widest">
                            Tools & Skills
                        </h2>
                    </div>
                    {/* <div className="flex items-center gap-1 text-[11px] font-extrabold text-primary uppercase bg-primary/5 px-3 py-1 rounded-full">
                        <Star size={10} className="fill-primary" /> Core Tech Stack
                    </div> */}
                </div>

                {/* Technical Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {portfolioData.skills.map((cat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="p-6 bg-white border border-slate-100 rounded-3xl shadow-sm hover:border-primary/15 transition-all"
                        >
                            <h4 className="text-sm font-extrabold text-slate-800 mb-4 pb-2 border-b border-slate-50 uppercase tracking-wider">
                                {cat.category}
                            </h4>
                            <div className="flex flex-wrap gap-2.5">
                                {cat.items.map((skill, sIdx) => (
                                    <div
                                        key={sIdx}
                                        className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-xl hover:bg-primary/5 hover:border-primary/15 transition-colors duration-300"
                                    >
                                        <CheckCircle2 className="text-primary" size={12} />
                                        <span className="font-bold text-xs text-slate-600">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}

                    {/* Hobbies / Other Passions Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="p-6 bg-slate-50/50 border border-dashed border-slate-200 rounded-3xl flex flex-col justify-between"
                    >
                        <div>
                            <h4 className="text-sm font-extrabold text-slate-500 mb-2 uppercase tracking-wider">
                                Other Passions
                            </h4>
                            <p className="text-xs text-slate-400 font-semibold leading-relaxed mb-4">
                                Deepening creative problem solving and artistic expression.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {portfolioData.hobbies.map((hobby, index) => {
                                const isDrawing = hobby.toLowerCase() === "drawing";
                                return isDrawing ? (
                                    <a
                                        key={index}
                                        href="#drawings"
                                        className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-xl text-xs font-bold hover:bg-primary/20 transition-all hover:scale-105 inline-block text-center w-full"
                                    >
                                        🎨 {hobby} Portfolio
                                    </a>
                                ) : (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-slate-200/50 text-slate-600 border border-slate-200/80 rounded-xl text-xs font-bold inline-block text-center w-full"
                                    >
                                        {hobby}
                                    </span>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
