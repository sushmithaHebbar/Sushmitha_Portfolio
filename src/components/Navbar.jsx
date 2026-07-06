"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Certificates", href: "#certificates" },
    { name: "Drawings", href: "#drawings" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);

            // Determine active section based on scroll position
            const sections = navLinks.map(link => link.href.substring(1));
            const scrollPos = window.scrollY + 150;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const top = element.offsetTop;
                    const height = element.offsetHeight;
                    if (scrollPos >= top && scrollPos < top + height) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full flex justify-between items-center py-4 px-6 md:px-[10%] z-[100] transition-all duration-350 ${scrolled
                    ? "bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm py-3"
                    : "bg-white/95 backdrop-blur-md py-5"
                }`}
        >
            {/* Logo */}
            <Link href="#home" className="flex items-center gap-2.5 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-cyan-400 flex items-center justify-center text-white font-black text-xl shadow-md shadow-primary/20 group-hover:scale-105 transition-transform duration-350">
                    S
                </div>
                <div className="flex flex-col">
                    <span className="text-base font-extrabold text-slate-800 tracking-tight leading-none group-hover:text-primary transition-colors duration-300">
                        SUSHMITHA HEBBAR
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase mt-1">
                        Full stack Developer
                    </span>
                </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-7">
                {navLinks.map((link) => {
                    const sectionId = link.href.substring(1);
                    const isActive = activeSection === sectionId;
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`relative text-sm font-semibold tracking-wide transition-colors duration-300 py-1.5 px-0.5 ${isActive
                                    ? "text-primary font-bold"
                                    : "text-slate-500 hover:text-slate-800"
                                }`}
                        >
                            {link.name}
                            {isActive && (
                                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-full" />
                            )}
                        </Link>
                    );
                })}
            </nav>



            {/* Mobile Navigation Drawer */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-white border-t border-slate-100 flex flex-col items-center py-6 gap-4 shadow-xl xl:hidden animate-slideTop">
                    {navLinks.map((link) => {
                        const sectionId = link.href.substring(1);
                        const isActive = activeSection === sectionId;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-base font-semibold py-1 transition-colors duration-250 ${isActive ? "text-primary font-bold" : "text-slate-600 hover:text-primary"
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                    <a
                        href="#contact"
                        className="mt-2 flex items-center gap-1.5 px-6 py-2.5 bg-primary hover:bg-primary-hover text-white text-sm font-bold rounded-full shadow-md"
                        onClick={() => setIsOpen(false)}
                    >
                        Let's Talk <ArrowUpRight size={14} />
                    </a>
                </div>
            )}
        </header>
    );
}
