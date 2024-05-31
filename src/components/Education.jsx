import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="my-5 md:px-16">
      <div className="border-t flex border-gray-500 justify-center items-center gap-2">
        <img src="public/degree.png" alt="Degree" className="w-9 h-9" />
        <h1 className="text-3xl my-3 font-semibold underline">Education</h1>
      </div>
      <div className="flex justify-center my-8">
        <div>
          <div className="w-48 pl-4 space-y-1">
            <h1 className="text-lg font-semibold">B.tech Computer Science</h1>
            <h2 className="text-gray-500">
              Shri Ram College of Management and Engineering
            </h2>
            <div className="flex items-center gap-1">
              <img src="public/date.png" alt="Date" className="w-4 h-4" />
              <p className="text-gray-500 text-sm">2021-2025</p>
            </div>
          </div>
          <div className="w-48 mt-44 pl-2 space-y-1">
            <h1 className="text-lg font-semibold">Secondary School</h1>
            <h2 className="text-gray-500">
              The Radiant Higher Secondary School (CBSE)
            </h2>
            <div className="flex items-center gap-1">
              <img src="public/date.png" alt="Date" className="w-4 h-4" />
              <p className="text-gray-500 text-sm">2014-2019</p>
            </div>
          </div>
        </div>
        <div className=" relative border-l-[3px] rounded-lg border-purple-500">
          <div className="absolute p-2 -left-[9.5px] top-[6px] rounded-full bg-purple-600"></div>
          <div className="absolute p-2 -left-[10px] top-[170px] rounded-full bg-purple-600"></div>
          <div className="absolute p-2 -left-[10px] top-[336px] rounded-full bg-purple-600"></div>
        </div>
        <div className="w-48 pl-3 pt-[165px] space-y-1">
          <h1 className="text-lg font-semibold">Senior Secondary School</h1>
          <h2 className="text-gray-500">
            The Radiant Higher Secondary School (CBSE)
          </h2>
          <div className="flex items-center gap-1">
            <img src="public/date.png" alt="Date" className="w-4 h-4" />
            <p className="text-gray-500 text-sm">2019-2021</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
