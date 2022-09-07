import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <section id="jumbotron" class="jumbotron jumbotron-fluid">
        <nav class="navbar navbar-expand-lg fixed-top">
          <div class="container">
            <Link class="navbar-brand" to="/">
              <img style={{ width: 50 }} src={require("../../assets/brand.png")} alt="" />
            </Link>
            <Link class="navbar-brand" to="">
              Login
            </Link>
            <Link class="navbar-brand" to="">
              Consultation
            </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon" style={{ color: "whitesmoke" }}>
                Menu
              </span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <Link class="nav-link" to="">
                    About
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="">
                    Services
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="">
                    Team
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="">
                    Baby Shop
                  </Link>
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
