import React from "react";
import HeroImage from "../assets/heroImage.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row paddingTop-small1-devices">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a ReactJS Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          I'm Faraz Shah currently pursuing my bachelor's degree in Computer Science. I Can Make you a Top-Quality, Responsive and User-Friendly Sites Using Technologies HTML5, CSS3, Javascript, Bootstrap, React JS 
          </p>

          <div style={{display: "flex", gap: 10}}>
            <a
              href="https://drive.google.com/uc?id=13PyrOdgSjd6QgR4TtaP8YvY3PxY0gt1Y&export=download"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Download CV
            
            </a>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto md:w-full margin-small-device"
            style={{width: "70%" , height: "auto" , maxHeight: "1000px"}}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
