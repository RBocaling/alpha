import React from "react";
import { future } from "../constants";
import { motion } from "framer-motion";
import circuit_right from "../assets/svg/circuit_right.svg";
import TitleAnimation from "./TitleAnimation";
import circuit from "../assets/svg/circuit.svg";

const BuyItOn = () => {
  return (
    <section className="w-full relative ">
      <div
        id="buyiton"
        className="relative max-w-6xl mx-auto flexColCenter gap-12 py-14 md:py-24"
      >
        <TitleAnimation firstText="Buy Now" secondText=" Buy It On" />
        <div className="relative flex flex-wrap justify-center z-[999] px-5">
          {future.map((item, index) => (
            <motion.div
              initial={{ y: 0, opacity: 0 }}
              whileInView={{ y: [-25, 0], opacity: 1 }}
              transition={{ duration: 1 }}
              key={index}
              className="w-1/3 lg:w-1/5 xl:w-1/7 p-2 md:p-2 "
            >
              <a href={item.url}>
                <img
                  src={item.img}
                  alt="logo"
                  className="w-full mx-auto hover:scale-[1.05] duration-300 transition-all ease-in-out"
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
      <img
        src={circuit_right}
        className="absolute right-0 -top-32 h-full w-auto opacity-[0.04]"
        alt=""
      />
      <img
        src={circuit}
        className="absolute top-32 left-0 h-1/1 w-auto opacity-[0.03]"
        alt=""
      />
    </section>
  );
};

export default BuyItOn;
