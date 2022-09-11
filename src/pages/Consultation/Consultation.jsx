import React, { useEffect, useState } from "react";
import "./Consultation.css";
import Aos from "aos";
import Swal from "sweetalert2";

function Consultation() {
  Aos.init();

  const [nama, setNama] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [layanan, setLayanan] = useState("");
  const [keluhan, setKeluhan] = useState("");
  const [isikonsul, setIsikonsul] = useState([]);

  const getConsul = () => {
    const formData = localStorage.getItem("formkonsul");
    setIsikonsul(JSON.parse(formData));
  };

  const formhandle = () => {
    let datakonsul = {
      nama,
      layanan,
      phonenumber,
      keluhan,
    };
    if (nama === "" || phonenumber === "" || layanan === "" || keluhan === "") {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Data tidak boleh kosong atau data yang anda masukkan salah",
      });
    } else {
      if (isikonsul === null) {
        setIsikonsul([datakonsul]);
        localStorage.setItem("formkonsul", JSON.stringify([datakonsul]));
      } else {
        localStorage.setItem("formkonsul", JSON.stringify([...isikonsul, datakonsul]));
        setIsikonsul([...isikonsul, datakonsul]);
      }

      Swal.fire({
        title: "Sweet!",
        text: "Data Berhasil terkirim",
        icon: "success",
        confirmButtonText: `<a href="/BabyShop" style="text-decoration: none; color: white;"> Lengakapi kebutuhan si kecil </a>`,
      });
    }
  };
  useEffect(() => {
    getConsul();
  }, []);

  useEffect(() => {
    console.log(isikonsul);
  }, [isikonsul]);
  return (
    <>
      <div id="containerConsult">
        <div data-aos="flip-in" data-aos-anchor-placement="center-center" data-aos-duration="1500">
          <div id="services">
            <h1 id="tagline" className="section-heading">
              Consult
            </h1>
            <h5 className="section-subheading">Anda menyampaikan kami mendengarkan</h5>
            <hr />
          </div>
        </div>
      </div>
      <div class="form-body">
        <div class="row">
          <div class="form-holder">
            <div class="form-content" id="formlogin">
              <div class="form-items">
                <h3>Konsul</h3>
                <h3 className="section-subheading" style={{ color: "red" }}>
                  GRATIS!!! GRATIS!!! GRATIS!!!
                </h3>
                <form class="requires-validation" novalidate>
                  <div class="col-md-12">
                    <input class="form-control" type="text" name="name" placeholder="Full Name" onChange={(e) => setNama(e.target.value)} />
                  </div>

                  <div class="col-md-12 mt-3">
                    <input class="form-control" type="number" name="number" placeholder="Phone Number" onChange={(e) => setPhoneNumber(e.target.value)} />
                    <div class="valid-feedback">Password field is valid!</div>
                  </div>

                  <div className="col-md-12 mb-3">
                    <select className="form-select text-center" aria-label="Default select example" onChange={(e) => setLayanan(e.target.value)}>
                      <option selected>Pelayanan </option>
                      <option value="Konsultasi">Konsultasi</option>
                      <option value="Posyandu">Posyandu</option>
                      <option value="MPASI">MPASI</option>
                      <option value="Playground">Playground</option>
                      <option value="BabySpa">Baby Spa</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Ceritakan keluhan si kecil" onChange={(e) => setKeluhan(e.target.value)}></textarea>
                  </div>
                  <div class="text-center mt-4">
                    <label class="form-check-label">
                      <b>I confirm that all data are correct and can be responsible</b>
                    </label>
                  </div>
                  <div class="form-button mt-3">
                    <button id="submit" type="submit" class="noselect" onClick={(e) => formhandle(e.preventDefault())}>
                      Kirimkan
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default Consultation;
