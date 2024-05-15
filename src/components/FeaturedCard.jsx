import React from "react";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
      <div className="text-yellow-500 text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-[#63208A] mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
