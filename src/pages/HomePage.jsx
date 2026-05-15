import Beranda from "../components/Beranda";
import TentangKami from "../components/TentangKami";
import Layanan from "../components/Layanan";
import WhyGema from "../components/WhyGema";
import GaleriCard from "../components/GaleriCard";
import Kontak from "../components/Kontak";
import Seo from "../components/seo/Seo";

function HomePage() {
  return (
    <>
      <Seo
        title="Ambulance GEMA - Layanan Ambulance 24 Jam Depok"
        description="GEMA Ambulance menyediakan layanan ambulance 24 jam, emergency response, antar jemput pasien, pengantaran jenazah, peti jenazah, dan standby event di Depok serta luar kota."
        path="/"
      />
      <Beranda />
      <TentangKami />
      <Layanan />
      <WhyGema />
      <GaleriCard />
      <Kontak />
    </>
  );
}

export default HomePage;
