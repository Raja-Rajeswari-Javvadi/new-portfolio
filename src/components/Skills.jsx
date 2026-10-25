import React from "react";
import { motion } from "framer-motion";

import {
  Code2,
  Database,
  Brain,
  Server,
  GitBranch,
  Globe,
  Terminal,
  Layers,
  MessageSquareCode,
  Braces,
  Cpu,
  BookOpen,
  Users,
} from "lucide-react";

// === Existing Tech Icons ===
import reactIcon from "../assets/skills/React.png";
import tailwindIcon from "../assets/skills/Tailwind CSS.png";
import jsIcon from "../assets/skills/JavaScript.png";
import htmlIcon from "../assets/skills/HTML5.png";
import cssIcon from "../assets/skills/purple-css-logo.png";

import expressIcon from "../assets/skills/Express.png";
import nodeIcon from "../assets/skills/Node.js.png";
import mongodbIcon from "../assets/skills/MongoDB.png";
import sqlIcon from "../assets/skills/Azure SQL Database.png";

import pythonIcon from "../assets/skills/Python.png";

import gitIcon from "../assets/skills/Git.png";

import vscodeIcon from "../assets/skills/vscode.png";
import githubIcon from "../assets/skills/github.png";

// ================= SKILL CATEGORIES =================

const skillCategories = [
  {
    name: "Programming",
    tech: [
      {
        name: "Python",
        icon: pythonIcon,
      },
      {
        name: "JavaScript",
        icon: jsIcon,
      },
      {
        name: "SQL",
        icon: sqlIcon,
      },
      {
        name: "Data Structures & Algorithms",
        fallbackIcon: Code2,
      },
    ],
  },

  {
    name: "Frontend Development",
    tech: [
      {
        name: "React.js",
        icon: reactIcon,
      },
      {
        name: "HTML5",
        icon: htmlIcon,
      },
      {
        name: "CSS3",
        icon: cssIcon,
      },
      {
        name: "Tailwind CSS",
        icon: tailwindIcon,
      },
      {
        name: "Bootstrap",
        fallbackIcon: Globe,
      },
      {
        name: "Responsive Web Design",
        fallbackIcon: Layers,
      },
    ],
  },

  {
    name: "Backend Development",
    tech: [
      {
        name: "Flask",
        fallbackIcon: Server,
      },
      {
        name: "Node.js",
        icon: nodeIcon,
      },
      {
        name: "Express.js",
        icon: expressIcon,
      },
      {
        name: "REST APIs",
        fallbackIcon: Globe,
      },
      {
        name: "Spring Boot",
        fallbackIcon: Server,
        subtitle: "Basics",
      },
      {
        name: "Object-Oriented Programming",
        fallbackIcon: Braces,
      },
    ],
  },

  {
    name: "AI & Generative AI",
    tech: [
      {
        name: "Generative AI",
        fallbackIcon: Brain,
      },
      {
        name: "LLMs",
        fallbackIcon: Cpu,
      },
      {
        name: "RAG",
        fallbackIcon: MessageSquareCode,
      },
      {
        name: "Prompt Engineering",
        fallbackIcon: MessageSquareCode,
      },
      {
        name: "LangChain",
        fallbackIcon: Layers,
      },
      {
        name: "Vector Embeddings",
        fallbackIcon: Database,
      },
    ],
  },

  {
    name: "Database & Tools",
    tech: [
      {
        name: "MongoDB",
        icon: mongodbIcon,
      },
      {
        name: "Git",
        icon: gitIcon,
      },
      {
        name: "GitHub",
        icon: githubIcon,
      },
      {
        name: "VS Code",
        icon: vscodeIcon,
      },
      {
        name: "Postman",
        fallbackIcon: Terminal,
      },
      {
        name: "Jupyter Notebook",
        fallbackIcon: BookOpen,
      },
    ],
  },

  {
    name: "Core Computer Science",
    tech: [
      {
        name: "DBMS",
        fallbackIcon: Database,
      },
      {
        name: "Operating Systems",
        fallbackIcon: Cpu,
      },
      {
        name: "Computer Networks",
        fallbackIcon: Globe,
      },
      {
        name: "SDLC",
        fallbackIcon: Layers,
      },
      {
        name: "Problem Solving",
        fallbackIcon: Code2,
      },
      {
        name: "Team Collaboration",
        fallbackIcon: Users,
      },
    ],
  },
];

// ================= ANIMATION VARIANTS =================

const containerVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    y: 20,
    opacity: 0,
  },

  visible: {
    y: 0,
    opacity: 1,
  },
};

// ================= MAIN COMPONENT =================

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-20 px-6 md:px-8 lg:px-12 max-w-8xl mx-auto min-h-screen overflow-hidden"
    >
      {/* ================= BACKGROUND GRADIENT ================= */}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-blue-950/20 -z-10" />

      {/* ================= FLOATING ICONS BACKGROUND ================= */}

      <div className="absolute inset-0 overflow-hidden opacity-[0.3] dark:opacity-[0.05] -z-10">
        {skillCategories.flatMap((category) =>
          category.tech.slice(0, 2).map((tech, i) => {
            const FloatingIcon = tech.fallbackIcon;

            return tech.icon ? (
              <motion.img
                key={`float-${category.name}-${tech.name}-${i}`}
                src={tech.icon}
                alt=""
                loading="lazy"
                width={48}
                height={48}
                className="absolute w-12 h-12 object-contain"
                initial={{
                  x: `${Math.random() * 100}vw`,
                  y: `${Math.random() * 100}vh`,
                }}
                animate={{
                  x: `${Math.random() * 100}vw`,
                  y: `${Math.random() * 100}vh`,
                  rotate: Math.random() * 360,
                }}
                transition={{
                  duration: Math.random() * 15 + 15,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear",
                }}
              />
            ) : FloatingIcon ? (
              <motion.div
                key={`float-${category.name}-${tech.name}-${i}`}
                className="absolute"
                initial={{
                  x: `${Math.random() * 100}vw`,
                  y: `${Math.random() * 100}vh`,
                }}
                animate={{
                  x: `${Math.random() * 100}vw`,
                  y: `${Math.random() * 100}vh`,
                  rotate: Math.random() * 360,
                }}
                transition={{
                  duration: Math.random() * 15 + 15,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear",
                }}
              >
                <FloatingIcon className="w-12 h-12 text-blue-400" />
              </motion.div>
            ) : null;
          })
        )}
      </div>

      {/* ================= MAIN CONTENT ================= */}

      <motion.div
        className="relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* ================= SECTION HEADER ================= */}

        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-extrabold bg-gradient-to-r from-gray-900 via-blue-800 to-blue-600 dark:from-white dark:via-blue-300 dark:to-blue-500 bg-clip-text text-transparent pb-2">
            My Tech Stack
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Technologies and concepts I work with to build AI-powered software
            solutions
          </p>
        </motion.div>

        {/* ================= SKILL CATEGORIES ================= */}

        <div className="grid gap-12">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="p-6 md:p-8 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-blue-100/50 dark:border-blue-900/50"
            >
              {/* ================= CATEGORY HEADER ================= */}

              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 dark:from-blue-300 dark:to-blue-500 bg-clip-text text-transparent">
                  {category.name}
                </h3>

                <div className="flex-1 h-px bg-gradient-to-r from-blue-500/50 to-transparent dark:from-blue-400/30" />
              </div>

              {/* ================= TECH GRID ================= */}

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
                {category.tech.map((tech, i) => {
                  const FallbackIcon = tech.fallbackIcon;

                  return (
                    <motion.div
                      key={i}
                      variants={itemVariants}
                      whileHover={{
                        y: -5,
                        scale: 1.02,
                      }}
                      className="group relative p-6 rounded-xl
                        bg-white/40 dark:bg-gray-800/40
                        backdrop-blur-sm
                        border border-blue-100 dark:border-blue-900
                        hover:border-blue-300 dark:hover:border-blue-700
                        shadow-lg hover:shadow-blue-200/40
                        dark:hover:shadow-blue-900/40
                        transition-all duration-300"
                    >
                      {/* ================= HOVER BACKGROUND ================= */}

                      <div
                        className="absolute inset-0 bg-gradient-to-br
                        from-blue-50/50 to-transparent
                        dark:from-blue-900/30 dark:to-transparent
                        opacity-0 group-hover:opacity-100
                        transition-opacity duration-300"
                      />

                      {/* ================= ICON ================= */}

                      <div className="relative flex flex-col items-center">
                        <div
                          className="w-16 h-16 flex items-center justify-center
                            rounded-xl overflow-hidden
                            bg-gradient-to-br from-blue-100 to-white
                            dark:from-blue-900 dark:to-gray-800
                            group-hover:from-blue-200
                            group-hover:to-blue-50
                            dark:group-hover:from-blue-800
                            dark:group-hover:to-blue-950
                            shadow-inner transition-all duration-300"
                        >
                          {tech.icon ? (
                            <img
                              src={tech.icon}
                              alt={tech.name}
                              className="w-12 h-12 object-contain
                                transform group-hover:scale-110
                                transition-transform duration-300"
                            />
                          ) : (
                            FallbackIcon && (
                              <FallbackIcon
                                className="w-10 h-10 text-blue-600
                                  dark:text-blue-300
                                  transform group-hover:scale-110
                                  transition-transform duration-300"
                              />
                            )
                          )}
                        </div>

                        {/* ================= TECH NAME ================= */}

                        <div className="mt-4 text-center">
                          <p className="font-medium text-gray-900 dark:text-gray-100">
                            {tech.name}
                          </p>

                          {tech.subtitle && (
                            <p className="mt-1 text-xs text-blue-600 dark:text-blue-300">
                              {tech.subtitle}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
