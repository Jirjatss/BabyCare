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
            <h1 className="section-heading">Register</h1>
            <h5 className="section-subheading">Silahkan Registrasi terlebih dahulu!</h5>
            <hr />
          </div>
        </div>
      </div>
      <div className="container-form d-flex justify-content-center">
        <div className="row d-flex justify-content-between">
          <div className="col-md-12">
            <form className="regis" style={{ border: "10px double black", borderRadius: "10px", marginBottom: "2rem" }}>
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
                  Email
                </label>
                <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <br />
              <div className="mb-12">
                <label for="exampleInputEmail1" className="form-label">
                  Role
                </label>
                <select className="form-select text-center" aria-label="Default select example" onChange={(e) => setRole(e.target.value)}>
                  <option selected>Open this select menu</option>
                  <option value="Dokter">Dokter</option>
                  <option value="Pengguna">Pasien</option>
                </select>
              </div>
              <br />
              <div className="mb-12">
                <label for="exampleInputEmail1" className="form-label">
                  Password
                </label>
                <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                <div id="emailHelp" className="form-text">
                  We'll never share your password with anyone else.
                </div>
              </div>
              <br />
              <div className="mt-3 mb-0 " style={{ textAlign: "center" }}>
                <button type="button" className="noselect" onClick={() => setUser()}>
                  Register
                </button>
              </div>
              <div className="text-center">
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
