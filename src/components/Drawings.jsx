"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Palette, Eye } from "lucide-react";
import Image from "next/image";

export default function Drawings() {
    return (
        <section id="drawings" className="py-20 px-6 md:py-28 md:px-[10%] bg-slate-50/50 relative">
            <div className="max-w-7xl mx-auto text-center md:text-left">
                
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12">
                    <div className="flex flex-col items-center md:items-start">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="w-2 h-2 rounded-full bg-primary inline-block" />
                            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-widest">
                                Creativity & Art
                            </h2>
                        </div>
                        <h2 className="text-2xl sm:text-4xl font-semibold text-slate-800 tracking-tight">
                            A Glimpse of my Sketches
                        </h2>
                    </div>
                    
                </div>

                {/* Drawings Display Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center md:justify-start">
                    {portfolioData.drawings.map((drawing, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="group bg-white p-4 border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg hover:border-primary/15 transition-all duration-350 flex flex-col"
                        >
                            {/* Artwork Image Wrapper */}
                            <div className="relative aspect-square overflow-hidden rounded-2xl bg-slate-100 mb-4 z-0">
                                <Image
                                    src={drawing.url}
                                    alt={drawing.title}
                                    fill
                                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                                />
                                
                                {/* Overlay search icon */}
                                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                    <div className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                                        <Eye size={20} />
                                    </div>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="px-2 pb-2">
                                <h3 className="text-base font-extrabold text-slate-800 mb-1 group-hover:text-primary transition-colors">
                                    {drawing.title}
                                </h3>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                                    Pencil sketch landscape
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
