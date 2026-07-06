"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Mail, Github, Linkedin } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import Image from "next/image";

export default function Hero() {
    // Typing animation logic
    const words = ["Full Stack Developer", "AI Engineer"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timer;
        const currentWord = words[currentWordIndex];
        const typingSpeed = isDeleting ? 40 : 80;

        if (!isDeleting && currentText === currentWord) {
            timer = setTimeout(() => setIsDeleting(true), 1500);
        } else if (isDeleting && currentText === "") {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
        } else {
            timer = setTimeout(() => {
                setCurrentText(
                    isDeleting
                        ? currentWord.substring(0, currentText.length - 1)
                        : currentWord.substring(0, currentText.length + 1)
                );
            }, typingSpeed);
        }

        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentWordIndex]);

    // Custom list of organizations representing her associations
    const associations = [
        { name: "Sahyadri College", label: "SCEM" },
        { name: "BrandAndBrandz", label: "BrandAndBrandz" },
        { name: "Coding Key", label: "Coding Key" },
        { name: "SIH 2024", label: "Smart India Hackathon" },
        { name: "IIC", label: "IIC Regional Meet" }
    ];

    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col justify-center pt-24 pb-12 px-6 md:px-[10%] bg-grid-dots overflow-hidden"
        >
            {/* Soft background glow highlights */}
            <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[450px] h-[450px] bg-cyan-400/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-10xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
                {/* Left Side Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="lg:col-span-7 text-center lg:text-left flex flex-col justify-center items-center lg:items-start"
                >
                    {/* Hello Badge */}
                    {/* <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/5 border border-primary/10 rounded-full text-xs font-bold text-primary tracking-wider uppercase mb-6">
                        Hello, I'm {portfolioData.name}
                    </div> */}

                    {/* Main Heading */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-slate-800 mb-4 leading-tight">
                        Hello, I'm <br className="hidden md:inline" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">
                            {portfolioData.name}
                        </span>{" "}
                    </h1>

                    {/* Typing Subtitle */}
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-700 mb-6 h-10 sm:h-12 flex items-center justify-center lg:justify-start">
                        I'm a&nbsp;
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500 font-extrabold pr-1 cursor-blink border-primary">
                            {currentText}
                        </span>
                    </h3>

                    {/* Action Buttons & Socials */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 mb-12 w-full sm:w-auto">
                        <a
                            href="#projects"
                            className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 bg-primary hover:bg-primary-hover text-white font-bold rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/35 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 text-sm"
                        >
                            View My Work <ArrowRight size={16} />
                        </a>
                        <a
                            href="#contact"
                            className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 bg-white hover:bg-slate-55 border border-slate-200 text-slate-700 font-bold rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 text-sm"
                        >
                            Let's Work Together <ArrowRight size={16} className="text-slate-400 group-hover:text-slate-700" />
                        </a>
                    </div>

                    {/* Social Quick Links */}
                    <div className="flex gap-4 items-center">
                        <span className="text-xs font-bold text-slate-400 tracking-widest uppercase mr-2">Find Me:</span>
                        <a href={portfolioData.socials.github} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white border border-slate-100 rounded-full text-slate-500 hover:text-primary hover:border-primary/20 shadow-sm hover:shadow transition-all">
                            <Github size={18} />
                        </a>
                        <a href={portfolioData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white border border-slate-100 rounded-full text-slate-500 hover:text-primary hover:border-primary/20 shadow-sm hover:shadow transition-all">
                            <Linkedin size={18} />
                        </a>
                        <a href={portfolioData.socials.gmail} className="p-2.5 bg-white border border-slate-100 rounded-full text-slate-500 hover:text-primary hover:border-primary/20 shadow-sm hover:shadow transition-all">
                            <Mail size={18} />
                        </a>
                    </div>
                </motion.div>

                {/* Right Side Photo & Interactive Graphics */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="lg:col-span-5 flex justify-center items-center relative"
                >
                    {/* Double Orbital Rings */}
                    <div className="absolute w-[440px] h-[440px] sm:w-[540px] sm:h-[540px] border border-primary/10 rounded-full animate-[spin_50s_linear_infinite]" />
                    <div className="absolute w-[300px] h-[300px] sm:w-[480px] sm:h-[480px] border border-dashed border-cyan-400/20 rounded-full animate-[spin_35s_linear_infinite_reverse]" />

                    {/* Profile Picture Frame */}
                    <div className="relative w-84 h-84 sm:w-90 sm:h-90 rounded-full p-2 bg-gradient-to-tr from-primary/20 via-cyan-400/20 to-primary/5 shadow-xl">
                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-inner bg-slate-100">
                            <Image
                                src="/sushmitha.jpeg"
                                alt="Sushmitha Profile"
                                fill
                                className="object-cover object-center scale-105 hover:scale-110 transition-transform duration-700"
                                priority
                            />
                        </div>

                        {/* Floating Status Badge */}
                        <div className="absolute -top-2 -right-4 sm:-right-8 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-slate-150 flex items-center gap-2.5 animate-float z-20">
                            <span className="relative flex h-3.5 w-3.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-500"></span>
                            </span>
                            <span className="text-[11px] font-extrabold text-slate-700 tracking-wide">
                                Open to Opportunities
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Trusted/Associated Organizations Bar
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="max-w-7xl mx-auto w-full mt-24 p-8 bg-white/70 backdrop-blur-md border border-slate-100/80 rounded-3xl shadow-sm z-10"
            >
                <p className="text-center lg:text-left text-xs font-bold text-slate-450 tracking-widest uppercase mb-6">
                    Journey Milestones & Associations
                </p>
                <div className="flex flex-wrap justify-center lg:justify-between items-center gap-6 md:gap-8 opacity-80 transition-all duration-300">
                    {associations.map((assoc, idx) => (
                        <div key={idx} className="flex items-center gap-2 font-bold text-slate-1000 text-sm md:text-base  hover:text-primary transition-colors cursor-default bg-slate-50/50 border border-slate-100/50 px-4 py-2.5 rounded-2xl">
                            <span className="w-2 h-2 bg-primary rounded-full shrink-0" />
                            {assoc.name}
                        </div>
                    ))}
                </div>
            </motion.div> */}
        </section>
    );
}
