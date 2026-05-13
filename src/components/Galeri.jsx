import { FaXmark } from "react-icons/fa6";

const Galeri = ({ src, alt, title, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-950/80 px-4 py-24 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl overflow-hidden rounded-[1.5rem] bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-4 border-b border-slate-100 bg-white px-5 py-4">
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#DF0D86]">
              Galeri GEMA
            </p>
            <h3 className="mt-1 truncate text-base font-extrabold text-[#63208A] md:text-lg">
              {title || alt}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-[#DF0D86] hover:text-white"
            aria-label="Tutup galeri"
          >
            <FaXmark className="h-5 w-5" />
          </button>
        </div>

        {/* Image */}
        <div className="bg-slate-950/95 p-3 md:p-4">
          <img
            src={src}
            alt={alt}
            className="mx-auto max-h-[68vh] w-auto max-w-full rounded-2xl object-contain shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Galeri;