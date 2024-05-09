"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const data = [
  {
    name: "CRUD",
    description:
      "Developed a comprehensive CRUD application leveraging ReactJS for the frontend and ASP.NET Core with MS SQL for the backend, enabling seamless data management and manipulation.",
    image: "/basicCRUD_img.png",
    github: "https://github.com/nrreglos/BODY-DEFENSE-PC",
  },
  {
    name: "Body Defense",
    description:
      "Welcome to 'Body Defense' - a thrilling shoot 'em up arcade game where you combat an army of pixelated viruses! Developed in Java, dive into the digital battlefield as you navigate through waves of infectious enemies, each representing a different strain of virus. Your mission? Eradicate the digital contagion by dodging and blasting your way through the viral onslaught.",
    image: "/body_defense_img.png",
    github: "https://github.com/nrreglos/BODY-DEFENSE-PC",
  },
  {
    name: "Cestino",
    description:
      "Introducing 'Cestino' - an educational app designed to teach kids the importance of proper waste segregation! With vibrant visuals and engaging gameplay, 'Cestino' makes learning fun and impactful. Dive into interactive lessons where you'll learn to differentiate between various types of waste - from recyclables to disposable and beyond.",
    image: "/cestino_img.png",
    github: "https://github.com/nrreglos/CESTINO",
  },
  {
    name: "In-Between Game",
    description:
      "A thrilling card game implemented in Java that challenges players' intuition and strategic thinking. In this game, players are dealt two cards, and they must predict whether the value of the next card will fall between the values of the two cards they already have. With each correct prediction, players earn points, but beware of incorrect guesses, as they come with penalties.",
    image: "/inbetweengame_img.png",
    github: "https://github.com/nrreglos/in-between-game",
  },
  {
    name: "Barangay Management System",
    description:
      "Developed a comprehensive Barangay Management System utilizing PHP and XAMPP stack, enabling streamlined issuance of barangay clearances and certificates of residency for efficient community administration.",
    image: "/bms_img.png",
    github: "https://github.com/nrreglos/NCP3106-FINALS",
  },
];

const ProjectsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section id="projects">
      <h1 className="mb-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-16 h-1 mx-auto bg-gradient-to-l from-green-500  via-teal-500 to-cyan-500 border-0 rounded mt-2"></hr>
      </h1>
      <div className="flex flex-col space-y-28">
        {data.map((project, index) => {
          return (
            <div key={index}>
              <div
                data-aos="fade-up"
                className="flex flex-col md:flex-row md:space-x-12 items-center"
              >
                <div className="px-8 md:w-1/2 mb-6 items-center md:items-center">
                  <Link href={project.github} target="_blank">
                    <Image
                      src={project.image}
                      alt=""
                      width={400}
                      height={400}
                      className="rounded-xl shadow-xl hover:opacity-70"
                    />
                  </Link>
                </div>
                <div className="md:w-1/2 text-center md:text-justify">
                  <h1 className="text-3xl font-bold mb-6">{project.name}</h1>
                  <p className="text-xl text-justify py-1 leading-7 mb-4 text-neutral-400">
                    {project.description}
                  </p>
                  <div>
                    <Link href={project.github} target="_blank">
                      <button className="btn btn-outline rounded hover-translate-y-1 transition-transform cursor-pointer">
                        <BsGithub size={25} />
                        View Code
                        <BsArrowUpRightSquare size={25} />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
