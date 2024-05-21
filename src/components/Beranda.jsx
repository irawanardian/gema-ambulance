import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import mobilGema from "../assets/mobil-gema.svg";

const Beranda = () => {
  return (
    <div
      className="md:12-px p-4 max-w-screen-2xl mx-auto mt-20 rounded-lg z-0"
      id="beranda"
    >
      <div className="gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9">
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
          {/* Banner Image */}
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img
              src={mobilGema}
              alt=""
              className="lg:h-[380px] drop-shadow-2xl"
            />
          </motion.div>
          {/* Banner Content */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="md:w-3/5"
          >
            <h2 className="md:text-6xl text-4xl font-bold text-white mb-3 leading-relaxed">
              Pilihan yang sangat tepat anda memilih kami
            </h2>
            <p className="text-white text-1xl mb-5">
              Gifchari Emergency Medical Ambulance (GEMA) adalah jasa
              transportasi dibidang ambulance yang akan melayani anda dengan
              sepenuh hati dan profesional.
            </p>
            <div>
              <button className="bg-[#DF0D86] py-2 px-4 transition-all duration-300 rounded text-white hover:text-white hover:bg-[#63208A]">
                <a
                  href="https://wa.me/6285971104154?text=Hallo, yang montok ready ga?"
                  target="_blank"
                >
                  Hubungi Kami
                </a>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Beranda;
