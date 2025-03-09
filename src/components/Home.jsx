const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-10"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row md:items-end md:ml-auto">
        <div className="flex flex-col justify-center h-full mb-10 md:mb-0 md:ml-24">
          <h2 className="text-3xl mt-6 sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Esteban Pastor
          </h2>
          <p className="text-white py-4 max-w-md text-center md:text-left text-sm sm:text-base">
            Soy un desarrollador de software especializado en el desarrollo
            front-end y back-end enfocado a resultados, utilización de buenas
            prácticas, calidad del código y resolución de problemas a corto
            plazo. Poseo un aprendizaje rápido, pensamiento lógico y escucha
            activa que hacen una adaptación rápida a diferentes áreas /
            tecnologías.
          </p>
          <p className="text-white py-4 max-w-md text-center md:text-left text-sm sm:text-base">
            I am a software developer specialized in front-end and back-end
            development focused on results, use of good practices, code quality
            and resolution of short-term problems. I have a quick learner,
            logical thinking, and active listening skills that make me adapt
            quickly to different areas/technologies.
          </p>
          <p className="text-white py-4 max-w-md text-center md:text-left text-sm sm:text-base">
            ¿Cómo contactarme? Envíame un correo a:
            <span className="block pt-2 text-blue-300">
              estebanandrespastor@gmail.com
            </span>
          </p>
          <p className="text-white py-4 max-w-md text-center md:text-left text-sm sm:text-base">
            How to contact me? Send me an email at:
            <span className="block pt-2 text-blue-300">
              estebanandrespastor@gmail.com
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
