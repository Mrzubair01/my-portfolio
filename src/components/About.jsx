import React from "react";
import { motion } from "framer-motion";
import myImage from "../../public/assets/images/myImage.png";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex items-center justify-center  text-slate-700 dark:text-white overflow-hidden px-6 py-20"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 z-10 ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative bg-gray-100 dark:bg-gray-800 border-4 border-gray-800  p-4 rounded-xl shadow-2xl"
        >
          {/* Paperclip Animation */}
          <motion.div
            initial={{ rotate: -10 }}
            animate={{ rotate: [-10, 10, -10] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 left-6 w-10 h-16 border-4 border-gray-800 rounded-lg bg-transparent"
          ></motion.div>

          {/* Image with Polaroid Effect */}
          <div className="relative bg-white dark:bg-gray-900 p-2 rounded-lg shadow-lg ">
            <img
              src={myImage}
              alt="Mohd Zubair Alam"
              className="w-56 h-72 object-cover rounded-md shadow-lg "
            />
            <p className="mt-3 text-center text-sm text-gray-600 dark:text-gray-400 italic">
              “Full-Stack Developer”
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="backdrop-blur-lg bg-white/5 p-8 md:p-12 rounded-3xl shadow-2xl max-w-3xl text-center border-4 border-gray-800"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Who is{" "}
            <span className="dark:text-rose-800 text-sky-500 ">
              Mohd Zubair Alam
            </span>
            ?
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-slate-700 dark:text-white">
            I’m a{" "}
            <span className="text-sky-400 font-semibold">
              Full-Stack Web Developer
            </span>{" "}
            driven by a passion for turning complex ideas into seamless digital
            experiences. With hands-on expertise in the{" "}
            <span className="text-rose-400 font-semibold">MERN stack</span>, I
            specialize in building{" "}
            <span className="text-purple-400 font-semibold">scalable</span>,{" "}
            <span className="text-sky-400 font-semibold">responsive</span>, and{" "}
            <span className="text-rose-400 font-semibold">
              high-performance
            </span>{" "}
            applications that don’t just work—but make an impact.
            <br />
            <br />
            My mission is simple yet powerful: to craft software that{" "}
            <span className="italic">delivers excellence</span>,{" "}
            <span className="italic">solves real-world problems</span>, and{" "}
            <span className="italic">creates memorable user experiences</span>.
          </p>

          {/* Teaser Line */}
          <p className="mt-6 text-lg font-medium text-gray-600 dark:text-gray-300 italic">
            I’ve built a lot of cool stuff — check them out below!
          </p>

          <div className="mt-8 flex gap-4 justify-center text-white">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 text-lg font-semibold rounded-xl bg-gradient-to-r from-purple-400 to-pink-600 shadow-lg hover:shadow-2xl transition duration-300"
            >
              View My Projects
            </motion.a>

            <motion.a
              href="#skills"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 text-lg font-semibold rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 shadow-lg hover:shadow-2xl transition duration-300"
            >
              Explore My Skills
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
