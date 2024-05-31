import React, { useState } from "react";
import { SiPolymerproject } from "react-icons/si";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const projects = [
  {
    img: "public/dustypages.jpg",
    title: "The Dusty Pages",
    description:
      "A bookstore website where you can buy books and read some free books. Sign up and boost your reading skills.",
    techStack: "React, Node, MongoDB, Express, Tailwind, Javascript.",
    visitLink: "https://dusty-pages-store-jatin.vercel.app/",
    sourceLink: "https://github.com/jatinshakya809/Book-Store-MERN-WebSIte",
  },
  {
    img: "public/codedate.jpg",
    title: "The CodeDate",
    description:
      "A Codedate website where you can connect with random people and make them friend and chat with them. Sign up and try it.",
    techStack:
      "React, Node, MongoDB, Express, Tailwind, Cloudinary, Javascript, Socket.Io.",
    visitLink: "https://code-date-jatin.vercel.app/",
    sourceLink: "https://github.com/jatinshakya809/Tinder-Clone",
  },
  {
    img: "public/taskharbor.jpg",
    title: "Task Harbor",
    description:
      "A task management application where you can put your tasks with security and so that anyone can manage thier task. SignUp and orgnize yourself.",
    techStack: "React, Node, MongoDB, Express, Tailwind, Javascript.",
    visitLink: "https://taskharbor-rho.vercel.app/",
    sourceLink:
      "https://github.com/jatinshakya809/TaskHarbor-Frontend-MERN-App",
  },
];

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="min-h-[50vh] md:px-16 px-1 my-10">
      <div className="border-t border-gray-500"></div>
      <div className="flex justify-center items-center gap-2 my-3">
        <SiPolymerproject className="w-9 h-9" />
        <h1 className="text-3xl underline font-bold">Projects</h1>
      </div>
      <p className="my-5 px-2 text-lg text-gray-500">
        My recent Projects{" "}
        <a
          href="https://github.com/jatinshakya809"
          className="underline text-blue-600"
        >
          More
        </a>
      </p>
      <div className="flex justify-center items-center md:gap-8">
        <button
          className="text-black text-4xl rounded-full"
          onClick={handlePrev}
        >
          <IoIosArrowBack />
        </button>

        <div className="md:w-[65%] overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="min-w-full md:flex  md:border-none border rounded-xl justify-center gap-5 items-center p-3 md:h-[] md:w-[250px] w-full max-h-[70vh] "
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="rounded-xl md:w-full md:h-1/2 w-full object-cover shadow-lg"
                />
                <div className="py-1 space-y-1">
                  <h1 className="font-semibold text-lg">{project.title}</h1>
                  <p className="text-gray-400 leading-5">
                    {project.description}
                  </p>
                  <h1>
                    <span className="text-purple-500 font-semibold">
                      Tech Stack:
                    </span>{" "}
                    <span>{project.techStack}</span>
                  </h1>
                  <div className="pt-2">
                    <a
                      href={project.visitLink}
                      className="px-2 py-1 bg-purple-600 text-white rounded-xl mr-3"
                    >
                      Visit Project
                    </a>
                    <a
                      href={project.sourceLink}
                      className="px-2 py-1 bg-purple-600 text-white rounded-xl"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className=" text-black text-4xl rounded-full"
          onClick={handleNext}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default ProjectCarousel;
