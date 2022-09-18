import React from "react";
import { useState, useEffect } from "react";
import "./DaftarPemesanan.css";

function DaftarPemesanan() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const data1 = localStorage.getItem("listpembayaran");
    setData(JSON.parse(data1));
  }, []);

  if (data) {
    return (
      <>
        <div class="container bootstrap snippets bootdeys">
          <div class="row d-flex justify-content-center">
            {data.map((nama) => (
              <>
                <div class="col-md-4 col-sm-12 content-card mb-3">
                  <div class="card-big-shadow">
                    <div class="card card-just-text p-5" data-background="color" data-color="blue" data-radius="none">
                      <div class="content">
                        <p className="list">Nama : {nama.nama}</p>
                        <p className="list">No Hp : {nama.nohp}</p>
                        <p className="list">Alamat : {nama.alamat}</p>
                        <p className="list">Metode : {nama.metode}</p>
                        <p className="list">Rincian Pemesanan</p>
                        <p className="list">Jumlah Barang : {nama.jumlahtotal}</p>
                        <p className="list">Harga Barang : {nama.hargatotal}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="container justify-content-center konsul">
        <div className="row d-flex justify-content-center">
          <h4 className="text-center pesan">Belum ada riwayat Pemesanan</h4>
        </div>
      </div>
    );
  }
}

export default DaftarPemesanan;
