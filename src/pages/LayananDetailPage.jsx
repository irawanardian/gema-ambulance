import { Link, useParams } from "react-router-dom";
import { FaArrowLeft, FaWhatsapp, FaClock, FaShieldAlt } from "react-icons/fa";
import { getServiceBySlug } from "../data/services";
import Kontak from "../components/Kontak";
import Seo from "../components/seo/Seo";

function LayananDetailPage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <main className="min-h-screen px-4 pt-36 md:px-14">
        <div className="mx-auto max-w-screen-lg rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-xl">
          <h1 className="text-3xl font-extrabold text-[#63208A]">
            Layanan tidak ditemukan
          </h1>
          <p className="mt-3 text-slate-600">
            Halaman layanan yang Anda cari belum tersedia.
          </p>
          <Link
            to="/layanan"
            className="mt-6 inline-flex rounded-full bg-[#DF0D86] px-6 py-3 font-bold text-white"
          >
            Kembali ke Layanan
          </Link>
        </div>
      </main>
    );
  }

  const Icon = service.icon;

  return (
    <>
      <Seo
        title={`${service.title} - GEMA Ambulance Depok`}
        description={service.longDescription}
        path={`/layanan/${service.slug}`}
      />
      <main className="relative overflow-hidden bg-white px-4 pb-16 pt-36 md:px-14 md:pb-24">
        <div className="absolute -left-24 top-32 h-80 w-80 rounded-full bg-[#63208A]/10 blur-3xl" />
        <div className="absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-[#DF0D86]/10 blur-3xl" />

        <div className="relative mx-auto max-w-screen-2xl">
          <Link
            to="/layanan"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-100 bg-white px-4 py-2 text-sm font-bold text-[#63208A] shadow-sm transition hover:text-[#DF0D86]"
          >
            <FaArrowLeft className="h-4 w-4" />
            Kembali ke Layanan
          </Link>

          <section className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-3 shadow-2xl shadow-purple-100">
              <img
                src={service.src}
                alt={service.alt}
                className="h-[360px] w-full rounded-[1.5rem] object-cover md:h-[540px]"
              />

              <div className="absolute left-7 top-7 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-extrabold text-[#63208A] shadow-lg backdrop-blur">
                <Icon className="h-5 w-5 text-[#DF0D86]" />
                {service.badge}
              </div>
            </div>

            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-[#DF0D86]">
                Layanan Ambulance GEMA
              </p>

              <h1 className="mt-4 text-4xl font-black leading-tight text-slate-950 md:text-6xl">
                {service.title}
              </h1>

              <p className="mt-6 text-lg leading-9 text-slate-600">
                {service.longDescription}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-lg shadow-slate-100">
                  <FaClock className="mb-4 h-6 w-6 text-[#DF0D86]" />
                  <p className="font-black text-slate-950">Siaga 24 Jam</p>
                  <p className="mt-1 text-sm text-slate-500">
                    Bisa dihubungi untuk kebutuhan darurat maupun terjadwal.
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-lg shadow-slate-100">
                  <FaShieldAlt className="mb-4 h-6 w-6 text-[#63208A]" />
                  <p className="font-black text-slate-950">Aman & Profesional</p>
                  <p className="mt-1 text-sm text-slate-500">
                    Pelayanan dilakukan dengan koordinasi dan kepedulian.
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/6285971104154?text=Halo%20Ambulance%20GEMA%2C%20saya%20ingin%20bertanya%20tentang%20layanan%20ambulance."
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#DF0D86] px-7 py-4 text-sm font-extrabold text-white shadow-xl shadow-pink-200 transition hover:-translate-y-1 hover:bg-[#63208A] sm:w-auto"
              >
                <FaWhatsapp className="h-5 w-5" />
                Konsultasi via WhatsApp
              </a>
            </div>
          </section>
        </div>
      </main>

      <Kontak />
    </>
  );
}

export default LayananDetailPage;
