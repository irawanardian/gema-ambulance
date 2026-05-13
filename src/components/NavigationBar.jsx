// src/components/NavigationBar.jsx
import { useState } from "react";
import logo from "../assets/logo-gema-new.png";
import { FaBars, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-scroll";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { link: "Beranda", path: "beranda" },
    { link: "Tentang Kami", path: "tentangKami" },
    { link: "Layanan Kami", path: "layananKami" },
    { link: "Galeri", path: "galeri" },
    { link: "Kontak", path: "kontak" },
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-8">
        <div className="mx-auto max-w-screen-2xl">
          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/70 bg-white/85 shadow-xl shadow-slate-200/70 backdrop-blur-xl">
            <div className="absolute -left-16 -top-16 h-32 w-32 rounded-full bg-[#63208A]/10 blur-2xl" />
            <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#DF0D86]/10 blur-2xl" />

            <div className="relative flex items-center justify-between px-4 py-3 md:px-6">
              {/* Logo */}
              <a href="/" className="flex items-center gap-3">
                <div className="flex h-14 w-24 items-center justify-center rounded-2xl bg-white shadow-sm md:h-16 md:w-28">
                  <img
                    src={logo}
                    alt="Ambulance GEMA"
                    className="h-12 w-auto object-contain md:h-14"
                  />
                </div>

                <div className="hidden lg:block">
                  <p className="text-sm font-black leading-tight text-[#63208A]">
                    GEMA
                  </p>
                  <p className="text-xs font-semibold text-slate-500">
                    Emergency Medical Ambulance
                  </p>
                </div>
              </a>

              {/* Desktop Menu */}
              <div className="hidden rounded-full border border-slate-100 bg-slate-50/80 p-1.5 shadow-inner md:flex">
                {navItems.map(({ link, path }) => (
                  <Link
                    key={link}
                    activeClass="!bg-white !text-[#DF0D86] shadow-sm"
                    spy={true}
                    smooth={true}
                    offset={-120}
                    duration={500}
                    to={path}
                    className="cursor-pointer rounded-full px-4 py-2 text-sm font-bold text-[#63208A] transition-all duration-300 hover:bg-white hover:text-[#DF0D86] lg:px-5"
                  >
                    {link}
                  </Link>
                ))}
              </div>

              {/* Desktop CTA */}
              <div className="hidden items-center gap-3 md:flex">
                <a
                  href="tel:085971104154"
                  className="hidden h-11 w-11 items-center justify-center rounded-full border border-[#63208A]/10 bg-white text-[#63208A] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#DF0D86]/30 hover:text-[#DF0D86] lg:flex"
                  aria-label="Telepon GEMA"
                >
                  <FaPhoneAlt className="h-4 w-4" />
                </a>

                <a
                  href="https://wa.me/6285971104154?text=Halo%20Ambulance%20GEMA%2C%20kami%20butuh%20respon%20cepat%20anda!"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#DF0D86] px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-pink-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#63208A] hover:shadow-purple-200"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                    <FaWhatsapp className="h-3.5 w-3.5" />
                  </span>
                  Hubungi Kami
                </a>
              </div>

              {/* Mobile Button */}
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-100 bg-white text-[#63208A] shadow-sm transition hover:bg-purple-50 md:hidden"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <FaXmark className="h-5 w-5" />
                ) : (
                  <FaBars className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed left-4 right-4 top-[96px] z-40 overflow-hidden rounded-[1.5rem] border border-white/70 bg-white/95 shadow-2xl shadow-slate-300/60 backdrop-blur-xl transition-all duration-300 md:hidden ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-5 opacity-0"
        }`}
      >
        <div className="relative p-4">
          <div className="absolute -right-14 -top-14 h-32 w-32 rounded-full bg-[#DF0D86]/10 blur-2xl" />
          <div className="absolute -bottom-14 -left-14 h-32 w-32 rounded-full bg-[#63208A]/10 blur-2xl" />

          <div className="relative space-y-2">
            {navItems.map(({ link, path }) => (
              <Link
                key={link}
                activeClass="!bg-[#63208A] !text-white"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                to={path}
                onClick={closeMenu}
                className="flex cursor-pointer items-center justify-between rounded-2xl px-4 py-3 text-sm font-extrabold text-[#63208A] transition-all duration-300 hover:bg-purple-50 hover:text-[#DF0D86]"
              >
                <span>{link}</span>
                <span className="h-2 w-2 rounded-full bg-[#DF0D86]/40" />
              </Link>
            ))}

            <div className="grid grid-cols-2 gap-3 pt-3">
              <a
                href="tel:085971104154"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#63208A]/10 bg-white px-4 py-3 text-sm font-bold text-[#63208A] shadow-sm transition hover:bg-purple-50"
              >
                <FaPhoneAlt className="h-4 w-4" />
                Telepon
              </a>

              <a
                href="https://wa.me/6285971104154?text=Halo%20Ambulance%20GEMA%2C%20kami%20butuh%20respon%20cepat%20anda!"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#DF0D86] px-4 py-3 text-sm font-bold text-white shadow-md transition hover:bg-[#63208A]"
              >
                <FaWhatsapp className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;