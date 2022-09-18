import React from "react";

import DaftarNama from "../../components/DaftarKonsultasi/DaftarNama";
import Navbar from "../../components/Layout/Navbar";

function ListKonsultasi() {
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
            <DaftarNama />
          </div>
        </div>
      </section>
    </>
  );
}

export default ListKonsultasi;
