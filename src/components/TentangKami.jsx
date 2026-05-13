import gemaSatu from "../assets/gemaSatu.svg";
import { motion } from "framer-motion";
import { FaWhatsapp, FaCalendarCheck, FaHeartPulse, FaTruckMedical } from "react-icons/fa6";
import { fadeIn } from "../variants";

const TentangKami = () => {
  return (
    <section
      id="tentangKami"
      className="mx-auto max-w-screen-2xl px-4 py-16 md:px-14 md:py-24"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        {/* Image Area */}
<motion.div
  variants={fadeIn("right", 0.2)}
  initial="hidden"
  whileInView="show"
  viewport={{ once: false, amount: 0.25 }}
  className="relative"
>
  <div className="absolute -left-8 -top-8 h-48 w-48 rounded-full bg-[#DF0D86]/15 blur-3xl" />
  <div className="absolute -bottom-10 right-0 h-64 w-64 rounded-full bg-[#63208A]/15 blur-3xl" />

  <div className="relative overflow-hidden rounded-[2rem] border border-purple-100 bg-white p-3 shadow-2xl shadow-purple-100">
    <div className="relative h-[430px] overflow-hidden rounded-[1.6rem] bg-gradient-to-br from-purple-50 to-pink-50 md:h-[520px]">
      <img
        src={gemaSatu}
        alt="Tentang Ambulance GEMA"
        className="h-full w-full object-cover object-[center_35%]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#18091F]/45 via-transparent to-transparent" />

      <div className="absolute left-5 top-5 rounded-full border border-white/40 bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#63208A] shadow-lg backdrop-blur">
        Professional Care
      </div>

      <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-xl backdrop-blur">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DF0D86]/10 text-[#DF0D86]">
            <FaCalendarCheck className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
              Berdiri Sejak
            </p>
            <p className="text-lg font-extrabold text-[#63208A]">
              7 September 2023
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="absolute -right-3 bottom-20 hidden rounded-2xl bg-gradient-to-br from-[#63208A] to-[#DF0D86] px-5 py-4 text-white shadow-xl shadow-pink-200 md:block">
    <p className="text-2xl font-extrabold">24 Jam</p>
    <p className="text-xs font-semibold text-white/80">
      Siaga Melayani
    </p>
  </div>
</motion.div>

        {/* Content Area */}
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <div className="mb-4 inline-flex items-center rounded-full bg-[#63208A]/10 px-4 py-2 text-sm font-bold text-[#63208A]">
            Tentang GEMA Ambulance
          </div>

          <h2 className="text-3xl font-extrabold leading-tight text-slate-900 md:text-5xl">
            Pelayanan ambulance yang{" "}
            <span className="text-[#DF0D86]">cepat, peduli,</span> dan
            profesional.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
            Gifchari Emergency Medical Ambulance (GEMA) merupakan jasa layanan
            ambulance yang hadir untuk membantu kebutuhan transportasi medis
            dan kedukaan. Kami melayani emergency response, antar jemput pasien
            dalam kota maupun luar kota, pengantaran jenazah, serta kebutuhan
            perlengkapan kedukaan seperti peti jenazah dan formalin.
          </p>

          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-md shadow-slate-100 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#DF0D86]/10 text-[#DF0D86]">
                <FaTruckMedical className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-[#63208A]">Layanan Lengkap</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Ambulance pasien, emergency response, dan pengantaran jenazah.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-md shadow-slate-100 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#63208A]/10 text-[#63208A]">
                <FaHeartPulse className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-[#63208A]">Sepenuh Hati</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Mengutamakan kenyamanan, ketepatan, dan pelayanan yang ramah.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://wa.me/6287721607666?text=Hallo%20Ambulance%20GEMA"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#63208A] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-purple-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#DF0D86]"
            >
              <FaWhatsapp className="h-5 w-5" />
              Hubungi Kami
            </a>

            <a
              href="#layananKami"
              className="inline-flex items-center justify-center rounded-full border border-[#63208A]/20 px-6 py-3 text-sm font-bold text-[#63208A] transition-all duration-300 hover:border-[#DF0D86] hover:bg-[#DF0D86]/10 hover:text-[#DF0D86]"
            >
              Lihat Layanan
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TentangKami;