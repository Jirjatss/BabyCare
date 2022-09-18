import React, { useEffect, useState } from "react";
import "./DaftarNama.css";
import { Whatsapp } from "react-bootstrap-icons";

function DaftarNama() {
  const [isikonsul, setIsikonsul] = useState([]);
  const whatssap = (nama) => {
    let url = `https://api.whatsapp.com/send/?phone=62${nama.phonenumber}&text=` + "Nama : " + nama.nama + "%0a" + "Layanan : " + nama.layanan + "%0a" + "Keluhan : " + nama.keluhan + "%0a" + "Jawaban Dokter : ";
    window.open(url);
  };

  useEffect(() => {
    const formData = localStorage.getItem("formkonsul");
    setIsikonsul(JSON.parse(formData));
  }, [isikonsul]);

  if (isikonsul === null) {
    return (
      <>
        <div className="container justify-content-center konsul">
          <div className="row d-flex justify-content-center">
            <h2>Belum ada yang mengisi</h2>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div class="container bootstrap snippets bootdeys">
          <div class="row d-flex justify-content-center">
            {isikonsul.map((nama) => (
              <>
                <div class="col-md-4 col-sm-12 content-card mb-3">
                  <div class="card-big-shadow">
                    <div class="card card-just-text p-5" data-background="color" data-color="blue" data-radius="none">
                      <div class="content">
                        <p className="list">Nama : {nama.nama}</p>
                        <p className="list">No Hp : {nama.phonenumber}</p>
                        <p className="list">Layanan : {nama.layanan}</p>
                        <p className="list">Keluhan : {nama.keluhan}</p>
                        <button className="tp" onClick={() => whatssap(nama)}>
                          <Whatsapp color="royalblue" size={30} />
                        </button>
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
  }
}
export default DaftarNama;
