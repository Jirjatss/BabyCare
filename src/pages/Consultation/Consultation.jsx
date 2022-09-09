import React from "react";
import "./Consultation.css";

function Consultation() {
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
                <input type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" class="form-text">
                  Enter your full name.
                </div>
              </div>
              <br />
              <div class="mb-12">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <br />
              <div class="mb-12">
                <label for="exampleInputEmail1" class="form-label">
                  Pelayanan
                </label>
                <select class="form-control text-center">
                  <option>Konsultasi</option>
                  <option>Baby Spa</option>
                  <option>Posyandu</option>
                  <option>MPASI</option>
                  <option>Playground</option>
                </select>
              </div>
              <br />
              <div class="form-group">
                <label for="exampleInputEmail1" class="form-label">
                  Konsultasi
                </label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div className="mt-3 mb-0 " style={{ textAlign: "center" }}>
                <button type="button" class="btn btn-primary btn-block mb-4">
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
