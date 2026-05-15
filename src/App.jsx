import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import HomePage from "./pages/HomePage";
import TentangKamiPage from "./pages/TentangKamiPage";
import LayananPage from "./pages/LayananPage";
import LayananDetailPage from "./pages/LayananDetailPage";
import GaleriPage from "./pages/GaleriPage";
import KontakPage from "./pages/KontakPage";

function App() {
  return (
    <>
      <NavigationBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tentang-kami" element={<TentangKamiPage />} />
        <Route path="/layanan" element={<LayananPage />} />
        <Route path="/layanan/:slug" element={<LayananDetailPage />} />
        <Route path="/galeri" element={<GaleriPage />} />
        <Route path="/kontak" element={<KontakPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
