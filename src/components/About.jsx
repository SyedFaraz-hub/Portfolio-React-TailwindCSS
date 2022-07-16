import React from "react";
import "./style.css";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white paddingTop-small0-devices"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I am an undergraduate student, wants to pursue my career in Full Stack development. <br/>
           My core competencies are Html5, CSS3, JavaScript ReactJs, Redux, Context API, react 
          router and frameworks like Bootstrap, Material UI and Tailwind CSS to build a cross-browser web front-end.
        </p>

        <br />
        
        <p className="text-xl">
        My areas under development are: <br/> 1) NodeJs / Express to build API's.  <br/>  2) Mastering MERN
          stack development.
        </p>
      </div>
    </div>
  );
};

export default About;
