import React from "react";
import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Kontak = () => {
  return (
    <div className="container mx-auto p-4 mb-28" id="kontak">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-[#63208A]">
          Kontak <span className="text-[#DF0D86]">GEMA</span>
        </h2>
        <p className="text-gray-700">
          Info lengkap mengenai kontak dan alamat GEMA
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center ">
        <div>
          <div className="flex justify-center items-center mb-4">
            <FaWhatsapp className="text-7xl text-green-500" />
          </div>
          <h3 className="font-semibold">WhatsApp</h3>
          <p>0895 - 5454 - 2323</p>
        </div>
        <div>
          <div className="flex justify-center items-center mb-4">
            <FaPhoneAlt className="text-7xl text-red-500" />
          </div>
          <h3 className="font-semibold">Telepon</h3>
          <p>0895 - 5454 - 2323</p>
        </div>
        <div>
          <div className="flex justify-center items-center mb-4">
            <FaMapMarkerAlt className="text-7xl text-gray-500" />
          </div>
          <h3 className="font-semibold">Alamat</h3>
          <p>
            JL. Raya Pitara GG. Swadaya 2 <br></br> RT. 05 RW. 07 No. 28 Depok
          </p>
        </div>
      </div>
    </div>
  );
};

export default Kontak;
