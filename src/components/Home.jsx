import HeroImage from "../assets/heroImage.png";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Web developer
          </h2>
          <p className="text-white py-5 max-w-md">
            Mi nombre es Esteban Andres Pastor, actualmente soy estudiante de la
            tecnicatura universitaria en programación (UTN). Me encuentro en el
            segundo año.
          </p>
          <p className="text-white py-5 max-w-md">
            My name is Esteban Andres Pastor, I am currently a student of the
            university technical program in programming (UTN). I am currently in
            the second year.
          </p>

          <p className="text-white py-5 max-w-md">
            ¿Como contactarme? Envíame un mail: estebanandrespastor@gmail.com
          </p>
          <p className="text-white py-5 max-w-md">
            {" "}
            How to contact me? Send me an email: estebanandrespastor@gmail.com
          </p>

          <div></div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
