import React, { useState } from "react";
import "./DaftarNama.css";

function DaftarNama() {
  const [isikonsul, setIsikonsul] = useState([]);

  const getConsul = () => {
    const formData = localStorage.getItem("formkonsul");
    setIsikonsul(JSON.parse(formData));
    console.log(isikonsul);
  };

  return (
    <>
      <div className="container justify-content-center konsul">
        <div className="row d-flex justify-content-center">
          <div className="col-md-12 text-center" style={{ marginBottom: "1.5rem" }}>
            <button className="noselect" onClick={() => getConsul()}>
              Tampilkan Data
            </button>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          {isikonsul.map((nama) => (
            <>
              <div className="col-md-8">
                <div className="card p-3 mb-2 ">
                  <div className="card-body">
                    <div className="col-12">
                      <p>Nama : {nama.nama}</p>
                      <p>No Hp : {nama.phonenumber}</p>
                      <p>Layanan : {nama.layanan}</p>
                      <p>Keluhan : {nama.keluhan}</p>
                    </div>
                    <div className="col-12">
                      <img src="https://img.freepik.com/free-icon/container-with-cover_318-35966.jpg?size=338&ext=jpg&ga=GA1.2.329440172.1660900196" alt="Icon" className="Icon1" />
                      <img src="https://img.freepik.com/free-vector/illustration-contract-icon_53876-3305.jpg?size=338&ext=jpg&ga=GA1.2.329440172.1660900196" alt="Icon" className="Icon" />
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

export default DaftarNama;
