"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Palette, Eye, X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Drawings() {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handlePrev = useCallback(() => {
        if (selectedIndex !== null) {
            setSelectedIndex((prevIndex) => 
                prevIndex === 0 ? portfolioData.drawings.length - 1 : prevIndex - 1
            );
        }
    }, [selectedIndex]);

    const handleNext = useCallback(() => {
        if (selectedIndex !== null) {
            setSelectedIndex((prevIndex) => 
                prevIndex === portfolioData.drawings.length - 1 ? 0 : prevIndex + 1
            );
        }
    }, [selectedIndex]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (selectedIndex === null) return;
            if (e.key === "Escape") setSelectedIndex(null);
            if (e.key === "ArrowLeft") handlePrev();
            if (e.key === "ArrowRight") handleNext();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedIndex, handlePrev, handleNext]);

    const currentDrawing = selectedIndex !== null ? portfolioData.drawings[selectedIndex] : null;

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

                {/* Infinite Horizontal Marquee Scroll */}
                <div className="marquee-container marquee-mask py-4">
                    <div className="marquee-track">
                        {[...portfolioData.drawings, ...portfolioData.drawings].map((drawing, index) => {
                            const originalIndex = index % portfolioData.drawings.length;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: (index % 6) * 0.05 }}
                                    onClick={() => setSelectedIndex(originalIndex)}
                                    className="group bg-white p-4 border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg hover:border-primary/15 transition-all duration-350 flex flex-col cursor-pointer w-[280px] sm:w-[320px] flex-shrink-0"
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
                                        <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-primary text-center transition-colors">
                                            {drawing.title}
                                        </h3>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Lightbox / Modal */}
            <AnimatePresence>
                {selectedIndex !== null && currentDrawing && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4"
                        onClick={() => setSelectedIndex(null)}
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setSelectedIndex(null)}
                            className="absolute top-6 right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-50 cursor-pointer"
                            aria-label="Close details"
                        >
                            <X size={24} />
                        </button>

                        {/* Navigation controls */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handlePrev();
                            }}
                            className="absolute left-6 text-white/85 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-50 cursor-pointer hidden md:flex"
                            aria-label="Previous sketch"
                        >
                            <ChevronLeft size={28} />
                        </button>

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handleNext();
                            }}
                            className="absolute right-6 text-white/85 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-50 cursor-pointer hidden md:flex"
                            aria-label="Next sketch"
                        >
                            <ChevronRight size={28} />
                        </button>

                        {/* Modal Container */}
                        <motion.div
                            initial={{ scale: 0.95, y: 15 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: 15 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Image wrapper */}
                            <div className="relative w-full aspect-square md:aspect-[4/3] max-h-[70vh] rounded-2xl overflow-hidden bg-slate-900 border border-white/10 shadow-2xl">
                                <Image
                                    src={currentDrawing.url}
                                    alt={currentDrawing.title}
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>

                            {/* Caption info under image */}
                            <div className="text-center mt-4 px-4 select-none">
                                <h3 className="text-xl font-bold text-white mb-1">
                                    {currentDrawing.title}
                                </h3>
                                
                                {/* Mobile-only swipe / pagination helper */}
                                <div className="flex md:hidden items-center justify-center gap-6 mt-4">
                                    <button 
                                        onClick={handlePrev}
                                        className="text-white/80 hover:text-white bg-white/10 p-2 rounded-full transition-colors"
                                    >
                                        <ChevronLeft size={20} />
                                    </button>
                                    <span className="text-xs font-bold text-slate-400">
                                        {selectedIndex + 1} / {portfolioData.drawings.length}
                                    </span>
                                    <button 
                                        onClick={handleNext}
                                        className="text-white/80 hover:text-white bg-white/10 p-2 rounded-full transition-colors"
                                    >
                                        <ChevronRight size={20} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
