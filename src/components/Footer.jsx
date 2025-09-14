import React from "react";
import { motion } from "framer-motion";
import { socials } from "../constants";

const Footer = () => {
  return (
    <footer className="relative w-full py-5 px-6  border-t border-gray-300 dark:border-gray-600">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-sm text-gray-600 dark:text-gray-200 font-semibold text-center md:text-right"
        >
          © {new Date().getFullYear()} Mohd Zubair Alam. All rights reserved.
        </motion.p>
        <div className="flex gap-5">
          {socials.map((social, i) => (
            <motion.a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className={`bg-gray-800 dark:bg-gray-700 w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:shadow-xl transition`}
            >
              <img
                src={social.icon}
                alt={social.name}
                className="w-5 h-5 filter "
              />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
