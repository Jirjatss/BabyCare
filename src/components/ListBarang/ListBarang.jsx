import React from "react";
import "./ListBarang.css";
import Aos from "aos";

function ListBarang(props) {
  Aos.init();
  return (
    <>
      <div data-aos="flip-left" data-aos-duration="2000">
        <div className="populer-item">
          <img className="img-fluid" src={props.url} alt="" />
          <div className="Populer-caption">
            <h5 className="Populer-caption-heading" style={{ maraginTop: "1rem" }}>
              {props.title}
            </h5>
            <p>
              <i>{props.deskripsi}</i>
            </p>
            <p>
              <b> Rp. {props.harga}</b>
            </p>
          </div>
        </div>

        <a href="" target="_blank">
          <button style={{ marginBottom: "1.5rem" }} className="noselect">
            +Keranjang
          </button>
        </a>
        <hr />
      </div>
    </>
  );
}

export default ListBarang;
