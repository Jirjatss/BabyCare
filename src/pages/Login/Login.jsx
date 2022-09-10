import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useEffect, useState } from "react";
import "./Login.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  AOS.init();
  const clientId = "648341299149-1o6kq6frd26fd9pibhaivjrvsqpso70v.apps.googleusercontent.com";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState(null);

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
    if (userData) {
      isFoundUser = userData.find((user) => {
        return email === user.email && password === user.password;
      });
    }
    if (isFoundUser && userData.length) {
      localStorage.setItem("userlogin", JSON.stringify(userData[0].role));
      Swal.fire({
        title: "Sweet!",
        text: "Selamat anda berhasil Login",
        icon: "success",
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
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
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
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
          confirmButtonText: '<i class="fa fa-times"></i> Silahkan Login Kembali!',
        });
        navigate("/Login");
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
    let userlogin = localStorage.getItem("userRegist");
    setUserData(JSON.parse(userlogin));
  }, []);

  if (user) {
    return (
      <div id="containerlogin">
        <div className="row d-flex justify-content-center">
          <div data-aos="flip-in" data-aos-anchor-placement="center-center" data-aos-duration="1500">
            <div id="services">
              <h1 id="tagline" className="section-heading">
                Login
              </h1>
              <h5 className="section-subheading">Silahkan Login terlebih dahulu</h5>
              <hr />
              <br />
            </div>
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
    );
  } else if (user1) {
    return (
      <div id="containerlogin">
        <div className="row d-flex justify-content-center">
          <div data-aos="flip-in" data-aos-anchor-placement="center-center" data-aos-duration="1500">
            <div id="services">
              <h1 id="tagline" className="section-heading">
                Login
              </h1>
              <h5 className="section-subheading">Silahkan Login terlebih dahulu</h5>
              <hr />
              <br />
            </div>
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
    );
  } else {
    return (
      <div id="containerlogin">
        <div className="row d-flex justify-content-center">
          <div data-aos="flip-in" data-aos-anchor-placement="center-center" data-aos-duration="1500">
            <div id="services">
              <h1 id="tagline" className="section-heading">
                Login
              </h1>
              <h5 className="section-subheading">Silahkan Login terlebih dahulu</h5>
              <hr />
              <br />
            </div>
          </div>
          <div className="container d-flex justify-content-center">
            <div className="row d-flex justify-content-between">
              <div className="col-md-12">
                <form style={{ border: "10px double black", padding: "3rem", marginBottom: "1rem", borderRadius: "10px" }}>
                  <h5>Login</h5>
                  <div className="mb-12">
                    <label for="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                    <div id="emailHelp" className="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <div className="mb-12">
                    <label for="exampleInputPassword1" className="form-label">
                      Password
                    </label>
                    <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                    <div id="emailHelp" className="form-text">
                      We'll never share your password with anyone else.
                    </div>
                  </div>
                  <div className="mt-3 mb-0 " style={{ textAlign: "center" }}>
                    <button type="button" className="noselect" onClick={() => LoginHandle()}>
                      Login
                    </button>
                  </div>
                  <div className="col-12 mb-3">
                    <GoogleLogin clientId={clientId} buttonText="Continue With Google" onSuccess={loginSuccess} onFailure={failureSuccess} cookiePolicy={"single_host_origin"} />
                  </div>
                  <div className="text-center">
                    <p>
                      Not a member?
                      <a style={{ textDecoration: "none" }} href="/Registrasi">
                        Register
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
