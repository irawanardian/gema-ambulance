import {
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaRoute,
  FaHeadset,
} from "react-icons/fa";

const Kontak = () => {
  return (
    <section
      id="kontak"
      className="relative overflow-hidden px-4 py-16 md:px-14 md:py-24"
    >
      <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-[#63208A]/10 blur-3xl" />
      <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-[#DF0D86]/10 blur-3xl" />

      <div className="relative mx-auto max-w-screen-2xl">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#63208A] via-[#8B2BB2] to-[#DF0D86] shadow-2xl shadow-purple-200">
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            {/* CTA kiri */}
            <div className="relative p-7 text-white md:p-10 lg:p-12">
              <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-white/15 blur-3xl" />

              <div className="relative z-10">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-sm font-bold backdrop-blur">
                  <FaHeadset className="h-4 w-4" />
                  Kontak GEMA Ambulance
                </div>

                <h2 className="text-3xl font-extrabold leading-tight md:text-5xl">
                  Butuh ambulance cepat? Hubungi kami sekarang.
                </h2>

                <p className="mt-5 max-w-xl text-base leading-8 text-white/85">
                  Tim GEMA siap membantu kebutuhan ambulance darurat,
                  pengantaran pasien, pengantaran jenazah, peti jenazah,
                  maupun standby event. Sampaikan lokasi dan kebutuhan Anda,
                  kami bantu arahkan layanan yang sesuai.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://wa.me/6287721607666?text=Halo%20Ambulance%20GEMA%2C%20kami%20butuh%20respon%20cepat%20anda!"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#63208A] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#DF0D86] hover:text-white"
                  >
                    <FaWhatsapp className="h-5 w-5" />
                    Chat WhatsApp
                  </a>

                  <a
                    href="tel:087721607666"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-[#63208A]"
                  >
                    <FaPhoneAlt className="h-4 w-4" />
                    Telepon Sekarang
                  </a>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                    <FaClock className="mb-3 h-5 w-5" />
                    <p className="text-sm font-bold">Siaga 24 Jam</p>
                    <p className="mt-1 text-xs leading-5 text-white/75">
                      Untuk kebutuhan darurat dan layanan terjadwal.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                    <FaRoute className="mb-3 h-5 w-5" />
                    <p className="text-sm font-bold">Dalam & Luar Kota</p>
                    <p className="mt-1 text-xs leading-5 text-white/75">
                      Antar pasien, jenazah, dan kebutuhan event.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Kartu kanan */}
            <div className="bg-white p-7 md:p-10 lg:p-12">
              <div className="mb-8">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#DF0D86]">
                  Informasi Kontak
                </p>
                <h3 className="mt-2 text-3xl font-extrabold text-[#63208A]">
                  GEMA Emergency Medical Ambulance
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Simpan kontak kami agar lebih mudah saat membutuhkan layanan
                  ambulance.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="https://wa.me/6287721607666?text=Halo%20Ambulance%20GEMA%2C%20kami%20butuh%20respon%20cepat%20anda!"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5 transition hover:-translate-y-0.5 hover:border-[#DF0D86]/30 hover:bg-white hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-100 text-green-600">
                    <FaWhatsapp className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900">
                      WhatsApp
                    </h4>
                    <p className="mt-1 text-sm font-semibold text-[#63208A]">
                      0877 2160 7666
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Klik untuk langsung chat admin GEMA.
                    </p>
                  </div>
                </a>

                <a
                  href="tel:087721607666"
                  className="group flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5 transition hover:-translate-y-0.5 hover:border-[#63208A]/30 hover:bg-white hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-100 text-red-600">
                    <FaPhoneAlt className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900">Telepon</h4>
                    <p className="mt-1 text-sm font-semibold text-[#63208A]">
                      0877 2160 7666
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Hubungi langsung untuk kebutuhan cepat.
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=JL.%20Raya%20Pitara%20GG.%20Swadaya%202%20RT.%2005%20RW.%2007%20No.%2028%20Depok%20Jawa%20Barat"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5 transition hover:-translate-y-0.5 hover:border-[#DF0D86]/30 hover:bg-white hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-purple-100 text-[#63208A]">
                    <FaMapMarkerAlt className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900">Alamat</h4>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      JL. Raya Pitara GG. Swadaya 2, RT. 05 RW. 07 No. 28,
                      Depok, Jawa Barat
                    </p>
                    <p className="mt-1 text-xs font-semibold text-[#DF0D86]">
                      Klik untuk buka Google Maps
                    </p>
                  </div>
                </a>
              </div>

              <div className="mt-6 rounded-2xl border border-[#63208A]/10 bg-[#63208A]/5 p-5">
                <p className="text-sm font-bold text-[#63208A]">
                  Tips saat menghubungi kami:
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Informasikan lokasi jemput, tujuan, kondisi pasien atau
                  kebutuhan layanan, serta waktu keberangkatan agar tim kami
                  dapat membantu lebih cepat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kontak;