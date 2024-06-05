import React, { useState } from "react";
import Galeri from "./Galeri";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import imageGaleri1 from "/antarJemputPasien.jpg";
import imageGaleri2 from "/dalemFullMedis.jpg";
import imageGaleri3 from "/emergencyResponse.jpg";
import imageGaleri4 from "/fullMedis.jpg";
import imageGaleri5 from "/pengantaranJenazah.jpg";
import imageGaleri6 from "/petiJenazah.jpg";
import imageGaleri7 from "/standByeEvent.jpg";

const images = [
  { src: imageGaleri1, alt: "Emergency Response" },
  { src: imageGaleri2, alt: "Ambulance Full Medis" },
  { src: imageGaleri3, alt: "Pengantaran Jenazah" },
  { src: imageGaleri4, alt: "Pengantaran Jenazah" },
  { src: imageGaleri5, alt: "Pengantaran Jenazah" },
  { src: imageGaleri6, alt: "Pengantaran Jenazah" },
  { src: imageGaleri7, alt: "Pengantaran Jenazah" },
];

function GaleriCard() {
  const [showAll, setShowAll] = useState(false);

  const displayedImages = showAll ? images : images.slice(0, 4);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const handleImageClick = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {displayedImages.map((image, index) => (
          <div
            key={index}
            className="max-w-sm rounded overflow-hidden shadow-lg"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full cursor-pointer"
              onClick={() => handleImageClick(image)}
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
      {isModalOpen && modalImage && (
        <Galeri
          src={modalImage.src}
          alt={modalImage.alt}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default GaleriCard;
