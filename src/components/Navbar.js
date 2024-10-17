import React, { useState } from 'react';
import { FaDiscord, FaSquareXTwitter } from "react-icons/fa6";
import { FaTimes,FaBars } from "react-icons/fa";
const Navbar = ({page}) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='flex justify-between items-center px-2 bg-primary-500'>
      <div className="font-heading text-3xl">{page}</div>

        {/* Hamburger Icon */}
      <div className="md:hidden" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex flex-row items-center space-x-4">
        <button className="hover:bg-secondary-300 p-4">
          <li>
            <a href="https://twitter.com/ErikkaChisaka"><FaDiscord size={23} /></a>
          </li>
        </button>
        <button className="hover:bg-secondary-300 p-4">
          <li>
            <a href="https://twitter.com/ErikkaChisaka"><FaSquareXTwitter size={23} /></a>
          </li>
        </button>
      </ul>

      {/* Mobile Menu */}
      <ul className={`flex flex-col md:hidden bg-primary-500 text-white absolute top-14 p-5 right-0 w-full  transition-transform h-screen z-10 ${isOpen ? 'block' : 'hidden'}`}>
        <li className="hover:bg-secondary-100 p-3 flex items-center">
          <a href="https://twitter.com/ErikkaChisaka" className="flex items-center">
            <FaDiscord size={23} className="mr-2" />
            Discord
          </a>
        </li>
        <li className="hover:bg-secondary-100 p-3 flex items-center">
          <a href="https://twitter.com/ErikkaChisaka" className="flex items-center">
            <FaSquareXTwitter size={23} className="mr-2" />
            Twitter
          </a>
        </li>
      </ul>

    </nav>
  );
};

export default Navbar;