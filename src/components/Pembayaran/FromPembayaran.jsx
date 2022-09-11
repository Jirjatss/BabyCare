import React from "react";
import { Link } from "react-router-dom";

function FromPembayaran() {
  return (
    <>
      <from>
        <div className="row d-flex justify-content-beetwen mt-0">
          <div className="col">
            <div className="container" style={{ fontFamily: "serif", fontSize: "1rem" }}>
              <div className="row">
                <div className="col-lg-6 col-sm-12 mb-4">
                  <label for="" className="form-label">
                    Nama Awal
                  </label>
                  <input type="text" className="form-control" id="name" aria-describedby="emailHelp" required />
                  <div className="form-text">Enter your full name.</div>
                </div>
                <div className="col-lg-6 col-sm-12 mb-4">
                  <label for="" className="form-label">
                    Nama Akhir
                  </label>
                  <input type="text" className="form-control" id="name" aria-describedby="emailHelp" required />
                  <div className="form-text">Enter your full name.</div>
                </div>
                <div className="col-lg-6 col-sm-12 mb-4">
                  <label for="" className="form-label">
                    Alamat Lengkap
                  </label>
                  <input type="text" className="form-control" id="address" aria-describedby="emailHelp" required />
                  <div className="form-text">We will never share your address with others</div>
                </div>

                <div className="col-lg-6 col-sm-12 mb-4">
                  <label for="" className="form-label">
                    Nomor HandPhone
                  </label>
                  <input type="number" className="form-control" id="numberphone" aria-describedby="emailHelp" required />
                  <div className="form-text">Enter a phone number where you can be reached</div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 col-sm-12 mb-4">
                  <div className="col-12 col-sm-12 mb-4" style={{ margintop: "2rem" }}>
                    <select className="form-select" aria-label="Default select example" required>
                      <label for="" className="form-label">
                        Pilih Salah Satu
                      </label>
                      <option selected>Metode Pembayaran</option>
                      <option value="1">COD(Bayar Di Tempat)</option>
                      <option value="2">Transfer Bank</option>
                      <option value="3">Bayar Tunai DiMitra/Agen</option>
                      <option value="4">Kartu Kredit/Debit</option>
                      <option value="5">DANA</option>
                      <option value="6">OVO</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="container-fluid" id="pembayaran">
                <div className="row">
                  <div className="col-12 col-sm-12" id="rincianpembayaran">
                    <h5 className="text-dark" style={{ textalign: "center" }}>
                      Rincian Pembayaran
                    </h5>
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr></tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <b className="">Jumlah Barang</b>
                            </td>
                            <td className="text-dark"></td>
                          </tr>
                          <tr>
                            <td>
                              <b className="">Total Harga Barang</b>
                            </td>
                            <td className="text-dark"></td>
                          </tr>
                          <tr>
                            <td>
                              <b className="">Biaya Pengiriman</b>
                            </td>
                            <td className="text-dark">40000</td>
                          </tr>
                          <tr>
                            <td className="">
                              <b>Total Pembayaran</b>
                            </td>
                            <td className="text-dark">Rp. </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="caption hide" style={{ textalign: "center", fontweight: "bold", color: "Green" }}>
                {/* <p style={{ textAlign: "center" }}>Transaksi Berhasil, Paket Anda akan Segera dikirimkan ke Alamat Tujuan ....</p> */}
                <Link to="#" id="tombol" className="btn m-1 w-100 btn-warning tombol">
                  <i className="fa fa-fw fa-shopping-cart"></i>Bayar Sekarang
                </Link>
              </div>
              <div className="col-12" style={{ textalign: "center" }} id="tombol">
                <button className="btn m-1 w-100 btn-Warning tombol" id="bayar">
                  <i className="fa fa-fw fa-shopping-cart"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </from>
    </>
  );
}

export default FromPembayaran;
