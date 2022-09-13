import React, { useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useCheckLogin } from "../../helper/getLocalStorage";
import { useCheckGoogle } from "../../helper/getUserGoogle";

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
                  <div className="dropdown nav-link" style={{ marginTop: "0.1rem" }}>
                    <button style={{ color: "black" }} className="btn dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                      About
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <li>
                        {/* <Link className="dropdown-item" id="/#About">
                          About Us
                        </Link> */}
                      </li>
                      <li>
                        {/* <Link className="dropdown-item" id="/#services">
                          Services
                        </Link> */}
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
                        <Link className="nav-link" to="/">
                          Team
                        </Link>
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
                    <li className="nav-item">
                      <Link className="nav-link" to="/ListKonsultasi">
                        ListKonsul
                      </Link>
                    </li>
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
                  <div className="dropdown" style={{ marginTop: "0.1rem" }}>
                    <button style={{ color: "black" }} className="btn dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                      About
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <li>
                        {/* <Link className="dropdown-item" id="/#About">
                          About Us
                        </Link> */}
                      </li>
                      <li>
                        {/* <Link className="dropdown-item" id="/#services">
                          Services
                        </Link> */}
                      </li>
                      <Link className="dropdown-item" to="/Login">
                        News
                      </Link>
                    </ul>
                  </div>

                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Team
                    </Link>
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
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <div className="dropdown" style={{ marginTop: "0.1rem" }}>
                    <button style={{ color: "black" }} className="btn dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                      About
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <li>
                        {/* <Link className="dropdown-item" id="/#About">
                         About Us
                       </Link> */}
                      </li>
                      <li>
                        {/* <Link className="dropdown-item" id="/#services">
                         Services
                       </Link> */}
                      </li>
                      <Link className="dropdown-item" to="/Login">
                        News
                      </Link>
                    </ul>
                  </div>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Team
                    </Link>
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
      {!user && (
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
                  <div className="dropdown" style={{ marginTop: "0.1rem" }}>
                    <button style={{ color: "black" }} className="btn dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                      About
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <li>
                        {/* <Link className="dropdown-item" id="/#About">
                         About Us
                       </Link> */}
                      </li>
                      <li>
                        {/* <Link className="dropdown-item" id="/#services">
                         Services
                       </Link> */}
                      </li>
                      <Link className="dropdown-item" to="/Login">
                        News
                      </Link>
                    </ul>
                  </div>

                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Team
                    </Link>
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
    </>
  );
};
export default Navbar;
