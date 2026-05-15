import { useState } from "react";
import { Link } from "react-router-dom";
import LayananCard from "./LayananCard";

import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaTruckMedical,
  FaWhatsapp,
} from "react-icons/fa6";
import { fadeIn } from "../variants";
import { services } from "../data/services";

function Layanan() {
  const [modalService, setModalService] = useState(null);

  return (
    <section
      id="layananKami"
      className="relative overflow-hidden bg-gradient-to-b from-white via-purple-50/60 to-white px-4 py-16 md:px-14 md:py-24"
    >
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#DF0D86]/10 blur-3xl" />
      <div className="absolute bottom-20 right-0 h-80 w-80 rounded-full bg-[#63208A]/10 blur-3xl" />

      <div className="relative mx-auto max-w-screen-2xl">
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.35 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#63208A]/10 px-4 py-2 text-sm font-bold text-[#63208A]">
            <FaTruckMedical className="h-4 w-4" />
            Layanan Ambulance GEMA
          </div>

          <h2 className="text-3xl font-extrabold leading-tight text-slate-900 md:text-5xl">
            Layanan terbaik untuk kebutuhan{" "}
            <span className="text-[#DF0D86]">darurat</span> dan{" "}
            <span className="text-[#63208A]">terjadwal</span>
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            Kami menyediakan layanan ambulance, transportasi pasien,
            pengantaran jenazah, perlengkapan kedukaan, hingga standby event
            dengan pelayanan cepat, aman, dan profesional.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.25)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.15 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={`${service.title}-${index}`}
                className="group overflow-hidden rounded-[1.75rem] border border-slate-100 bg-white shadow-lg shadow-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <button
                  type="button"
                  onClick={() => setModalService(service)}
                  className="relative block w-full overflow-hidden text-left"
                >
                  <img
                    src={service.src}
                    alt={service.alt}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                  <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-[#63208A] shadow-sm backdrop-blur">
                    <Icon className="h-4 w-4 text-[#DF0D86]" />
                    {service.badge}
                  </div>

                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                      GEMA Service
                    </p>
                    <h3 className="mt-1 text-2xl font-extrabold text-white">
                      {service.title}
                    </h3>
                  </div>
                </button>

                <div className="p-6">
                  <p className="min-h-[84px] text-sm leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a
                      href="https://wa.me/6285971104154?text=Halo%20Ambulance%20GEMA%2C%20kami%20butuh%20respon%20cepat%20anda!"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#DF0D86] px-4 py-3 text-sm font-bold text-white shadow-md shadow-pink-100 transition-all duration-300 hover:bg-[#63208A]"
                    >
                      <FaWhatsapp className="h-4 w-4" />
                      Pesan
                    </a>

                    <Link
                      to={`/layanan/${service.slug}`}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[#63208A]/20 px-4 py-3 text-sm font-bold text-[#63208A] transition-all duration-300 hover:border-[#DF0D86] hover:bg-[#DF0D86]/10 hover:text-[#DF0D86]"
                    >
                      Detail
                      <FaArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </motion.div>
      </div>

      {modalService && (
        <LayananCard
          src={modalService.src}
          alt={modalService.alt}
          title={modalService.title}
          description={modalService.description}
          onClose={() => setModalService(null)}
        />
      )}
    </section>
  );
}

export default Layanan;
