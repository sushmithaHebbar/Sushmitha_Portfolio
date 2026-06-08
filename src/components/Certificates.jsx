"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Award } from "lucide-react";

export default function Certificates() {
    return (
        <section id="certificates" className="py-16 px-6 md:py-24 md:px-[10%] bg-primary/50 text-white">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="max-w-6xl mx-auto"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                    My <span className="text-accent">Certificates</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioData.certificates.map((cert, index) => {
                        const CardContent = (
                            <>
                                <div className="p-4 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors">
                                    <Award className="text-accent" size={32} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                                        {cert.title}
                                    </h3>
                                    <p className="text-gray-400 font-medium">{cert.issuer}</p>
                                    <span className="text-sm text-gray-500 mt-2 block">{cert.date}</span>
                                </div>
                            </>
                        );

                        return cert.link ? (
                            <motion.a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={index}
                                whileHover={{ scale: 1.02 }}
                                className="flex items-start gap-6 p-8 bg-primary border-2 border-accent/10 rounded-2xl shadow-lg hover:border-accent/30 transition-all group cursor-pointer"
                            >
                                {CardContent}
                            </motion.a>
                        ) : (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.02 }}
                                className="flex items-start gap-6 p-8 bg-primary border-2 border-accent/10 rounded-2xl shadow-lg hover:border-accent/30 transition-all group"
                            >
                                {CardContent}
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
}
