import TentangKami from "../components/TentangKami";
import WhyGema from "../components/WhyGema";
import Kontak from "../components/Kontak";
import Seo from "../components/seo/Seo";

function TentangKamiPage() {
  return (
    <>
      <Seo
        title="Tentang Kami - GEMA Ambulance Depok"
        description="Tentang Gifchari Emergency Medical Ambulance, layanan ambulance profesional untuk emergency response, pasien, jenazah, dan kebutuhan medis di Depok serta luar kota."
        path="/tentang-kami"
      />
      <div className="h-28" />
      <TentangKami />
      <WhyGema />
      <Kontak />
    </>
  );
}

export default TentangKamiPage;
