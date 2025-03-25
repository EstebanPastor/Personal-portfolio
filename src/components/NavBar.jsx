import { useState, useEffect } from "react";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [language, setLanguage] = useState("es");

  useEffect(() => {
    const userLanguage = navigator.language || navigator.userLanguage;
    setLanguage(userLanguage.startsWith("es") ? "es" : "en");
  }, []);

  return (
    <nav className="bg-black w-full z-50">
      <div className="flex justify-between items-center p-4">
        <div className="md:hidden">
          <button onClick={() => setNav(!nav)} className="text-white">
            {nav ? "Cerrar" : "Menú"}
          </button>
        </div>
      </div>

      {nav && (
        <div className="md:hidden">
          <ul className="flex flex-col items-center bg-gradient-to-b from-black to-gray-800 text-gray-500 space-y-4 py-8"></ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
