import React from "react";
import { Link } from "react-router-dom";

function TotalHarga() {
  return (
    <>
      <div className="row mt-3 ms-5 mx-5 mb-3" style={{ fontFamily: "sans-serif", borderRadius: "5px" }}>
        <div className="container-fluid bg-light bg-outline-warning">
          <div className="row mt-5 ms-5 mx-5 mb-3">
            <div className="col-md-12" id="rincianpembayaran">
              <h5 className="text-dark" style={{ textAlign: "center" }}>
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
                        <b>Jumlah Barang</b>
                      </td>
                      <td className="text-dark" id="jumlahbarang"></td>
                    </tr>
                    <tr>
                      <td className="text-dark" style={{ color: "red", fontsize: "x-large", fontfamily: "sans-serif" }}>
                        <b>Total Pembayaran (Rp)</b>
                      </td>
                      <td className="text-dark" id="totalpembayaran"></td>
                    </tr>
                  </tbody>
                </table>
                <Link to="/Pembayaran" id="tombol" className="btn m-1 w-100 btn-warning tombol">
                  <i className="fa fa-fw fa-shopping-cart"></i>CheckOut
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TotalHarga;
