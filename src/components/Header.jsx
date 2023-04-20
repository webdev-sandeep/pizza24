import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-[rgba(0,0,0,0.6)] uppercase text-2xl text-white flex hover:bg-black z-20">
      <Link to={"/#home"} smooth className="py-2 px-4 block hover:bg-gray-400">
        home
      </Link>
      <Link to={"/#menu"} smooth className="py-2 px-4 block hover:bg-gray-400">
        menu
      </Link>
      <Link to={"/#about"} smooth className="py-2 px-4 block hover:bg-gray-400">
        about
      </Link>
      <Link
        to={"/#contact"}
        smooth
        className="py-2 px-4 block hover:bg-gray-400"
      >
        contact
      </Link>
    </header>
  );
};

export default Header;
