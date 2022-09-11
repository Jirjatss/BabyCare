import React from "react";

function DaftarBarang() {
  return (
    <>
      <div className="container fluid mt-4">
        <div className="row">
          <div className="col-md-12">
            <div id="keranjangSaya">
              <div className="row d-flex justify-content-between keranjangbelanja" id="keranjang">
                <div className="col-2 rincianbarang gambar" style={{ textalign: "center" }}>
                  <img src="https://img.freepik.com/free-photo/baby-goods-light-blue_1220-4433.jpg?size=626&ext=jpg&ga=GA1.2.329440172.1660900196" alt="foto" style={{ width: "50%" }} />
                </div>
                <div className="col-2" style={{ textalign: "center" }} id="Barang">
                  Makanan Bayi
                </div>
                <div className="col-2" style={{ textalign: "center" }} id="DaftarBarang">
                  <span className="total-rincianbarang" id="DaftarBarang">
                    Rp. 30.000
                  </span>
                </div>
                <div className="col-2" style={{ textalign: "center" }}>
                  <button className="btn btn-link px-2 minusCartBuah" id="minus">
                    <i className="bi bi-dash"></i>
                  </button>

                  <input id="numberBarang" className="jumlah-quantity" />

                  <button className="btn btn-link px-2">
                    <i className="bi bi-plus"></i>
                  </button>
                </div>
                <div className="col-2 rincianbarang kata" style={{ textalign: "center" }}>
                  <button id="hapusitem">
                    <span className="material-icons">delete</span>
                  </button>
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
