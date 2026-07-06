"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
    return (
        <section id="experience" className="py-20 px-6 md:py-28 md:px-[10%] bg-slate-50/50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                
                {/* Header Section */}
                <div className="flex items-center gap-2 mb-16">
                    <span className="w-2 h-2 rounded-full bg-primary inline-block" />
                    <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                        My Journey & Experience
                    </h2>
                </div>

                {/* Horizontal Progress Timeline (Hidden on small screens, flex on lg) */}
                <div className="hidden lg:block relative mb-12">
                    
                    {/* Connecting Dotted Line */}
                    <div className="absolute top-7 left-12 right-12 h-[2px] border-t-2 border-dashed border-primary/20 -z-0" />

                    <div className="grid grid-cols-3 gap-8 relative z-10">
                        {portfolioData.experience.map((exp, index) => {
                            const stepNumber = `0${index + 1}`;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.15 }}
                                    className="text-center flex flex-col items-center px-4 group"
                                >
                                    {/* Bubble Step Indicator */}
                                    <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white font-extrabold text-lg shadow-lg shadow-primary/25 group-hover:scale-110 group-hover:shadow-primary/45 transition-all duration-300 mb-6">
                                        {stepNumber}
                                    </div>

                                    {/* Role & Company */}
                                    <h3 className="text-lg font-extrabold text-slate-800 leading-snug mb-1 group-hover:text-primary transition-colors">
                                        {exp.role}
                                    </h3>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                                        {exp.company}
                                    </p>

                                    {/* Duration Badge */}
                                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-white border border-slate-150 text-slate-500 text-[10px] font-extrabold rounded-full mb-4 shadow-sm">
                                        <Calendar size={10} /> {exp.duration}
                                    </span>

                                    {/* Description */}
                                    <p className="text-sm font-semibold text-slate-400 leading-relaxed max-w-sm">
                                        {exp.description}
                                    </p>
                                    
                                    {/* Tech Tags Row */}
                                    {exp.tech && exp.tech.length > 0 && (
                                        <div className="flex flex-wrap justify-center gap-1.5 mt-4">
                                            {exp.tech.slice(0, 4).map((t, idx) => (
                                                <span key={idx} className="text-[9px] font-bold bg-primary/5 text-primary border border-primary/10 px-2 py-0.5 rounded-md uppercase">
                                                    {t}
                                                </span>
                                            ))}
                                            {exp.tech.length > 4 && (
                                                <span className="text-[9px] font-bold bg-slate-100 text-slate-500 px-2 py-0.5 rounded-md">
                                                    +{exp.tech.length - 4} More
                                                </span>
                                            )}
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Mobile & Tablet Vertical Layout */}
                <div className="lg:hidden space-y-8 relative">
                    {/* Vertical connecting line */}
                    <div className="absolute left-6 top-6 bottom-6 w-[2px] bg-primary/10 -z-0" />

                    {portfolioData.experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="flex items-start gap-4 relative z-10"
                        >
                            {/* Step Indicator Bubble */}
                            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-extrabold text-base shadow-md shrink-0">
                                0{index + 1}
                            </div>

                            {/* Experience Details Card */}
                            <div className="flex-1 bg-white p-6 border border-slate-100 rounded-3xl shadow-sm space-y-3">
                                <div>
                                    <h3 className="text-base sm:text-lg font-extrabold text-slate-800">
                                        {exp.role}
                                    </h3>
                                    <div className="flex flex-wrap items-center justify-between gap-2 mt-1">
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                                            {exp.company}
                                        </p>
                                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-slate-50 border border-slate-100 text-slate-500 text-[10px] font-bold rounded-full">
                                            <Calendar size={10} /> {exp.duration}
                                        </span>
                                    </div>
                                </div>

                                <p className="text-xs sm:text-sm font-semibold text-slate-400 leading-relaxed">
                                    {exp.description}
                                </p>

                                {exp.tech && exp.tech.length > 0 && (
                                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-50">
                                        {exp.tech.map((t, idx) => (
                                            <span key={idx} className="text-[9px] font-bold bg-primary/5 text-primary border border-primary/10 px-2 py-0.5 rounded-md uppercase">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
