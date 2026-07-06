"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Certificates() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);
    const certificates = portfolioData.certificates;

    // Handle screen resize to change number of visible items
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setItemsPerPage(3);
            } else if (window.innerWidth >= 768) {
                setItemsPerPage(2);
            } else {
                setItemsPerPage(1);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const totalPages = Math.ceil(certificates.length / itemsPerPage);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % totalPages);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
    };

    // Slice certificates for current page
    const visibleCertificates = certificates.slice(
        currentIndex * itemsPerPage,
        currentIndex * itemsPerPage + itemsPerPage
    );

    return (
        <section id="certificates" className="py-20 px-6 md:py-28 md:px-[10%] bg-white relative overflow-hidden">
            {/* Soft radial glow backgrounds */}
            <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                
                {/* Header row with arrows */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-16">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary inline-block" />
                        <h2 className="text-xs font-bold text-slate-900 uppercase tracking-widest">
                            Certifications
                        </h2>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                        <button
                            onClick={handlePrev}
                            className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 flex items-center justify-center text-slate-600 transition-colors shadow-sm"
                            aria-label="Previous page"
                        >
                            <ChevronLeft size={18} />
                        </button>
                        <button
                            onClick={handleNext}
                            className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 flex items-center justify-center text-slate-600 transition-colors shadow-sm"
                            aria-label="Next page"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>

                {/* Slides Section */}
                <div className="min-h-[260px] relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {visibleCertificates.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    className="p-6 bg-slate-50 border border-slate-100 rounded-3xl hover:bg-white hover:border-primary/10 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 flex flex-col justify-between h-full group"
                                >
                                    <div className="space-y-5">
                                        {/* Top Icon Block */}
                                        <div className="w-12 h-12 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                            <Award size={22} />
                                        </div>

                                        {/* Certificate Meta */}
                                        <div className="space-y-2">
                                            <h3 className="text-base sm:text-lg font-extrabold text-slate-800 leading-snug group-hover:text-primary transition-colors">
                                                {cert.title}
                                            </h3>
                                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                                                {cert.issuer}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Bottom Block */}
                                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                                        <span className="text-xs font-bold text-slate-450">
                                            {cert.date}
                                        </span>

                                        {cert.link && (
                                            <a
                                                href={cert.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 text-xs font-extrabold text-primary hover:text-primary-hover group/link transition-colors"
                                            >
                                                Verify 
                                                <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                            </a>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Dot Indicators */}
                <div className="flex justify-center items-center gap-2.5 mt-10">
                    {Array.from({ length: totalPages }).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`h-2.5 rounded-full transition-all duration-300 ${
                                currentIndex === idx 
                                ? "w-6 bg-primary" 
                                : "w-2.5 bg-slate-200 hover:bg-slate-350"
                            }`}
                            aria-label={`Go to page ${idx + 1}`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
