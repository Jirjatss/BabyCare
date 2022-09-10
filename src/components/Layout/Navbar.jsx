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
        <section id="jumbotron" className="jumbotron jumbotron-fluid">
          <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container">
              <a className="navbar-brand" href="/">
                <img style={{ width: 40 }} src={require("../../assets/brand.png")} alt="" />
              </a>
              {user || userData ? (
                <>
                  <a href="login">
                    <div className="pl-3 pr-3">
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
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" style={{ color: "whitesmoke" }}>
                  Menu
                </span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <div className="dropdown" style={{ marginTop: "0.1rem" }}>
                    <a style={{ color: "white" }} className="btn dropdown-toggle" href="" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                      About
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <li>
                        <a className="dropdown-item" href="/#About">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/#services">
                          Services
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/#ourteam">
                          Team
                        </a>
                      </li>
                    </ul>
                  </div>
                  <li className="nav-item">
                    <a className="nav-link" href="/ListKonsultasi">
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
        <section id="jumbotron" className="jumbotron jumbotron-fluid">
          <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container">
              <a className="navbar-brand" href="/">
                <img style={{ width: 40 }} src={require("../../assets/brand.png")} alt="" />
              </a>
              {user || userData ? (
                <a href="login">
                  <div className="pl-3 pr-6">
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

              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" style={{ color: "whitesmoke" }}>
                  Menu
                </span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <div className="dropdown" style={{ marginTop: "0.1rem" }}>
                    <a style={{ color: "white" }} className="btn dropdown-toggle" href="" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                      About
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <li>
                        <a className="dropdown-item" href="/#About">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/#services">
                          Services
                        </a>
                      </li>
                      {user || userData ? (
                        <>
                          <a className="dropdown-item" href="/News">
                            News
                          </a>
                        </>
                      ) : (
                        <a className="dropdown-item" href="/Login">
                          News
                        </a>
                      )}
                    </ul>
                  </div>

                  <li className="nav-item">
                    <a className="nav-link" href="/#ourteam">
                      Team
                    </a>
                  </li>
                  {user || userData ? (
                    <>
                      <li>
                        <a className="nav-link" href="/BabyShop">
                          Baby Shop
                        </a>
                      </li>
                    </>
                  ) : (
                    <a className="nav-link" href="/Login">
                      Baby Shop
                    </a>
                  )}
                  {user || userData ? (
                    <>
                      <li>
                        <a className="nav-link" href="/Consultation">
                          Consult
                        </a>
                      </li>
                    </>
                  ) : (
                    <a className="nav-link" href="/Login">
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
