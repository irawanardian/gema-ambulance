import React from "react";
import LayananCard from "./LayananCard";

import image1 from "../assets/emergencyResponse.jpg";
import image2 from "../assets/fullMedis.jpg";
import image3 from "../assets/pengantaranJenazah.jpg";
import image4 from "../assets/petiJenazah.jpg";
import image5 from "../assets/logo-gema-new.png";
import image6 from "../assets/standByeEvent.jpg";
import image7 from "../assets/antarJemputPasien.jpg";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const layanan = [
  {
    image: image1,
    title: "Emergency Response",
    description: "Layanan Emergency Response dengan cepat dan tanggap.",
    buttonText: "PESAN SEKARANG",
  },
  {
    image: image2,
    title: "Ambulance Full Medis",
    description: "Layanan Ambulance Full Medis dan Respon Cepat Tanggap",
    buttonText: "PESAN SEKARANG",
  },
  {
    image: image3,
    title: "Pengantaran Jenazah",
    description: "Layanan pengantaran jenazah dalam kota dan luar kota.",
    buttonText: "PESAN SEKARANG",
  },
  {
    image: image4,
    title: "Peti Jenazah",
    description:
      "Layanan peti jenazah yang GEMA sediakan, info klik tomboh dibawah",
    buttonText: "PESAN SEKARANG",
  },
  {
    image: image5,
    title: "Formalin",
    description: "Untuk list lebih lanjut, silahkan klik tombol dibawah",
    buttonText: "PESAN SEKARANG",
  },
  {
    image: image6,
    title: "Standbye Event / Shooting",
    description: "Layanan pengantaran jenazah dalam kota dan luar kota.",
    buttonText: "PESAN SEKARANG",
  },
  {
    image: image7,
    title: "Antar Jemput Pasien",
    description: "Layanan Ambulance antar jemput pasien",
    buttonText: "PESAN SEKARANG",
  },
];

const Layanan = () => {
  return (
    <div className="p-4  min-h-screen justify-center" id="layananKami">
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
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {layanan.map((layanan, index) => (
          <LayananCard
            key={index}
            image={layanan.image}
            title={layanan.title}
            description={layanan.description}
            buttonText={layanan.buttonText}
          />
        ))}
      </div>
    </div>
  );
};

export default Layanan;
