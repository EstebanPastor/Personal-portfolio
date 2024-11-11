const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-20"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full mb-10 md:mb-0 md:mr-2">
          <h2 className="text-3xl mt-6 sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Web developer
          </h2>
          <p className="text-white py-4 max-w-md text-center md:text-left text-sm sm:text-base">
            Mi nombre es Esteban Andres Pastor, soy un desarrollador
            especializado en el desarrollo front-end y back-end enfocado a
            resultados, utilización de buenas prácticas, calidad del código y
            resolución de problemas a corto plazo. Poseo un aprendizaje rápido,
            pensamiento lógico y escucha activa que hacen una adaptación rápida
            a diferentes áreas / tecnologías.
          </p>
          <p className="text-white py-4 max-w-md text-center md:text-left text-sm sm:text-base">
            My name is Esteban Andres Pastor, I am a developer specialized in
            front-end and back-end development focused on results, use of good
            practices, code quality and resolution of short-term problems. I
            have a quick learner, logical thinking, and active listening skills
            that make me adapt quickly to different areas/technologies.
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
