import React from "react";
import { motion } from "framer-motion";
import circuit_right from "../assets/svg/circuit_right.svg";

const Tagline = () => {
  return (
    <section id="tagline" className="relative w-full mt-20 ">
      <div className="text-center text-white">
        <h1 className="text-5xl font-extrabold tracking-wide mb-4">
          Empowering Financial Innovation with{" "}
          <span className="text-blue-500">Cutting-Edge Technology</span>
        </h1>
        <p className="text-2xl font-semibold">
          Stay Ahead with{" "}
          <span className="text-blue-500">Real-Time Crypto Insights</span> and
          Revolutionary Solutions
        </p>
      </div>

      <img
        src={circuit_right}
        className="absolute right-0 -top-24 h-full w-auto opacity-[0.04]"
        alt=""
      />
    </section>
  );
};

export default Tagline;
