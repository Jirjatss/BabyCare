import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const user = localStorage.getItem("token");
  const [userData, setUserData] = useState("");

  useEffect(() => {
    let userlogin = localStorage.getItem("userlogin");
    setUserData(JSON.parse(userlogin));
    console.log(userData);
  }, [userData]);
  if (userData === "Dokter") {
    return (
      <>
        <section id="jumbotron" class="jumbotron jumbotron-fluid">
          <nav class="navbar navbar-expand-lg fixed-top">
            <div class="container">
              <a class="navbar-brand" href="/">
                <img style={{ width: 40 }} src={require("../../assets/brand.png")} alt="" />
              </a>
              {user || userData ? (
                <>
                  <a href="login">
                    <div class="pl-3 pr-3">
                      <img style={{ width: 35 }} src={require("../../assets/baseline_account_circle_white_24dp.png")} alt="" />
                    </div>
                  </a>
                  <a className="nav-link user">{userData}</a>
                </>
              ) : (
                <>
                  <a href="/login" ripple="light" style={{ textDecoration: "none" }}>
                    Login
                  </a>
                </>
              )}
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon" style={{ color: "whitesmoke" }}>
                  Menu
                </span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                  <div class="dropdown" style={{ marginTop: "0.1rem" }}>
                    <a style={{ color: "white" }} class="btn dropdown-toggle" href="" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                      About
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <li>
                        <a class="dropdown-item" href="/#About">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/#services">
                          Services
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/#ourteam">
                          Team
                        </a>
                      </li>
                    </ul>
                  </div>
                  <li class="nav-item">
                    <a class="nav-link" href="/ListKonsultasi">
                      ListKonsul
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </section>
      </>
    );
  } else {
    return (
      <>
        <section id="jumbotron" class="jumbotron jumbotron-fluid">
          <nav class="navbar navbar-expand-lg fixed-top">
            <div class="container">
              <a class="navbar-brand" href="/">
                <img style={{ width: 40 }} src={require("../../assets/brand.png")} alt="" />
              </a>
              {user || userData ? (
                <a href="login">
                  <div class="pl-3 pr-6">
                    <img style={{ width: 35 }} src={require("../../assets/baseline_account_circle_white_24dp.png")} alt="" />
                  </div>
                </a>
              ) : (
                <>
                  <a href="/login" ripple="light" style={{ textDecoration: "none" }}>
                    Login
                  </a>
                </>
              )}

              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon" style={{ color: "whitesmoke" }}>
                  Menu
                </span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                  <div class="dropdown" style={{ marginTop: "0.1rem" }}>
                    <a style={{ color: "white" }} class="btn dropdown-toggle" href="" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                      About
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <li>
                        <a class="dropdown-item" href="/#About">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/#services">
                          Services
                        </a>
                      </li>
                      {user || userData ? (
                        <>
                          <a class="dropdown-item" href="/News">
                            News
                          </a>
                        </>
                      ) : (
                        <a class="dropdown-item" href="/Login">
                          News
                        </a>
                      )}
                    </ul>
                  </div>

                  <li class="nav-item">
                    <a class="nav-link" href="/#ourteam">
                      Team
                    </a>
                  </li>
                  {user || userData ? (
                    <>
                      <li>
                        <a class="nav-link" href="/BabyShop">
                          Baby Shop
                        </a>
                      </li>
                    </>
                  ) : (
                    <a class="nav-link" href="/Login">
                      Baby Shop
                    </a>
                  )}
                  {user || userData ? (
                    <>
                      <li>
                        <a class="nav-link" href="/Consultation">
                          Consult
                        </a>
                      </li>
                    </>
                  ) : (
                    <a class="nav-link" href="/Login">
                      Consult
                    </a>
                  )}
                </ul>
              </div>
            </div>
          </nav>
        </section>
      </>
    );
  }
};

export default Navbar;
