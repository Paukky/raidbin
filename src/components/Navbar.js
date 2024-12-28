import React, { useState, useEffect, useRef } from "react";
import { FaSquareXTwitter, FaChevronDown } from "react-icons/fa6";
import { FaTimes, FaBars } from "react-icons/fa";
import { Outlet,Link } from "react-router-dom";
import Logo from "../logo-2.png";

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen);
  const toggleMenu = () => setIsOpen(!isOpen);

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      !event.target.closest("a")
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div>
      <nav className="flex justify-between items-center px-2 bg-primary-500">
        <a href="/">
          <img src={Logo} className="md:w-1/3 w-1/2" />
        </a>

        <div className="md:hidden" onClick={toggleMobileMenu}>
          {isMobileOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-row items-center space-x-4">
          <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
              className="flex flex-row items-center justify-center hover:bg-secondary-800 p-4 focus:bg-secondary-800"
              onClick={(e) => {
                e.preventDefault();
                toggleMenu();
              }}
            >
              <p className="mx-1 ">Savage</p>
              <FaChevronDown size={15} />
            </button>
            <ul
              className={`${
                isOpen ? "absolute bg-primary-700 z-20 flex flex-col" : "hidden"
              }`}
            >
                <Link to="/m1s" className="hover:bg-secondary-600 px-9 py-4" onClick={() => setIsOpen(false)} >
                  <b>M1S</b>
                </Link>
                <Link to="/m2s" className="hover:bg-secondary-600 px-9 py-4" onClick={() => setIsOpen(false)}>
                  <b>M2S</b>
                </Link>
                <Link to="/m3s" className="hover:bg-secondary-600 px-9 py-4"  onClick={() => setIsOpen(false)}>
                  <b>M3S</b>
                </Link>
                <Link to="/m4s" className="hover:bg-secondary-600 px-9 py-4" onClick={() => setIsOpen(false)}>
                  <b>M4S</b>
                </Link>
            </ul>
          </div>
          <Link
            to ="/cod"
            className="hover:bg-secondary-800 p-4 text-center"
          >
            Cloud of Darkness
          </Link>
          <Link
            to="https://twitter.com/ErikkaChisaka"
            className="hover:bg-secondary-800 p-4"
          >
            <FaSquareXTwitter size={23} />
          </Link>
          <Link to="/suggestions" className="hover:bg-secondary-800 p-4">
            Have a Suggestion?
          </Link>
        </ul>

        
        {/* Mobile Menu */}
        <ul className={` md:hidden bg-primary-500 text-white absolute top-10 p-5 right-0 w-full  h-screen z-30 ${isMobileOpen ? 'block' : 'hidden'}`}>
          <Link to="/m1s" className="hover:bg-secondary-800 p-3 flex items-center" onClick={() => setIsMobileOpen(false)} >
            <b>M1S</b>
          </Link>
          <Link to="/m2s" className="hover:bg-secondary-800 p-3 flex items-center" onClick={() => setIsMobileOpen(false)} >
            <b>M2S</b>
          </Link>
          <Link to="/m3s" className="hover:bg-secondary-800 p-3 flex items-center" onClick={() => setIsMobileOpen(false)} >
            <b>M3S</b>
          </Link>
          <Link to="/m4s" className="hover:bg-secondary-800 p-3 flex items-center" onClick={() => setIsMobileOpen(false)} >
            <b>M4S</b>
          </Link>    
          <hr className='my-2'/>
          <Link to ="/cod" className="hover:bg-secondary-800 p-3 flex items-center" onClick={() => setIsMobileOpen(false)}>
            <b>Cloud of Darkness</b>
          </Link>
          <hr className='my-2'/>
          <Link to="https://twitter.com/ErikkaChisaka" className="hover:bg-secondary-800 p-3 flex items-center" >
            <FaSquareXTwitter size={23} className="mr-2" />
            Twitter
          </Link>
          <Link to="/suggestions" className="hover:bg-secondary-800 p-3 flex items-center" onClick={() => setIsMobileOpen(false)} >
            Have a Suggestions?
          </Link>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};


export default Navbar;
