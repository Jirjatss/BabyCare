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
            <h3 className="section-subheading">GRATIS!!!</h3>
          </div>
        </div>
      </div>
      <div className="container-form d-flex justify-content-center">
        <div className="row d-flex justify-content-between">
          <div className="col-md-12">
            <form style={{ border: "10px double black", borderRadius: "10px", marginBottom: "2rem" }}>
              <div className="mb-12">
                <label for="exampleInputEmail1" className="form-label">
                  Name
                </label>
                <input type="name" className="form-control" onChange={(e) => setNama(e.target.value)} />
                <div id="emailHelp" className="form-text">
                  Enter your full name.
                </div>
              </div>
              <br />
              <div className="mb-12">
                <label for="exampleInputEmail1" className="form-label">
                  Phone Number
                </label>
                <input type="number" className="form-control" onChange={(e) => setPhoneNumber(e.target.value)} />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <br />
              <div className="mb-12">
                <label for="exampleInputEmail1" className="form-label">
                  Pelayanan
                </label>
                <select className="form-select text-center" aria-label="Default select example" onChange={(e) => setLayanan(e.target.value)}>
                  <option selected>Open this select menu</option>
                  <option value="Konsultasi">Konsultasi</option>
                  <option value="Posyandu">Posyandu</option>
                  <option value="MPASI">MPASI</option>
                  <option value="Playground">Playground</option>
                  <option value="BabySpa">Baby Spa</option>
                </select>
              </div>
              <br />
              <div className="form-group">
                <label for="exampleInputEmail1" className="form-label">
                  Konsultasi
                </label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => setKeluhan(e.target.value)}></textarea>
              </div>
              <div className="mt-3 mb-0 " style={{ textAlign: "center" }}>
                <button class="noselect" onClick={() => formhandle()}>
                  Kirim
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Consultation;
