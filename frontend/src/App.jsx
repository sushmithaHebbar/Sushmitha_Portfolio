import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Code, Zap, Cpu, Server, Database, TrendingUp, Compass, Globe, CheckCircle, Award } from 'lucide-react';

// --- HARDCODED CONTENT (Based on your resume and README) ---
const PORTFOLIO_DATA = {
    name: "Sushmitha Hebbar",
    title: "Full-Stack Developer | AI/ML Engineer",
    bio: "I am a passionate Computer Science Engineering (AI & ML) student with a strong interest in AI-driven applications, full-stack development, and innovative technology solutions. I thrive on solving complex problems and building impactful digital experiences using the MERN stack, Python, and advanced ML techniques.",
    contact: {
        email: "sushmitham579@gmail.com",
        linkedin: "https://www.linkedin.com/in/sushmitha-61978526a",
        github: "https://github.com/sushmithaHebbar" // Assuming this is your main GitHub profile
    },
    skills: [
        { name: "ReactJS", icon: <Globe />, color: "text-blue-400" },
        { name: "Node.js", icon: <Server />, color: "text-green-500" },
        { name: "MongoDB", icon: <Database />, color: "text-emerald-500" },
        { name: "Express", icon: <Code />, color: "text-gray-400" },
        { name: "Python", icon: <Cpu />, color: "text-yellow-400" },
        { name: "TensorFlow/Keras", icon: <TrendingUp />, color: "text-orange-500" },
        { name: "Hyperledger Fabric", icon: <CheckCircle />, color: "text-indigo-400" },
        { name: "AWS/GCP", icon: <Zap />, color: "text-amber-500" },
    ],
    // ADDED: Placeholder Certifications Data
    certifications: [
        {
            title: "TensorFlow Developer Certificate",
            issuer: "TensorFlow/Google",
            link: "#", // Replace with actual certification link
            date: "Jan 2024",
        },
        {
            title: "MERN Stack Development Masterclass",
            issuer: "Udemy / External Institute",
            link: "#", // Replace with actual certification link
            date: "Aug 2023",
        },
        {
            title: "Advanced Data Science with Python",
            issuer: "Coursera / IBM",
            link: "#", // Replace with actual certification link
            date: "Apr 2023",
        },
    ],
    projects: [
        {
            title: "SkillSync AI Intelligent Task Allocation System",
            description: "A standalone AI-powered task allocation system optimizing workforce productivity through real-time, precision-driven task assignments. Integrated ML models and Al Foundry services for predictive analytics.",
            techStack: ["ReactJS", "Node.js", "Flask", "MongoDB", "scikit-learn"],
            github: "#", // Placeholder
        },
        {
            title: "AI-Powered Mental Health Assistant",
            description: "Utilizes CNN for facial emotion recognition, Naïve Bayes for sentiment analysis, and Random Forest for biometric insights to provide real-time feedback and personalized mental health recommendations.",
            techStack: ["CNN", "Naïve Bayes", "Random Forest", "Python"],
            github: "#", // Placeholder
        },
        {
            title: "Blockchain-Based Evidence Tracker",
            description: "Engineered a chain-of-custody system on Hyperledger Fabric with custom chaincode for immutable and auditable evidence management. Includes a secure, role-based web app.",
            techStack: ["Hyperledger Fabric", "Chaincode", "Node.js", "React"],
            github: "#", // Placeholder
        },
        {
            title: "Virtual Herbal Garden",
            description: "An interactive project featuring 3D models of medicinal plants with detailed AYUSH-based information, built using responsive UI/UX principles.",
            techStack: ["React.js", "Bootstrap", "3D Modeling"],
            github: "#", // Placeholder
        },
    ]
};

// --- COMPONENTS ---

/**
 * Navigation Bar Component
 */
const Navbar = () => {
    // UPDATED: Added "Certifications" to the navigation links
    const navItems = ["About", "Skills", "Certifications", "Projects", "Contact"];
    
    // Function to handle smooth scrolling to sections
    const scrollToSection = (id) => {
        const element = document.getElementById(id.toLowerCase());
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed w-full z-10 bg-gray-900/90 backdrop-blur-sm shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <a href="#" className="text-xl font-bold text-teal-400 hover:text-teal-300 transition duration-300">
                        {PORTFOLIO_DATA.name.split(' ')[0]} Portfolio
                    </a>
                    <div className="hidden md:flex space-x-6">
                        {navItems.map(item => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className="text-gray-300 hover:text-teal-400 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

/**
 * Hero Section Component
 */
const Hero = () => (
    <header id="about" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gray-900 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <div className="lg:w-3/4">
                <p className="text-teal-400 text-lg font-semibold mb-2">Hello, I'm</p>
                <h1 className="text-5xl sm:text-7xl font-extrabold mb-4 leading-tight">
                    {PORTFOLIO_DATA.name}
                </h1>
                <h2 className="text-3xl sm:text-4xl font-light text-gray-300 mb-6">
                    {PORTFOLIO_DATA.title}
                </h2>
                <p className="text-lg text-gray-400 max-w-2xl mb-8 leading-relaxed">
                    {PORTFOLIO_DATA.bio}
                </p>
                <div className="flex space-x-4">
                    <a 
                        href={`mailto:${PORTFOLIO_DATA.contact.email}`} 
                        className="flex items-center bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-lg shadow-teal-600/50"
                    >
                        <Mail className="w-5 h-5 mr-2" /> Contact Me
                    </a>
                    <a 
                        href={PORTFOLIO_DATA.contact.linkedin}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center text-teal-400 border border-teal-400 hover:bg-teal-400 hover:text-gray-900 font-semibold py-3 px-6 rounded-lg transition duration-300"
                    >
                        <Linkedin className="w-5 h-5 mr-2" /> LinkedIn
                    </a>
                </div>
            </div>
        </div>
    </header>
);

/**
 * Skills Section Component
 */
const Skills = () => (
    <section id="skills" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-white mb-12">Core Technical Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
                {PORTFOLIO_DATA.skills.map((skill, index) => (
                    <div 
                        key={index} 
                        className="flex flex-col items-center justify-center p-6 bg-gray-900 rounded-xl shadow-xl hover:shadow-teal-500/30 transition duration-300 transform hover:scale-105"
                    >
                        <span className={`w-10 h-10 ${skill.color}`}>{skill.icon}</span>
                        <p className="mt-3 text-sm font-medium text-gray-300 text-center">{skill.name}</p>
                    </div>
                ))}
            </div>
            <div className="mt-12 text-center text-gray-400">
                <p>Expertise in MERN Stack, AI/ML (CNN, Naïve Bayes, Random Forest), and specialized systems like Hyperledger Fabric.</p>
            </div>
        </div>
    </section>
);

/**
 * Certifications Section Component (NEWLY ADDED)
 */
const Certifications = () => (
    <section id="certifications" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-white mb-16">Certifications & Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {PORTFOLIO_DATA.certifications.map((cert, index) => (
                    <div 
                        key={index} 
                        className="flex items-start p-6 bg-gray-800 rounded-xl shadow-xl border-l-4 border-teal-500 transition duration-300 hover:shadow-teal-500/30"
                    >
                        <Award className="w-8 h-8 text-teal-400 flex-shrink-0 mt-1 mr-4" />
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-1">{cert.title}</h3>
                            <p className="text-gray-400 text-sm mb-2">
                                Issued by <span className="text-teal-300">{cert.issuer}</span> • {cert.date}
                            </p>
                            <a 
                                href={cert.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-sm font-medium text-teal-400 hover:text-teal-300 underline"
                            >
                                View Credential
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-12 text-center text-gray-500">
                <p>*These are mock placeholders. Please replace the data with your actual certifications and links!</p>
            </div>
        </div>
    </section>
);


/**
 * Project Card Component
 */
const ProjectCard = ({ project }) => (
    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-700 hover:border-teal-500 transition duration-300 h-full flex flex-col">
        <div className="p-6 flex-grow">
            <h3 className="text-2xl font-semibold text-teal-400 mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="mt-auto">
                <p className="text-sm font-medium text-gray-500 mb-3">Key Technologies:</p>
                <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                        <span key={index} className="bg-gray-700 text-xs text-gray-300 px-3 py-1 rounded-full font-medium">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
        <div className="p-6 pt-0">
            <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center text-sm font-semibold text-teal-400 hover:text-teal-300 transition duration-300"
            >
                View Code on GitHub <Github className="w-4 h-4 ml-1" />
            </a>
        </div>
    </div>
);

/**
 * Projects Section Component
 */
const Projects = () => {
    // NOTE: In a real full-stack application, this component would use a function
    // like fetchProjectsFromBackend() to retrieve data from your Express API.
    // For this single-file demonstration, we use the hardcoded data above.

    return (
        <section id="projects" className="py-20 bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center text-white mb-16">Featured Full-Stack & AI Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {PORTFOLIO_DATA.projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

/**
 * Contact/Footer Section Component
 */
const Footer = () => (
    <footer id="contact" className="py-10 bg-gray-900 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                I am actively seeking collaboration and new opportunities in Full-Stack and AI/ML development. Feel free to reach out!
            </p>
            
            <div className="flex justify-center space-x-6 mb-8">
                <a href={PORTFOLIO_DATA.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition duration-300">
                    <Linkedin className="w-8 h-8" />
                </a>
                <a href={PORTFOLIO_DATA.contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition duration-300">
                    <Github className="w-8 h-8" />
                </a>
                <a href={`mailto:${PORTFOLIO_DATA.contact.email}`} className="text-gray-400 hover:text-teal-400 transition duration-300">
                    <Mail className="w-8 h-8" />
                </a>
            </div>

            <p className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} {PORTFOLIO_DATA.name}. Built with React and Tailwind CSS.
            </p>
        </div>
    </footer>
);


/**
 * Main Application Component
 */
const App = () => {
    // The component responsible for making the API call in a real full-stack app
    const fetchProjectsFromBackend = async () => {
        console.log("--- FUL-STACK DEMO ---");
        console.log("In a real setup, this function would use AXIOS to fetch project data from your Node.js/Express API (e.g., http://localhost:5000/api/projects).");
        console.log("Projects and Certifications are hardcoded for this single-file environment.");
        // Example: 
        /*
        try {
            const response = await fetch('http://localhost:5000/api/data'); // API to fetch all portfolio data
            const data = await response.json();
            // setPortfolioData(data);
        } catch (error) {
            console.error("Could not connect to backend API.", error);
        }
        */
    };

    useEffect(() => {
        fetchProjectsFromBackend();
        // Set document title
        document.title = `${PORTFOLIO_DATA.name} | Full-Stack Developer`;
    }, []);


    return (
        <div className="font-sans min-h-screen bg-gray-900">
            {/* Tailwind CSS CDN and custom styling for professional look */}
            <script src="https://cdn.tailwindcss.com"></script>
            <style>
                {`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
                body {
                    font-family: 'Inter', sans-serif;
                    background-color: #111827; /* Tailwind gray-900 */
                }
                html {
                    scroll-behavior: smooth;
                }
                .section-header {
                    position: relative;
                    display: inline-block;
                    padding-bottom: 0.5rem;
                }
                .section-header::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 50%;
                    height: 4px;
                    background-color: #2dd4bf; /* Tailwind teal-400 */
                    border-radius: 2px;
                }
                `}
            </style>

            <Navbar />
            <main>
                <Hero />
                <Skills />
                <Certifications /> {/* ADDED HERE */}
                <Projects />
            </main>
            <Footer />
        </div>
    );
};

export default App;
