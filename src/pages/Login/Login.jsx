import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useEffect, useState } from "react";
import "./Login.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";

function Login() {
  AOS.init();
  const clientId = "648341299149-1o6kq6frd26fd9pibhaivjrvsqpso70v.apps.googleusercontent.com";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState();

  const [loginButton, setLoginButton] = useState(true);
  const [logoutButton, setLogoutButton] = useState(false);
  const [form, setForm] = useState(true);

  const LogoutHandle = () => {
    signoutSuccess();
  };
  const LoginHandle = () => {
    console.log(userData);

    if (email === userData[0].email && password === userData[0].password) {
      Swal.fire({
        title: "Sweet!",
        text: "Selamat anda berhasil Login",
        imageUrl: "https://pbs.twimg.com/media/FcL2eAVakAIOVdC?format=png&name=360x360",
        imageWidth: 300,
        imageHeight: 300,
        imageAlt: "Custom image",
        confirmButtonText: `<a href="/" style="text-decoration: none; color: white;"> HomePage </a>`,
      });
      localStorage.setItem("userlogin", JSON.stringify(userData[0].role));
    } else {
      loginFailed();
    }
  };

  const loginSuccess = (res) => {
    Swal.fire({
      title: "Sweet!",
      text: "Selamat anda berhasil Login",
      imageUrl: "https://pbs.twimg.com/media/FcL2eAVakAIOVdC?format=png&name=360x360",
      imageWidth: 300,
      imageHeight: 300,
      imageAlt: "Custom image",
      confirmButtonText: `<a href="/" style="text-decoration: none; color: white;"> HomePage </a>`,
    });
    // console.log("LogSuccess : ", res.profileObj);

    localStorage.setItem("token", res.tokenId);
    setLoginButton(false);
    setLogoutButton(true);
    setForm(false);
  };

  const failureSuccess = (res) => {
    console.log("Login Failed! : ", res);
  };

  const loginFailed = () => {
    Swal.fire({
      title: "Oops!",
      text: "Data tidak boleh kosong atau data yang anda masukkan salah",
      imageUrl: "https://pbs.twimg.com/media/FcLzbbfaQAEURCc?format=png&name=small",
      imageWidth: 300,
      imageHeight: 300,
      imageAlt: "Custom image",
      confirmButtonText: `<a href="/Login" style="text-decoration: none; color: white;"> Coba lagi </a>`,
    });
  };
  const signoutSuccess = () => {
    Swal.fire({
      title: "Anda ingin Logout?",
      imageUrl: "https://scintillating-mermaid-05a0ff.netlify.app/Image/Team/Riska.PNG",
      imageWidth: 300,
      imageHeight: 300,
      imageAlt: "Custom image",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Oops!",
          text: "Anda telah Logout",
          imageUrl: "https://pbs.twimg.com/media/FcLzbbfaQAEURCc?format=png&name=small",
          imageWidth: 300,
          imageHeight: 300,
          imageAlt: "Custom image",
          confirmButtonText: `<a href="/Login" style="text-decoration: none; color: white;"> Silahkan Login kembali </a>`,
        });
        setLoginButton(true);
        setLogoutButton(false);
        setForm(true);
        localStorage.removeItem("token");
        localStorage.removeItem("userlogin");
        console.clear();
      }
    });
  };

  const user = localStorage.getItem("token");
  const user1 = localStorage.getItem("userlogin");
  // console.log(user);

  useEffect(() => {
    let userlogin = localStorage.getItem("userRegist");
    setUserData(JSON.parse(userlogin));
  }, [userData]);

  if (user) {
    return (
      <div id="containerlogin">
        <div className="row d-flex justify-content-center">
          <div data-aos="flip-in" data-aos-anchor-placement="center-center" data-aos-duration="1500">
            <div id="services">
              <h1 id="tagline" class="section-heading">
                Login
              </h1>
              <h5 class="section-subheading">Silahkan Login terlebih dahulu</h5>
              <hr />
              <br />
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div class="col-12" style={{ textAlign: "center" }}>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <div className="col-12 mb-3">
                <GoogleLogout clientId={clientId} buttonText="Logout" onLogoutSuccess={signoutSuccess} />
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
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
              <h1 id="tagline" class="section-heading">
                Login
              </h1>
              <h5 class="section-subheading">Silahkan Login terlebih dahulu</h5>
              <hr />
              <br />
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div class="col-12" style={{ textAlign: "center" }}>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <div className="col-12 mb-3">
                <button className="Populerbtn" onClick={() => LogoutHandle()}>
                  Logout
                </button>
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
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
              <h1 id="tagline" class="section-heading">
                Login
              </h1>
              <h5 class="section-subheading">Silahkan Login terlebih dahulu</h5>
              <hr />
              <br />
            </div>
          </div>
          <div className="container d-flex justify-content-center">
            <div className="row d-flex justify-content-between">
              <div className="col-md-12">
                <form style={{ border: "10px double black", padding: "3rem", marginBottom: "1rem", borderRadius: "10px" }}>
                  <h5>Login</h5>
                  <div class="mb-12">
                    <label for="exampleInputEmail1" class="form-label">
                      Email address
                    </label>
                    <input type="email" class="form-control" onChange={(e) => setEmail(e.target.value)} />
                    <div id="emailHelp" class="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <div class="mb-12">
                    <label for="exampleInputPassword1" class="form-label">
                      Password
                    </label>
                    <input type="password" class="form-control" onChange={(e) => setPassword(e.target.value)} />
                    <div id="emailHelp" class="form-text">
                      We'll never share your password with anyone else.
                    </div>
                  </div>
                  <div className="mt-3 mb-0 " style={{ textAlign: "center" }}>
                    <button type="button" class="btn btn-primary btn-block mb-4" onClick={() => LoginHandle()}>
                      Login
                    </button>
                  </div>
                  <div className="col-12 mb-3">
                    <GoogleLogin clientId={clientId} buttonText="Continue With Google" onSuccess={loginSuccess} onFailure={failureSuccess} cookiePolicy={"single_host_origin"} />
                  </div>
                  <div class="text-center">
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
