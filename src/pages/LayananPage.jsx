import Layanan from "../components/Layanan";
import Kontak from "../components/Kontak";
import Seo from "../components/seo/Seo";

function LayananPage() {
  return (
    <>
      <Seo
        title="Layanan Ambulance GEMA - Ambulance 24 Jam Depok"
        description="Layanan GEMA Ambulance meliputi emergency response, ambulance full medis, antar jemput pasien, pengantaran jenazah, peti jenazah, dan standby event."
        path="/layanan"
      />
      <div className="h-28" />
      <Layanan />
      <Kontak />
    </>
  );
}

export default LayananPage;
