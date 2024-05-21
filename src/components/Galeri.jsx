import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const images = [
  "/antarJemputPasien.jpg",
  "/emergencyResponse.jpg",
  "/fullMedis.jpg",
  "/pengantaranJenazah.jpg",
  "/petiJenazah.jpg",
  "/standByeEvent.jpg",
  "/dalemFullMedis.jpg",
];

const Galeri = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedImages = showAll ? images : images.slice(0, 4);

  return (
    <div className="container mx-auto p-4 mb-20" id="galeri">
      <motion.div
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="layananGema"
      >
        <h1 className="text-3xl font-bold text-center text-[#63208A] mb-6">
          Galeri
        </h1>
        <h1 className="text-3xl font-bold text-center text-[#DF0D86] ml-2 mb-6">
          GEMA
        </h1>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-sm">
        {displayedImages.map((images, index) => (
          <div key={index} className="w-full h-65 bg-gray-200">
            <img
              src={images}
              alt={`Galeri ${index}`}
              className="w-full h-full object-cover "
            />
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-[#63208A] text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {showAll ? "Tampilkan Lebih Sedikit" : "Lihat Semua"}
        </button>
      </div>
    </div>
  );
};

export default Galeri;
