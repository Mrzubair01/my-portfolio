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
            class="relative inline-block text-lg group"
          >
            <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 dark:text-white transition-colors duration-300 ease-out border-4 border-gray-800 rounded-xl group-hover:text-white dark:group-hover:text-gray-800">
              <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-transparent"></span>
              <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-rose-700 dark:bg-sky-500 group-hover:-rotate-180 ease"></span>
              <span class="relative flex items-center gap-2">
                <FaDownload /> Resume
              </span>
            </span>
            <span
              class="absolute bottom-0 right-0 w-full  transition-all duration-200 ease-linear bg-rose-700 dark:bg-sky-500 rounded-xl group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </a>

          <a
            href="https://www.linkedin.com/in/zubair-alam-/"
            target="_blank"
            rel="noopener noreferrer"
            class="relative inline-flex items-center px-5 hover:pr-12 duration-300 ease-in-out overflow-hidden text-lg font-medium text-gray-800 hover:text-white dark:text-white border-4 border-gray-800 rounded-xl dark:hover:text-gray-800 group hover:bg-gray-50"
          >
            <span class="absolute left-0 block w-full  transition-all bg-sky-500 dark:bg-rose-700 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span class="relative flex items-center gap-2">
              <FaLinkedin /> Connect on LinkedIn
            </span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
