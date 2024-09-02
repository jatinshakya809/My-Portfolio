import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { motion } from "framer-motion";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <>
      <div className="flex justify-between md:px-16 px-4 md:h-[12vh] h-[10vh] items-center">
        <div>
          <h1 className="text-2xl md:text-2xl font-bold">Jatin Shakya</h1>
        </div>
        <div
          className="md:hidden block cursor-pointer"
          onClick={() => setMobileNav(!mobileNav)}
        >
          <TiThMenu className="text-2xl" />
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-4 font-semibold text-gray-500">
            <li className="cursor-pointer hover:text-gray-500 transition-all duration-300 ease-in-out">
              Home
            </li>
            <li
              onClick={() => {
                window.location.href = "https://github.com/jatinshakya809";
              }}
              className="cursor-pointer hover:text-gray-500 transition-all duration-100 ease-in-out"
            >
              Project
            </li>
            <li
              onClick={() => {
                window.location.href =
                  "https://www.linkedin.com/in/jatin-shakya";
              }}
              className="cursor-pointer hover:text-gray-500 transition-all duration-300 ease-in-out"
            >
              About
            </li>
          </ul>
        </div>
        <motion.div className="hidden md:block">
          <div className="flex font-semibold  hover:bg-black hover:text-white text-center justify-center items-center gap-2 border border-black px-4 py-1 rounded-full transition-all duration-300 ease-in">
            <a
              href="https://drive.google.com/file/d/19qdPiZXtO3KNyP0zCBoYsQcX-r7Sg0rs/view?usp=drive_link"
              className=""
            >
              Resume
            </a>
            <FaArrowRight className="" />
          </div>
        </motion.div>
      </div>
      <div
        className={`flex flex-col items-center justify-center text-center md:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out ${
          mobileNav ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileNav(false)}
      />
      <div
        className={`md:hidden fixed top-0 left-0 w-3/4 h-full bg-slate-300 z-50 transform transition-transform duration-300 ease-in-out ${
          mobileNav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="font-semibold text-center text-black text-xl space-y-5 pt-6">
          <li
            className="py-2 px-4"
            onClick={() => {
              setMobileNav(false);
            }}
          >
            Home
          </li>
          <li
            className="py-2 px-4"
            onClick={() => {
              setMobileNav(false);
              window.location.href = "https://github.com/jatinshakya809";
            }}
          >
            Project
          </li>
          <li
            className="py-2 px-4"
            onClick={() => {
              setMobileNav(false);
              window.location.href = "https://www.linkedin.com/in/jatin-shakya";
            }}
          >
            About
          </li>
        </ul>
        <div className="flex my-3 mx-4 hover:bg-black hover:text-white text-center justify-center items-center gap-2 md:border md:border-black px-2 py-1 rounded-full transition-all duration-300 ease-in">
          <a
            href="https://drive.google.com/file/d/1FC4tXunGr4B1ym_07CeFh7Ds3iHb7i67/view?usp=drivesdk"
            className="text-center"
          >
            Resume
          </a>
          <FaArrowRight className="hover:translate-x-1 transition-transform duration-300 ease-in-out" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
