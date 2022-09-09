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
  }

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
      imageUrl: "https://pbs.twimg.com/media/FcL2eAVakAIOVdC?format=png&name=360x360",
      imageWidth: 300,
      imageHeight: 300,
      imageAlt: "Custom image",
    });
  };
  useEffect(() => {
    getConsul()
  }, []);

  useEffect(() => {
    console.log(isikonsul);
  }, [isikonsul]);
  return (
    <>
      <div id="containerConsult">
        <div data-aos="flip-in" data-aos-anchor-placement="center-center" data-aos-duration="1500">
          <div id="services">
            <h1 id="tagline" class="section-heading">
              Consult
            </h1>
            <h5 class="section-subheading">Anda menyampaikan kami mendengarkan</h5>
            <h3 class="section-subheading">GRATIS!!!</h3>
          </div>
        </div>
      </div>
      <div className="container-form d-flex justify-content-center">
        <div className="row d-flex justify-content-between">
          <div className="col-md-12">
            <form style={{ border: "10px double black", borderRadius: "10px", marginBottom: "2rem" }}>
              <div class="mb-12">
                <label for="exampleInputEmail1" class="form-label">
                  Name
                </label>
                <input type="name" class="form-control" onChange={(e) => setNama(e.target.value)} />
                <div id="emailHelp" class="form-text">
                  Enter your full name.
                </div>
              </div>
              <br />
              <div class="mb-12">
                <label for="exampleInputEmail1" class="form-label">
                  Phone Number
                </label>
                <input type="number" class="form-control" onChange={(e) => setPhoneNumber(e.target.value)} />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <br />
              <div class="mb-12">
                <label for="exampleInputEmail1" class="form-label">
                  Pelayanan
                </label>
                <select class="form-select text-center" aria-label="Default select example" onChange={(e) => setLayanan(e.target.value)}>
                  <option selected>Open this select menu</option>
                  <option value="Konsultasi">Konsultasi</option>
                  <option value="Posyandu">Posyandu</option>
                  <option value="MPASI">MPASI</option>
                  <option value="Playground">Playground</option>
                  <option value="BabySpa">Baby Spa</option>
                </select>
              </div>
              <br />
              <div class="form-group">
                <label for="exampleInputEmail1" class="form-label">
                  Konsultasi
                </label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => setKeluhan(e.target.value)}></textarea>
              </div>
              <div className="mt-3 mb-0 " style={{ textAlign: "center" }}>
                <button type="button" class="btn btn-primary btn-block mb-4" onClick={() => formhandle()}>
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
