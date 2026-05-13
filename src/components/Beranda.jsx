import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaClock,
  FaShieldAlt,
  FaMapMarkerAlt,
  FaAmbulance,
  FaPhoneAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { fadeIn } from "../variants";

import mobilGema from "../assets/mobil-gema.svg";

const Beranda = () => {
  const trustItems = [
    "Emergency Response",
    "Antar Jemput Pasien",
    "Pengantaran Jenazah",
  ];

  return (
    <section
      id="beranda"
      className="relative overflow-hidden bg-white px-4 pb-12 pt-32 md:px-14 md:pb-20 md:pt-36"
    >
      {/* Soft background */}
      <div className="absolute left-[-120px] top-20 h-96 w-96 rounded-full bg-[#63208A]/10 blur-3xl" />
      <div className="absolute right-[-140px] top-10 h-[420px] w-[420px] rounded-full bg-[#DF0D86]/10 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 h-64 w-[70%] -translate-x-1/2 rounded-full bg-purple-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-screen-2xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          {/* Left Content */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="text-center lg:text-left"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#63208A]/10 bg-white px-4 py-2 text-sm font-bold text-[#63208A] shadow-lg shadow-purple-100">
              <span className="flex h-2.5 w-2.5 rounded-full bg-[#DF0D86]" />
              GEMA Ambulance • Siaga 24 Jam
            </div>

            <h1 className="mx-auto max-w-4xl text-4xl font-black leading-[1.08] tracking-tight text-slate-950 md:text-6xl lg:mx-0 lg:text-7xl">
              Bantuan ambulance yang{" "}
              <span className="relative inline-block text-[#DF0D86]">
                cepat
                <span className="absolute -bottom-2 left-0 h-3 w-full rounded-full bg-[#DF0D86]/15" />
              </span>
              , aman, dan penuh kepedulian.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg lg:mx-0">
              Gifchari Emergency Medical Ambulance (GEMA) siap membantu
              kebutuhan transportasi medis, emergency response, antar jemput
              pasien, pengantaran jenazah, dan layanan standby event dengan
              respon yang cepat dan pelayanan profesional.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
              {trustItems.map((item) => (
                <div
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-100 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm"
                >
                  <FaCheckCircle className="h-4 w-4 text-[#DF0D86]" />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row lg:items-start">
              <a
                href="https://wa.me/6285971104154?text=Halo%20Ambulance%20GEMA%2C%20kami%20butuh%20respon%20cepat%20anda!"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#DF0D86] px-7 py-4 text-sm font-extrabold text-white shadow-xl shadow-pink-200 transition-all duration-300 hover:-translate-y-1 hover:bg-[#63208A] sm:w-auto"
              >
                <FaWhatsapp className="h-5 w-5" />
                Hubungi via WhatsApp
              </a>

              <a
                href="tel:085971104154"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#63208A]/15 bg-white px-7 py-4 text-sm font-extrabold text-[#63208A] shadow-lg shadow-slate-100 transition-all duration-300 hover:-translate-y-1 hover:border-[#DF0D86]/40 hover:text-[#DF0D86] sm:w-auto"
              >
                <FaPhoneAlt className="h-4 w-4" />
                Telepon Sekarang
              </a>
            </div>

            {/* Bottom stats */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-slate-100 bg-white p-5 text-left shadow-lg shadow-slate-100">
                <FaClock className="mb-4 h-6 w-6 text-[#DF0D86]" />
                <p className="text-2xl font-black text-slate-950">24 Jam</p>
                <p className="mt-1 text-sm text-slate-500">Layanan siaga</p>
              </div>

              <div className="rounded-3xl border border-slate-100 bg-white p-5 text-left shadow-lg shadow-slate-100">
                <FaShieldAlt className="mb-4 h-6 w-6 text-[#63208A]" />
                <p className="text-2xl font-black text-slate-950">Aman</p>
                <p className="mt-1 text-sm text-slate-500">Perjalanan medis</p>
              </div>

              <div className="rounded-3xl border border-slate-100 bg-white p-5 text-left shadow-lg shadow-slate-100">
                <FaMapMarkerAlt className="mb-4 h-6 w-6 text-[#DF0D86]" />
                <p className="text-2xl font-black text-slate-950">Cepat</p>
                <p className="mt-1 text-sm text-slate-500">Respon bantuan</p>
              </div>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="relative mx-auto w-full max-w-2xl"
          >
            <div className="relative min-h-[560px] rounded-[2.5rem] border border-slate-100 bg-gradient-to-br from-white via-purple-50 to-pink-50 p-5 shadow-2xl shadow-purple-100 md:min-h-[660px] md:p-8">
              {/* Floating emergency status card */}
              <div className="absolute left-5 top-5 z-20 rounded-3xl border border-white/80 bg-white/90 p-4 shadow-xl backdrop-blur md:left-8 md:top-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DF0D86]/10 text-[#DF0D86]">
                    <FaAmbulance className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                      Status
                    </p>
                    <p className="text-sm font-black text-[#63208A]">
                      Ready to Help
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating route card */}
              <div className="absolute -bottom-4 left-5 right-5 z-20 rounded-3xl border border-white/80 bg-white/95 p-5 shadow-2xl backdrop-blur md:-bottom-6 md:left-8 md:right-8">
                <div className="grid gap-4 sm:grid-cols-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                      Layanan
                    </p>
                    <p className="mt-1 text-sm font-black text-[#63208A]">
                      Ambulance
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                      Area
                    </p>
                    <p className="mt-1 text-sm font-black text-[#63208A]">
                      Dalam / Luar Kota
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                      Bantuan
                    </p>
                    <p className="mt-1 text-sm font-black text-[#DF0D86]">
                      Darurat & Terjadwal
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative rings */}
              <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#63208A]/10 md:h-[460px] md:w-[460px]" />
              <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#DF0D86]/10 md:h-[340px] md:w-[340px]" />

              {/* Main image */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-x-4 top-28 z-10 flex justify-center md:top-32"
              >
                <img
                  src={mobilGema}
                  alt="Ambulance GEMA"
                  className="w-full max-w-[620px] drop-shadow-2xl"
                />
              </motion.div>

              {/* Small floating chips */}
              <div className="absolute right-5 top-28 z-20 hidden rounded-2xl bg-[#63208A] px-4 py-3 text-white shadow-xl md:block">
                <p className="text-xl font-black">Fast</p>
                <p className="text-xs text-white/75">Response</p>
              </div>

              <div className="absolute bottom-36 right-8 z-20 hidden rounded-2xl bg-[#DF0D86] px-4 py-3 text-white shadow-xl md:block">
                <p className="text-xl font-black">Care</p>
                <p className="text-xs text-white/75">With Heart</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Beranda;