import React from "react";
import about from "../assets/img/about_img.jpg";
import circuit from "../assets/svg/circuit.svg";
import circuit_right from "../assets/svg/circuit_right.svg";

import { motion } from "framer-motion";
import TitleAnimation from "./TitleAnimation";
import { roadmap } from "../constants";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <section className="w-full relative ">
      <div id="roadmap" className=" max-w-6xl mx-auto py-20">
        <TitleAnimation firstText="STEPS" secondText="ROADMAP" />

        <motion.div
          className="space-y-7 mt-7"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {roadmap.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-start md:items-center gap-6 bg-blue-500/10 p-6 rounded-lg shadow-lg"
              variants={itemVariants}
            >
              <div className="w-12 h-12 flex-shrink-0 bg-blue-500 rounded-full flex items-center justify-center text-lg font-bold">
                {index + 1}
              </div>
              <div>
                <h3 className="text-2xl text-white font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-blue-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <img
        src={circuit}
        className="absolute -top-24 left-0 h-1/1 w-auto opacity-[0.03]"
        alt=""
      />
    </section>
  );
};

export default About;
