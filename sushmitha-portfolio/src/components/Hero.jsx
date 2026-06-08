"use client";

import { motion } from "framer-motion";
import { Instagram, Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import Image from "next/image";

export default function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-[10%] pt-20 md:pt-0 gap-10"
        >
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="max-w-2xl text-center md:text-left"
            >
                <h3 className="text-2xl md:text-3xl font-bold">Hi!!...</h3>
                <h1 className="text-5xl md:text-7xl font-bold my-2">I'm {portfolioData.name}</h1>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    And I'm a <span className="multiple-text">{portfolioData.title}</span>
                </h3>

                <div className="flex justify-center md:justify-start gap-4 mb-8">
                    <a href={portfolioData.socials.instagram} target="_blank" className="social-icon">
                        <Instagram size={20} />
                    </a>
                    <a href={portfolioData.socials.github} target="_blank" className="social-icon">
                        <Github size={20} />
                    </a>
                    <a href={portfolioData.socials.linkedin} target="_blank" className="social-icon">
                        <Linkedin size={20} />
                    </a>
                    <a href={portfolioData.socials.gmail} className="social-icon">
                        <Mail size={20} />
                    </a>
                </div>

                <a
                    href="/Resume_Sushmitha.pdf"
                    download
                    className="btn-primary"
                >
                    Download CV
                </a>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative"
            >
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-accent overflow-hidden shadow-[0_0_20px_#0ef] animate-floatImage">
                    <Image
                        src="/sushmitha.jpeg"
                        alt="Sushmitha"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </motion.div>
        </section>
    );
}
