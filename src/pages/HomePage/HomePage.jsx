import React from "react";
import Masthead from "../../components/HomePage/Masthead/Masthead";
import OurTeam from "../../components/HomePage/OurTeam/OurTeam";

function HomePage() {
  return (
    <>
      <Masthead />
      <div class="container mx-auto px-24">
        <div data-aos="fade-up" data-aos-duration="3000">
          <OurTeam />
        </div>
      </div>
    </>
  );
}

export default HomePage;
