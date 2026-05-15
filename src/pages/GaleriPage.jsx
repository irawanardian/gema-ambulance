import GaleriCard from "../components/GaleriCard";
import Kontak from "../components/Kontak";
import Seo from "../components/seo/Seo";

function GaleriPage() {
  return (
    <>
      <Seo
        title="Galeri GEMA Ambulance"
        description="Galeri dokumentasi layanan GEMA Ambulance untuk emergency response, antar jemput pasien, pengantaran jenazah, peti jenazah, dan standby event."
        path="/galeri"
      />
      <div className="h-28" />
      <GaleriCard />
      <Kontak />
    </>
  );
}

export default GaleriPage;
