"use client";
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import { HiArrowDown } from "react-icons/hi";
import { saveAs } from "file-saver";
import { TypeAnimation } from "react-type-animation";

const toDownloadCV = () => {
  saveAs("/CV-Reglos-Neil-Rendell.pdf"); // Replace with your file URL
};

const HeroSection = () => {
  return (
    <section id="home">
      <div className="pt-12 flex flex-col space-y-8 w-full mx-auto">
        <div className="flex flex-col text-center items-center justify-center sm:my-12 sm:py-2 md:py-20 md:flex-row md:text-left">
          <div className="md:w-1/2 md:mt-2 my-6">
            <Image
              className="rounded-full md:w-80 w-60 shadow-2xl border-stone-600 border-1"
              src="/headshot.png"
              alt=""
              width={325}
              height={325}
            />
          </div>
          <div className="md:mt-2 md:w-4/5">
            <div className="flex flex-col text-4xl font-bold my-2 md:mt-0 md:text-5xl">
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-teal-500 to-cyan-500">
                <span>Hello, I{"'"}m</span>
                <br></br>
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Neil",
                    2000, // wait 1s before replacing "Mice" with "Hamsters"
                    "A Web Developer",
                    2000,
                    "A Programmer",
                    2000,
                    "A Computer Engr",
                    2000,
                  ]}
                  wrapper="span"
                  cursor={true}
                  speed={50}
                  preRenderFirstString={true}
                  style={{ color: "#4fb9af" }}
                  deletionSpeed={50}
                  repeat={Infinity}
                />
              </h1>
            </div>
            <p className="text-lg text-justify my-4 md:text-2xl">
              I{"'"}m an aspiring{" "}
              <span className="font-semibold text-teal-400">
                {" "}
                Software Engineer
              </span>{" "}
              based in Caloocan City, Philippines. Working towards creating
              software that solves problems, adds value, and improves the lives
              of users.
            </p>
            <div className="inline-flex sm:my-8 my-2 space-x-4 sm:mb-2">
              <div className="hover:-translate-y-1 transition-transform cursor-pointer">
                <Link
                  to="projects"
                  className=" text-neutral-100 text-base font-semibold px-6 py-3 rounded-full shadow bg-gradient-to-r from-green-500 via-teal-500 to-cyan-500"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Projects
                </Link>
              </div>
              <div className="hover:-translate-y-1 transition-transform cursor-pointer">
                <Link
                  to=""
                  className="text-base font-semibold px-6 py-3
                 outline outline-1 -outline-offset-1 outline-teal-500 from-green-300 to-cyan-500 rounded-full hover:bg-gradient-to-l hover:from-green-500 hover:via-teal-500 hover:to-cyan-500"
                  onClick={toDownloadCV}
                >
                  Download CV
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-center items-center space-y-6 md:my-4">
          <hr className="w-full h-0.5 bg-gradient-to-r from-green-500  via-teal-500 to-cyan-500 border-0 rounded"></hr>
          <h1 className=" font-extralight italic items-center text-xl sm:my-auto md:text-4xl">
            {'"'}Do what you love, love what you do.{'"'}
          </h1>
          <hr className="w-full h-0.5 bg-gradient-to-l from-green-500 via-teal-500 to-cyan-500 border-0 rounded"></hr>
        </div>
        <div className="flex flex-col items-center justify-center md:my-12 my-12">
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <HiArrowDown size={35} className="animate-bounce" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
