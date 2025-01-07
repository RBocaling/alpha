import React from "react";
import { motion } from "framer-motion";

const TitleAnimation = ({ firstText, secondText }) => {
  return (
    <>
      <motion.div
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ x: [-25, 0], opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative about-title w-full flexColStart px-5 md:px-0"
      >
        <motion.h1
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-25, 0], opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-stroke-transparent text-4xl md:text-5xl font-bold"
        >
          {firstText}
        </motion.h1>
        <motion.h1
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [25, 0], opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="relative title-stroke-blue text-blue-500 text-4xl md:text-5xl font-medium ml-28 -mt-5 z-[99]"
        >
          {secondText}
        </motion.h1>
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-25, 0], opacity: 1 }}
          transition={{ duration: 1, delay: 1.7 }}
          className="line absolute left-0 bottom-5 h-[2px] w-[300px] md:w-[370px] bg-blue-500"
        >
          {""}
        </motion.div>
      </motion.div>
    </>
  );
};

export default TitleAnimation;
