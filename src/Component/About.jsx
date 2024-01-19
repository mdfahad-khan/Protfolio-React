// eslint-disable-next-line no-unused-vars
import React from "react";
import image from '../assets/formal.png'

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white mt-0">
      <div className=" p-4 mx-auto flex flex-col justify-center w-full h-full ">
       
      <div className="ml-40 md:mt-10">
          <p className="text-4xl font-boll inline border-b-4 border-gray-500">
            About
          </p>
        </div>
       <div className="max-w-[1240px] md:my-10 mx-auto ml-24 mr-24 md:grid grid-cols-3">
         
      <div className=" col-span-1 md:w-[80%] text-center ">
        <img src={image} alt="" className="inline rounded-xl mt-96 md:mt-16" />
      </div>
      <div className=" col-span-2 m-2 flex flex-col justify-center">
        <h2 className="text-green-400 font-bold my-2 text-3xl">
          I am a Full-stack Developer
        </h2>
        <p className='text-justify text-xl'>I've just completed a rigorous journey through the halls of American International University, emerging with a Bachelor's degree in Computer Science Engineering. My academic adventure exposed me to the core principles of algorithms, data structures, software engineering, and more, fueling my desire to apply these skills in a real-world setting. Proficient in Python, HTML, CSS, JavaScript, typescript, Nodejs React, databases, and APIs. Innovation enthusiast with a knack for quick learning. Explored many projects showcasing adaptability. Effective collaborator with refined teamwork and communication skills from group projects, code force, and coding challenges. Web development aficionado.Seeking a dynamic role to channel my tech skills and drive innovation. Open to software development, system analysis, and more.</p>
        
      </div>
    </div>

      
      </div>
    </div>
  );
};

export default About;
