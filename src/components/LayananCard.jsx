import { FaXmark, FaWhatsapp } from "react-icons/fa6";

const LayananCard = ({ src, alt, title, description, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-950/80 px-4 py-24 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl overflow-hidden rounded-[1.5rem] bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 border-b border-slate-100 bg-white px-5 py-4">
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#DF0D86]">
              Layanan GEMA
            </p>
            <h3 className="mt-1 truncate text-base font-extrabold text-[#63208A] md:text-lg">
              {title || alt}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-[#DF0D86] hover:text-white"
            aria-label="Tutup layanan"
          >
            <FaXmark className="h-5 w-5" />
          </button>
        </div>

        <div className="grid bg-slate-950/95 md:grid-cols-[1.2fr_0.8fr]">
          <div className="p-3 md:p-4">
            <img
              src={src}
              alt={alt}
              className="mx-auto max-h-[68vh] w-auto max-w-full rounded-2xl object-contain shadow-xl"
            />
          </div>

          <div className="flex flex-col justify-center bg-white p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#DF0D86]">
              Detail Layanan
            </p>

            <h4 className="mt-3 text-2xl font-extrabold text-[#63208A]">
              {title || alt}
            </h4>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              {description}
            </p>

            <a
              href="https://wa.me/6285971104154?text=Halo%20Ambulance%20GEMA%2C%20kami%20butuh%20respon%20cepat%20anda!"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#DF0D86] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-pink-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#63208A]"
            >
              <FaWhatsapp className="h-5 w-5" />
              Pesan Layanan Ini
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayananCard;