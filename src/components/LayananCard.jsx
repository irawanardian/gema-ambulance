import { FaXmark, FaWhatsapp } from "react-icons/fa6";

const LayananCard = ({ src, alt, title, description, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-end justify-center bg-slate-950/75 px-3 pb-3 pt-20 backdrop-blur-md md:items-center md:px-4 md:py-24"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[86vh] w-full max-w-4xl flex-col overflow-hidden rounded-[1.6rem] bg-white shadow-2xl md:max-h-none md:rounded-[1.5rem]"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Header */}
        <div className="flex shrink-0 items-center justify-between gap-4 border-b border-slate-100 bg-white px-4 py-3 md:px-5 md:py-4">
          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#DF0D86] md:text-xs">
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

        {/* Content */}
        <div className="overflow-y-auto">
          <div className="grid md:grid-cols-[1.15fr_0.85fr]">
            {/* Image */}
            <div className="bg-slate-950/95 p-3 md:p-4">
              <img
                src={src}
                alt={alt}
                className="mx-auto h-auto max-h-[38vh] w-full rounded-2xl object-cover shadow-xl md:max-h-[68vh] md:w-auto md:max-w-full md:object-contain"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center bg-white p-5 md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#DF0D86] md:text-sm">
                Detail Layanan
              </p>

              <h4 className="mt-3 text-2xl font-extrabold leading-tight text-[#63208A] md:text-3xl">
                {title || alt}
              </h4>

              <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base md:leading-8">
                {description}
              </p>

              <a
                href="https://wa.me/6285971104154?text=Halo%20Ambulance%20GEMA%2C%20kami%20butuh%20respon%20cepat%20anda!"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#DF0D86] px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-pink-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#63208A] md:py-3"
              >
                <FaWhatsapp className="h-5 w-5" />
                Pesan Layanan Ini
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayananCard;