import { useState } from "react";
import soldimatrojo from "../assets/images/soldimatrojo-Photoroom.png";
import { headerLinks } from "../constants";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white px-4 py-2 w-full top-0 z-10 border-b-2 border-b-gray-200">
      <div className="w-full flex justify-between items-center">
        {/* Logo */}
        <div className="ml-10">
          <img src={soldimatrojo} alt="Logo" className="h-24" />
        </div>

        {/* Navigation Links for Desktop */}
        <nav className="hidden lg:flex lg:items-center lg:mr-10">
          <ul className="flex space-x-4 items-center">
            {headerLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.id}
                  className="font-semibold relative overflow-hidden flex items-center justify-center p-3 transition duration-300 ease-in-out hover:text-white group"
                >
                  <span className="relative z-10">{link.title}</span>
                  <span className="absolute inset-0 bg-red-600 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Menu Icon for Mobile */}
        <div className="flex lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-8 h-8 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isMenuOpen && (
        <div className="lg:hidden w-full bg-white border-t-2 border-gray-200">
          <ul className="flex flex-col items-center p-4 space-y-2">
            {headerLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.id}
                  className="font-semibold block w-full text-center py-2 transition duration-300 ease-in-out hover:bg-red-600 hover:text-white"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};
