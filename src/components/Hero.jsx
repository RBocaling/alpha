import circuit from "../assets/svg/circuit.svg";
import circuit_right from "../assets/svg/circuit_right.svg";
import hero from "/hero.png";
import Typical from "react-typical";
import {
  FaAsterisk,
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="w-full relative z-20">
      <div
        id="hero"
        className="relative max-w-7xl mx-auto flexColCenter  mt-12 z-20"
      >
        <div className="max-w-5xl w-full mx-auto px-5 md:px-14">
          <motion.h1
            initial={{ x: -25 }}
            animate={{ x: -5 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl text-white font-semibold flex justify-center gap-4"
          >
            <Typical
              steps={["Cutting-Edge AI", 1000]}
              loop={Infinity}
              wrapper="p"
              className="text-stroke text-5xl md:text-7xl"
            />
          </motion.h1>
        </div>
        <div className="relative  w-full mt-10">
          <motion.div
            initial={{ y: 0, scale: 1, opacity: 0 }}
            animate={{ y: [25, 0], scale: [0.5, 1], opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative hero_img w-full  md:w-[55%] mx-auto z-20"
          >
            <img src={hero} className="relative w-full mx-auto z-[99]" alt="" />
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-[50%] rounded-full border-[#1fb4ff] border-l border-dashed">
              {""}
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-[50%] rounded-full border-[#ff231f] border-r border-dashed">
              {""}
            </div>
          </motion.div>
          <img
            src="/banner.png"
            className="absolute -bottom-20 md:-bottom-40 left-1/2 -translate-x-1/2 opacity-10 w-full md:w-2/3"
            alt=""
          />
        </div>

        <motion.div
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: [-25, 0], opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="hidden  max-w-[220px] w-full  absolute top-[35%] left-14 md:flex flex-col items-end gap-5"
        >
          <a
            href=""
            className="text-2xl text-blue-500 tracking-wide font-medium flex items-center gap-2"
          >
            <FaXTwitter className="text-blue-300" />
            Follow Twitter
          </a>
        </motion.div>
        {/* <motion.div
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: [25, 0], opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="hidden  max-w-[220px] w-full  absolute top-[35%] right-14 md:flex flex-col items-end gap-5"
        >
          <a href="/" className="p-5 rounded-full bg-[rgba(70,71,72,0.5)]">
            <FaTwitter size={25} className="text-[#285ff7]" />
          </a>
          <a href="/" className="p-5 rounded-full bg-[rgba(70,71,72,0.5)]">
            <FaTelegramPlane size={25} className="text-[#285ff7]" />
          </a>
          <a href="/" className="p-5 rounded-full bg-[rgba(70,71,72,0.5)]">
            <FaInstagram size={25} className="text-[#285ff7]" />
          </a>
        </motion.div> */}

        {/* <motion.div
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: [25, 0], opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="hidden md:flexColStart max-w-[320px] w-full  absolute bottom-1/3 -right-5 z-20"
        >
          <h1 className="text-2xl text-white font-bold mb-4 tracking- whitespace-nowrap">
            Why Choose <span className="text-blue-500 text-3xl">Alpha?</span>
          </h1>
          <ul className="list-disc pl-8 space-y-2 text-lg text-gray-800 w-full">
            <li className="text-blue-300">
              <span className="font-bold text-blue-600">
                Real-Time Crypto Coverage:
              </span>{" "}
              Stay ahead with up-to-the-second updates and market trends.
            </li>
            <li className="text-blue-300">
              <span className="font-bold text-blue-600">
                AI-Powered Insights:
              </span>{" "}
              Automated precision to keep you informed and empowered.
            </li>
            <li className="text-blue-300">
              <span className="font-bold text-blue-600">
                Innovative Solutions:
              </span>{" "}
              Redefining financial strategies with technology at the core.
            </li>
            <li className="text-blue-300">
              <span className="font-bold text-blue-600">Global Reach:</span>{" "}
              Connecting you to opportunities in a dynamic and decentralized
              world.
            </li>
          </ul>
        </motion.div> */}

        {/* mobile introducing */}
        {/* <div className="md:hidden mt-20 w-full flexColCenter relative z-20">
          <h1 className="text-2xl text-white font-bold mb-4 tracking- whitespace-nowrap">
            Why Choose <span className="text-blue-500 text-3xl">Alpha?</span>
          </h1>
          <ul className="list-disc pl-8 space-y-2 text-lg text-gray-800 w-full">
            <li className="text-blue-300">
              <span className="font-bold text-blue-600">
                Real-Time Crypto Coverage:
              </span>{" "}
              Stay ahead with up-to-the-second updates and market trends.
            </li>
            <li className="text-blue-300">
              <span className="font-bold text-blue-600">
                AI-Powered Insights:
              </span>{" "}
              Automated precision to keep you informed and empowered.
            </li>
            <li className="text-blue-300">
              <span className="font-bold text-blue-600">
                Innovative Solutions:
              </span>{" "}
              Redefining financial strategies with technology at the core.
            </li>
            <li className="text-blue-300">
              <span className="font-bold text-blue-600">Global Reach:</span>{" "}
              Connecting you to opportunities in a dynamic and decentralized
              world.
            </li>
          </ul>
          <div className="  max-w-[220px] w-full   flexCenter gap-5 mt-10 relative z-20">
            <motion.a
              initial={{ x: 0, opacity: 0 }}
              whileInView={{ x: [-25, 0], opacity: 1 }}
              transition={{ duration: 1 }}
              href="/"
              className="p-3 rounded-full bg-[rgba(70,71,72,0.5)]"
            >
              <FaTwitter size={25} className="text-[#285ff7]" />
            </motion.a>
            <motion.a
              initial={{ x: 0, opacity: 0 }}
              whileInView={{ x: [25, 0], opacity: 1 }}
              transition={{ duration: 1 }}
              href="/"
              className="p-3 rounded-full bg-[rgba(70,71,72,0.5)]"
            >
              <FaTelegramPlane size={25} className="text-[#285ff7]" />
            </motion.a>
            <motion.a
              initial={{ x: 0, opacity: 0 }}
              whileInView={{ x: [25, 0], opacity: 1 }}
              transition={{ duration: 1 }}
              href="/"
              className="p-3 rounded-full bg-[rgba(70,71,72,0.5)]"
            >
              <FaInstagram size={25} className="text-[#285ff7]" />
            </motion.a>
          </div>
        </div> */}
      </div>
      <img
        src={circuit}
        className="absolute -top-24 left-0 h-1/1 w-auto opacity-[0.03]"
        alt=""
      />
      <img
        src={circuit_right}
        className="absolute right-0 -top-24 h-1/2 w-auto opacity-[0.04]"
        alt=""
      />

      <video
        className="absolute -top-32 left-0 w-full opacity-10 "
        src="/main-bg.mp4"
        autoPlay
        loop
        muted
        poster="path/to/fallback-image.jpg"
      />
    </section>
  );
};

export default Hero;
