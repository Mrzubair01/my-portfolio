import React from "react";
import { motion } from "framer-motion";
import { projects } from "../constants";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 py-20 text-slate-700 dark:text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold mb-16 text-center"
      >
        <span className="dark:text-rose-800 text-sky-500">My Projects</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-7xl w-full">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.05, rotate: "-1deg" }}
            className="relative rounded-2xl backdrop-blur-sm  bg-white/10  dark:text-white 
             shadow-xl overflow-hidden border-4 border-gray-800 "
          >
            <div className="absolute w-8 h-8 bg-rose-800 border-4 border-gray-800 rounded-full -top-4 left-10"></div>
            <div className="absolute w-8 h-8 bg-sky-500 border-4 border-gray-800 rounded-full -bottom-4 right-10"></div>

            <img
              src={project.image}
              alt={project.title}
              className="w-full h- object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold ">{project.title}</h3>
              <p className="text-gray-400 mt-2">{project.description}</p>
            </div>

            <div className="flex justify-between items-center px-6 py-4 border-t-2 border-gray-800">
              <a
                href={project.github}
                className="text-sky-500 font-semibold hover:tracking-widest"
              >
                GitHub
              </a>
              <a
                href={project.live}
                className="text-rose-800 font-semibold hover:tracking-widest "
              >
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        whileHover={{ scale: 1.1, rotate: "1deg" }}
        className="relative w-full max-w-2xl mx-auto mt-12 rounded-2xl 
            backdrop-blur-lg dark:text-white shadow-xl overflow-hidden 
            border-4 border-gray-800 cursor-pointer"
      >
        <div className="absolute w-10 h-10 bg-rose-800 border-4 border-gray-800 rounded-full -top-5 left-16"></div>
        <div className="absolute w-10 h-10 bg-sky-500 border-4 border-gray-800 rounded-full -bottom-5 right-16"></div>

        <a
          href="https://github.com/Mrzubair01"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col md:flex-row items-center justify-between px-8 py-6"
        >
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-wide">
            More Projects
          </h3>
          <p className="text-gray-300 text-sm md:text-base mt-2 md:mt-0">
            Explore all my work on{" "}
            <span className="font-semibold text-sky-500">GitHub</span> 🚀
          </p>
        </a>

        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-sky-500 to-rose-800"></div>
      </motion.div>
    </section>
  );
};

export default Projects;
