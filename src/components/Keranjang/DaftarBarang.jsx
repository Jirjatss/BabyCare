import Aos from "aos";
import React from "react";
import "./Daftar.css";

function DaftarBarang(props) {
  Aos.init();
  return (
    <>
      <div className="col">
        <div id="container" key={props.id}>
          <div className="row d-flex-justify-content-center">
            <div className="col-4">
              <div class="product-details text-center">
                <h4>{props.title}</h4>

                <p class="information"></p>
              </div>
            </div>
            <div className="col-4 product-details">
              <button className="minus ms-2 me-2">+</button>
              <span>1</span>
              <button className="minus ms-2 me-2">-</button>
              <div>
                <br />
                <button className="plus ms-2">
                  <span style={{ textDecoration: "none", color: "black", fontWeight: "bolder" }}>
                    <img className="mt-12" style={{ width: 30, height: 30 }} src={require("../../assets/au.png")} alt="" />
                  </span>
                </button>
              </div>
            </div>
            <div className="col-4">
              <div class="product-image">
                <img src={props.url} alt="" />

                <div class="info">
                  <h4> Description</h4>
                  <ul>
                    <li>
                      <strong>Kategori : </strong>
                      {props.deskripsi}
                    </li>
                    <li>
                      <strong>Harga : </strong>
                      {props.harga}
                    </li>
                    <li>
                      <strong>Kondisi : </strong>
                      {props.Kondisi}
                    </li>
                    <li>
                      <strong>Berat : </strong>
                      {props.BeratSatuan}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DaftarBarang;
