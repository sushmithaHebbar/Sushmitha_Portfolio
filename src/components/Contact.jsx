"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle contact form submission
    };

    return (
        <section id="contact" className="py-20 px-6 md:py-28 md:px-[10%] bg-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[110px] pointer-events-none" />
            <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-400/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto z-10 relative">
                
                {/* Section Tag */}
                <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 rounded-full bg-primary inline-block" />
                    <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                        Get In Touch
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    
                    {/* Left Column: Info & Socials */}
                    <div className="lg:col-span-5 space-y-10">
                        <div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight leading-[1.1] mb-6">
                                Let's Create Something <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">
                                    Amazing Together
                                </span>{" "}
                                <Sparkles size={24} className="inline-block text-cyan-400 ml-1.5 align-middle" />
                            </h2>
                            <p className="text-base text-slate-450 font-semibold leading-relaxed">
                                Have a project in mind, looking for a dedicated intern, or just want to say hello? I'd love to connect with you.
                            </p>
                        </div>

                        {/* Contact info list */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-5 group">
                                <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                                    <Mail size={18} />
                                </div>
                                <div className="min-w-0">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                                        Email Me
                                    </span>
                                    <a href={portfolioData.socials.gmail} className="text-sm sm:text-base font-extrabold text-slate-700 hover:text-primary transition-colors block truncate">
                                        {portfolioData.contact.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-5 group">
                                <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                                    <Phone size={18} />
                                </div>
                                <div className="min-w-0">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                                        Call Me
                                    </span>
                                    <a href={`tel:${portfolioData.contact.phone}`} className="text-sm sm:text-base font-extrabold text-slate-700 hover:text-primary transition-colors block">
                                        {portfolioData.contact.phone}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-5 group">
                                <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                                    <MapPin size={18} />
                                </div>
                                <div className="min-w-0">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                                        Location
                                    </span>
                                    <span className="text-sm sm:text-base font-extrabold text-slate-700 block leading-snug">
                                        {portfolioData.contact.address}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Social Icons Row */}
                        <div className="flex items-center gap-3 pt-6 border-t border-slate-100">
                            <a href={portfolioData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-50 border border-slate-150 flex items-center justify-center text-slate-500 hover:text-white hover:bg-primary hover:border-primary shadow-sm transition-all duration-300">
                                <Linkedin size={16} />
                            </a>
                            <a href={portfolioData.socials.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-50 border border-slate-150 flex items-center justify-center text-slate-500 hover:text-white hover:bg-primary hover:border-primary shadow-sm transition-all duration-300">
                                <Github size={16} />
                            </a>
                            <a href={portfolioData.socials.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-50 border border-slate-150 flex items-center justify-center text-slate-500 hover:text-white hover:bg-primary hover:border-primary shadow-sm transition-all duration-300">
                                <Instagram size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="lg:col-span-7 bg-slate-50 p-6 sm:p-10 border border-slate-100 rounded-3xl"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Enter your name"
                                        className="w-full bg-white border border-slate-200 px-4 py-3.5 rounded-xl text-sm font-semibold text-slate-700 placeholder-slate-350 focus:border-primary focus:outline-none transition-colors shadow-sm"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="Enter your email"
                                        className="w-full bg-white border border-slate-200 px-4 py-3.5 rounded-xl text-sm font-semibold text-slate-700 placeholder-slate-350 focus:border-primary focus:outline-none transition-colors shadow-sm"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                                    Project / Inquiry Type
                                </label>
                                <select className="w-full bg-white border border-slate-200 px-4 py-3.5 rounded-xl text-sm font-semibold text-slate-700 focus:border-primary focus:outline-none transition-colors shadow-sm appearance-none">
                                    <option>Full-Stack Web App</option>
                                    <option>AI / Machine Learning Project</option>
                                    <option>Internship / Job Inquiry</option>
                                    <option>Collaboration</option>
                                    <option>Other / Just Say Hello</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                                    Your Message
                                </label>
                                <textarea
                                    rows={5}
                                    required
                                    placeholder="Write your message here..."
                                    className="w-full bg-white border border-slate-200 p-4 rounded-xl text-sm font-semibold text-slate-700 placeholder-slate-350 focus:border-primary focus:outline-none transition-colors shadow-sm resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 py-4 bg-primary hover:bg-primary-hover text-white text-xs font-bold rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/35 transition-all duration-300"
                            >
                                Send Message <Send size={14} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
