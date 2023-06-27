const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
        </div>
        <p className="text-xl mt-20">
          Si estás interesado/a en ver mis proyectos están todos publicados en
          mi perfil de Github, pinchá en el siguiente enlance:{" "}
          <a
            href="https://github.com/EstebanPastor"
            className="bg-slate-400 rounded-md"
          >
            GITHUB
          </a>
        </p>
        <br />
        <p className="text-xl">
          If you are interested in seeing my projects are all published in my
          Github profile, click on the following link:
          <a
            href="https://github.com/EstebanPastor"
            className="bg-slate-400 rounded-md"
          >
            GITHUB
          </a>
          <br />
        </p>
        <br />
      </div>
    </div>
  );
};

export default About;
