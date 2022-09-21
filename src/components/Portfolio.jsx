import React from "react";
import GPT from "../assets/portfolio/GPT-3.png";
import MarkCoders from "../assets/portfolio/MarkCoders.png";
import BabulQuran from "../assets/portfolio/Babul-Quran.png";
import CryptoTracker from "../assets/portfolio/Crypto-Tracker.png";
import MovieFlex from "../assets/portfolio/Movie-Flex.png";
import Techaholix from "../assets/portfolio/Techaholix.png";

// import TextUtils from "../assets/portfolio/TextUtils.png";



const Portfolio = () => {

  
  const portfolios = [
    {
      id: 1,
      src: GPT,
      github: "https://github.com/SyedFaraz-hub/GPT-3-Website-React",
      liveURL: "https://gp3-react.netlify.app/"
    },
    
    {
      id: 2,
      src: Techaholix,
      liveURL: "https://techaholix.com/"
    },
    {
      id: 3,
      src: BabulQuran,
      liveURL: "https://babul-quran.com/"
    },
    {
      id: 4,
      src: MarkCoders,
      liveURL: "https://markcoders.com/"
    },
    {
      id: 5,
      src: CryptoTracker,
      github: "https://github.com/SyedFaraz-hub/Crypto-Tracker-React",
      liveURL: "https://crypto-realtime-tracker.netlify.app/"
    },
    {
      id: 6,
      src: MovieFlex,
      github: "https://github.com/SyedFaraz-hub/Movie-Flex-React",
      liveURL: "https://movie-flex-react.netlify.app/"
    },
    // {
    //   id: 7,
    //   src: TextUtils,
    //   github: "https://github.com/SyedFaraz-hub/TextUtils-Tool-React",
    //   liveURL: "https://textutils-9c2bf.web.app/"
    // },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen paddingTop-small0-devices"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pl-11 pr-12 sm:px-0">
          {portfolios.map(({ id, src , github, liveURL}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="loading"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a  href={github}  className= {`w-1/2 px-6 py-3  m-4 duration-200 hover:scale-105 ${github ? " " : "cursor-not-allowed opacity-50" }` }  target="_blank" rel="noreferrer" >
                  Github
                </a>
                <a href={liveURL} className="w-1/2 px-6 py-3  m-4 duration-200 hover:scale-105"  target="_blank" rel="noreferrer" >
                  Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
