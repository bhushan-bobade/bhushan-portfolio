import React from "react";
import HeroImage from "../assets/bbImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="lg:h-screen-1.5x sm:h-screen-2x w-full bg-gradient-to-b from-black via-black to-gray-700"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          Hey there!! I'm Bhushan Bobade, a Tech Enthusiast Eager to Contribute.
          <p>Welcome to my digital space where creativity meets functionality.</p>
          As a recent graduate excited to dive into the corporate world, I am passionate about full-stack development and eager to make in the tech industry.
            Currently, I love to work on web application using technologies like React, NextJs and Css.
            Take a glimpse into my budding portfolio and let's chat about my enthusiasm and dedication can be valuable assest to your team.
            
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-500">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile photo"
            className="rounded-2xl mx-auto w-2/3 md:w"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
