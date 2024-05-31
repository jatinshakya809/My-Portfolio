import React from "react";

const About = () => {
  return (
    <>
      <div className="w-full md:py-5  py-0 md:px-16 px-3 rounded-t-2xl ">
        <div className="w-full flex flex-col md:flex-row gap-5 md:pt-10 md:mt-20 border-black border-t-[1px]">
          <div className="md:w-1/2">
            <h1 className="md:text-3xl text-3xl my-3">About Me😎</h1>
            <p className="text-xl text-gray-500 mb-2">
              Hey there,👋
              <br />
              I'm Jatin, a 20-year-old Computer Science and Engineering (CSE)
              undergraduate passionate about software and web development. I'm
              pursuing a career as a Full Stack Web Developer 👨🏻‍💻, with over a
              year of internship experience specializing in the MERN stack
              (MongoDB, Express.js, React.js, Node.js) and Java. During my
              internships at Ubitech Solutions and InternPe, I gained valuable
              hands-on experience in developing dynamic and responsive web
              applications, contributing to both frontend and backend
              development.
            </p>
            <p className="text-gray-500"></p>
          </div>
          <div className="md:w-1/2  h-[70vh] rounded-3xl bg-[#5b6638]"></div>
        </div>
      </div>
    </>
  );
};

export default About;
