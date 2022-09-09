import React from "react";
import ListBarang from "../../components/ListBarang/ListBarang";
import "./BabyShop.css";

function BabyShop() {
  return (
    <>
      {/* Awal Judul */}
      <section className="page-section" id="babyshop">
        <div className="container">
          <div className="text-center">
            <h2 id="tagline" className="section-heading">
              Baby Shop
            </h2>
            <h5 className="section-subheading">Lengkapi semua kebutuhan si kecil</h5>
            <hr />
          </div>
        </div>
      </section>
      {/* Akhir Judul */}
      <section className="page-section" id="listBarang">
        <div className="container">
          <div className="text-center">
            <h2 id="tagline" className="section-heading">
              Makanan Bayi dan Balita
            </h2>
          </div>
        </div>
      </section>
      <br />
      <ListBarang />
      <br />
      <section className="page-section" id="listBarang">
        <div className="container">
          <div className="text-center">
            <h2 id="tagline" className="section-heading">
              Obat-Obatan Bayi dan Balita
            </h2>
          </div>
        </div>
      </section>
      <br />
      <ListBarang />
      <br />
      <section className="page-section" id="listBarang">
        <div className="container">
          <div className="text-center">
            <h2 id="tagline" className="section-heading">
              Perlengkapan Bayi dan Balita
            </h2>
          </div>
        </div>
      </section>
      <br />
      <ListBarang />
    </>
  );
}

export default BabyShop;
