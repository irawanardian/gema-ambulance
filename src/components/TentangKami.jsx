import gemaSatu from "../assets/gemaSatu.svg";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const TentangKami = () => {
  return (
    <motion.div
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="flex flex-col md:flex-row items-center p-4 rounded-lg mt-10 mb-24"
      id="tentangKami"
    >
      <img
        src={gemaSatu}
        alt="Ambulance"
        className="w-full md:w-1/2 lg:w-1/3 rounded-lg mb-4 md:mb-0"
      />
      <motion.div
        variants={fadeIn("left", 0.7)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="md:ml-6"
      >
        <div className="text-text">
          <h2 className="text-2xl font-bold text-[#DF0D86] mb-2">Tentang</h2>
          <h2 className="text-2xl font-bold text-[#63208A] mb-2 ml-1">GEMA</h2>
        </div>

        <p className="text-black]">
          Gifchari Emergency Medical Ambulance (GEMA) merupakan jasa layanan
          ambulance yang berdiri pada tanggal 7 September 2023. GEMA menyediakan
          layanan berupa Emergency Response, antar jemput pasien dalam kota dan
          luar kota, pengantaran jenazah dalam kota dan luar kota, GEMA pun
          menyediakan perlengkapan kedukaan seperti Peti Jenazah, Formalin.
        </p>
        <button className="mt-4 bg-[#63208A] text-white py-2 px-4 rounded-lg hover:bg-purple-800 transition duration-300">
          <a
            href="https://wa.me/6287721607666?text=Hallo Ambulance GEMA"
            target="_blank"
          >
            Hubungi Kami
          </a>
        </button>
      </motion.div>
    </motion.div>
  );
};

export default TentangKami;
