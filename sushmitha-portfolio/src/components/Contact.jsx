"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-[10%] bg-primary/50">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="max-w-6xl mx-auto"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                    Contact <span className="text-accent">Me</span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="space-y-10">
                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-accent">Let's Connect</h3>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Feel free to reach out for collaborations, internship opportunities, or just to say hi!
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                                    <Mail size={24} className="text-accent group-hover:text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Email</p>
                                    <p className="text-xl font-bold hover:text-accent transition-colors">{portfolioData.contact.email}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                                    <Phone size={24} className="text-accent group-hover:text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Phone</p>
                                    <p className="text-xl font-bold hover:text-accent transition-colors">{portfolioData.contact.phone}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                                    <MapPin size={24} className="text-accent group-hover:text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Location</p>
                                    <p className="text-xl font-bold leading-tight">{portfolioData.contact.address}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full bg-primary border-2 border-accent/10 p-4 rounded-xl focus:border-accent outline-none transition-all placeholder:text-gray-600"
                            />
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full bg-primary border-2 border-accent/10 p-4 rounded-xl focus:border-accent outline-none transition-all placeholder:text-gray-600"
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full bg-primary border-2 border-accent/10 p-4 rounded-xl focus:border-accent outline-none transition-all placeholder:text-gray-600"
                        />
                        <textarea
                            rows={5}
                            placeholder="Your Message"
                            className="w-full bg-primary border-2 border-accent/10 p-4 rounded-xl focus:border-accent outline-none transition-all placeholder:text-gray-600 resize-none"
                        ></textarea>
                        <button
                            type="submit"
                            className="btn-primary w-full flex items-center justify-center gap-3 py-4 text-xl group"
                        >
                            Send Message <Send size={20} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                        </button>
                    </form>
                </div>
            </motion.div>
        </section>
    );
}
