import React, { memo, useEffect, useState } from "react";
import logo from "../assets/logo.png";
import SearchInput from "./SearchInput";
import mainSlider1 from "../assets/main-slider-1.jpg";
import mainSlider2 from "../assets/main-slider-2.jpg";
import mainSlider3 from "../assets/main-slider-3.jpg";
import { AnimatePresence, motion } from "framer-motion";
import NavItem from "./NavItem";

const NavComponent = memo(() => {
  const images = [mainSlider1, mainSlider2, mainSlider3];

  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <nav>
      <div className=" flex justify-between items-center w-full mx-auto fixed top-0 left-0 z-50 bg-white px-4 py-6">
        <div className="w-10/12 mx-auto flex justify-between items-center">
        <img src={logo} alt="logo.png" className="" />
        <div className="flex gap-20 text-base">
          <NavItem>Home</NavItem>
          <NavItem>Destinations</NavItem>
          <NavItem>About</NavItem>
          <NavItem>Contact</NavItem>
        </div>
        <SearchInput />
      </div>
      </div>
      <AnimatePresence>
        <div className="h-[550px] w-full overflow-hidden">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            className="h-full w-screen object-cover"
            alt="imageSlider.png"
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            exit={{ scale: 1, opacity: 0 }} 
            transition={{ duration: 1, ease: "easeInOut" }}
          />

          <div className="absolute bottom-56 left-[400px] ">
            <motion.h1
              key={`title_${currentIndex}`}
              className="font-goldenHopes text-9xl text-myOrange font-semibold"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              Travel & Adventures
            </motion.h1>
            <motion.h1
              key={`subtitle_${currentIndex}`}
              className="absolute left-[150px] text-4xl text-white font-semibold"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              Where Would You Like To Go
            </motion.h1>
          </div>
        </div>
      </AnimatePresence>
    </nav>
  );
});

export default NavComponent;
