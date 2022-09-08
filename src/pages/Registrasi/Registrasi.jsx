import React from "react";
import "./Registrasi.css";
function Registrasi() {
  return (
    <>
      <div id="containerRegistrasi">
        <div data-aos="flip-in" data-aos-anchor-placement="center-center" data-aos-duration="1500">
          <div id="services">
            <h1 id="tagline" class="section-heading">
              Registrasi
            </h1>
            <h5 class="section-subheading">Silahkan Registrasi terlebih dahulu</h5>
          </div>
        </div>
      </div>
      <div className="container d-flex justify-content-center">
        <div className="row d-flex justify-content-between">
          <div className="col-md-12">
            <form style={{ border: "10px double black", padding: "1rem", marginBottom: "1rem", borderRadius: "10px" }}>
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
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input type="password" class="form-control" id="exampleInputPassword1" />
                <div id="emailHelp" class="form-text">
                  We'll never share your password with anyone else.
                </div>
              </div>
              <br />
              <div class="mb-12">
                <label for="exampleInputPassword1" class="form-label">
                  Konfirmasi Password
                </label>
                <input type="password" class="form-control" id="exampleInputPassword1" />
                <div id="emailHelp" class="form-text">
                  We'll never share your password with anyone else.
                </div>
              </div>
              <div className="mt-5 mb-0 " style={{ textAlign: "center" }}>
                <button type="button" class="btn btn-primary btn-block mb-4">
                  Registrasi
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registrasi;
