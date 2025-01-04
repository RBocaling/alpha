import React from "react";
import { future, tokenomics, tokenomics_btns } from "../constants";
import { motion } from "framer-motion";
import TitleAnimation from "./TitleAnimation";

const Tokenomics = () => {
  return (
    <section id="toknomics" className="w-full mt-12">
      <div
        id="toknomics_child"
        className="relative max-w-6xl mx-auto flexColCenter gap-12 py-14 md:py-24"
      >
        <TitleAnimation firstText=" Buy Token" secondText="Tokenomics" />
        <div className="relative flexColCenter gap-12 z-20">
          {tokenomics.map((item, index) => (
            <motion.div
              initial={{ y: 0, opacity: 0 }}
              whileInView={{ y: [-25, 0], opacity: 1 }}
              transition={{ duration: 1 }}
              key={index}
              className="flexColCenter"
            >
              <h1 className="text-blue-500 text-2xl sm:text-4xl md:text-6xl font-bold mb-3">
                {item.value}
              </h1>
              <span className="text-white text-lg md:text-xl font-semibold">
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>
        <div className="relative flex flex-col md:flex-row gap-5 mt-7 z-20 w-full px-20">
          {tokenomics_btns.map((item, index) => (
            <motion.a
              initial={{ y: 0, opacity: 0 }}
              whileInView={{ y: [25, 0], opacity: 1 }}
              transition={{ duration: 1 }}
              key={index}
              href={item.url}
              className="w-full md:w-1/2 text-xl md:text-2xl  tracking-wider text-white text-center bg-gradient-to-r from-blue-700 to-blue-500 rounded-full py-4"
            >
              {item.label}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
