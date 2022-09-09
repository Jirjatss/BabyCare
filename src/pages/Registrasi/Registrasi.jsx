import React, { useState } from "react";
import "./Registrasi.css";
import Swal from "sweetalert2";

function Registrasi() {
  // const [user, setUserData] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const setUser = () => {
    Swal.fire({
      title: "Sweet!",
      text: "Selamat anda berhasil Register",
      imageUrl: "https://pbs.twimg.com/media/FcL2eAVakAIOVdC?format=png&name=360x360",
      imageWidth: 300,
      imageHeight: 300,
      imageAlt: "Custom image",
      confirmButtonText: `<a href="/Login" style="text-decoration: none; color: white;"> Login </a>`,
    });
    localStorage.setItem("user", JSON.stringify({ name, email, password, role }));
  };

  return (
    <>
      <div id="containerRegistrasi">
        <div data-aos="flip-in" data-aos-anchor-placement="center-center" data-aos-duration="1500">
          <div id="services">
            <h1 id="tagline" className="section-heading">
              Registrasi
            </h1>
            <h5 className="section-subheading">Silahkan Registrasi terlebih dahulu</h5>
          </div>
        </div>
      </div>
      <div classNameName="container-form d-flex justify-content-center">
        <div classNameName="row d-flex justify-content-between">
          <div classNameName="col-md-12">
            <form style={{ border: "10px double black", padding: "3rem", borderRadius: "10px", marginBottom: "2rem" }}>
              <h5 classNameName="text-center">Register</h5>
              <div className="mb-12">
                <label for="exampleInputEmail1" className="form-label">
                  Name
                </label>
                <input type="name" className="form-control" onChange={(e) => setName(e.target.value)} />
                <div id="emailHelp" className="form-text">
                  Enter your full name.
                </div>
              </div>
              <br />
              <div className="mb-12">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <br />
              <div className="mb-12">
                <label for="exampleInputEmail1" className="form-label">
                  Daftar Sebagai
                </label>
                <select className="form-select text-center" aria-label="Default select example" onChange={(e) => setRole(e.target.value)}>
                  <option selected>Open this select menu</option>
                  <option value="Dokter">Dokter</option>
                  <option value="Pengguna">Pasien</option>
                </select>
              </div>
              <br />
              <div className="mb-12">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                <div id="emailHelp" className="form-text">
                  We'll never share your password with anyone else.
                </div>
              </div>
              <br />

              <div classNameName="mt-3 mb-0 " style={{ textAlign: "center" }}>
                <button type="button" className="btn btn-primary btn-block mb-4" onClick={() => setUser()}>
                  Registrasi
                </button>
              </div>
              <div className="text-center">
                <p>
                  Already have an Account?
                  <a style={{ textDecoration: "none" }} href="/Login">
                    Login
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registrasi;
