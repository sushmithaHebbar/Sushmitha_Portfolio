import React, { useState, useEffect, useCallback } from 'react';
import {
    Github, Linkedin, Mail, Code, BarChart3, Rocket, Award, Globe, Database, Cpu, Network, BookOpen
} from 'lucide-react';

// --- Global Data (Hardcoded for initial run, will be replaced by API fetch) ---
const PORTFOLIO_DATA = {
    bio: {
        name: "Sushmitha Hebbar",
        title: "Full-Stack Developer | AI/ML Engineer",
        summary: "I am a passionate Computer Science Engineering (AI & ML) student with a strong interest in AI-driven applications, full-stack development, and innovative technology solutions. I thrive on solving complex problems and building impactful digital experiences using the MERN stack, Python, and advanced ML techniques.",
        contact: {
            email: "sushmitham579@gmail.com",
            linkedin: "https://www.linkedin.com/in/sushmitha-61978526a",
            github: "https://github.com/sushmithaHebbar"
        }
    },
    skills: [
        { name: "React JS", icon: <Globe className="w-6 h-6 text-indigo-400" />, type: "Web" },
        { name: "Node.js", icon: <Network className="w-6 h-6 text-green-400" />, type: "Web" },
        { name: "MongoDB", icon: <Database className="w-6 h-6 text-emerald-400" />, type: "Database" },
        { name: "Python", icon: <Code className="w-6 h-6 text-yellow-400" />, type: "Language" },
        { name: "TensorFlow/Keras", icon: <Cpu className="w-6 h-6 text-red-400" />, type: "AI/ML" },
        { name: "C / C++", icon: <Code className="w-6 h-6 text-blue-400" />, type: "Language" },
        { name: "AWS / Firebase", icon: <Rocket className="w-6 h-6 text-orange-400" />, type: "Platform" },
        { name: "Docker / Git", icon: <BarChart3 className="w-6 h-6 text-cyan-400" />, type: "Tools" },
    ],
    projects: [
        { title: "AI-Powered Mental Health Assistant", description: "Uses CNN for facial emotion recognition, Naïve Bayes for sentiment analysis, and Random Forest for biometric insights. Provides real-time feedback and personalized mental health recommendations.", technologies: ["Python", "CNN", "Naïve Bayes", "Deep Learning"], githubUrl: "#" },
        { title: "SkillSync AI Task Allocation System", description: "Designed an AI-powered task allocation system using machine learning models to optimize workforce productivity through real-time, precision-driven task assignments.", technologies: ["ReactJS", "Node.js", "Flask", "MongoDB", "scikit-learn"], githubUrl: "#" },
        { title: "Blockchain-Based Evidence Tracker", description: "Engineered a chain-of-custody system on Hyperledger Fabric with custom chaincode for immutable, auditable evidence management and secure role-based interactions.", technologies: ["Hyperledger Fabric", "Node.js", "React", "Blockchain"], githubUrl: "#" },
        { title: "Virtual Herbal Garden", description: "Interactive 3D models of medicinal plants with detailed AYUSH-based information. Implements React.js, Bootstrap, and responsive UI/UX principles.", technologies: ["React.js", "Bootstrap", "3D Modeling"], githubUrl: "#" },
    ],
    certifications: [
        { title: "Deep Learning Specialization", issuer: "DeepLearning.AI (Coursera)", link: "#", icon: <Award className="w-5 h-5" /> },
        { title: "Full-Stack Web Development", issuer: "The MERN Stack Course", link: "#", icon: <BookOpen className="w-5 h-5" /> },
        { title: "Cloud Practitioner Essentials", issuer: "AWS Training", link: "#", icon: <Rocket className="w-5 h-5" /> },
        { title: "Advanced Python Programming", issuer: "University of Michigan", link: "#", icon: <Code className="w-5 h-5" /> },
    ]
};

// --- Component: Header and Navigation ---
const Header = ({ navItems }) => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition duration-300 ${scrolled ? 'bg-gray-900 shadow-xl' : 'bg-transparent'}`}>
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="text-xl font-extrabold text-indigo-800 tracking-wider">
                        Sushmitha
                    </div>
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className="text-gray-300 hover:text-indigo-400 transition duration-150 font-medium tracking-wide"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-400 hover:text-white focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu Dropdown */}
            {menuOpen && (
                <div className="md:hidden bg-gray-800 pb-2">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={() => setMenuOpen(false)}
                            className="block px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-indigo-400 transition duration-150"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
};

// --- Component: Hero Section ---
const Hero = ({ bio }) => (
    <section id="about" className="pt-24 pb-12 md:py-32 bg-gray-950 min-h-screen flex items-center">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-white">
            <div className="md:flex items-center">
                <div className="md:w-3/5">
                    <p className="text-indigo-400 text-lg font-semibold mb-2">Hello, I'm</p>
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
                        {bio.name}
                    </h1>
                    <h2 className="text-2xl md:text-4xl font-semibold text-gray-200 mb-6">
                        {bio.title}
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-xl mb-8">
                        {bio.summary}
                    </p>
                    <div className="flex space-x-6">
                        <a href={`mailto:${bio.contact.email}`} className="flex items-center text-indigo-400 hover:text-indigo-300 transition duration-150 font-medium">
                            <Mail className="w-5 h-5 mr-2" /> Contact Me
                        </a>
                        <a href={bio.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-white transition duration-150">
                            <Linkedin className="w-5 h-5 mr-2" /> LinkedIn
                        </a>
                        <a href={bio.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-white transition duration-150">
                            <Github className="w-5 h-5 mr-2" /> GitHub
                        </a>
                    </div>
                </div>
                <div className="md:w-2/5 mt-10 md:mt-0 flex justify-center">
                    {/* Placeholder for Profile Image or Illustration */}
                    <div className="w-64 h-64 bg-gray-800 rounded-full flex items-center justify-center border-4 border-indigo-500 shadow-2xl">
                        <span className="text-xl font-bold text-gray-400">Profile Placeholder</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// --- Component: Skill Card ---
const SkillCard = ({ skill }) => (
    <div className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-indigo-500/30 transition duration-300 transform hover:scale-[1.02] border border-gray-700">
        {skill.icon}
        <h3 className="mt-4 text-lg font-semibold text-white text-center">{skill.name}</h3>
        <p className="text-sm text-indigo-400 mt-1 uppercase tracking-wider">{skill.type}</p>
    </div>
);

// --- Component: Skills Section ---
const Skills = ({ skills }) => (
    <section id="skills" className="py-16 md:py-24 bg-gray-900">
        <div className="w-full px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold text-white text-center mb-12">Core Technical Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                    <SkillCard key={index} skill={skill} />
                ))}
            </div>
        </div>
    </section>
);

// --- Component: Certification Card ---
const CertificationCard = ({ cert }) => (
    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="block p-5 bg-gray-800 rounded-xl shadow-lg hover:shadow-indigo-500/30 transition duration-300 transform hover:scale-[1.02] border border-gray-700">
        <div className="flex items-start space-x-4">
            <div className="text-indigo-400 pt-1">
                {cert.icon}
            </div>
            <div>
                <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
                <p className="text-sm text-gray-400 mt-1">Issued by: {cert.issuer}</p>
            </div>
        </div>
    </a>
);

// --- Component: Certifications Section ---
const Certifications = ({ certifications }) => (
    <section id="certifications" className="py-16 md:py-24 bg-gray-950">
        <div className="w-full px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold text-white text-center mb-12">Certifications & Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                    <CertificationCard key={index} cert={cert} />
                ))}
            </div>
        </div>
    </section>
);


// --- Component: Project Card ---
const ProjectCard = ({ project }) => (
    <div className="flex flex-col h-full p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700">
        <h3 className="text-2xl font-bold text-indigo-400 mb-3">{project.title}</h3>
        <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
        <div className="mt-auto pt-4 border-t border-gray-700">
            <p className="text-sm font-semibold text-white mb-2">Tech Stack:</p>
            <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-gray-700 text-xs text-gray-200 px-3 py-1 rounded-full">{tech}</span>
                ))}
            </div>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-indigo-400 hover:text-indigo-300 transition duration-150 font-medium">
                <Github className="w-5 h-5 inline mr-1" /> View Code
            </a>
        </div>
    </div>
);

// --- Component: Projects Section ---
const Projects = ({ projects }) => (
    <section id="projects" className="py-16 md:py-24 bg-gray-900">
        <div className="w-full px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold text-white text-center mb-12">Notable Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    </section>
);

// --- Component: Footer ---
const Footer = ({ bio }) => (
    <footer className="bg-gray-950 py-8 border-t border-gray-800">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center text-gray-500">
            <div className="flex justify-center space-x-6 mb-4">
                <a href={bio.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition duration-150">
                    <Linkedin className="w-6 h-6" />
                </a>
                <a href={bio.contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition duration-150">
                    <Github className="w-6 h-6" />
                </a>
                <a href={`mailto:${bio.contact.email}`} className="text-gray-400 hover:text-indigo-400 transition duration-150">
                    <Mail className="w-6 h-6" />
                </a>
            </div>
            <p>&copy; {new Date().getFullYear()} {bio.name}. Crafted with React & Tailwind CSS.</p>
        </div>
    </footer>
);

// --- Main App Component ---
export default function App() {
    const [portfolioData, setPortfolioData] = useState(PORTFOLIO_DATA);
    const [loading, setLoading] = useState(false); // Set to true when integrating API

    const navItems = [
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'certifications', label: 'Certifications' },
        { id: 'projects', label: 'Projects' },
    ];

    // Placeholder function for fetching data from the Express backend
    const fetchData = useCallback(async () => {
        // NOTE: If running locally, the server should be at http://localhost:5000
        const API_ENDPOINT = 'http://localhost:5000/api/data';
        setLoading(true);
        try {
            // Using standard browser fetch API
            const response = await fetch(API_ENDPOINT);

            // Handle non-2xx status codes
            if (!response.ok) {
                console.error(`HTTP error! status: ${response.status}`);
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            // Structure of data from backend: { projects: [...], certifications: [...] }
            setPortfolioData(prevData => ({
                ...prevData,
                projects: data.projects || [],
                certifications: data.certifications || []
            }));

        } catch (error) {
            console.warn('Could not fetch data from backend. Using hardcoded data. Error:', error.message);
            // On failure, it falls back to the hardcoded PORTFOLIO_DATA constant initialized above.
        } finally {
            setLoading(false);
        }
    }, []);

    // NOTE: Uncomment this useEffect block when you have your backend running!
    /*
    useEffect(() => {
        fetchData();
    }, [fetchData]);
    */

    return (
        <>
            
            <div className="min-h-screen bg-gray-950 w-full">
                <Header navItems={navItems} />
                
                <main className="w-full">
                    {loading ? (
                        <div className="text-white text-center pt-40">Loading data from API...</div>
                    ) : (
                        <>
                            <Hero bio={portfolioData.bio} />
                            <Skills skills={portfolioData.skills} />
                            <Certifications certifications={portfolioData.certifications} />
                            <Projects projects={portfolioData.projects} />
                        </>
                    )}
                </main>

                <Footer bio={portfolioData.bio} />
            </div>
        </>
    );
}
