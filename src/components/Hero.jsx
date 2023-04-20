import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const Hero = () => {
  return (
    <div className="relative h-[90vh] saturate-50" id="home">
      <img
        src="https://www.w3schools.com/w3images/pizza.jpg"
        alt="pizza"
        className="w-full h-full object-cover object-top"
      />
      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-center">
        <div className="text-4xl sm:text-6xl xl:text-[6.5rem] text-white">
          <h3>thin</h3>
          <h1 className="my-2">CRUST PIZZA</h1>
        </div>
        <div>
          <Link
            to={"/#menu"}
            smooth
            className="bg-black text-white text-2xl sm:text-4xl p-2 sm:p-4 inline-block"
          >
            let me see the menu
          </Link>
        </div>
      </div>
      <div className="absolute bottom-2 left-4 bg-black text-white text-2xl px-2">
        Open from 10am to 12pm
      </div>
    </div>
  );
};

export default Hero;
