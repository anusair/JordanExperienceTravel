'use client';
import { useState   } from "react";
import { navBar } from "../assets"
import { IoMenu } from "react-icons/io5";
function Header() {


  const [menu , setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  }

  return (
    <header
      className={`relative 
     `}
    >
      <div
        className="container mx-auto max-w-screen-xl px-9 md:px-7
      flex items-center justify-between
      h-[62px]"
      >
        <h1 className="text-3xl md:text-4xl sm:text-2xl text-primaryColor font-bold">
          JT
        </h1>
        <nav className="w-1/3">
          <ul className="hidden md:flex justify-between">
            {navBar.map((item) => (
              <li
                key={item}
                className="text-primaryColor"
              >
                <a
                  href={`#${item}`}
                  className="relative px-4 py-3 before:content-[''] 
                            before:absolute  before:-bottom-3 before:left-0 before:block
                            before:w-0 before:h-[2px] before:bg-primaryColor  
                            before:hover:w-full  before:hover:duration-500"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div/>
        <IoMenu
          size={30}
          className="md:hidden cursor-pointer text-primaryColor"
          onClick={handleMenu}
          aria-label="Toggle menu"
          aria-expanded={menu}
        />
      </div>
      {menu && (
        <div className={`absolute md:hidden bg-white border-t border-[#eee]  w-full  ${menu ? "h-[40vh] opacity-1" : "h-0 opacity-0"}
        overflow-hidden duration-300 z-[9999]`}>
          <nav className="flex flex-col items-center justify-center h-full">
            <button
            className="absolute top-4 right-4 z-[10] text-xl text-primaryColor cursor-pointer"
            onClick={handleMenu}>
              X
            </button>
            <ul className="absolute flex flex-col items-center justify-between h-full w-full
            p-6">
              {navBar.map((item) => (
                <li
                  key={item}
                  className="text-primaryColor"
                >
                  <a
                    href={`#${item}`}
                    className="relative px-4 py-3 before:content-[''] 
                            before:absolute  before:bottom-0 before:left-0 before:block
                            before:w-0 before:h-[2px] before:bg-primaryColor
                            before:hover:w-full before:hover:duration-500"
                            onClick={() => setMenu(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
export default Header