import { techs } from "../../utils/techs";

const Experience = () => {
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-2 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-2xl font-bold border-b-4 border-gray-400 p-2 inline">
            Skills and experience
          </p>
          <p className="py-8">
            Estas son las tecnologias con las que he trabajado y sigo
            aprendiendo.
          </p>
          <p className="py-8">
            These are the technologies with which I have worked and continue to
            learn.
          </p>
        </div>

        <div className="w-full grid grid-cols-4 gap-10 text-center py-8 px-6 sm:px-12 md:px-24 lg:px-32 xl:px-40">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${style}`}
            >
              <img src={src} alt="technologies-images" className="w-20 mx-auto" />
              <p className="mt-6">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
