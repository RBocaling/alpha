import React from "react";
import about from "../assets/img/about_img.jpg";
import circuit from "../assets/svg/circuit.svg";
import circuit_right from "../assets/svg/circuit_right.svg";

import { motion } from "framer-motion";
import TitleAnimation from "./TitleAnimation";

const About = () => {
  return (
    <section className="w-full relative ">
      <div id="about" className=" max-w-7xl mx-auto py-20">
        <TitleAnimation firstText="GET INFO" secondText=" ABOUT US" />

        <div className="flexColCenter gap-7 mt-12 px-5">
          <motion.h1
            initial={{ y: 0, opacity: 0 }}
            whileInView={{ y: [-25, 0], opacity: 1 }}
            transition={{ duration: 1 }}
            className=" text-4xl md:text-5xl text-white font-bold"
          >
            Let's Talk
          </motion.h1>
          <div className="relative max-w-4xl w-full z-[99]">
            <motion.p
              initial={{ y: 0, opacity: 0 }}
              whileInView={{ y: [-25, 0], opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-center text-lg text-white tracking-wider"
            >
              Welcome to Alpha, where innovation meets the future of finance and
              technology. We specialize in delivering unparalleled, real-time
              insights into the world of crypto and blockchain. Our mission is
              to empower businesses, traders, and enthusiasts with cutting-edge
              AI solutions that revolutionize the way financial decisions are
              made.
            </motion.p>
            <div className="max-w-2xl mx-auto mt-9 flexCenter flex-wrap gap-5 px-7 md:px-0">
              <motion.button
                initial={{ x: 0, opacity: 0 }}
                whileInView={{ x: [-25, 0], opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-lg text-white font-medium bg-blue-500 px-9 py-3 rounded-lg w-full md:w-1/2"
              >
                Buy Now
              </motion.button>
              <motion.button
                initial={{ x: 0, opacity: 0 }}
                whileInView={{ x: [25, 0], opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-lg text-white font-medium border border-blue-500 px-9 py-3 rounded-lg w-full md:w-1/2"
              >
                More Info
              </motion.button>
            </div>
            <motion.div
              initial={{ y: 0, scale: 1, opacity: 0 }}
              whileInView={{ y: [-25, 0], scale: [0.8, 1], opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative  w-full mt-7 border border-blue-500 rounded-2xl"
            >
              <img
                src={about}
                alt=""
                className="relative w-full rounded-lg shaddow-xl shadow-[#1a212c] z-[99]"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
                className="absolute top-1/2 -translate-y-1/2 -left-20 w-full h-[100%] rounded-full border-[#1fb4ff] border-l border-dashed z-[98]"
              >
                {""}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
                className="absolute top-1/2 -translate-y-1/2 -right-20 w-full h-[100%] rounded-full border-[#ff231f] border-r border-dashed z-[98]"
              >
                {""}
              </motion.div>
              <div className="about_img_box">{""}</div>
            </motion.div>
          </div>
        </div>
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
