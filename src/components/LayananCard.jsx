import React from "react";

const LayananCard = ({ image, title, description, buttonText }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full justify-center">
      <img src={image} alt={title} className="w-full h-60 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-[#DF0D86] mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="w-full bg-[#63208A] text-white py-2 px-4 rounded-lg hover:bg-purple-800 transition duration-300">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default LayananCard;
