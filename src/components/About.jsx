"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function About() {
    return (
        <section id="about" className="py-20 px-6 md:py-28 md:px-[10%] bg-white relative">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-400/5 rounded-full blur-[90px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[90px] pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    
                    {/* Left Column: Biography */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-6"
                    >
                        {/* Section Tag */}
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/5 border border-primary/10 rounded-full text-xs font-bold text-primary tracking-wider uppercase mb-6">
                            About Me
                        </div>

                        {/* Title */}
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight mb-8">
                            My Tech Journey & <br />
                            <span className="text-primary">Core Vision</span>
                        </h2>

                        {/* Description paragraphs */}
                        <div className="space-y-6 text-slate-500 font-medium text-base sm:text-lg leading-relaxed">
                            {portfolioData.description.map((para, index) => (
                                <p key={index} className="text-justify">
                                    {para}
                                </p>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column: Education Timeline */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-6 space-y-6"
                    >
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-500/5 border border-cyan-500/10 rounded-full text-xs font-bold text-cyan-600 tracking-wider uppercase mb-2">
                            Education
                        </div>

                        <div className="space-y-6">
                            {portfolioData.education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -3 }}
                                    className="p-6 bg-slate-50/60 border border-slate-100 rounded-2xl flex gap-5 hover:bg-white hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-350"
                                >
                                    {/* Icon Container */}
                                    <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <GraduationCap size={22} />
                                    </div>

                                    {/* Details */}
                                    <div className="flex-1 space-y-2">
                                        <div className="flex flex-wrap items-center justify-between gap-2">
                                            <h4 className="text-lg font-bold text-slate-800 leading-tight">
                                                {edu.degree}
                                            </h4>
                                            
                                            {/* Score or Status Tag */}
                                            {edu.percentage && (
                                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-green-500/10 border border-green-500/20 text-green-700 text-xs font-extrabold rounded-full">
                                                    <Award size={10} /> {edu.percentage}
                                                </span>
                                            )}
                                        </div>

                                        <p className="text-sm font-semibold text-slate-600">
                                            {edu.institution}
                                        </p>

                                        {/* Status / Year */}
                                        {edu.status && (
                                            <div className="flex items-center gap-1 text-xs text-slate-400 font-bold">
                                                <Calendar size={12} />
                                                <span>{edu.status}</span>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
