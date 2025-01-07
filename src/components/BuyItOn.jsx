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
        id="#launch-app"
        className="relative max-w-6xl mx-auto flexColCenter gap-12 py-14 md:py-24"
      >
        <TitleAnimation firstText="REDIRECT" secondText="LAUNCH APP" />
        <div className="text-blue-200 text-2xl text-500">Coming Soon</div>
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
