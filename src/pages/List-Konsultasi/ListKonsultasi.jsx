import React from "react";
import Aos from "aos";
import DaftarNama from "../../components/DaftarKonsultasi/DaftarNama";
import Navbar from "../../components/Layout/Navbar";

function ListKonsultasi() {
  Aos.init();
  return (
    <>
      <Navbar />
      <section className="page-section" id="babyshop">
        <div className="container">
          <div className="text-center">
            <h2 id="tagline" className="section-heading">
              Daftar Konsultasi
            </h2>
            <h5 className="section-subheading">Daftar Konsultasi yang diberikan oleh Pasien</h5>
            <hr />
          </div>
          <div className="container">
            <div data-aos="zoom-in" data-aos-duration="2000">
              <DaftarNama />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ListKonsultasi;
