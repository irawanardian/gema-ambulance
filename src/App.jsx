import "./App.css";
import Beranda from "./components/Beranda";
import Footer from "./components/Footer";
import Galeri from "./components/Galeri";
import Kontak from "./components/Kontak";
import Layanan from "./components/Layanan";
import NavigationBar from "./components/NavigationBar";
import TentangKami from "./components/TentangKami";
import WhyGema from "./components/WhyGema";

function App() {
  return (
    <>
      <NavigationBar />
      <Beranda />
      <TentangKami />
      <Layanan />
      <WhyGema />
      <Galeri />
      <Kontak />
      <Footer />
    </>
  );
}

export default App;
