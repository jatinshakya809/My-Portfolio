import React from "react";

const About = () => {
  return (
    <>
      <div className="w-full md:py-5  py-0 md:px-16 px-3 rounded-t-2xl ">
        <div className="w-full flex flex-col md:flex-row gap-5 md:pt-10 md:mt-20 border-black border-t-[1px]">
          <div className="md:w-1/2">
            <h1 className="md:text-3xl text-3xl my-3">About Me😎</h1>
            <p className="text-md text-gray-500 mb-2">
              Hey there,👋
              <br />
              I'm <span className="text-purple-500">Jatin</span>, a 20-year-old{" "}
              <span className="text-purple-500">
                Computer Science and Engineering
              </span>
              (CSE) undergraduate passionate about software and web development.
              I'm pursuing a career as a{" "}
              <span className="text-purple-500">
                Full Stack Web Developer 👨🏻‍💻
              </span>{" "}
              , with over a year of internship experience specializing in the
              MERN stack{" "}
              <span className="text-purple-500">
                (MongoDB, Express.js, React.js, Node.js)
              </span>{" "}
              and Java. During my internships at{" "}
              <span className="text-purple-500">
                Ubitech Solutions and InternPe
              </span>{" "}
              , I gained valuable hands-on experience in developing dynamic and
              responsive web applications, contributing to both frontend and
              backend development.
            </p>
            <p className="text-gray-500"></p>
          </div>
          <div className="md:w-[50%] md:h-[70vh] h-[50vh] shadow-xl rounded-3xl overflow-hidden">
            <img
              src="/Untitled-2 copy2.jpg"
              alt="My Photo"
              className="w-full h-full object-cover"
            />
          </div>

          {/* <div className="md:w-[50%] md:h-[64vh] h-[50vh]  shadow-xl rounded-3xl ">
            <img
              src="/Untitled-2 copy.jpg"
              alt=""
              className="rounded-3xl object-cover"
            />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default About;
