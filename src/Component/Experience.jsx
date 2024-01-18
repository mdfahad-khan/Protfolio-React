import React from "react";
import html from "../assets/html.png";
import css from "../assets/tailwind.png";
import JavaScript from "../assets/javascript.png";
import react from "../assets/react.png";
import node from "../assets/nodejs.png";
import Oracle from "../assets/oracle.png";
import mysql from "../assets/mysql.png";
import dotnet from "../assets/dotnet.jpg";
import c from "../assets/c.jpg";


const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "TailwindCSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: JavaScript,
      title: "JAVASCRIPT",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-400",
    },
    {
      id: 5,
      src: node,
      title: "NodeJs",
      style: "shadow-green-500",
    },
    {
      id: 6,
      src: mysql,
      title: "My SQL",
      style: "shadow-orange-400",
    },
     {
      id: 7,
      src: c,
      title: "C#",
      style: "shadow-purple-600",
    },
     {
      id: 8,
      src: dotnet,
      title: "ASP .Net",
      style: "shadow-blue-600",
    },
     {
      id: 9,
      src: Oracle,
      title: "Oracle",
      style: "shadow-red-700",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold  border-b-4 border-gray-50 p-2 inline">
            {" "}
            Experience
          </p>
          <p className="py-6"> Those are the technology that i've worked on</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            // eslint-disable-next-line react/jsx-key
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
