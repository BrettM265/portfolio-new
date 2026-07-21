import { motion } from "framer-motion";
import saddleCo from "../assets/saddleCo.png";
import Gym from "../assets/Gym Website.png";
import medCo from "../assets/medCo.png";
import saddleCoBanner from "../assets/saddleCoBanner.png";
import sadco2 from "../assets/sCoB2.png";
import { useState } from "react";  


export default function WebDesign() {

    const [selectedImage, setSelectedImage] = useState(null);

    const webDesignList = [
            {
              id: 0,
              title: "GYM BROS",
              img: Gym,
              img2: Gym,
            },
            {
              id: 2,
              title: "medCo.",
              img: medCo,
              img2: medCo,
            },
            {
              id: 1,
              title: "Saddle Up and Co.",
              img: saddleCoBanner,
              img2: sadco2,
            },
        ];


    return (

    <section id="web-design" className="w-full bg-gray-100 py-24 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-5xl font-extrabold text-gray-900">Web Design</h2>
        <p className="text-gray-600 mt-4">A few of my Website Designs!</p>
        <div className="w-20 h-[3px] bg-yellow-400 mx-auto mt-6"></div>
      </div>


      {/* GRID OF 3 Designs */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10">
        {webDesignList.map((project) => (
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
                className="w-full h-auto max-h-92 object-contain rounded"
                />

                <button
                onClick={() => setSelectedImage(project)}
                className="bg-yellow-400 font-semibold px-6 py-2 rounded-full mt-4 mb-4 mx-auto block"
                >
                View fullscreen
                </button>
          </motion.div>
          
        ))}

        {selectedImage && (
            <div
                className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
                onClick={() => setSelectedImage(null)}
            >
                <button
                onClick={() => setSelectedImage(null)}
                className="top-6 right-6 text-white text-3xl font-bold"
                aria-label="Close"
                >
                &times;
                </button>

                <img
                src={selectedImage.img2}
                alt={selectedImage.title}
                className="max-w-full max-h-full object-contain rounded"
                onClick={(e) => e.stopPropagation()}
                />
            </div>
            )}

      </div>
    </section>
)
}