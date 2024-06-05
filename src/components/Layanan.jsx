import React, { useState } from "react";
import LayananCard from "./LayananCard";

import image1 from "../assets/1.emergencyResponse.jpg";
import image2 from "../assets/2.fullMedis.jpg";
import image3 from "../assets/pengantaranJenazah.jpg";
import image4 from "../assets/4.petiJenazah.jpg";
import image5 from "../assets/6.standByeEvent.jpg";
import image6 from "../assets/antarJemputPasien.jpg";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const images = [
  {
    src: image1,
    alt: "Emergency Response",
    title: "Emergency Response",
    description: "Layanan Emergency Response dengan cepat dan tanggap.",
  },
  {
    src: image2,
    alt: "Ambulance Full Medis",
    title: "Ambulance Full Medis",
    description: "Layanan Ambulance Full Medis dan Respon Cepat Tanggap.",
  },
  {
    src: image3,
    alt: "Pengantaran Jenazah",
    title: "Pengantaran Jenazah",
    description: "Layanan pengantaran jenazah dalam kota dan luar kota.",
  },
  {
    src: image4,
    alt: "Pengantaran Jenazah",
    title: "Peti Jenazah",
    description:
      "Layanan peti jenazah yang GEMA sediakan, info klik tomboh dibawah.",
  },
  {
    src: image5,
    alt: "Pengantaran Jenazah",
    title: "Standbye Event / Shooting",
    description: "Layanan pengantaran jenazah dalam kota dan luar kota.",
  },
  {
    src: image6,
    alt: "Pengantaran Jenazah",
    title: "Antar Jemput Pasien",
    description:
      "Layanan Ambulance antar jemput pasien dalam kota dan luar kota.",
  },
];

function Layanan() {
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
    <div className="App container mx-auto p-4" id="layananKami">
      <motion.div
        variants={fadeIn("down", 0.7)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="layananGema"
      >
        <h1 className="text-3xl font-bold text-center text-[#63208A] mb-6">
          Layanan
        </h1>
        <h1 className="text-3xl font-bold text-center text-[#DF0D86] ml-2 mb-6">
          GEMA
        </h1>
      </motion.div>
      <motion.p
        variants={fadeIn("up", 0.7)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="text-center text-gray-700 mb-8"
      >
        Layanan terbaik yang akan kami berikan untuk anda
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
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
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-pink-600">
                {image.title}
              </div>
              <p className="text-gray-700 text-base">{image.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2 text-center mb-5">
              <button className="w-full bg-[#63208A] text-white py-2 px-4 rounded-lg hover:bg-purple-800 transition duration-300">
                <a
                  href="https://wa.me/6285971104154?text=Halo Ambulance GEMA, kami butuh respon cepat anda!"
                  target="_blank"
                >
                  PESAN SEKARANG
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && modalImage && (
        <LayananCard
          src={modalImage.src}
          alt={modalImage.alt}
          onClose={handleCloseModal}
          maxWidth="50vw" // Atur ukuran maksimal gambar
          maxHeight="50vh"
        />
      )}
    </div>
  );
}

export default Layanan;
