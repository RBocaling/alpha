import React, { useState } from "react";
import { navlinks } from "../constants";
import { RiMenu5Fill } from "react-icons/ri";
import { FaAngleRight } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import { motion } from "framer-motion";
import { GrLanguage } from "react-icons/gr";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className=" w-full overflow-x-hidden ">
      <motion.nav
        initial={{ y: -25 }}
        animate={{ y: -5 }}
        transition={{ duration: 0.5 }}
        className="relative max-w-7xl mx-auto flexBetween py-5 md:py-3  px-4 z-[998]"
      >
        <img src="/banner.png" className="w-40" alt="" />

        {/* navbar */}
        <ul className="md:flexCenter gap-6 hidden ">
          {navlinks.map((item, index) => (
            <li key={index} className="text-white text-lg font- tracking-wide">
              <a href={item.url}> {item.name}</a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flexCenter gap-7">
          <div className="flexCenter gap-3">
            <GrLanguage size={22} className="text-blue-500" />
            <p className="text-white text-sm">EN</p>
          </div>
          <button className="text-base text-blue-500 font-medium tracking-wider px-7 py-3 rounded-full border border-blue-500 shadow-lg shadow-[rgba(150,194,255,0.2)]">
            Login
          </button>
        </div>
        <button onClick={() => setIsOpen(true)} className="md:hidden">
          <RiMenu5Fill size={35} className="text-white" />
        </button>
      </motion.nav>

      {isOpen && (
        <nav
          id="mobile_nav"
          className="fixed top-0 left-0 w-screen h-screen bg-[#1c1a22] py-7 md:py-3  px-4 z-[999] duration-300 transition-all"
        >
          <div className="relative flexBetween z-[999]">
            {" "}
            <img src="/banner.png" className="w-40" alt="" />
            <div className="flex items-center gap-9">
              <div className="flexCenter gap-3">
                <GrLanguage size={22} className="text-blue-500" />
                <p className="text-white text-sm">EN</p>
              </div>
              <button onClick={() => setIsOpen(false)}>
                <LiaTimesSolid size={30} className="text-blue-500" />
              </button>
            </div>
          </div>
          {/* navbar */}
          <ul className="relative flexColCenter w-full gap-11 md:hidden mt-20 px-2 z-[999]">
            {navlinks.map((item, index) => (
              <li
                key={index}
                onClick={() => setIsOpen(false)}
                className="text-white text-2xl font- tracking-wide  "
              >
                <a
                  href={item.url}
                  className="w-full flexBetween items-center  pb-2"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="w-full px-12">
            <button className="text-base text-blue-500 font-medium tracking-wider w-full mt-20 py-3 rounded-full border border-blue-500 shadow-lg shadow-[rgba(150,194,255,0.2)]">
              Login
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
