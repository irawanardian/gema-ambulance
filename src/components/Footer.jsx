import {
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

import { FaHeartPulse } from "react-icons/fa6";

const Footer = () => {
  const year = new Date().getFullYear();

  const quickLinks = [
    { label: "Beranda", href: "#beranda" },
    { label: "Tentang Kami", href: "#tentangKami" },
    { label: "Layanan Kami", href: "#layananKami" },
    { label: "Galeri", href: "#galeri" },
    { label: "Kontak", href: "#kontak" },
  ];

  const services = [
    "Emergency Response",
    "Ambulance Full Medis",
    "Antar Jemput Pasien",
    "Pengantaran Jenazah",
    "Peti Jenazah",
    "Standby Event",
  ];

  return (
    <footer className="relative overflow-hidden bg-[#18091F] text-white">
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#63208A]/30 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#DF0D86]/25 blur-3xl" />

      <div className="relative mx-auto max-w-screen-2xl px-4 py-12 md:px-14 md:py-16">
        <div className="mb-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-white/90">
                <FaHeartPulse className="h-4 w-4 text-[#DF0D86]" />
                GEMA Emergency Medical Ambulance
              </div>

              <h2 className="max-w-3xl text-2xl font-extrabold leading-tight md:text-4xl">
                Siap membantu kebutuhan ambulance darurat dan terjadwal.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70">
                Pelayanan ambulance, transportasi pasien, pengantaran jenazah,
                peti jenazah, dan standby event dengan pelayanan cepat, aman,
                dan profesional.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a
                href="https://wa.me/6287721607666?text=Halo%20Ambulance%20GEMA%2C%20kami%20butuh%20respon%20cepat%20anda!"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#DF0D86] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-pink-950/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#63208A]"
              >
                <FaWhatsapp className="h-5 w-5" />
                Chat WhatsApp
              </a>

              <a
                href="tel:087721607666"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-[#63208A]"
              >
                <FaPhoneAlt className="h-4 w-4" />
                Telepon
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-xl font-extrabold">GEMA Ambulance</h3>
            <p className="mt-4 text-sm leading-7 text-white/65">
              Gifchari Emergency Medical Ambulance hadir sebagai layanan
              ambulance yang mengutamakan respon cepat, keamanan perjalanan,
              dan pelayanan penuh empati.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-white/80">
              <FaClock className="h-4 w-4 text-[#DF0D86]" />
              Layanan Siaga 24 Jam
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-extrabold uppercase tracking-[0.2em] text-white/90">
              Menu
            </h4>

            <div className="space-y-3">
              {quickLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-sm text-white/65 transition hover:translate-x-1 hover:text-[#DF0D86]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-extrabold uppercase tracking-[0.2em] text-white/90">
              Layanan
            </h4>

            <div className="space-y-3">
              {services.map((item) => (
                <p key={item} className="text-sm text-white/65">
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-extrabold uppercase tracking-[0.2em] text-white/90">
              Kontak
            </h4>

            <div className="space-y-4">
              <a
                href="https://wa.me/6287721607666?text=Halo%20Ambulance%20GEMA%2C%20kami%20butuh%20respon%20cepat%20anda!"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 text-sm text-white/65 transition hover:text-white"
              >
                <FaWhatsapp className="mt-1 h-4 w-4 shrink-0 text-[#DF0D86]" />
                <span>0877 2160 7666</span>
              </a>

              <a
                href="tel:087721607666"
                className="flex items-start gap-3 text-sm text-white/65 transition hover:text-white"
              >
                <FaPhoneAlt className="mt-1 h-4 w-4 shrink-0 text-[#DF0D86]" />
                <span>0877 2160 7666</span>
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=JL.%20Raya%20Pitara%20GG.%20Swadaya%202%20RT.%2005%20RW.%2007%20No.%2028%20Depok%20Jawa%20Barat"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 text-sm leading-6 text-white/65 transition hover:text-white"
              >
                <FaMapMarkerAlt className="mt-1 h-4 w-4 shrink-0 text-[#DF0D86]" />
                <span>
                  JL. Raya Pitara GG. Swadaya 2, RT. 05 RW. 07 No. 28, Depok,
                  Jawa Barat
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-center text-xs text-white/50 md:flex-row md:items-center md:justify-between md:text-left">
          <p>
            Copyright &copy; {year} Gifchari Emergency Medical Ambulance. All
            rights reserved.
          </p>

          <p>
            Built with care for professional ambulance service.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;