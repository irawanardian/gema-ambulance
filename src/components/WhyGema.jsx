import React from "react";
import FeatureCard from "./FeaturedCard";

// Import icons
import { FaHandsHelping, FaMedkit, FaBolt, FaSync } from "react-icons/fa";

const features = [
  {
    icon: <FaMedkit />,
    title: "Profesional",
    description:
      "Tenaga medis kami merupakan tim yang terlatih dengan keahlian dan pengalaman dalam memberikan perawatan darurat.",
  },
  {
    icon: <FaHandsHelping />,
    title: "Harga Kompetitif",
    description:
      "Dengan hasil kerja yang tepat waktu dan kualitas pelayanan yang maksimal, kami memiliki harga yang sangat kompetitif dan cukup terjangkau.",
  },
  {
    icon: <FaBolt />,
    title: "Responsivitas",
    description:
      "Respon cepat dan layanan medis darurat kapan saja. Kami mengutamakan kecepatan dalam setiap situasi darurat kesehatan.",
  },
  {
    icon: <FaSync />,
    title: "Fleksibilitas",
    description:
      "Berkomitmen untuk menyesuaikan layanan dengan kebutuhan yang berbeda-beda dari setiap klien.",
  },
];

const WhyGema = () => {
  return (
    <div className="p-4  mb-10">
      <div className="kenapaGema">
        <h1 className="text-3xl font-bold text-center text-[#63208A]">
          Kenapa
        </h1>
        <h1 className="text-3xl font-bold text-center text-[#DF0D86] ml-2">
          GEMA?
        </h1>
      </div>

      <p className="text-center text-gray-700 mb-8">
        Ini adalah service yang akan diberikan oleh GEMA
      </p>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default WhyGema;
