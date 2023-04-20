import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Menu />
        <About />
        <img
          src="https://www.w3schools.com/w3images/map.jpg"
          alt="map"
          className="w-full saturate-50"
        />
        <Contact />
      </main>
      <footer className="bg-black text-white py-24 text-center text-4xl">
        Powered by{" "}
        <a
          href="https://www.w3schools.com/w3css/default.asp"
          target="_blank"
          className="underline hover:text-green-500"
        >
          w3.css
        </a>
      </footer>
    </>
  );
};

export default App;
