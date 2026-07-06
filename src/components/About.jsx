"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function About() {
    return (
        <section id="about" className="py-16 px-6 md:py-28 md:px-[10%] bg-white relative">
            {/* Background elements */}
             <div className="absolute top-0 right-0 w-80 h-80 bg-primary/55 rounded-full blur-[70px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/55 rounded-full blur-[70px] pointer-events-none" />

            <div className="max-w-3xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center"
                >
                    {/* Section Tag */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1  text-3xl sm:text-3xl md:text-4xl font-bold text-primary tracking-wider uppercase mb-6">
                        About Me
                    </div>

                    {/* Title */}
                    {/* <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight mb-8">
                        My Tech Journey &
                        <span className="text-primary">Core Vision</span>
                    </h2> */}

                    {/* Description paragraphs */}
                    <div className="space-y-6 text-slate-500 font-medium text-base sm:text-lg leading-relaxed text-center">
                        {portfolioData.description.map((para, index) => (
                            <p key={index}>
                                {para}
                            </p>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
