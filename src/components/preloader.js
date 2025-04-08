import { motion } from "framer-motion";
import React from "react";

const preloaderVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  hidden: {
    opacity: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 bg-white h-screen flex justify-center items-center z-50"
      initial="visible"
      animate="visible"
      exit="hidden"
      variants={preloaderVariants}
    >
      <div className="flex space-x-3">
        <motion.span
          className="w-5 h-5 bg-custom-blue rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [1, 0],
            rotate: [0, 360],
            transition: { duration: 1, repeat: Infinity },
          }}
        />
        <motion.span
          className="w-5 h-5 bg-custom-blue rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [1, 0],
            rotate: [0, 360],
            transition: { duration: 1, repeat: Infinity, delay: 0.2 },
          }}
        />
        <motion.span
          className="w-5 h-5 bg-custom-blue rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [1, 0],
            rotate: [0, 360],
            transition: { duration: 1, repeat: Infinity, delay: 0.4 },
          }}
        />
      </div>
    </motion.div>
  );
}

export default Preloader;