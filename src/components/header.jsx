import { motion } from "framer-motion";
import professionalImage from '../assets/professional-image1.jpg';
import arrow from "../assets/arrow.png";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Header() {
  return (
    <section className="w-full min-h-screen bg-white flex flex-col items-center justify-center px-6 py-16">
      
      {/* GRID CONTENT */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#b7e4c0] shadow-xl rounded-lg p-10 text-center"
        >
          <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-6">
            <img 
              src={professionalImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="text-3xl font-bold text-gray-800">Brett Morrison</h2>

          <div className="w-10 h-[3px] bg-yellow-400 mx-auto my-4"></div>

          <p className="text-sm tracking-widest text-gray-700">
            Front-End Developer
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 justify-center mt-10 text-gray-700 bg-[#FFFFFF] p-4 rounded-full w-max mx-auto">
            <a href="https://www.linkedin.com/in/brett-morrison-dev/" className="hover:text-gray-900"><FaLinkedinIn size={18} /></a>
            <a href="https://github.com/BrettM265/" className="hover:text-gray-900"><FaGithub size={18} /></a>
          </div>
        </motion.div>

        {/* Intro Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-900"
        >
          <h1 className="text-6xl font-extrabold mb-6">Hello! {/*<img src={waving}/>*/}</h1>

          <p className="text-lg leading-relaxed mb-8 text-gray-700">
            I’m a Developer specializing in building exceptional digital
            experiences. Currently, I’m focused on building responsive web
            applications. My expertise is in JavaScript, React, Next.js, Python, integrating API's and
            designing user-friendly interfaces. But I'm creating new projects everyday containing different tech stacks to expand my knowledge! And launching them on various hosting platforms.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mb-10">
            <button className="bg-yellow-400 font-semibold px-6 py-2 rounded-full">
              <a href="/Developer Resume Clean.pdf">RESUME</a>
            </button>
            <button className="border-2 border-black font-semibold px-6 py-2 rounded-full">
              <a href="https://github.com/BrettM265/">GITHUB</a>
            </button>
          </div>
          
        </motion.div>

      </div> {/* END GRID */}

      {/* Scroll Down Arrow - NOW OUTSIDE GRID AND CENTERED */}
      <div className="hidden md:flex w-full justify-center mt-25">
        <motion.img
          src={arrow}
          alt="Scroll Down"
          className="w-20 h-20 cursor-pointer rotate-180"
          initial={{ y: 0 }}
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          onClick={() =>
            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
          }
        />
      </div>
    </section>
  );
}