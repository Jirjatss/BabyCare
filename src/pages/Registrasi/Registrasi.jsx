import React, { useEffect, useState } from "react";
import "./Registrasi.css";
import Swal from "sweetalert2";

function Registrasi() {
  // const [user, setUserData] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [isiregist, setIsiRegist] = useState([]);

  const getRegister = () => {
    const formData = localStorage.getItem("userRegist");
    setIsiRegist(JSON.parse(formData));
  };

  const setUser = () => {
    Swal.fire({
      title: "Sweet!",
      text: "Berhasil Register",
      imageUrl: "https://pbs.twimg.com/media/FcL2eAVakAIOVdC?format=png&name=360x360",
      imageWidth: 300,
      imageHeight: 300,
      imageAlt: "Custom image",
      confirmButtonText: `<a href="/Login" style="text-decoration: none; color: white;"> login </a>`,
    });
    let dataRegist = {
      name,
      email,
      password,
      role,
    };
    if (isiregist === null) {
      setIsiRegist([dataRegist]);
      localStorage.setItem("userRegist", JSON.stringify([dataRegist]));
    } else {
      localStorage.setItem("userRegist", JSON.stringify([...isiregist, dataRegist]));
      setIsiRegist([...isiregist, dataRegist]);
    }
  };
  useEffect(() => {
    getRegister();
  }, []);

  useEffect(() => {
    console.log(isiregist);
  }, [isiregist]);

  return (
    <>
      <div id="containerConsult">
        <div data-aos="flip-in" data-aos-anchor-placement="center-center" data-aos-duration="1500">
          <div id="services">
            <h1 class="section-heading">Register</h1>
            <h5 class="section-subheading">Silahkan Registrasi terlebih dahulu!</h5>
            <hr />
          </div>
        </div>
      </div>
      <div className="container-form d-flex justify-content-center">
        <div className="row d-flex justify-content-between">
          <div className="col-md-12">
            <form className="regis" style={{ border: "10px double black", borderRadius: "10px", marginBottom: "2rem" }}>
              <div class="mb-12">
                <label for="exampleInputEmail1" class="form-label">
                  Name
                </label>
                <input type="name" class="form-control" onChange={(e) => setName(e.target.value)} />
                <div id="emailHelp" class="form-text">
                  Enter your full name.
                </div>
              </div>
              <br />
              <div class="mb-12">
                <label for="exampleInputEmail1" class="form-label">
                  Email
                </label>
                <input type="email" class="form-control" onChange={(e) => setEmail(e.target.value)} />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <br />
              <div class="mb-12">
                <label for="exampleInputEmail1" class="form-label">
                  Role
                </label>
                <select class="form-select text-center" aria-label="Default select example" onChange={(e) => setRole(e.target.value)}>
                  <option selected>Open this select menu</option>
                  <option value="Dokter">Dokter</option>
                  <option value="Pengguna">Pasien</option>
                </select>
              </div>
              <br />
              <div class="mb-12">
                <label for="exampleInputEmail1" class="form-label">
                  Password
                </label>
                <input type="password" class="form-control" onChange={(e) => setPassword(e.target.value)} />
                <div id="emailHelp" class="form-text">
                  We'll never share your password with anyone else.
                </div>
              </div>
              <br />
              <div className="mt-3 mb-0 " style={{ textAlign: "center" }}>
                <button type="button" class="btn btn-primary btn-block mb-4" onClick={() => setUser()}>
                  Register
                </button>
              </div>
              <div class="text-center">
                <p>
                  Already have an Account?
                  <a style={{ textDecoration: "none" }} href="/login">
                    login
                  </a>
                </p>
              </div>
              <br />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registrasi;
