import { motion } from "framer-motion";
import gameshop from '../assets/game-shop.png';
import weatherApp from '../assets/weather-app3.png';
import ticTacToe from '../assets/tiktaktoe.png';
import taxApp from '../assets/tax-app2.png';
import calculator from '../assets/calculator.png';
import pizzaShop from '../assets/pizza shop.png';


export default function Projects() {
  const mainProjects = [
    {
      id: 1,
      title: "Tax Application",
      img: taxApp,
      desc: "Currently in the development phase, this application gives you tax calculations based on your income. I'm currently integrating AI features for the user to ask more specific tax questions. This application will be launched on AWS.",
      link: "#"
    },
    {
      id: 2,
      title: "Video Game Shop",
      img: gameshop,
      desc: "A React based e-commerce website for video games, featuring product listings, shopping cart functionality, and a user-friendly interface.",
      link: "https://brettm265.github.io/game-shop/"
    },
    {
      id: 3,
      title: "Weather API App",
      img: weatherApp,
      desc: "A mobile focused weather application built with React that provides real-time weather updates, forecasts, and location-based services. These features are implemented using the OpenWeatherMap API.",
      link: "https://brettm265.github.io/Weather-App/"
    },
    {
      id: 4,
      title: "Tic Tac Toe Game",
      img: ticTacToe,
      desc: "A fun and interactive Tic Tac Toe game built with JavaScript, HTML, and CSS. Play against a friends!",
      link: "https://brettm265.github.io/TicTacToe/"
    },
  ];

  const miniProjects = [
    { id: 5, img: calculator, link: "https://brettm265.github.io/JSCalculator/" },
    { id: 6, img: pizzaShop, link: "https://brettm265.github.io/Pizza-Website/#/" },
  ];

  return (
    <section id="projects" className="w-full bg-gray-100 py-24 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-5xl font-extrabold text-gray-900">Projects</h2>
        <p className="text-gray-600 mt-4">A selection of my development work.</p>
        <div className="w-20 h-[3px] bg-yellow-400 mx-auto mt-6"></div>
      </div>

      {/* Main Projects */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 mb-20">
        {mainProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img src={project.img} alt={project.title} className="w-full h-56 object-cover" />
            <div className="p-6 text-left">
              <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.desc}</p>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-yellow-400 px-5 py-2 text-sm font-semibold rounded-full"
              >
                VIEW PROJECT
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mini Projects */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {miniProjects.map((mini) => (
          <motion.a
            key={mini.id}
            href={mini.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="block bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img src={mini.img} alt="Mini Project" className="w-full h-40 object-cover" />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
