import React from "react";
import { motion } from "framer-motion";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
import circuit_right from "../assets/svg/circuit_right.svg";
import circuit from "../assets/svg/circuit.svg";
import Footer from "./Footer";
import TitleAnimation from "./TitleAnimation";
import { navlinks } from "../constants";
import { RiArrowUpWideFill } from "react-icons/ri";

const Contact = () => {
  return (
    <section className="w-full relative overflow-hidden">
      <div className="w-full flexCenter pt-5 relative  z-[99]">
        <a href="#">
          <RiArrowUpWideFill size={50} className="text-blue-500" />
        </a>
      </div>
      <div
        id="contact"
        className="relative max-w-6xl mx-auto flex flex-col md:flex-row md:items-start gap-12 pt-10 pb-10"
      >
        <div className="w-full">
          <TitleAnimation firstText="Visit At" secondText="Contact Us" />
          <motion.ul
            initial={{ y: 0, opacity: 0 }}
            whileInView={{ y: [25, 0], opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flexCenter md:flexStart gap-6 mt-16 w-full"
          >
            {navlinks.map((item, index) => (
              <li
                key={index}
                className="text-white text-xl md:text-2xl font- tracking-wide"
              >
                <a href={item.url}> {item.name}</a>
              </li>
            ))}
          </motion.ul>
        </div>
        <div className="relative flexColCenter z-[999] px-5 w-full">
          <motion.h1
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: [-25, 0], opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white text-3xl font-semibold tracking-wide mb-12"
          >
            <span className="text-4xl text-blue-500 border-b-[2px] border-blue-500">
              Alpha{" "}
            </span>
            Ai
          </motion.h1>
          <motion.a
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: [-25, 0], opacity: [0, 1] }}
            transition={{ duration: 1, delay: 1 }}
            href=""
            className="text-white text-2xl md:text-3xl font-medium tracking-wide"
          >
            @alphaaifun on twitter
          </motion.a>
          <div className="flexStart gap-7 mt-9">
            <motion.a
              initial={{ x: 0, opacity: 0 }}
              whileInView={{ x: [-25, 0], opacity: [0, 1] }}
              transition={{ duration: 1, delay: 1.5 }}
              href="/"
              className="flexCenter gap-3 "
            >
              <FaTwitter size={30} className="text-[#285ff7]" />
              <p className="text-xl text-white tracking-wide">Twitter</p>
            </motion.a>
            <motion.a
              initial={{ x: 0, opacity: 0 }}
              whileInView={{ x: [25, 0], opacity: [0, 1] }}
              transition={{ duration: 1, delay: 1.5 }}
              href="/"
              className="flexCenter gap-3 "
            >
              <FaTelegramPlane size={30} className="text-[#285ff7]" />
              <p className="text-xl text-white tracking-wide">Telegram</p>
            </motion.a>
          </div>
        </div>
      </div>
      <Footer />
      <img
        src={circuit}
        className="absolute top-0 left-0 h-1/2 md:h-full w-auto opacity-[0.03]"
        alt=""
      />
      <img
        src={circuit_right}
        className="absolute right-0 top-1/2 -translate-y-1/2 h-1/2 md:h-full w-auto opacity-[0.04]"
        alt=""
      />
    </section>
  );
};

export default Contact;
