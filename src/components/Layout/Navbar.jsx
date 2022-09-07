import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <section id="jumbotron" class="jumbotron jumbotron-fluid">
        <nav class="navbar navbar-expand-lg fixed-top">
          <div class="container">
            <a class="navbar-brand" to="/">
              <img style={{ width: 50 }} src={require("../../assets/brand.png")} alt="" />
            </a>
            <a class="navbar-brand" href="">
              Login
            </a>
            <a class="navbar-brand" href="">
              Consultation
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon" style={{ color: "whitesmoke" }}>
                Menu
              </span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <a class="nav-link" href="">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="">
                    Services
                  </a>
                </li>
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
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
