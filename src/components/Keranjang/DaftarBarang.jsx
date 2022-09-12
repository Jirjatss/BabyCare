import Aos from "aos";
import React from "react";
import "./Daftar.css";

function DaftarBarang(props) {
  Aos.init();
  return (
    <>
      <div className="flex pt-8 justify-center" id={props.key}>
        <div data-aos="zoom-out-up" data-aos-duration="1500">
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
                    <div className="col-2" style={{ textalign: "center" }} id="DaftarBarang">
                      <span className="total-rincianbarang" id="DaftarBarang">
                        1
                      </span>
                    </div>

                    <div className="col-2 rincianbarang kata" style={{ textalign: "center" }}>
                      <button className="noselect" onClick={props.DelCart}>
                        <span href="/keranjang" style={{ textDecoration: "none", color: "black", fontWeight: "bolder" }}>
                          <img className="mt-12" style={{ width: 25, height: 30 }} src={require("../../assets/delete.png")} alt="" />
                        </span>
                      </button>
                    </div>
                  </div>
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
