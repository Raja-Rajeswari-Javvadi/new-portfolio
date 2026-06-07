import React from "react";
import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink, ArrowUpRight, CheckCircle2, BookOpen, Trophy, Clock } from "lucide-react";

// === Certificate Imports ===
import cisco from "../assets/certificates/cisco-certification.pdf";
import hpDataScience from "../assets/certificates/hp-data-science-analytics.pdf";
import deloitteDataAnalytics from "../assets/certificates/deloitte-data-analytics.pdf";
import ibmPython from "../assets/certificates/ibm-python-certification.pdf";
import infosysICT from "../assets/certificates/infosys-ict-academy.pdf";
import infosysMongoDB from "../assets/certificates/infosys-mongodb.pdf";
import mongodbBasics from "../assets/certificates/mongodb-basics-students.pdf";
import hpPresentingData from "../assets/certificates/hp-presenting-data.pdf";
import udemyPython from "../assets/certificates/udemy-python-certification.pdf";
import wiproDotnet from "../assets/certificates/wipro-dotnet-certificate.jpeg";
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

// Organize certifications by category and priority
const certifications = [
  {
    title: "Cisco Certification",
    recipient: "Raji Javvadi",
    issuer: "Cisco",
    certificate: cisco,
    date: "August 19, 2025",
    category: "Technical Certifications",
    priority: 1,
    color: "#1BA0D7",
    skills: [
      "Networking",
      "Computer Networks",
      "Network Security",
      "Routing",
      "Switching"
    ],
    description:
      "Completed Cisco certification focusing on networking fundamentals, network infrastructure, and security concepts."
  },

  {
    title: "Data Science & Analytics",
    recipient: "Raji Javvadi",
    issuer: "HP LIFE",
    certificate: hpDataScience,
    date: "July 4, 2025",
    category: "Data Science",
    priority: 1,
    color: "#0096D6",
    skills: [
      "Data Analysis",
      "Data Visualization",
      "Business Analytics",
      "Data Interpretation"
    ],
    description:
      "Learned core concepts of data science and analytics, including data-driven decision making and analytical techniques."
  },

  {
    title: "Deloitte Data Analytics Job Simulation",
    recipient: "Raji Javvadi",
    issuer: "Deloitte",
    certificate: deloitteDataAnalytics,
    date: "July 12, 2025",
    category: "Professional Development",
    priority: 1,
    color: "#86BC25",
    skills: [
      "Data Analytics",
      "Business Intelligence",
      "Excel",
      "Data Visualization",
      "Problem Solving"
    ],
    description:
      "Completed Deloitte's Data Analytics Job Simulation involving business data analysis and visualization tasks."
  },

  {
    title: "IBM Python Certification",
    recipient: "Raji Javvadi",
    issuer: "IBM",
    certificate: ibmPython,
    date: "January 25, 2025",
    category: "Programming",
    priority: 1,
    color: "#1261FE",
    skills: [
      "Python",
      "Programming Fundamentals",
      "Problem Solving",
      "Data Structures"
    ],
    description:
      "Completed IBM Python certification covering Python programming fundamentals and practical application development."
  },

  {
    title: "Infosys ICT Academy Certification",
    recipient: "Raji Javvadi",
    issuer: "Infosys ICT Academy",
    certificate: infosysICT,
    date: "May 4, 2026",
    category: "Technical Certifications",
    priority: 2,
    color: "#007CC3",
    skills: [
      "Software Development",
      "Programming",
      "Technology Fundamentals",
      "Industry Readiness"
    ],
    description:
      "Completed ICT Academy certification focused on industry-relevant technical and professional skills."
  },

  {
    title: "MongoDB",
    recipient: "Raji Javvadi",
    issuer: "Infosys Springboard",
    certificate: infosysMongoDB,
    date: "August 19, 2025",
    category: "Database Technologies",
    priority: 1,
    color: "#00ED64",
    skills: [
      "MongoDB",
      "NoSQL",
      "Database Design",
      "CRUD Operations",
      "Data Modeling"
    ],
    description:
      "Learned MongoDB database concepts including collections, documents, CRUD operations, and data modeling."
  },

  {
    title: "MongoDB Basics for Students",
    recipient: "Raji Javvadi",
    issuer: "MongoDB University",
    certificate: mongodbBasics,
    date: "June 9, 2025",
    category: "Database Technologies",
    priority: 1,
    color: "#00ED64",
    skills: [
      "MongoDB",
      "NoSQL Databases",
      "Database Fundamentals",
      "Collections",
      "Queries"
    ],
    description:
      "Completed MongoDB Basics for Students course covering foundational NoSQL database concepts."
  },

  {
    title: "Presenting Data",
    recipient: "Raji Javvadi",
    issuer: "HP LIFE",
    certificate: hpPresentingData,
    date: "July 1, 2025",
    category: "Data Analytics",
    priority: 2,
    color: "#0096D6",
    skills: [
      "Data Visualization",
      "Presentation Skills",
      "Business Communication",
      "Data Storytelling"
    ],
    description:
      "Learned effective techniques for presenting data, creating visualizations, and communicating insights."
  },

  {
    title: "Python Programming Mastery: Beginner to Pro",
    recipient: "Raji Javvadi",
    issuer: "Udemy",
    certificate: udemyPython,
    date: "May 23, 2025",
    category: "Programming",
    priority: 1,
    color: "#A435F0",
    skills: [
      "Python",
      "Object-Oriented Programming",
      "File Handling",
      "Functions",
      "Problem Solving"
    ],
    description:
      "Completed comprehensive Python training from beginner to advanced concepts with practical coding exercises."
  },

  {
    title: ".NET Certification",
    recipient: "Raji Javvadi",
    issuer: "Wipro",
    certificate: wiproDotnet,
    date: "January 3, 2026",
    category: "Software Development",
    priority: 2,
    color: "#512BD4",
    skills: [
      ".NET",
      "C#",
      "ASP.NET",
      "Backend Development",
      "Software Engineering"
    ],
    description:
      "Completed .NET certification covering application development using Microsoft technologies."
  }
];

export default function Certifications() {
  // Group certificates by category
  const groupedCertifications = certifications.reduce((acc, cert) => {
    if (!acc[cert.category]) {
      acc[cert.category] = [];
    }
    acc[cert.category].push(cert);
    return acc;
  }, {});

  // Sort categories by priority
  Object.values(groupedCertifications).forEach(group => {
    group.sort((a, b) => (a.priority || 999) - (b.priority || 999));
  });

  return (
    <section
      id="certifications"
      className="relative py-20 px-6 md:px-8 lg:px-12 max-w-8xl mx-auto min-h-screen overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-blue-950/20" />
        <div
          className="absolute inset-0 opacity-[0.15] dark:opacity-[0.05]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(59 130 246 / 0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative"
      >
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-extrabold bg-gradient-to-r from-gray-900 via-blue-800 to-blue-600 dark:from-white dark:via-blue-300 dark:to-blue-500 bg-clip-text text-transparent pb-2">
            Professional Certifications
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Validating expertise through industry-recognized credentials
          </p>
        </motion.div>

        {/* Certifications by Category */}
        <div className="max-w-4xl mx-auto space-y-16">
          {Object.entries(groupedCertifications).map(([category, certs]) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className="space-y-8"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4">
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 dark:from-blue-300 dark:to-blue-500 bg-clip-text text-transparent">
                  {category}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-blue-500/50 to-transparent dark:from-blue-400/30" />
              </div>

              {/* Certificates Grid */}
              <div className="grid gap-6">
                {certs.map((cert, index) => (
                  <motion.div
                    key={cert.id || index}
                    variants={itemVariants}
                    className="group"
                  >
                    <div className="relative p-6 md:p-8 rounded-2xl
                      bg-white/40 dark:bg-gray-800/40
                      backdrop-blur-sm
                      border border-blue-100 dark:border-blue-900
                      hover:border-blue-300 dark:hover:border-blue-700
                      shadow-lg hover:shadow-blue-200/40 dark:hover:shadow-blue-900/40
                      transition-all duration-300"
                    >
                      {/* Certificate Header */}
                      <div className="flex items-start justify-between gap-4 mb-6">
                        <div className="flex-1">
                          <div className="flex items-start gap-3">
                            <Award className="w-6 h-6 text-blue-500 mt-1" />
                            <div>
                              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                                {cert.title}
                              </h4>
                              <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                                {cert.issuer || cert.platform}
                              </p>
                            </div>
                          </div>
                        </div>
                        {cert.link && typeof cert.link === 'string' && cert.link.startsWith('http') && (
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors group"
                            title="View Verification"
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-blue-600 dark:text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                Verify
                              </span>
                              <ArrowUpRight className="w-5 h-5 text-blue-500" />
                            </div>
                          </a>
                        )}
                      </div>

                      {/* Certificate Details */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        {cert.date && (
                          <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-blue-500" />
                            <span className="text-gray-600 dark:text-gray-300">{cert.date}</span>
                          </div>
                        )}
                        {cert.duration && (
                          <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5 text-blue-500" />
                            <span className="text-gray-600 dark:text-gray-300">{cert.duration}</span>
                          </div>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 dark:text-gray-300 mb-6">
                        {cert.description}
                      </p>

                      {/* Skills */}
                      {cert.skills && (
                        <div>
                          <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-blue-500" />
                            Skills & Topics
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {cert.skills.map((skill, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 text-sm rounded-full
                                  bg-blue-100 dark:bg-blue-900/30
                                  text-blue-700 dark:text-blue-300
                                  border border-blue-200 dark:border-blue-800"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* View Certificate Link */}
                      {(cert.certificate) && (
                        <motion.a
                          href={cert.certificate}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-6 inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:underline"
                          whileHover={{ x: 4 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {'View Certificate'}
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Summary */}
        {/* <motion.div
          variants={itemVariants}
          className="mt-10 p-6 md:p-8 rounded-2xl
            bg-white/40 dark:bg-gray-800/40
            backdrop-blur-sm border border-blue-100 dark:border-blue-900"
        >
          <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 dark:from-blue-300 dark:to-blue-500 bg-clip-text text-transparent mb-6 flex items-center gap-3">
            <BookOpen className="w-8 h-8" />
            Continuous Learning
          </h3>
          <div className="prose prose-blue dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              These certifications represent my commitment to continuous learning and professional development.
              Each credential validates my expertise in specific domains while demonstrating my ability to
              adapt to new technologies and methodologies. I believe in keeping my skills current and
              relevant to deliver the best possible solutions in this rapidly evolving tech landscape.
            </p>
          </div>
        </motion.div> */}
      </motion.div>
    </section>
  );
}
