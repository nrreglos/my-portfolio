"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const skills = [
  { skill: "MS Excel, Word, Power Point, PowerApps and SQL" },
  { skill: "C++" },
  { skill: "C#" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "PHP" },
  { skill: "Python" },
  { skill: "Java" },
  { skill: "Git" },
];

const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section id="about">
      <div className="my-8 w-full pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-16 h-1 mx-auto bg-gradient-to-r from-green-500  via-teal-500 to-cyan-500 border-0 rounded mt-2"></hr>
        </h1>
        <div className="flex flex-col space-y-10 my-8 items-stretch align-top justify-center md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
          <div data-aos="fade-right" className="md:w-7/8">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p className="text-justify py-1 mr-2">
              Hi, my name is Neil and I am a{" "}
              <span className="font-bold text-teal-400">
                {"self-motivated"}
              </span>
              , <span className="font-bold text-teal-400">{"driven"}</span>, and{" "}
              <span className="font-bold text-teal-400">
                {"highly ambitious"}
              </span>{" "}
              software engineer based in Caloocan City, Philippines.
            </p>
            <br />
            <p className="text-justify py-1 mr-2">
              I am a recent graduate from the University of the East, Manila. My
              educational background has equipped me with a solid foundation in
              various aspects of computer engineering, including programming
              languages (C++, Python, Java, JavaScript, and PHP), computer
              architecture, database management systems (DBMS), circuit design,
              network security, technopreneurship, and embedded systems.
              Throughout my academic journey, I have gained hands-on experience
              in designing and implementing software solutions, understanding
              hardware components, optimizing database performance, developing
              secure network infrastructures, and designing efficient embedded
              systems.
            </p>
            <br />
            <p className="text-justify py-1 mr-2">
              I have a wide range of hobbies that keeps me occupied. From
              reading, playing sports, to working out at the gym. I am always
              seeking new experiences and love to keep myself engaged and
              learning new things.
            </p>
            <br />
            <p className="text-justify py-1 mr-2">
              I firmly believe in the philosophy of{" "}
              <span className="text-teal-400 font-bold">
                {"continuous growth"}
              </span>
              , a principle I actively pursue in both my personal and
              professional life. My dedication to technology is matched only by
              my fervent commitment to tackling intricate challenges and
              constantly pushing the boundaries. I embrace challenges as
              opportunities for growth, both as a professional and as an
              individual, always eager to expand my horizons and enhance my
              skill set.
            </p>
          </div>
          <div data-aos="fade-left" className="md:w-1/8">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              My Skills
            </h1>
            <div className="flex flex-wrap flex-row justify-flex md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gradient-to-r from-emerald-400 to-cyan-400 px-4 py-2 mr-2 mt-2 text-gray-800 rounded font-semibold text-center"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
