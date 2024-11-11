import React, { useState } from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaTimes, FaBars } from "react-icons/fa";
import { Outlet, useLocation } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getPageName = () => {
    switch (location.pathname) {
      case "/":
        return "Home";
      case "/m1s":
        return "M1S";
      case "/m2s":
        return "M2S";
      case "/m3s":
        return "M3S";
      case "/m4s":
        return "M4S";
      case "/suggestions":
        return "Suggestion";
      default:
        return "Raidbin"; // Default page name if no match is found
    }
  };

  return (
    <div>
      <nav className="flex justify-between items-center px-2 bg-primary-500">
        <a href="/">
          <p className="font-heading text-3xl">Raidbin</p>
        </a>
        {/* <div className="font-heading text-3xl">{getPageName()}</div> */}

        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-row items-center space-x-4">
          {getPageName() === "Home" ? (
            <>
              <button className="hover:bg-secondary-800 p-4">
                <a
                  href="https://twitter.com/ErikkaChisaka"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSquareXTwitter size={23} />
                </a>
              </button>
              <button className="hover:bg-secondary-800 p-4">
                <a href="/suggestions">Have a Suggestion?</a>
              </button>
            </>
          ) : (
            <>
              <button className="hover:bg-secondary-800 p-4">
                <a href="/m1s">
                  <b>M1S</b>
                </a>
              </button>
              <button className="hover:bg-secondary-800 p-4">
                <a href="/m2s">
                  <b>M2S</b>
                </a>
              </button>
              <button className="hover:bg-secondary-800 p-4">
                <a href="/m3s">
                  <b>M3S</b>
                </a>
              </button>
              <button className="hover:bg-secondary-800 p-4">
                <a href="/m4s">
                  <b>M4S</b>
                </a>
              </button>
              <button className="hover:bg-secondary-800 p-4">
                <a
                  href="https://twitter.com/ErikkaChisaka"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSquareXTwitter size={23} />
                </a>
              </button>
              <button className="hover:bg-secondary-800 p-4">
                <a href="/suggestions">Have a Suggestion?</a>
              </button>
            </>
          )}
        </ul>

        {/* Mobile Menu */}
        <ul
          className={`flex flex-col md:hidden bg-primary-500 text-white absolute top-14 p-5 right-0 w-full  transition-transform h-screen z-10 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li className="hover:bg-secondary-800 p-3 flex items-center">
            <a href="/m4s">
              <b>M1S</b>
            </a>
          </li>
          <li className="hover:bg-secondary-800 p-3 flex items-center">
            <a href="/m4s">
              <b>M2S</b>
            </a>
          </li>
          <li className="hover:bg-secondary-800 p-3 flex items-center">
            <a href="/m4s">
              <b>M3S</b>
            </a>
          </li>
          <li className="hover:bg-secondary-800 p-3 flex items-center">
            <a href="/m4s">
              <b>M4S</b>
            </a>
          </li>
          <hr className="my-2" />
          <li className="hover:bg-secondary-800 p-3 flex items-center">
            <a
              href="https://twitter.com/ErikkaChisaka"
              className="flex items-center"
            >
              <FaSquareXTwitter size={23} className="mr-2" />
              Twitter
            </a>
          </li>
          <li className="hover:bg-secondary-800 p-3 flex items-center">
            <a href="/suggestions">Have a Suggestions?</a>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
