import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { links } from "../constants/links";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  return (
    <nav className="bg-black fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-signature text-white">
            Bienvenido/a
          </h1>

          <div className="md:hidden">
            <button onClick={() => setNav(!nav)} className="p-4 text-gray-500">
              {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </button>
          </div>

          <ul className="hidden md:flex">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="ml-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
              >
                <Link
                  to={link}
                  smooth
                  duration={500}
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-gray-700"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {nav && (
        <div className="md:hidden">
          <ul className="flex flex-col items-center bg-gradient-to-b from-black to-gray-800 text-gray-500 space-y-4 py-8">
            {links.map(({ id, link }) => (
              <li key={id} className="text-2xl">
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-gray-700"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
