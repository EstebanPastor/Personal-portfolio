import { useState, useEffect } from "react";
import { FaHandSparkles } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [language, setLanguage] = useState("es");

  useEffect(() => {
    const userLanguage = navigator.language || navigator.userLanguage;
    setLanguage(userLanguage.startsWith("es") ? "es" : "en");
  }, []);

  const welcomeMessage = language === "es" ? "Bienvenido/a" : "Welcome";

  return (
    <nav className="bg-black w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-signature text-white flex items-center">
            {welcomeMessage} <FaHandSparkles className="ml-2 text-yellow-400" />
          </h1>
        </div>
      </div>

      {nav && (
        <div className="md:hidden">
          <ul className="flex flex-col items-center bg-gradient-to-b from-black to-gray-800 text-gray-500 space-y-4 py-8">
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
