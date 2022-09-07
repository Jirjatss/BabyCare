import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <section id="jumbotron" class="jumbotron jumbotron-fluid">
        <nav class="navbar navbar-expand-lg fixed-top">
          <div class="container">
            <a class="navbar-brand" href="/">
              <img style={{ width: 50 }} src={require("../../assets/brand.png")} alt="" />
            </a>
            <a class="navbar-brand" href="">
              Login
            </a>

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
                      <a class="dropdown-item" href="#About">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="">
                        Services
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="">
                        News
                      </a>
                    </li>
                  </ul>
                </div>
                <li class="nav-item">
                  <a class="nav-link" href="#ourteam">
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
