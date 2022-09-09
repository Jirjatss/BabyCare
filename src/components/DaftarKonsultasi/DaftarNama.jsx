import React from "react";
import "./DaftarNama.css";

function DaftarNama() {
  return (
    <>
      <div className="container justify-content-center">
        <div className="row">
          <div className="col-md-12">
            <div className="card p-3 mb-2 ">
              <div className="card-body ">
                <img src="https://img.freepik.com/free-icon/container-with-cover_318-35966.jpg?size=338&ext=jpg&ga=GA1.2.329440172.1660900196" alt="Icon" className="Icon1" />
                <img src="https://img.freepik.com/free-vector/illustration-contract-icon_53876-3305.jpg?size=338&ext=jpg&ga=GA1.2.329440172.1660900196" alt="Icon" className="Icon" />
                <h6>Nama Pasien : </h6>
                <h6>Email Pasien : </h6>
                <h6>Pelayanan : </h6>
                <h6>Konsultasi : </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* contoh */}
      {/* <div classNameName="container d-flex justify-content-center">
        <div className="list-group md-5 mx-5 mt-5 mb-5">
          <div className="list-group-item list-group-item-action flex-column align-items-start active">
            <div className="list-group-item list-group-item-action flex-column align-items-start">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="Tittle">Nama Pasien : </h5>
                <small className="text-muted">3 days ago</small>
              </div>
              <p className="mb-1">Email Pasien :</p>
              <p className="mb-1">Nomor Hp :</p>
              <p className="mb-1">Pelayanan :</p>
              <p className="mb-1">konsultasi:</p>
            </div>

            <div className="list-group-item list-group-item-action flex-column align-items-start">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="Tittle">Nama Pasien : </h5>
                <small className="text-muted">3 days ago</small>
              </div>
              <div>
                <p className="mb-1">Email Pasien :</p>
                <p className="mb-1">Nomor Hp :</p>
                <p className="mb-1">Pelayanan :</p>
                <p className="mb-1">konsultasi:</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default DaftarNama;
