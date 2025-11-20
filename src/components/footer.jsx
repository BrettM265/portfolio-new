import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="w-full bg-gray-900 text-gray-200 py-12 px-6 mt-24"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">

        {/* Name / Title */}
        <h2 className="text-3xl font-bold mb-2 text-center">
          Brett Morrison
        </h2>
        <p className="text-gray-400 text-center mb-6">
          Front End Developer
        </p>

        {/* Contact Email */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="mailto:Bdmo256@gmail.com"
          className="flex items-center gap-2 bg-yellow-400 text-black font-semibold px-5 py-2 rounded-full mb-6"
        >
          <FaEnvelope />
          Bdmo256@gmail.com
        </motion.a>

        {/* Social Icons */}
        <div className="flex gap-6 text-2xl mb-6">
          <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/brett-morrison-dev/">
            <FaLinkedinIn />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/BrettM265/">
            <FaGithub />
          </motion.a>
        </div>

        {/* Bottom line */}
        <p className="text-gray-500 text-sm mt-4 text-center">
          © {new Date().getFullYear()} Brett Morrison. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
