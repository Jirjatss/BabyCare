import React from "react";
import Masthead from "../../components/HomePage/Masthead/Masthead";
import OurTeam from "../../components/HomePage/OurTeam/OurTeam";
import About from "../../components/HomePage/About/About";
import Services from "../../components/HomePage/Services/Services";
import Maps from "../../components/HomePage/Maps/Maps";

function HomePage() {
  return (
    <>
      <Masthead />
      <div class="container mx-auto px-24">
        <div data-aos="fade-up" data-aos-duration="3000">
          <About />
          <Services />
        </div>

        <OurTeam />
        <Maps />
      </div>
    </>
  );
}
export default HomePage;
