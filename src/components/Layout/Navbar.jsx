import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <section id="jumbotron" className="jumbotron jumbotron-fluid">
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container">
            <Link className="navbar-brand" to="index.html">
              GreenStore
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" style={{ color: "whitesmoke" }}>
                Menu
              </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-<Link" to="">
                    List Barang
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-<Link" to="">
                    Team
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-<Link" to="">
                    Contact
                  </Link>
                </li>
                <div className="dropdown" style={{ marginTop: "0.3rem" }}>
                  <Link style={{ color: "white" }} className="btn dropdown-toggle" to="" role="button" id="dropdownMenu<Link" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="material-icons"> account_circle </span>{" "}
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu<Link">
                    <li>
                      <Link className="dropdown-item" to="">
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="">
                        Keranjang
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="">
                        Pembayaran
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="">
                        Pemesanan
                      </Link>
                    </li>
                  </ul>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Navbar;
