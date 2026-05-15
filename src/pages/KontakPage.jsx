import Kontak from "../components/Kontak";
import Seo from "../components/seo/Seo";

function KontakPage() {
  return (
    <>
      <Seo
        title="Kontak GEMA Ambulance - Hubungi Ambulance 24 Jam"
        description="Hubungi GEMA Ambulance untuk layanan ambulance 24 jam, emergency response, antar jemput pasien, pengantaran jenazah, dan standby event."
        path="/kontak"
      />
      <div className="h-28" />
      <Kontak />
    </>
  );
}

export default KontakPage;
