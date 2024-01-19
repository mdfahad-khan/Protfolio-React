// eslint-disable-next-line no-unused-vars
import React from "react";
import Typed from "react-typed";
import Image from "../assets/home.jpg";

const home = () => {
  return (
    <div
      name="home"
      className=" h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white">
      <div className="ml-4  mx-auto max-w-screen-xl flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-full w-[1000px] mt-10 ml-6 md:ml-0">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-20 ml-20">
            Hello, My name is <br />{" "}
            <span className="text-[crimson] text-5xl mt-2">
              Evan Ahmed Fahad{" "}
            </span>
            <div>
              <h2 className="  duration-500 font-bold">
                And I'm a{" "}
                <Typed
                  className="text-4xl mt-2 "
                  strings={["Web Devoloper", "Frelancer", "Fullstack Devloper"]}
                  typeSpeed={100}
                  backSpeed={50}
                  loop={true}
                />
              </h2>
            </div>
          </h2>

          <div>
            <button className="text-white mt-2 w-fit ml-20 px-4 py-2 my-2 flex rounded-md items-center bg-gradient-to-r from-cyan-500 to-blue-500 text-2xl hover:scale-105">
              Hire me
            </button>
          </div>
        </div>
        <div className=" rounded-2xl w2/3 md:w-full">
          <img
            src={Image}
            alt=""
            className="w-80 h-80 md:w-96 md:h-96 rounded-md md:ml-40 "
          />
        </div>
      </div>
    </div>
  );
};

export default home;
