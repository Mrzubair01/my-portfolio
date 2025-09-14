import React from "react";
import { motion } from "framer-motion";
import { socials } from "../constants";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden"
    >
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold text-center mb-16"
      >
        <span className="text-sky-500 dark:text-rose-800">Get in Touch</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative backdrop-blur-xl border-4 border-gray-800 p-10 rounded-3xl shadow-2xl max-w-lg text-center "
      >
        <p className="text-lg md:text-xl mb-10 text-slate-700 dark:text-gray-200">
          I’m always open to new opportunities, collaborations, or just a
          friendly chat. Let’s build something{" "}
          <span className="text-sky-500 dark:text-rose-800 font-semibold">
            amazing
          </span>{" "}
          together!
        </p>

        <div className="flex gap-6 justify-center flex-wrap">
          {socials.map((social, i) => (
            <motion.a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className={`${social.color} w-16 h-16 flex items-center justify-center rounded-full shadow-lg hover:shadow-2xl transition`}
            >
              <img src={social.icon} alt={social.name} className="w-8 h-8 " />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
