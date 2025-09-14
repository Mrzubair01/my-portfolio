import React, { useState } from "react";
import "../menu.style.css";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "../constants";
import DarkBtn from "./DarkBtn";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.5,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.06,
        staggerDirection: -1,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: 40, scale: 0.98 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 160, damping: 22 },
    },
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between backdrop-blur-md items-center px-8 py-4 z-51 dark:text-white ">
      <div className=" font-[rillosta] text-4xl sm:text-5xl ">
        <a
          href="/"
          className=" cursor-pointer px-2 text-transparent dark:bg-[url(/assets/background/bg-logo-dark.webp)] 
          bg-[url(/assets/background/bg-logo-light.jpg)]
          bg-clip-text bg-cover bg-center transition duration-300  hover:brightness-80 dark:hover:brightness-120 "
        >
          Mohd Zubair
        </a>
      </div>

      <div className="menu flex gap-2 items-center">
        <div className="hidden lg:block">
          <ul className="flex gap-5 items-center font-[roman-wood] tracking-wide font- text-xl px-4 font-semibold">
            {navItems.map((item) => (
              <li key={item.id}>
                <motion.a
                  href={item.path}
                  className="transition-colors dark:hover:text-rose-800 hover:text-sky-500 cursor-pointer  text-2xl font-normal mx-2 inline-block hover:text-shadow-sky-800 hover:text-shadow-xs dark:hover:text-shadow-rose-800"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              </li>
            ))}
          </ul>
        </div>
        <DarkBtn />

        <div
          id="nav-icon4"
          onClick={() => toggleMenu()}
          className={`${
            isOpen ? "open" : ""
          } z-50  items-center justify-center flex lg:hidden cursor-pointer  `}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="overlay"
              className="absolute top-0 right-0 h-screen w-full flex flex-col items-center justify-center dark:bg-black bg-white z-40"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
            >
              <div className="flex flex-col items-end justify-center h-[80%] w-[90%] rounded-4xl p-5 border-2 dark:border-rose-800 border-sky-500 pr-10">
                <h2 className="md:text-6xl text-4xl font-bold mb-2 font-[roman-wood] tracking-wider">
                  Menu
                </h2>
                <hr className="w-full border border-gray-500" />
                <motion.ul
                  className="flex flex-col items-end justify-center h-full gap-5 font-[roman-wood] tracking-wide"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {navItems.map((item) => (
                    <motion.li
                      key={item.id}
                      variants={linkVariants}
                      className="list-none"
                    >
                      <motion.a
                        href={item.path}
                        className="transition-colors dark:hover:text-rose-800 hover:text-sky-500 cursor-pointer md:text-5xl text-3xl font-normal inline-block hover:text-shadow-sky-800 hover:text-shadow-xs dark:hover:text-shadow-rose-800"
                        onClick={toggleMenu}
                        whileHover={{ scale: 1.2, x: -10 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item.name}
                      </motion.a>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Nav;
