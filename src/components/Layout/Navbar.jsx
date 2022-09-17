import React, { useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useCheckLogin } from "../../helper/getLocalStorage";
import { useCheckGoogle } from "../../helper/getUserGoogle";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const { userData } = useCheckLogin();
  const { user } = useCheckGoogle();

  useEffect(() => {
    console.log(userData);
    console.log(user);
  }, [userData, user]);

  return (
    <>
      {userData && (
        <section id="jumbotron" className="jumbotron jumbotron-fluid">
          <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container">
              <Link className="navbar-brand" to="/">
                <img style={{ width: 40 }} src={require("../../assets/brand.png")} alt="" />
              </Link>
              <Link to="/Login">
                <div className="pl-3 pr-3">
                  <img style={{ width: 35 }} src={require("../../assets/baseline_account_circle_white_24dp.png")} alt="" />
                </div>
              </Link>
              <button className="nav-link user">{userData.role}</button>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" style={{ color: "black" }}></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <div className="dropdown nav-link" style={{ marginTop: "-0.2rem" }}>
                    <button style={{ color: "black", fontSize: "20px" }} className="btn dropdown-toggle" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                      About
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <li>
                        <HashLink className="dropdown-item" to="/#About">
                          About Us
                        </HashLink>
                      </li>
                      <li>
                        <HashLink className="dropdown-item" to="/#services" smooth>
                          Services
                        </HashLink>
                      </li>
                      {userData.role === "Pasien" ? (
                        <>
                          <Link className="dropdown-item" to="/News">
                            News
                          </Link>
                        </>
                      ) : (
                        <></>
                      )}
                    </ul>
                  </div>

                  {userData.role === "Pasien" ? (
                    <>
                      <li className="nav-item">
                        <HashLink className="nav-link" to="/#ourteam">
                          Team
                        </HashLink>
                      </li>
                      <li>
                        <Link className="nav-link" to="/BabyShop">
                          Baby Shop
                        </Link>
                      </li>
                      <li>
                        <Link className="nav-link" to="/Consultation">
                          Consult
                        </Link>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="nav-item">
                        <HashLink className="nav-link" to="/#ourteam">
                          Team
                        </HashLink>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/ListKonsultasi">
                          ListKonsul
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </nav>
        </section>
      )}

      {!userData && (
        <section id="jumbotron" className="jumbotron jumbotron-fluid">
          <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container">
              <Link className="navbar-brand" to="/">
                <img style={{ width: 40 }} src={require("../../assets/brand.png")} alt="" />
              </Link>
              <Link to="/login" ripple="light" style={{ textDecoration: "none" }}>
                Login
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" style={{ color: "black" }}></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <div className="dropdown nav-link" style={{ marginTop: "-0.2rem" }}>
                    <button style={{ color: "black", fontSize: "20px" }} className="btn dropdown-toggle" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                      About
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <li>
                        <HashLink className="dropdown-item" to="/#About">
                          About Us
                        </HashLink>
                      </li>
                      <li>
                        <HashLink className="dropdown-item" to="/#services">
                          Services
                        </HashLink>
                      </li>
                      <Link className="dropdown-item" to="/Login">
                        News
                      </Link>
                    </ul>
                  </div>

                  <li className="nav-item">
                    <HashLink className="nav-link" to="/#ourteam">
                      Team
                    </HashLink>
                  </li>
                  <Link className="nav-link" to="/Login">
                    Baby Shop
                  </Link>
                  <Link className="nav-link" to="/Login">
                    Consult
                  </Link>
                </ul>
              </div>
            </div>
          </nav>
        </section>
      )}
      {user && (
        <section id="jumbotron" className="jumbotron jumbotron-fluid">
          <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container">
              <Link className="navbar-brand" to="/">
                <img style={{ width: 40 }} src={require("../../assets/brand.png")} alt="" />
              </Link>
              <Link to="/Login">
                <div className="pl-3 pr-3">
                  <img style={{ width: 35 }} src={require("../../assets/baseline_account_circle_white_24dp.png")} alt="" />
                </div>
              </Link>
              <button className="nav-link user">Pasien</button>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" style={{ color: "black" }}></span>
              </button>
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav ms-auto">
                  <div className="dropdown nav-link" style={{ marginTop: "-0.2rem" }}>
                    <button style={{ color: "black", fontSize: "20px" }} className="btn dropdown-toggle" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                      About
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <li>
                        <HashLink className="dropdown-item" to="/#About">
                          About Us
                        </HashLink>
                      </li>
                      <li>
                        <HashLink className="dropdown-item" to="/#services">
                          Services
                        </HashLink>
                      </li>
                      <Link className="dropdown-item" to="/News">
                        News
                      </Link>
                    </ul>
                  </div>
                  <li className="nav-item">
                    <HashLink className="nav-link" to="/#ourteam">
                      Team
                    </HashLink>
                  </li>
                  <Link className="nav-link" to="/BabyShop">
                    Baby Shop
                  </Link>
                  <Link className="nav-link" to="/Consultation">
                    Consult
                  </Link>
                </ul>
              </div>
            </div>
          </nav>
        </section>
      )}
    </>
  );
};
export default Navbar;
