import React, { useEffect } from "react";
import Masthead from "../../components/HomePage/Masthead/Masthead";
import OurTeam from "../../components/HomePage/OurTeam/OurTeam";
import About from "../../components/HomePage/About/About";
import Services from "../../components/HomePage/Services/Services";
import Maps from "../../components/HomePage/Maps/Maps";
import "./HomePage.css";
import { useCheckLogin } from "../../helper/getLocalStorage";
import Navbar from "../../components/Layout/Navbar";

function HomePage() {
  const { userData } = useCheckLogin();
  useEffect(() => {}, [userData]);

  return (
    <>
      <Navbar />
      <Masthead />

      <div data-aos="fade-up" data-aos-duration="3000">
        <About />
      </div>
      <div data-aos="fade-down" data-aos-duration="2000">
        <Services />
      </div>
      <div data-aos="fade-right" data-aos-duration="2000">
        <OurTeam />
      </div>

      <Maps />
    </>
  );
}
export default HomePage;
