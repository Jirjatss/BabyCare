import React from "react";
import "./Daftar.css";

function DaftarBarang(props) {
  return (
    <>
      <div className="container fluid mt-4 daftar">
        <div className="row">
          <div className="col-md-12">
            <div id="keranjangSaya">
              <div className="row d-flex justify-content-between keranjangbelanja" id="keranjang">
                <div className="col-2 rincianbarang gambar" style={{ textalign: "center" }}>
                  <img src={props.url} style={{ width: "50%" }} />
                </div>
                <div className="col-2" style={{ textalign: "center" }} id="Barang">
                  {props.title}
                </div>
                <div className="col-2" style={{ textalign: "center" }} id="DaftarBarang">
                  <span className="total-rincianbarang" id="DaftarBarang">
                    Rp. {props.harga}
                  </span>
                </div>

                <div className="col-2 rincianbarang kata" style={{ textalign: "center" }}>
                  <span>delete</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DaftarBarang;
