import React, { useState, useEffect } from "react";
import { motion, useMotionTemplate, useSpring } from "framer-motion";

import {
  Github,
  Code2,
  Rocket,
  Globe,
  Braces,
  Server,
  Database,
  Shield,
  LayoutDashboard,
} from "lucide-react";

import careerImg from "../assets/projects/project1.jpeg";
import ragImg from "../assets/projects/project2.jpeg";
import rentalImg from "../assets/projects/project3.jpeg";

// ================= PROJECTS DATA =================

const projects = [
  {
    name: "Personalized Career Path Recommender using Skill Profiling",

    description:
      "An AI-powered career guidance platform that analyzes user skills and recommends personalized career paths using Generative AI techniques and intelligent skill profiling workflows.",

    tech: [
      "Python",
      "Generative AI",
      "LLMs",
      "Machine Learning",
      "Streamlit",
      "Prompt Engineering",
    ],

    link: "https://career-path-recommender-using-skill.onrender.com",

    github: "https://github.com/Raja-Rajeswari-Javvadi/Career-Path-Recommender-Using-Skill-Profiling",

    image: careerImg,

    category: "Generative AI Project",

    keyFeatures: [
      "AI-driven career recommendations",
      "Skill profiling and analysis",
      "Personalized career guidance",
      "LLM-powered intelligent responses",
    ],

    impact:
      "Helping students identify suitable career paths using AI-powered recommendations.",

    role: "Generative AI Application",

    techIcons: {
      frontend: [Code2, Globe],
      ai: [Rocket],
      deployment: [Shield],
    },
  },

  {
    name: "Document Question Answering System using RAG",

    description:
      "A Retrieval-Augmented Generation (RAG) based application that allows users to upload documents and ask questions to retrieve accurate contextual answers using vector search and LLMs.",

    tech: [
      "Python",
      "RAG",
      "FAISS",
      "LLMs",
      "Streamlit",
      "Vector Databases",
    ],

    github: "https://github.com/Raja-Rajeswari-Javvadi/Smart-Document-Question-Answering-System-using-RAG",

    link: "https://smart-document-question-answering-system.onrender.com/",

    image: ragImg,

    category: "AI & NLP Project",

    keyFeatures: [
      "Document-based intelligent querying",
      "Retrieval-Augmented Generation workflow",
      "Semantic search using FAISS",
      "Context-aware answer generation",
    ],

    impact:
      "Improves information retrieval efficiency using AI-powered document understanding.",

    role: "AI/ML Application",

    techIcons: {
      ai: [Rocket],
      backend: [Server],
      database: [Database],
      security: [Shield],
    },
  },

  {
    name: "RentalFinder Web Application",

    description:
      "A full-stack house rental platform that allows users to search, explore, and manage rental properties with responsive UI, authentication, and dynamic property listings.",

    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT Authentication",
    ],

    github: "https://github.com/Raja-Rajeswari-Javvadi/rentify-ai-connect",

    link: "https://raja-rajeswari-javvadi.github.io/rentify-ai-connect/",

    image: rentalImg,

    category: "Full Stack Web Application",

    keyFeatures: [
      "Property listing and search system",
      "Responsive and modern UI",
      "User authentication and authorization",
      "Dynamic rental management workflows",
    ],

    impact:
      "Simplifies rental property discovery and improves user experience for tenants and property owners.",

    role: "Full Stack MERN Application",

    techIcons: {
      frontend: [Code2, Braces],
      backend: [Server],
      database: [Database],
      security: [Shield],
      ui: [LayoutDashboard],
    },
  },
];

// ================= ANIMATIONS =================

const container = {
  hidden: { opacity: 0 },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },

  visible: { opacity: 1, y: 0 },
};

// ================= CUSTOM CURSOR =================

const ProjectCursor = ({ mouseX, mouseY, active }) => {
  const mouseXSpring = useSpring(mouseX);
  const mouseYSpring = useSpring(mouseY);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{
        transform: useMotionTemplate`translate(${mouseXSpring}px, ${mouseYSpring}px) translate(-50%, -50%)`,
      }}
    >
      <motion.div
        className="relative flex items-center justify-center"
        animate={{
          scale: active ? 1 : 0,
          opacity: active ? 1 : 0,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
        }}
      >
        <div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-md opacity-30"
          style={{ width: 100, height: 100 }}
        />

        <motion.div
          className="absolute rounded-full border-2 border-white mix-blend-difference"
          style={{ width: 80, height: 80 }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <div className="relative flex flex-col items-center justify-center text-white mix-blend-difference">
          <Rocket className="w-4 h-4 mb-1" />

          <span className="text-xs font-medium tracking-wider">
            Explore
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ================= MAIN COMPONENT =================

export default function Projects() {
  const [mouseX, setMouseX] = useState(0);

  const [mouseY, setMouseY] = useState(0);

  const [cursorActive, setCursorActive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouseX(e.clientX);

      setMouseY(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="projects"
      className="relative section-container py-20 px-6 md:px-10 lg:px-16 max-w-8xl mx-auto min-h-screen overflow-hidden"
    >
      <ProjectCursor
        mouseX={mouseX}
        mouseY={mouseY}
        active={cursorActive}
      />

      {/* Background */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-blue-950/20" />
      </div>

      {/* Heading */}

      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl xl:text-6xl font-extrabold bg-gradient-to-r from-gray-900 via-blue-800 to-blue-600 dark:from-white dark:via-blue-300 dark:to-blue-500 bg-clip-text text-transparent pb-2">
          Featured Projects
        </h2>

        <p className="mt-6 text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
          AI-powered and Full Stack applications showcasing modern technologies,
          scalable architecture, and real-world problem solving.
        </p>
      </motion.div>

      {/* Projects */}

      <motion.div
        className="grid gap-16 md:gap-24"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            variants={item}
            className="group relative rounded-3xl overflow-hidden bg-gradient-to-b from-white/90 to-white/50 dark:from-gray-800/90 dark:to-gray-800/50 backdrop-blur-xl shadow-2xl hover:shadow-blue-200/30 dark:hover:shadow-blue-900/30 transition-all duration-500"
            onMouseEnter={() => setCursorActive(true)}
            onMouseLeave={() => setCursorActive(false)}
          >
            <div className="relative grid md:grid-cols-2 items-start gap-8 p-8 md:p-12">
              {/* IMAGE */}

              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02, rotate: -1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-4 py-2 text-sm font-semibold rounded-full bg-black/60 text-white backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-[300px] md:h-[400px] object-fit transition-transform duration-700 group-hover:scale-110"
                />
              </motion.div>

              {/* CONTENT */}

              <div className="flex flex-col justify-start space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 dark:from-blue-300 dark:to-blue-500 bg-clip-text text-transparent">
                    {project.name}
                  </h3>

                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    {project.role}
                  </p>
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                {/* FEATURES */}

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    Key Features
                  </h4>

                  <ul className="grid grid-cols-2 gap-2">
                    {project.keyFeatures.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />

                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* TECH STACK */}

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                    Technologies
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-blue-50 to-blue-100/50 dark:from-blue-900/50 dark:to-blue-800/30 text-blue-700 dark:text-blue-300 border border-blue-200/50 dark:border-blue-700/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* BUTTONS */}

                <div className="flex flex-wrap gap-4 pt-2">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white"
                    >
                      Live Demo

                      <Globe size={16} />
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl bg-gray-900 dark:bg-gray-700 text-white"
                    >
                      View Code

                      <Github size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}