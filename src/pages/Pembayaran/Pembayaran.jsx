import React from "react";
import FromPembayaran from "../../components/Pembayaran/FromPembayaran";

function Pembayaran() {
  return (
    <div>
      <section className="page-section" id="babyshop">
        <div className="container">
          <div className="text-center">
            <h2 id="tagline" className="section-heading">
              Pembayaran
            </h2>
            <h5 className="section-subheading">Isi Data Anda dengan lengkap</h5>
            <hr />
          </div>
        </div>
      </section>
      <FromPembayaran />
    </div>
  );
}

export default Pembayaran;
