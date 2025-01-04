import React from "react";
import banner from "../assets/img/contact.png";
import circuit from "../assets/svg/circuit.svg";
import { motion } from "framer-motion";

import circuit_right from "../assets/svg/circuit_right.svg";
const Banner = () => {
  return (
    <section id="banner" className="relative w-full ">
      <div className="text-center text-white">
        <h1 className="text-4xl font-extrabold leading-tight mb-6">
          All Tweets Powered by <span className="text-blue-500">Alpha</span>
          Revolutionizing On-Chain News and Crypto Trends
        </h1>
        <p className="text-2xl font-medium">
          Explore Real-Time Insights and Market Updates Delivered by
          <span className="text-blue-500">Real-Time Crypto Trends</span> and
          Alpha AI Agent
        </p>
      </div>

      <img
        src={circuit_right}
        className="absolute right-0 -top-12 h-1/2 md:h-full w-auto opacity-[0.04]"
        alt=""
      />
    </section>
  );
};

export default Banner;
