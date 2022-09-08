import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useState } from "react";
import "./Login.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Login() {
  AOS.init();
  const clientId = "648341299149-1o6kq6frd26fd9pibhaivjrvsqpso70v.apps.googleusercontent.com";

  const [loginButton, setLoginButton] = useState(true);
  const [logoutButton, setLogoutButton] = useState(false);
  const [form, setForm] = useState(true);

  const loginSuccess = (res) => {
    console.log("LogSuccess : ", res.profileObj);
    localStorage.setItem("token", res.tokenId);
    setLoginButton(false);
    setLogoutButton(true);
    setForm(false);
    window.location.reload();
  };

  const failureSuccess = (res) => {
    console.log("Login Failed! : ", res);
  };

  const signoutSuccess = () => {
    alert("You've been signed out successfully.");
    setLoginButton(true);
    setLogoutButton(false);
    setForm(true);
    window.location.reload();
    localStorage.removeItem("token");
    console.clear();
  };

  const user = localStorage.getItem("token");
  console.log(user);

  return (
    <>
      <div id="containerlogin">
        <div data-aos="flip-in" data-aos-anchor-placement="center-center" data-aos-duration="1500">
          <div id="services">
            <h1 id="tagline" class="section-heading">
              Login
            </h1>
            <h5 class="section-subheading">Silahkan Login terlebih dahulu</h5>
            <hr />
            <br />
          </div>
          <div className="row d-flex justify-content-center">
            <div class="col-4" style={{ textAlign: "center" }}>
              {user ? (
                <>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <GoogleLogout clientId={clientId} buttonText="Logout" onLogoutSuccess={signoutSuccess} />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <div>
                    <a class="Populerbtn" href="/" style={{ marginTop: "3rem" }}>
                      HomePage
                    </a>
                  </div>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </>
              ) : (
                <div className="container">
                  <div className="row d-flex justify-content-between">
                    <div className="col">
                      <form style={{ border: "10px double black", padding: "1rem", marginBottom: "1rem", borderRadius: "10px" }}>
                        <div class="mb-12">
                          <label for="exampleInputEmail1" class="form-label">
                            Email address
                          </label>
                          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                          <div id="emailHelp" class="form-text">
                            We'll never share your email with anyone else.
                          </div>
                        </div>
                        <div class="mb-12">
                          <label for="exampleInputPassword1" class="form-label">
                            Password
                          </label>
                          <input type="password" class="form-control" id="exampleInputPassword1" />
                          <div id="emailHelp" class="form-text">
                            We'll never share your password with anyone else.
                          </div>
                        </div>
                        <div class="row mb-4">
                          <div class="col d-flex justify-content-center">
                            <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                              <label class="form-check-label" for="form2Example31">
                                Remember me
                              </label>
                            </div>
                          </div>
                          <div class="col-12">
                            <a href="#!">Forgot password?</a>
                          </div>
                        </div>
                        <div style={{ textAlign: "center" }}>
                          <button type="button" class="btn btn-primary btn-block mb-4">
                            Sign in
                          </button>
                        </div>

                        <div class="text-center">
                          <p>
                            Not a member? <a href="/Registrasi">Register</a>
                          </p>
                        </div>
                      </form>
                    </div>
                    <div className="col-12">
                      <GoogleLogin clientId={clientId} buttonText="Continue With Google" onSuccess={loginSuccess} onFailure={failureSuccess} cookiePolicy={"single_host_origin"} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
