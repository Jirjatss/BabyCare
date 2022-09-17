import React from "react";

function TotalBayar(props) {
  const harga = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(props.harga);

  const hargatotal = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(props.hargatotal);

  const hargaongkir = 40000;
  const ongkir = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(hargaongkir);
  return (
    <>
      <from>
        <div className="row d-flex justify-content-beetwen mt-3">
          <div className="col">
            <div className="container" style={{ fontFamily: "serif", fontSize: "1rem" }}>
              <div className="container-fluid" id="pembayaran">
                <div className="row d-flex justify-content-center">
                  <div className="col-8" id="rincianpembayaran">
                    <h3 className="text-center mb-3" style={{ textalign: "center" }}>
                      Rincian Keranjang
                    </h3>
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr></tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <b className="text-center">Jumlah Barang</b>
                            </td>
                            <td className="text-center">
                              <span>{props.totalbarang}</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b className="">Total Harga Barang</b>
                            </td>
                            <td className="text-center">
                              <span>{harga}</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <b className="">Biaya Pengiriman</b>
                            </td>
                            <td className="text-center">{ongkir}</td>
                          </tr>
                          <tr>
                            <td className="">
                              <b>Total Pembayaran</b>
                            </td>
                            <td className="text-center">{hargatotal}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </from>
    </>
  );
}

export default TotalBayar;
