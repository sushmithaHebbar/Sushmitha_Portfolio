"use client";

import { motion } from "framer-motion";
import { Brain, Layers, Eye, Terminal, CheckCircle2, Star } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Skills() {
    // 4 Capabilities tailored to Sushmitha's AIML + Full Stack expertise
    const capabilities = [
        {
            title: "AI & ML Systems",
            desc: "Developing custom predictive models, neural networks, and classification pipelines using TensorFlow and Scikit-Learn.",
            icon: Brain,
        },
        {
            title: "Full-Stack Development",
            desc: "Crafting robust, responsive web applications with interactive React frontends and secure Node.js/Express backends.",
            icon: Layers,
        },
        {
            title: "Computer Vision",
            desc: "Building real-time object detection, facial recognition, and image classification systems using OpenCV.",
            icon: Eye,
        },
        {
            title: "APIs & Python Automation",
            desc: "Creating high-performance Python backends, FastAPI/Flask REST APIs, data scrapers, and pipeline scripts.",
            icon: Terminal,
        },
    ];

    return (
        <section id="skills" className="py-20 px-6 md:py-28 md:px-[10%] bg-white relative">
            <div className="max-w-7xl mx-auto">
                
                {/* Services & Capabilities Header */}
                <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 rounded-full bg-primary inline-block" />
                    <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                        Services & Capabilities
                    </h2>
                </div>

                {/* Capabilities Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {capabilities.map((cap, idx) => {
                        const IconComponent = cap.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="p-6 bg-slate-50 border border-slate-100 rounded-3xl transition-all duration-350 hover:bg-white hover:border-primary/10 hover:shadow-lg hover:shadow-primary/5 group"
                            >
                                {/* Icon Container */}
                                <div className="w-12 h-12 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-350">
                                    <IconComponent size={22} />
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-extrabold text-slate-800 mb-3 group-hover:text-primary transition-colors">
                                    {cap.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm font-semibold text-slate-400 leading-relaxed">
                                    {cap.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Separator / Subheader for Tools */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pt-8 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-cyan-500 inline-block" />
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                            Tools & Skills
                        </h3>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-extrabold text-primary uppercase bg-primary/5 px-3 py-1 rounded-full">
                        <Star size={10} className="fill-primary" /> Core Tech Stack
                    </div>
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
