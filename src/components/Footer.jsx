"use client";

import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";

export default function Footer() {
    const handleScrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const footerLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Experience", href: "#experience" },
        { name: "Certificates", href: "#certificates" },
        { name: "Drawings", href: "#drawings" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <footer className="bg-white border-t border-slate-100 py-4 px-6 md:px-[10%]">
            <div className="max-w-10xl mx-auto flex flex-col gap-4">
                
                {/* Main Footer Row */}
                <div className="flex flex-col lg:flex-row justify-between items-center gap-4 ">
                    
                    {/* Logo */}
                    <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-cyan-400 flex items-center justify-center text-white font-black text-base shadow-sm">
                            S
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-extrabold text-slate-800 tracking-tight leading-none">
                                SUSHMITHA HEBBAR
                            </span>
                            <span className="text-[9px] font-bold text-slate-800 tracking-wider uppercase mt-0.5">
                                Full Stack Developer
                            </span>
                        </div>
                    </div>

                    {/* Navigation Menu */}
                    <nav className="flex flex-wrap justify-center items-center gap-x-6 ">
                        {footerLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-xs font-bold text-slate-400 hover:text-primary tracking-wide transition-colors duration-250"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Scroll to Top */}
                    <a
                        href="#home"
                        onClick={handleScrollToTop}
                        className="w-10 h-10 rounded-full border border-slate-150 flex items-center justify-center text-slate-500 hover:bg-primary hover:text-white hover:border-primary shadow-sm hover:shadow transition-all duration-350 shrink-0"
                        title="Back to Top"
                    >
                        <ArrowUp size={16} />
                    </a>
                </div>

                {/* Sub Footer Rights row */}
                <div className="pt-2 border-t border-slate-100/80 flex flex-col sm:flex-row justify-center items-center text-center">
                    <p className="text-[11px] font-bold text-slate-900 uppercase tracking-widest">
                        &copy; 2026 Sushmitha Hebbar. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
}
