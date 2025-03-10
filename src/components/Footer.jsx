const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-center items-center w-full h-full space-y-10">
        <div className="text-center">
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline">
            Projects
          </p>
        </div>

        <div className="text-xl text-center">
          <p>
            Si estás interesado/a en ver mis proyectos, están todos publicados
            en mi perfil de Github. Haz clic en el siguiente enlace:
          </p>
          <a
            href="https://github.com/EstebanPastor"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-500 hover:bg-slate-600 text-white font-semibold rounded-lg px-4 py-2 inline-block mt-4 transition-all duration-300"
          >
            GITHUB
          </a>
        </div>

        <div className="text-xl text-center">
          <p>
            If you are interested in seeing my projects, they are all published
            in my Github profile. Click on the following link:
          </p>
          <a
            href="https://github.com/EstebanPastor"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-500 hover:bg-slate-600 text-white font-semibold rounded-lg px-4 py-2 inline-block mt-4 transition-all duration-300"
          >
            GITHUB
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
