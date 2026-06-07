import { motion } from "framer-motion";
import photo from "/hero.png";
import resume from "/RajaRajeswariJavvadi_SoftwareEngineer_Resume.pdf";
import "../styles/home.css";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    const link = document.createElement("link");

    link.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap";

    link.rel = "stylesheet";

    document.head.appendChild(link);

    return () => document.head.removeChild(link);
  }, []);

  return (
    <section
      id="home"
      className="relative section-container flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-80px)] px-6 md:px-16 lg:px-24 py-36 gap-1 overflow-hidden scroll-mt-20"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-gray-50/70 to-transparent dark:via-indigo-950/40 blur-3xl"></div>

      <HeroImage />
      <HeroText />
    </section>
  );
}

export default Home;

// ================= HERO IMAGE =================

const HeroImage = () => (
  <motion.div
    className="relative flex justify-center items-center w-full md:w-1/2 cursor-pointer"
    initial={{ opacity: 0, y: 40, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 1.1 }}
  >
    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-cyan-400/10 to-transparent blur-3xl opacity-60 -z-10 rounded-3xl"></div>

    <img
      src={photo}
      alt="Raja Rajeswari Javvadi"
      draggable="false"
      loading="eager"
      width={460}
      height={460}
      onContextMenu={(e) => e.preventDefault()}
      className="rounded-[2.5rem] object-cover object-top aspect-square w-full sm:w-[360px] md:w-[420px] lg:w-[460px] shadow-2xl shadow-blue-500/30 dark:shadow-cyan-900/50 transition-all duration-500 hover:scale-[1.03] select-none ring-2 ring-blue-300/40 dark:ring-indigo-400/30"
    />
  </motion.div>
);

// ================= HERO TEXT =================

const HeroText = () => (
  <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left w-full md:w-1/2 gap-6 md:gap-7">
    <GreetingText />

    <IntroduceText />

    <MainText />

    <motion.div
      className="flex flex-wrap justify-center md:justify-start mt-2 gap-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
    >
      <AnchorButton text="View Projects" href="#projects" primary />

      <AnchorButton text="Download Resume" href={resume} />
    </motion.div>
  </div>
);

// ================= GREETING TEXT =================

const GreetingText = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-2"
    >
      {/* Hi I'm Text */}
      <h1 className="font-[Poppins] font-bold leading-tight text-5xl md:text-6xl lg:text-7xl text-gray-900 dark:text-white">
        Hi, I'm
      </h1>

      {/* Name */}
      <h1 className="font-[Poppins] font-extrabold leading-[1.25] text-6xl md:text-7xl lg:text-8xl">
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 dark:from-indigo-400 dark:via-sky-300 dark:to-cyan-200">
          Raja
        </span>

        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 dark:from-indigo-400 dark:via-sky-300 dark:to-cyan-200">
          Rajeswari
        </span>
      </h1>
    </motion.div>
  );
};
// ================= INTRO TEXT =================

const IntroduceText = () => {
  const parent = {
    initial: { opacity: 0 },

    animate: {
      opacity: 1,

      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4,
      },
    },
  };

  const child = {
    initial: { opacity: 0, y: 10 },

    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.p
      variants={parent}
      initial="initial"
      animate="animate"
      className="font-[Inter] text-xl md:text-2xl lg:text-3xl font-medium leading-snug tracking-tight text-gray-800 dark:text-gray-200 max-w-2xl"
    >
      <motion.span variants={child}>Building </motion.span>

      <motion.span
        variants={child}
        className="text-blue-600 dark:text-cyan-300 font-semibold"
      >
        modern AI-powered
      </motion.span>

      <motion.span variants={child}> applications as a </motion.span>

      <motion.span
        variants={child}
        className="text-indigo-600 dark:text-indigo-300 font-semibold"
      >
        Full Stack Developer
      </motion.span>

      <motion.span variants={child}> & </motion.span>

      <motion.span
        variants={child}
        className="text-indigo-600 dark:text-indigo-300 font-semibold"
      >
        AI/ML Enthusiast.
      </motion.span>
    </motion.p>
  );
};

// ================= MAIN DESCRIPTION =================

const MainText = () => {
  const parent = {
    initial: { opacity: 0, y: 20 },

    animate: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.9,
        delay: 0.7,
      },
    },
  };

  const content =
    "Aspiring Software Engineer passionate about building scalable web applications, AI-driven solutions, and modern user experiences. Skilled in MERN Stack, Generative AI, RAG systems, and frontend development with hands-on experience in real-world projects and internships.";

  return (
    <motion.p
      variants={parent}
      initial="initial"
      animate="animate"
      className="font-[Inter] lg:text-xl md:text-lg font-normal leading-relaxed text-gray-700 dark:text-gray-400 max-w-2xl"
    >
      {content}
    </motion.p>
  );
};

// ================= BUTTON COMPONENT =================

const AnchorButton = ({ text, href, primary }) => (
  <motion.a
    href={href}
    target={text.includes("Resume") ? "_blank" : undefined}
    rel={text.includes("Resume") ? "noopener noreferrer" : undefined}
    className={`font-[Inter] relative px-8 py-3 rounded-full font-semibold tracking-wide transition-all duration-300 text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer
      ${
        primary
          ? "text-white bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 focus:ring-blue-400 dark:from-indigo-500 dark:to-cyan-400"
          : "text-gray-700 dark:text-cyan-300 bg-transparent ring-1 ring-gray-300 dark:ring-cyan-900 hover:bg-gray-100 dark:hover:bg-cyan-900/30 focus:ring-cyan-300"
      }`}
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 1.2 }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.96 }}
  >
    {text}
  </motion.a>
);