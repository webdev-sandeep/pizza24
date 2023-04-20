import React from "react";

const About = () => {
  return (
    <div
      className="bg-rose-300 pt-20 pb-8 relative black-layover text-white px-4"
      id="about"
    >
      <div className="relative z-10 max-w-[61rem] mx-auto">
        <h2 className="text-6xl text-center mb-20">About</h2>
        <p className="text-2xl">
          The Pizza Restaurant was founded in blabla by Mr. Italiano in lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.
        </p>
        <div className="text-2xl flex justify-between my-8">
          <div className="flex flex-col justify-around">
            <p>
              <span className="font-bold mr-2">The Chef?</span>
              <span>Mr. Italiano himself</span>
            </p>
            <p>We are proud of our interiors.</p>
          </div>
          <div className="h-36 w-36 rounded-full">
            <img
              src="https://www.w3schools.com/w3images/chef.jpg"
              alt="chef"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
        <img
          src="https://www.w3schools.com/w3images/onepage_restaurant.jpg"
          alt="design"
          className="w-full"
        />
        <div className="py-6">
          <h2 className="font-bold text-4xl mb-6">Opening Hours</h2>
          <div className="grid grid-cols-2 text-2xl">
            <div className="col-span-1">
              <p className="my-6">Mon & Tue CLOSED</p>
              <p className="my-6">Wednesday 10.00 - 24.00</p>
              <p className="my-6">Thursday 10:00 - 24:00</p>
            </div>
            <div className="col-span-1">
              <p className="my-6">Friday 10:00 - 12:00</p>
              <p className="my-6">Saturday 10:00 - 23:00</p>
              <p className="my-6">Sunday Closed</p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
