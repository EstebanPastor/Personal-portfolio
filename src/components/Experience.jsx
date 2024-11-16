import { techs } from "../constants/techs";

const Experience = () => {
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center items-center w-full h-full text-white">
        <div className="text-center">
          <p className="text-2xl font-bold border-b-4 border-gray-400 p-2 inline">
            Skills and experience
          </p>
          <p className="py-4">Desarrollador freelance (2021 - 2024)</p>
          <p className="py-4">
            Banco Galicia desarrollador front-end  (2024 - presente)
          </p>
          <p className="py-4">Freelance developer (2021 - 2024)</p>
          <p className="py-4">
            Banco Galicia front-end developer (2024 - present)
          </p>
          <p className="py-4">
            Estas son las tecnologías con las que he trabajado y sigo
            aprendiendo
          </p>
          <p className="py-4">
            These are the technologies with which I have worked and continue to
            learn
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center py-8 px-6 sm:px-12">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${style}`}
            >
              <img
                src={src}
                alt="technologies-images"
                className="w-20 mx-auto"
              />
              <p className="mt-6 text-center">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
