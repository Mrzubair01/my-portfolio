import React from "react";
import { motion } from "framer-motion";
import { skills } from "../constants";

const orbitVariants = {
  animate: {
    rotate: 360,
    transition: {
      repeat: Infinity,
      duration: 40,
      ease: "linear",
    },
  },
};
const categories = {
  Frontend: [
    "HTML",
    "CSS",
    "Sass",
    "Bootstrap",
    "TailwindCSS",
    "JavaScript",
    "JQuery",
    "React.js",
    "Redux Toolkit",
    "TypeScript",
    "Next.js",
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "SQL",
    "Redis",
    "Firebase",
    "Appwrite",
  ],
  Tools: [
    "Git",
    "GitHub",
    "NPM",
    "Cloudinary",
    "VSCode",
    "Postman",
    "Figma",
    "Imagekit",
    "Vercel",
    "Render",
    "Netlify",
  ],
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative w-full min-h-screen flex flex-col  items-center gap-10 px-6 py-20 text-center text-slate-700 dark:text-white overflow-hidden"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold mb-16"
      >
        <span className="text-sky-500 dark:text-rose-800">Skills Universe</span>
      </motion.h2>

      <div className="relative w-[80vw] max-w-[500px] aspect-square flex items-center  justify-center mx-auto">
        {/* Central Core */}
        <div className="absolute w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 dark:bg-gradient-to-r dark:from-purple-500 dark:to-pink-600 flex items-center justify-center text-white font-bold shadow-2xl text-sm sm:text-base md:text-lg">
          Skills
        </div>

        {/* Orbit 1 */}
        <motion.div
          variants={orbitVariants}
          animate="animate"
          className="absolute w-[60vw] max-w-[350px] aspect-square border border-dashed border-sky-500 rounded-full flex items-center justify-center"
        >
          {skills.slice(0, 8).map((skill, i) => (
            <motion.div
              key={i}
              className="absolute w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center bg-white dark:bg-gray-700 rounded-full shadow-lg hover:cursor-pointer transition"
              style={{
                transform: `rotate(${
                  (i * 360) / 8
                }deg) translate(clamp(100px, 30vw, 175px)) rotate(-${
                  (i * 360) / 6
                }deg)`,
              }}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Orbit 2 */}
        <motion.div
          variants={orbitVariants}
          animate="animate"
          transition={{ duration: 60 }}
          className="absolute w-[80vw] max-w-[500px] aspect-square border border-dashed border-rose-800 rounded-full flex items-center justify-center"
        >
          {skills.slice(8, 22).map((skill, i) => (
            <motion.div
              key={i}
              className="absolute w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center bg-white dark:bg-gray-700 rounded-full shadow-lg hover:cursor-pointer"
              style={{
                transform: `rotate(${
                  (i * 360) / 14
                }deg) translate(clamp(130px, 40vw, 250px)) rotate(-${
                  (i * 360) / 8
                }deg)`,
              }}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full mt-10">
        {Object.entries(categories).map(([category, items], idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="backdrop-blur-lg bg-white/10 dark:bg-gray-900/30 p-8 rounded-2xl shadow-2xl border-4 border-gray-800 hover:scale-105 transition-transform"
          >
            <h3 className="text-xl font-bold mb-6 text-sky-500 dark:text-rose-800">
              {category}
            </h3>
            <ul className="flex flex-wrap gap-3">
              {items.map((skill, i) => (
                <li
                  key={i}
                  className="px-4 py-2 text-sm rounded-full dark:bg-gradient-to-r dark:from-purple-500 dark:to-pink-600 bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
