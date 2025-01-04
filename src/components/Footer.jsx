import React from "react";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <motion.p
      initial={{ y: 0, opacity: 0 }}
      whileInView={{ y: [25, 0], opacity: [0, 1] }}
      transition={{ duration: 1, delay: 1.5 }}
      className="text-white textbase text-center tracking-wider mt-12 pb-7"
    >
      Copyright © 2024. All rights reserved.
    </motion.p>
  );
};

export default Footer;
