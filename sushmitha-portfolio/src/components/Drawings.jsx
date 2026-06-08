"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Image as ImageIcon } from "lucide-react";

export default function Drawings() {
    return (
        <section id="drawings" className="py-24 px-[10%] bg-primary">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="max-w-6xl mx-auto text-center"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Creativity & <span className="text-accent">Drawings</span>
                </h2>
                <p className="text-gray-400 mb-12 text-lg">A glimpse into my artistic side.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioData.drawings.map((drawing, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="relative aspect-square overflow-hidden rounded-3xl border-4 border-accent/10 shadow-xl group cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-accent/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 backdrop-blur-sm">
                                <div className="text-center">
                                    <ImageIcon className="mx-auto mb-2 text-white" size={32} />
                                    <p className="text-white font-bold">{drawing.title}</p>
                                </div>
                            </div>
                            {/* Using a placeholder if URL is not real yet */}
                            <div className="w-full h-full bg-primary/80 flex items-center justify-center text-gray-600">
                                <p>Drawing Placeholder</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
