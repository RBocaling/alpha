import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Tagline from "./components/Tagline";
import BuyItOn from "./components/BuyItOn";
import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import ScrollButton from "./components/ScrollButton";
import Twitter from "./components/Twitter";

const App = () => {
  console.log(window.scrollY);
  return (
    <main className="relative overflow-x-hidden">
      <Header />
      <Hero />
      <Tagline />
      <About />
      <BuyItOn />
      <Banner />
      <Twitter />
      <Contact />
      <ScrollButton />

      <video
        className="fixed top-0 left-0 w-full opacity-[0.03]"
        src="/bg.mp4"
        autoPlay
        loop
        muted
        poster="path/to/fallback-image.jpg"
      />
    </main>
  );
};

export default App;
