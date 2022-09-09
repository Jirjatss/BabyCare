import "./App.css";
import Navbar from "./components/Layout/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Layout/Footer";
import News from "./pages/News/News";
import Login from "./pages/Login/Login";
import Registrasi from "./pages/Registrasi/Registrasi";
import BabyShop from "./pages/BabyShop/BabyShop";
import Consultation from "./pages/Consultation/Consultation";
import Swal from "sweetalert2";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/News" element={<News />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registrasi" element={<Registrasi />} />
        <Route path="/BabyShop" element={<BabyShop />} />
        <Route path="/Consultation" element={<Consultation />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
