import { motion } from "framer-motion";
import { FaLinkedin, FaDownload } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-12 text-slate-700 dark:text-white overflow-hidden"
    >
      {/* Background Glow Effect */}
      <div className="fixed -top-32 -left-32 w-96 h-96 bg-sky-600/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed -bottom-32 -right-32 w-96 h-96 bg-rose-600/40 rounded-full blur-3xl animate-pulse"></div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="z-10"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Hi, I’m{" "}
          <span className="dark:text-rose-800 text-sky-500 block md:inline font-[brexon] font-thin tracking-wide">
            Mohd Zubair Alam
          </span>
        </h1>

        <span className="bg-gradient-to-r from-sky-400 via-purple-500 to-rose-500 bg-clip-text text-transparent  font-bold">
          <Typewriter
            words={[
              "⚡ Full-Stack Developer specializing in MERN.",
              "🚀 I build seamless backends & responsive frontends.",
              "💡 Passionate about impactful digital experiences.",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeColor=""
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={2000}
          />
        </span>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-400"
        >
          <span className="text-sky-400 font-semibold">
            Passionate CSE’26 Developer
          </span>
          , I bring ideas to life through clean code and creative
          problem-solving. Skilled in{" "}
          <span className="text-rose-400 font-semibold">MERN stack</span>, I
          love building modern, responsive, and user-focused applications that
          deliver both functionality and impact.
        </motion.p>

        {/* <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-500 dark:text-white"
        >
          I specialize in building scalable, high-performance applications using
          the{" "}
          <span className="text-sky-400 dark:text-rose-800 font-semibold">
            MERN stack
          </span>
          . My focus is on crafting seamless backends, responsive frontends, and
          impactful digital experiences.
        </motion.p> */}

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-8 flex flex-wrap gap-4 justify-center text-white"
        >
          <a
            href="/resume/Mohd-Zubair-Alam_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-600 dark:hover:bg-sky-700 hover:bg-sky-500 transition font-semibold shadow-lg duration-200 border-4 border-gray-800"
          >
            <FaDownload /> Resume
          </a>
          <a
            href="https://www.linkedin.com/in/mohd-zubair-alam/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-rose-600 dark:hover:bg-rose-700 hover:bg-rose-500 transition font-semibold shadow-lg duration-200 border-4 border-gray-800"
          >
            <FaLinkedin /> Connect on LinkedIn
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
