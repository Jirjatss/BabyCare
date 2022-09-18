import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useEffect, useState } from "react";
import "./Login.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Layout/Navbar";
import { Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  AOS.init();
  const clientId = "648341299149-1o6kq6frd26fd9pibhaivjrvsqpso70v.apps.googleusercontent.com";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userDataForm, setUserDataForm] = useState(null);

  const [loginButton, setLoginButton] = useState(true);
  const [logoutButton, setLogoutButton] = useState(false);
  const [form, setForm] = useState(true);

  // logout via email
  const LogoutHandle = () => {
    signoutSuccess();
  };
  // Akhir Logout via email

  // Login via email
  const LoginHandle = () => {
    let isFoundUser = null;
    if (userDataForm) {
      isFoundUser = userDataForm.find((user) => {
        return email === user.email && password === user.password && user.role;
      });
    }
    if (isFoundUser && userDataForm.length) {
      localStorage.setItem("userlogin", JSON.stringify(isFoundUser));
      Swal.fire({
        title: "Sweet!",
        text: `Selamat Datang ${isFoundUser.name}`,
        icon: "success",
        confirmButtonText: '<i className="fa fa-thumbs-up"></i> Great!',
      });
      navigate("/");
    } else {
      loginFailed();
    }
  };
  // Akhir login via email

  // Login via google
  const loginSuccess = (res) => {
    Swal.fire({
      title: "Sweet!",
      icon: "success",
      text: "Selamat anda berhasil Login",
      confirmButtonText: '<i className="fa fa-thumbs-up"></i> Great!',
    });
    navigate("/");
    localStorage.setItem("token", res.tokenId);
    setLoginButton(false);
    setLogoutButton(true);
    setForm(false);
  };
  // AKhir login via google

  const failureSuccess = (res) => {
    console.log("Login Failed! : ", res);
  };

  // Login Gagal
  const loginFailed = () => {
    Swal.fire({
      icon: "error",
      title: "Oops!",
      text: "Data tidak boleh kosong atau data yang anda masukkan salah",
    });
  };
  // Akhir Login Gagal

  // Sign out
  const signoutSuccess = () => {
    Swal.fire({
      title: "Anda ingin Logout?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "warning",
          title: "Anda telah logout!",
          confirmButtonText: '<i className="fa fa-times"></i> Silahkan Login Kembali!',
        });
        navigate("/");
        setLoginButton(true);
        setLogoutButton(false);
        setForm(true);
        localStorage.removeItem("token");
        localStorage.removeItem("userlogin");
        console.clear();
      }
    });
  };
  // Akhir Signout

  const user = localStorage.getItem("token");
  const user1 = localStorage.getItem("userlogin");

  useEffect(() => {
    fetch("https://631cc4864fa7d3264cb66955.mockapi.io/UserRegist", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setUserDataForm(data));
  }, []);

  if (user) {
    return (
      <>
        <Navbar />
        <div id="containerlogin">
          <div className="row d-flex justify-content-center">
            <div data-aos="flip-in" data-aos-anchor-placement="center-center" data-aos-duration="1500">
              {user || user1 ? (
                <>
                  <div id="services">
                    <h1 id="tagline" className="section-heading">
                      Logout
                    </h1>
                    <h5 className="section-subheading">Logout membuat akses anda terbatas</h5>
                    <hr />
                    <br />
                  </div>
                </>
              ) : (
                <>
                  <div id="services">
                    <h1 id="tagline" className="section-heading">
                      Login
                    </h1>
                    <h5 className="section-subheading">Silahkan Login terlebih dahulu</h5>
                    <hr />
                    <br />
                  </div>
                </>
              )}
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-12" style={{ textAlign: "center", padding: "6rem" }}>
                <div className="col-12 mb-3">
                  <GoogleLogout clientId={clientId} buttonText="Logout" onLogoutSuccess={signoutSuccess} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else if (user1) {
    return (
      <>
        <Navbar />
        <div id="containerlogin">
          <div className="row d-flex justify-content-center">
            <div data-aos="flip-in" data-aos-anchor-placement="center-center" data-aos-duration="1500">
              {user || user1 ? (
                <>
                  <div id="services">
                    <h1 id="tagline" className="section-heading">
                      Logout
                    </h1>
                    <h5 className="section-subheading">Logout membuat akses anda terbatas</h5>
                    <hr />
                    <br />
                  </div>
                </>
              ) : (
                <>
                  <div id="services">
                    <h1 id="tagline" className="section-heading">
                      Login
                    </h1>
                    <h5 className="section-subheading">Silahkan Login terlebih dahulu</h5>
                    <hr />
                    <br />
                  </div>
                </>
              )}
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-12" style={{ textAlign: "center", padding: "6rem" }}>
                <div className="col-12 mb-3">
                  <button className="noselect" onClick={() => LogoutHandle()}>
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Navbar />
        <section id="login">
          <div class="container block">
            <div class="row">
              <div class="col-lg-6 col-sm-12">
                <header class="mast">
                  <div class="container-fluid hal">
                    <div class="masthead-subheading">
                      <img
                        className="poster"
                        src={"https://see.fontimg.com/api/renderfont4/K7axe/eyJyIjoiZnMiLCJoIjoxMTYsInciOjEyNTAsImZzIjo5MywiZmdjIjoiIzEyMTIxMiIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/QmFieSBDYXJl/hugh-is-life-personal-use-italic.png"}
                        alt=""
                      />
                    </div>
                    <div style={{ zIndex: "1" }} class="masthead-heading">
                      <img
                        className="poster"
                        src={"https://see.fontimg.com/api/renderfont4/gv11/eyJyIjoiZnMiLCJoIjo1MSwidyI6MTI1MCwiZnMiOjQxLCJmZ2MiOiIjMTIxMjEyIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/eW91ciBiYWJ5IHNvbHV0aW9ucw/cookiemonster.png"}
                        alt=""
                      />
                    </div>
                  </div>
                </header>
              </div>
              <div class="col-lg-6 col-sm-12">
                <form id="form">
                  <fieldset>
                    <legend>
                      <b>Login</b>
                    </legend>
                    <div class="field login">
                      <label className="text-center">Masukkan Email</label>
                      <br />
                      <br />
                      <input id="email" type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                      <br />
                    </div>
                    <div class="field login ">
                      <label>Masukkan Password</label>
                      <br />
                      <br />
                      <input id="password" type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                      <br />
                    </div>
                    <div>
                      <p id="hasil"></p>
                    </div>
                    <div className="form-button mt-5 mb-3">
                      <button id="submit" type="submit" className="noselect" onClick={(e) => LoginHandle(e)}>
                        Login
                      </button>
                    </div>
                    <div className="col-12 mb-3">
                      <GoogleLogin clientId={clientId} buttonText="Continue With Google" onSuccess={loginSuccess} onFailure={failureSuccess} cookiePolicy={"single_host_origin"} />
                    </div>
                    <div className="text-center">
                      <h6>
                        Not a member?
                        <Link style={{ textDecoration: "none" }} to="/Registrasi">
                          Register
                        </Link>
                      </h6>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Login;
