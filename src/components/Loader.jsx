// Loader.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = ({ onFinish }) => {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDone(true);
      if (onFinish) onFinish();
    }, 3000); // loader duration ~3s
    return () => clearTimeout(timer);
  }, [onFinish]);

  const bars = Array.from({ length: 6 });

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
        >
          {/* Staircase Animation */}
          <div className="flex space-x-2 mb-6">
            {bars.map((_, i) => (
              <motion.div
                key={i}
                className="w-3 sm:w-4 md:w-5 bg-gray-900 dark:bg-white rounded"
                initial={{ height: 8 }}
                animate={{
                  height: [8, 50, 20, 35, 8],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Loading Text */}
          <motion.p
            className="text-sm sm:text-base font-medium text-gray-600 dark:text-gray-400 tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.8] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Preparing portfolio...
          </motion.p>

          {/* Brand Reveal */}
          <motion.p
            className="mt-2 text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 1.2, delay: 0.8 }}
          >
            Mohd Zubair Alam
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
