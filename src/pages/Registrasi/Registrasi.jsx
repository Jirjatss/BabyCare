import React, { useEffect, useState } from "react";
import "./Registrasi.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Registrasi() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [jenis, setJenis] = useState("");
  const navigate = useNavigate();

  const [isiregist, setIsiRegist] = useState([]);

  const getRegister = () => {
    const formData = localStorage.getItem("userRegist");
    setIsiRegist(JSON.parse(formData));
  };

  const setUser = () => {
    if (name === "" || email === "" || password === "" || role === "" || jenis === undefined) {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Data tidak boleh kosong atau data yang anda masukkan salah",
      });
    } else {
      Swal.fire({
        title: "Sweet!",
        text: "Selamat anda berhasil Login",
        icon: "success",
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
      });
      navigate("/");
      let dataRegist = {
        name,
        email,
        password,
        role,
        jenis,
      };
      if (isiregist === null) {
        setIsiRegist([dataRegist]);
        localStorage.setItem("userRegist", JSON.stringify([dataRegist]));
      } else {
        localStorage.setItem("userRegist", JSON.stringify([...isiregist, dataRegist]));
        setIsiRegist([...isiregist, dataRegist]);
      }
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
            <h1 className="section-heading">Register</h1>
            <h5 className="section-subheading">Silahkan Registrasi terlebih dahulu!</h5>
            <hr />
          </div>
        </div>
      </div>
      <div class="form-body">
        <div class="row">
          <div class="form-holder">
            <div class="form-content">
              <div class="form-items">
                <h3>Register Today</h3>
                <p>Fill in the data below.</p>
                <form class="requires-validation" novalidate>
                  <div class="col-md-12">
                    <input class="form-control" type="text" name="name" placeholder="Full Name" required onChange={(e) => setName(e.target.value)} />
                    <div class="valid-feedback">Username field is valid!</div>
                  </div>

                  <div class="col-md-12">
                    <input class="form-control" type="email" name="email" placeholder="E-mail Address" required onChange={(e) => setEmail(e.target.value)} />
                  </div>

                  <div class="col-md-12">
                    <select class="form-select mt-3" required onChange={(e) => setRole(e.target.value)}>
                      <option selected disabled>
                        Position
                      </option>
                      <option value="Dokter">Dokter</option>
                      <option value="Pasien">Pasien</option>
                    </select>
                    <div class="valid-feedback">You selected a position!</div>
                  </div>

                  <div class="col-md-12">
                    <input class="form-control" type="password" name="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
                    <div class="valid-feedback">Password field is valid!</div>
                  </div>
                  <div class="col-md-12 mt-3">
                    <label class="mb-3 mr-1 jenis" for="gender">
                      Gender :
                    </label>

                    <input type="radio" class="btn-check" name="gender" id="Laki-laki" autocomplete="off" required onChange={(e) => setJenis(e.target.id)} />
                    <label class="btn btn-sm btn-outline-warning jenis" for="Laki-laki">
                      Male
                    </label>

                    <input type="radio" class="btn-check" name="gender" id="Perempuan" autocomplete="off" required onChange={(e) => setJenis(e.target.id)} />
                    <label class="btn btn-sm btn-outline-warning jenis" for="Perempuan">
                      Female
                    </label>

                    <div class="valid-feedback mv-up">You selected a gender!</div>
                    <div class="invalid-feedback mv-up">Please select a gender!</div>
                  </div>
                  <div class="text-center mt-2">
                    <label class="form-check-label">
                      <b>I confirm that all data are correct and can be responsible</b>{" "}
                    </label>
                  </div>
                  <div class="form-button mt-3">
                    <button id="submit" type="submit" class="noselect" onClick={(e) => setUser(e.preventDefault())}>
                      Register
                    </button>
                  </div>
                  <div class="col-md-12 mt-3">
                    <h6>
                      Already have an account?
                      <a style={{ textDecoration: "none" }} href="/Login">
                        Login
                      </a>
                    </h6>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registrasi;
