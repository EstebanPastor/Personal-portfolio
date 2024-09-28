const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-8 mx-auto flex flex-col justify-center w-full h-full space-y-10">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
        </div>
        <div className="text-xl">
          <p>
            Si estás interesado/a en ver mis proyectos, están todos publicados
            en mi perfil de Github. Pinchá en el siguiente enlace:
          </p>
          <a
            href="https://github.com/EstebanPastor"
            className="bg-slate-400 rounded-md px-3 py-2 inline-block mt-2"
          >
            GITHUB
          </a>
        </div>

        <div className="text-xl">
          <p>
            If you are interested in seeing my projects, they are all published
            in my Github profile. Click on the following link:
          </p>
          <a
            href="https://github.com/EstebanPastor"
            className="bg-slate-400 rounded-md px-3 py-2 inline-block mt-2"
          >
            GITHUB
          </a>
        </div>
        <footer className="border-t-2 border-gray-500 pt-4">
          <p className="text-center text-lg">
            &copy; {new Date().getFullYear()} Esteban Pastor. All rights
            reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default About;
