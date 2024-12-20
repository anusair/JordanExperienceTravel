"use client";

import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import { useState , useEffect } from "react";
import { DarkMode } from "./Context/DarkMode";
import Locations from "./Components/Locations";
import  About from "./Components/About"
import Footer from "./Components/Footer";
import { FaChevronUp } from "react-icons/fa";

export default function Home() {
  const [dark, setDark] = useState(false);
  const [arrow , setArrow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll" , () => {
      console.log(scrollY)
      if (scrollY >= 600)
        setArrow(true);
      else 
        setArrow(false);
    })
  } , [])


  function handleMode() {
    if (dark) {
      setDark(false);
    } else {
      setDark(true);
    }
  }
  return (
    <>
      <DarkMode.Provider value={{ dark, handleMode }}>
      <Header />
        <section
          style={{
            position: "relative",
          }}
        >
          <div className="bg-black w-full h-full block
          absolute top-0 left-0 bg-gradient-to-br from-primaryColor to-secondaryColor opacity-30"/>
            <div  style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: "url('/images/JarashAI.webp')",
              backgroundSize: "cover",
              backgroundAttachment: "fixed",  
              filter: "blur(2px)",
              zIndex: -1, 
            }}
            className="before:bg-black before:absolute top-0 left-0 w-full h-full">

            </div>

          <Hero />
        </section>
        <Services />
        <Locations/>
        <About />
        <Footer/>
        {arrow && <a href="#" className="fixed right-4 bottom-5 w-8 h-8 bg-primaryColor flex items-center justify-center
        rounded-full cursor-pointer text-white opacity-50 md:opacity-100  ">
          < FaChevronUp />
        </a>}
      </DarkMode.Provider>
    </>
  );
}
