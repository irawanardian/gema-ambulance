import image1 from "../assets/1.emergencyResponse.jpg";
import image2 from "../assets/2.fullMedis.jpg";
import image3 from "../assets/pengantaranJenazah.jpg";
import image4 from "../assets/4.petiJenazah.jpg";
import image5 from "../assets/6.standByeEvent.jpg";
import image6 from "../assets/antarJemputPasien.jpg";

import {
  FaHeartPulse,
  FaTruckMedical,
  FaUserDoctor,
  FaBoxOpen,
  FaCalendarCheck,
} from "react-icons/fa6";

export const services = [
  {
    slug: "emergency-response",
    src: image1,
    alt: "Emergency Response",
    title: "Emergency Response",
    description:
      "Layanan respon cepat untuk kebutuhan darurat dengan tim yang siap membantu secara sigap dan profesional.",
    longDescription:
      "GEMA Ambulance menyediakan layanan emergency response untuk membantu kebutuhan darurat secara cepat, terarah, dan profesional. Layanan ini cocok untuk kondisi yang membutuhkan respon segera, koordinasi cepat, serta dukungan transportasi medis yang aman.",
    icon: FaHeartPulse,
    badge: "Darurat",
  },
  {
    slug: "ambulance-full-medis",
    src: image2,
    alt: "Ambulance Full Medis",
    title: "Ambulance Full Medis",
    description:
      "Ambulance dengan dukungan perlengkapan medis untuk membantu perjalanan pasien dengan lebih aman dan nyaman.",
    longDescription:
      "Layanan ambulance full medis GEMA didukung perlengkapan medis untuk membantu perjalanan pasien dalam kondisi yang membutuhkan perhatian lebih. Tim kami berupaya menjaga kenyamanan, keamanan, dan koordinasi selama perjalanan.",
    icon: FaUserDoctor,
    badge: "Full Medis",
  },
  {
    slug: "pengantaran-jenazah",
    src: image3,
    alt: "Pengantaran Jenazah",
    title: "Pengantaran Jenazah",
    description:
      "Layanan pengantaran jenazah dalam kota maupun luar kota dengan pelayanan yang tertib, sopan, dan penuh empati.",
    longDescription:
      "GEMA melayani pengantaran jenazah dalam kota maupun luar kota dengan proses yang tertib dan penuh empati. Kami memahami kebutuhan keluarga dalam situasi duka dan berupaya memberikan pelayanan yang sopan serta terkoordinasi.",
    icon: FaTruckMedical,
    badge: "Dalam & Luar Kota",
  },
  {
    slug: "peti-jenazah",
    src: image4,
    alt: "Peti Jenazah",
    title: "Peti Jenazah",
    description:
      "Penyediaan peti jenazah dan kebutuhan kedukaan lainnya untuk membantu keluarga dalam proses pemulasaraan.",
    longDescription:
      "Selain layanan ambulance, GEMA juga menyediakan peti jenazah dan kebutuhan kedukaan lainnya. Layanan ini membantu keluarga agar proses persiapan dan pengantaran dapat berjalan lebih tertib dan tenang.",
    icon: FaBoxOpen,
    badge: "Kedukaan",
  },
  {
    slug: "standby-event",
    src: image5,
    alt: "Standby Event",
    title: "Standby Event / Shooting",
    description:
      "Layanan standby ambulance untuk event, kegiatan lapangan, shooting, dan acara yang membutuhkan dukungan medis.",
    longDescription:
      "GEMA menyediakan layanan standby ambulance untuk event, kegiatan lapangan, shooting, dan acara lainnya. Layanan ini membantu penyelenggara acara memiliki dukungan medis siaga selama kegiatan berlangsung.",
    icon: FaCalendarCheck,
    badge: "Event",
  },
  {
    slug: "antar-jemput-pasien",
    src: image6,
    alt: "Antar Jemput Pasien",
    title: "Antar Jemput Pasien",
    description:
      "Layanan antar jemput pasien dalam kota maupun luar kota dengan perjalanan yang aman dan terkoordinasi.",
    longDescription:
      "Layanan antar jemput pasien GEMA membantu kebutuhan transportasi pasien untuk kontrol, rujukan, pulang dari rumah sakit, maupun perjalanan medis lain. Kami melayani perjalanan dalam kota maupun luar kota dengan koordinasi yang aman.",
    icon: FaTruckMedical,
    badge: "Transport Pasien",
  },
];

export const getServiceBySlug = (slug) =>
  services.find((service) => service.slug === slug);
