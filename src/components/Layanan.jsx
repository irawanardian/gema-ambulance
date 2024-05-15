import React from "react";
import LayananCard from "./LayananCard";

import image1 from "../assets/imgLayananSatu.png";
import image2 from "../assets/imgLayananDua.png";
import image3 from "../assets/imgLayananTiga.png";
import image4 from "../assets/imgLayananEmpat.png";
import image5 from "../assets/imgLayananLima.png";
import image6 from "../assets/imgLayananEnam.png";

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
    title: "Antar Jemput Pasien",
    description: "Layanan antar jemput pasien dalam kota dan luar kota.",
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
    title: "Pengantaran Jenazah",
    description: "Layanan pengantaran jenazah dalam kota dan luar kota.",
    buttonText: "PESAN SEKARANG",
  },
  {
    image: image5,
    title: "Pengantaran Jenazah",
    description: "Layanan pengantaran jenazah dalam kota dan luar kota.",
    buttonText: "PESAN SEKARANG",
  },
  {
    image: image6,
    title: "Pengantaran Jenazah",
    description: "Layanan pengantaran jenazah dalam kota dan luar kota.",
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
