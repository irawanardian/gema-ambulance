import FeatureCard from "./FeaturedCard";
import { motion } from "framer-motion";
import {
  FaClock,
  FaShieldHeart,
  FaWhatsapp,
  FaCheck,
} from "react-icons/fa6";

import {
  FaHandsHelping,
  FaMedkit,
  FaBolt,
  FaSync,
} from "react-icons/fa";
import { fadeIn } from "../variants";

const features = [
  {
    icon: <FaMedkit />,
    title: "Profesional",
    description:
      "Didukung tim yang terlatih dan berpengalaman dalam membantu kebutuhan transportasi medis maupun kondisi darurat.",
  },
  {
    icon: <FaHandsHelping />,
    title: "Harga Kompetitif",
    description:
      "Memberikan pelayanan maksimal dengan biaya yang tetap rasional, jelas, dan menyesuaikan kebutuhan perjalanan.",
  },
  {
    icon: <FaBolt />,
    title: "Responsif",
    description:
      "Siap membantu dengan respon cepat, terutama saat kondisi darurat membutuhkan penanganan dan transportasi segera.",
  },
  {
    icon: <FaSync />,
    title: "Fleksibel",
    description:
      "Layanan dapat menyesuaikan kebutuhan pasien, keluarga, event, perjalanan dalam kota, maupun luar kota.",
  },
];

const highlights = [
  "Layanan darurat dan terjadwal",
  "Dalam kota dan luar kota",
  "Pendampingan komunikasi yang jelas",
  "Pelayanan sopan, aman, dan empati",
];

const stats = [
  { value: "24 Jam", label: "Layanan Siaga" },
  { value: "Cepat", label: "Respon Bantuan" },
  { value: "Aman", label: "Perjalanan Medis" },
];

const WhyGema = () => {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-16 md:px-14 md:py-24">
      <div className="absolute left-0 top-16 h-72 w-72 rounded-full bg-[#63208A]/10 blur-3xl" />
      <div className="absolute bottom-16 right-0 h-80 w-80 rounded-full bg-[#DF0D86]/10 blur-3xl" />

      <div className="relative mx-auto max-w-screen-2xl">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left Content */}
          <motion.div
            variants={fadeIn("right", 0.25)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#DF0D86]/10 px-4 py-2 text-sm font-bold text-[#DF0D86]">
              <FaShieldHeart className="h-4 w-4" />
              Kenapa Memilih GEMA
            </div>

            <h2 className="max-w-3xl text-3xl font-extrabold leading-tight text-slate-900 md:text-5xl">
              Pelayanan ambulance yang{" "}
              <span className="text-[#63208A]">siap membantu</span> dengan
              cepat, aman, dan penuh empati.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              GEMA hadir bukan hanya sebagai layanan transportasi, tetapi juga
              sebagai partner keluarga saat membutuhkan bantuan medis,
              perjalanan pasien, pengantaran jenazah, maupun standby event.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#63208A]/10 text-[#63208A]">
                    <FaCheck className="h-4 w-4" />
                  </div>
                  <p className="text-sm font-semibold text-slate-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/6285971104154?text=Halo%20Ambulance%20GEMA%2C%20kami%20butuh%20respon%20cepat%20anda!"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#DF0D86] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-pink-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#63208A]"
              >
                <FaWhatsapp className="h-5 w-5" />
                Konsultasi Sekarang
              </a>

              <a
                href="#kontak"
                className="inline-flex items-center justify-center rounded-full border border-[#63208A]/20 px-6 py-3 text-sm font-bold text-[#63208A] transition-all duration-300 hover:border-[#DF0D86] hover:bg-[#DF0D86]/10 hover:text-[#DF0D86]"
              >
                Lihat Kontak
              </a>
            </div>
          </motion.div>

          {/* Right Premium Card */}
          <motion.div
            variants={fadeIn("left", 0.25)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#63208A] via-[#8B2BB2] to-[#DF0D86] p-6 text-white shadow-2xl shadow-purple-200 md:p-8">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/15 blur-3xl" />

              <div className="relative z-10">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-3xl backdrop-blur">
                  <FaClock />
                </div>

                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/75">
                  GEMA Ambulance
                </p>

                <h3 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">
                  Siaga untuk kebutuhan darurat dan perjalanan terjadwal.
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/85">
                  Hubungi tim kami untuk menjelaskan kebutuhan Anda. Kami akan
                  bantu arahkan layanan yang sesuai, mulai dari ambulance
                  pasien, jenazah, peti jenazah, hingga standby event.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur"
                    >
                      <p className="text-xl font-extrabold">{stat.value}</p>
                      <p className="mt-1 text-xs text-white/75">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <motion.div
          variants={fadeIn("up", 0.25)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.15 }}
          className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              index={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyGema;