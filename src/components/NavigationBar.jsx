import { useState } from "react";
import logo from "../assets/logo-gema-new.png";
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { link: "Beranda", path: "beranda" },
    { link: "Tentang Kami", path: "tentangKami" },
    { link: "Layanan Kami", path: "layananKami" },
    { link: "Galeri", path: "galeri" },
    { link: "Kontak", path: "kontak" },
  ];
  return (
    <>
      {/* start navigation area */}
      <nav className="bg-white md:px-14 p-4 max-w-screen-2xl border-b mx-auto fixed top-0 right-0 left-0">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-14 items-center">
            <a
              href="/"
              className="text 2x1 font-semibold flex items-center space-x-3"
            >
              <img
                src={logo}
                alt=""
                className="w-20 inline-block items-center"
              />
            </a>
            <ul className="md:flex space-x-12 text-[#63208A] hidden">
              {navItems.map(({ link, path }) => (
                <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  key={link}
                  to={path}
                  className="block hover:text-[#DF0D86] cursor-pointer"
                >
                  {link}
                </Link>
              ))}
            </ul>
          </div>
          {/* Hubungin Kami */}
          <div className="space-x-12 hidden md:flex items-center">
            <button className="bg-[#DF0D86] py-2 px-4 transition-all duration-300 rounded text-white hover:text-white hover:bg-[#63208A]">
              <a
                href="https://wa.me/6287721607666?text=Hallo Ambulance GEMA"
                target="_blank"
              >
                Hubungi Kami
              </a>
            </button>
          </div>
          {/* menu btn, only display on mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:text-gray-300"
            >
              {isMenuOpen ? (
                <FaXmark className="w-6 h-6 text-[#63208A]" />
              ) : (
                <FaBars className="w-6 h-6 text-[#63208A]" />
              )}
            </button>
          </div>
        </div>
      </nav>
      {/* end navigation area */}

      {/* start navigation responsif */}
      <div
        className={`text-white space-y-4 px-4 pt-24 pb-5 bg-[#63208A] ${
          isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
        }`}
      >
        {navItems.map(({ link, path }) => (
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            key={link}
            to={path}
            className="block
                hover:text-[#DF0D86] cursor-pointer"
            onClick={toggleMenu}
          >
            {link}
          </Link>
        ))}
      </div>
    </>
  );
};

export default NavigationBar;
