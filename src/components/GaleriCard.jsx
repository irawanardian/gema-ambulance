import { useState } from "react";
import Galeri from "./Galeri";
import { motion } from "framer-motion";
import { FaImages, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { fadeIn } from "../variants";

import imageGaleri1 from "/antarJemputPasien.jpg";
import imageGaleri2 from "/dalemFullMedis.jpg";
import imageGaleri3 from "/emergencyResponse.jpg";
import imageGaleri4 from "/fullMedis.jpg";
import imageGaleri5 from "/pengantaranJenazah.jpg";
import imageGaleri6 from "/petiJenazah.jpg";
import imageGaleri7 from "/standByeEvent.jpg";

const images = [
  { src: imageGaleri1, alt: "Antar Jemput Pasien", label: "Antar Jemput Pasien" },
  { src: imageGaleri2, alt: "Interior Ambulance Full Medis", label: "Full Medis" },
  { src: imageGaleri3, alt: "Emergency Response", label: "Emergency Response" },
  { src: imageGaleri4, alt: "Ambulance Full Medis", label: "Ambulance Full Medis" },
  { src: imageGaleri5, alt: "Pengantaran Jenazah", label: "Pengantaran Jenazah" },
  { src: imageGaleri6, alt: "Peti Jenazah", label: "Peti Jenazah" },
  { src: imageGaleri7, alt: "Standby Event", label: "Standby Event" },
];

function GaleriCard() {
  const [showAll, setShowAll] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const displayedImages = showAll ? images : images.slice(0, 4);

  const handleImageClick = (image) => {
    setModalImage(image);
  };

  const handleCloseModal = () => {
    setModalImage(null);
  };

  return (
    <section
      id="galeri"
      className="mx-auto max-w-screen-2xl px-4 py-16 md:px-14 md:py-24"
    >
      <motion.div
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.35 }}
        className="mx-auto mb-10 max-w-3xl text-center"
      >
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#DF0D86]/10 px-4 py-2 text-sm font-bold text-[#DF0D86]">
          <FaImages className="h-4 w-4" />
          Dokumentasi GEMA
        </div>

        <h2 className="text-3xl font-extrabold text-slate-900 md:text-5xl">
          Galeri <span className="text-[#63208A]">Layanan</span>{" "}
          <span className="text-[#DF0D86]">Kami</span>
        </h2>

        <p className="mt-4 text-base leading-7 text-slate-600">
          Beberapa dokumentasi layanan Ambulance GEMA dalam membantu kebutuhan
          transportasi medis, kedukaan, dan standby event.
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.25)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.15 }}
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {displayedImages.map((image, index) => (
          <button
            type="button"
            key={`${image.label}-${index}`}
            onClick={() => handleImageClick(image)}
            className={`group relative overflow-hidden rounded-[1.5rem] bg-slate-100 text-left shadow-lg shadow-slate-200 outline-none transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
              index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className={`h-64 w-full object-cover transition duration-500 group-hover:scale-110 ${
                index === 0 ? "lg:h-full" : ""
              }`}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-90" />

            <div className="absolute bottom-0 left-0 right-0 p-5">
              <span className="inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#63208A] backdrop-blur">
                {image.label}
              </span>
              <p className="mt-3 text-sm font-semibold text-white">
                Klik untuk melihat foto
              </p>
            </div>
          </button>
        ))}
      </motion.div>

      <div className="mt-8 text-center">
        <button
          type="button"
          onClick={() => setShowAll(!showAll)}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#63208A] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-purple-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#DF0D86]"
        >
          {showAll ? (
            <>
              <FaChevronUp className="h-4 w-4" />
              Tampilkan Lebih Sedikit
            </>
          ) : (
            <>
              <FaChevronDown className="h-4 w-4" />
              Lihat Semua Galeri
            </>
          )}
        </button>
      </div>

      {modalImage && (
        <Galeri
          src={modalImage.src}
          alt={modalImage.alt}
          title={modalImage.label}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
}

export default GaleriCard;