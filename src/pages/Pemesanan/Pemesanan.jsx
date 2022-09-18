import React from "react";
import DaftarPemesanan from "../../components/DaftarPemesanan/DaftarPemesanan";
import Navbar from "../../components/Layout/Navbar";

function Pemesanan() {
  return (
    <>
      <Navbar />
      <div>
        <section className="page-section" id="babyshop">
          <div className="container">
            <div className="text-center">
              <h2 id="tagline" className="section-heading">
                Pemesanan
              </h2>
              <h5 className="section-subheading">Riwayat Pemesanan Anda</h5>
              <hr />
            </div>
          </div>
        </section>

        <DaftarPemesanan />
      </div>
    </>
  );
}

export default Pemesanan;
