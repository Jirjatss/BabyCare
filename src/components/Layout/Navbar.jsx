import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const user = localStorage.getItem("token");
  return (
    <>
      <section id="jumbotron" class="jumbotron jumbotron-fluid">
        <nav class="navbar navbar-expand-lg fixed-top">
          <div class="container">
            <a class="navbar-brand" href="/">
              <img style={{ width: 40 }} src={require("../../assets/brand.png")} alt="" />
            </a>
            {user ? (
              <a href="login">
                <div class="pl-3 pr-6">
                  <img style={{ width: 35 }} src={require("../../assets/baseline_account_circle_white_24dp.png")} alt="" />{" "}
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
                    {user ? (
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
                <li class="nav-item">
                  <a class="nav-link" href="">
                    Baby Shop
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="">
                    Consultation
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
