import { techs } from "../constants/techs";
import { experienceLogos } from "../constants/logos";

const Experience = () => {
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen pt-2"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-start items-center w-full h-full text-white">
        <div className="text-center">
          {/* Español */}
          <p className="text-2xl font-bold border-b-4 border-gray-400 p-2 inline">
            Habilidades y experiencia
          </p>

          <p className="py-4">Desarrollador freelance (2020 - 2022)</p>

          <p className="py-4 flex items-center justify-center">
            <img
              src={experienceLogos.find((logo) => logo.title === "DPTV")?.src}
              alt="DPTV"
              className="w-8 h-8 mr-2"
            />
            DPTV - Desarrollador Front-End (2022 - 2024)
          </p>

          <p className="py-4 flex items-center justify-center">
            <img
              src={
                experienceLogos.find((logo) => logo.title === "Banco Galicia")
                  ?.src
              }
              alt="Banco Galicia"
              className="w-8 h-8 mr-2"
            />
            Banco Galicia - Desarrollador Front-End (2024 - Presente)
          </p>

          <p className="text-2xl font-bold border-b-4 border-gray-400 p-2 inline mt-6">
            Skills and Experience
          </p>

          <p className="py-4">Freelance Developer (2020 - 2022)</p>

          <p className="py-4 flex items-center justify-center">
            <img
              src={experienceLogos.find((logo) => logo.title === "DPTV")?.src}
              alt="DPTV"
              className="w-8 h-8 mr-2"
            />
            DPTV - Front-End Developer (2022 - 2024)
          </p>

          <p className="py-4 flex items-center justify-center">
            <img
              src={
                experienceLogos.find((logo) => logo.title === "Banco Galicia")
                  ?.src
              }
              alt="Banco Galicia"
              className="w-8 h-8 mr-2"
            />
            Banco Galicia - Front-End Developer (2024 - Present)
          </p>
          <p className="py-4">
            Estas son las tecnologías con las que he trabajado y sigo
            aprendiendo:
          </p>

          <p className="py-4">
            These are the technologies with which I have worked and continue to
            learn:
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center py-8 px-6 sm:px-12">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${style}`}
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4 text-center text-sm sm:text-base">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
