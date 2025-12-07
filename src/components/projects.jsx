import { motion } from "framer-motion";
import gameshop from '../assets/game-shop.png';
import weatherApp from '../assets/weather-app3.png';
import ticTacToe from '../assets/tiktaktoe.png';
import taxApp from '../assets/tax-app3.png';
import pizzaShop from '../assets/pizza shop.png';

export default function Projects() {

  // PREMIER PROJECT
  const premierProject = {
    title: "BrettBot Tax Estimator",
    img: taxApp,
    desc: "A smart ChatGPT powered tax robot that makes estimating your 2026 taxes easy. Just enter your income, state, and dependents. Or tap any of the built-in buttons to ask common tax questions without needing to know how to prompt AI. Fast, simple tax insights at your fingertips.",
    link: "https://taxbot.brettmorrisondev.com/"
  };

  // 4 project grid
  const secondaryProjects = [
    {
      id: 2,
      title: "Video Game Shop",
      img: gameshop,
      desc: "A React-based e-commerce shop with product listings, cart functionality, and smooth UI/UX.",
      link: "https://brettm265.github.io/game-shop/"
    },
    {
      id: 3,
      title: "Weather API App",
      img: weatherApp,
      desc: "A responsive weather dashboard using the OpenWeatherMap API with real-time data and forecasts.",
      link: "https://brettm265.github.io/Weather-App/"
    },
    {
      id: 4,
      title: "Tic Tac Toe Game",
      img: ticTacToe,
      desc: "A fun Tic Tac Toe game made with JavaScript, HTML, and CSS. Play against a friend!",
      link: "https://brettm265.github.io/TicTacToe/"
    },
    {
      id: 4,
      title: "Pizza Shop Website",
      img: pizzaShop,
      desc: "A basic pizza shop website showcasing menu items, specials, and contact info.",
      link: "https://brettm265.github.io/Pizza-Website/"
    },
  ];

  return (
    <section id="projects" className="w-full bg-gray-100 py-24 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-5xl font-extrabold text-gray-900">Projects</h2>
        <p className="text-gray-600 mt-4">A selection of my development work.</p>
        <div className="w-20 h-[3px] bg-yellow-400 mx-auto mt-6"></div>
      </div>

      {/* PREMIER PROJECT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden mb-20"
      >
        <img
          src={premierProject.img}
          alt={premierProject.title}
          className="w-full h-72 object-cover"
        />

        <div className="p-8 text-center">
          <h3 className="text-3xl font-bold text-gray-900">{premierProject.title}</h3>

          <p className="text-gray-700 mt-4 leading-relaxed">
            {premierProject.desc}
          </p>

          <a
            href={premierProject.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-[#b7e4c0] px-6 py-3 font-semibold rounded-full"
          >
            VIEW PROJECT
          </a>
        </div>
      </motion.div>

      {/* GRID OF 4 PROJECTS */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10">
        {secondaryProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-6 text-left">
              <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>

              <p className="text-gray-600 mt-2">{project.desc}</p>

              <div className="flex justify-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-[#b7e4c0] px-5 py-2 text-sm font-semibold rounded-full"
                >
                  VIEW PROJECT
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
