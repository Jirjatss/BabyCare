import React from "react";
import "./ListBarang.css";
import Aos from "aos";

function ListBarang(props) {
  Aos.init();

  return (
    <>
      <div data-aos="flip-left" data-aos-duration="2000">
        <div className="card h-100 shadow-sm mt-2 mb-2">
          <img src={props.url} className="card-img-top" alt="..." />
          <div className="card-body">
            <div className="clearfix mb-2">
              <span className="float-start badge rounded-pill bg-primary">{props.deskripsi}</span>
              <span className="float-end price-hp">Rp {props.harga}</span>
            </div>
            <h5 className="card-title">{props.title}</h5>
            <div className="text-center my-4 mb-1">
              <button className="noselect" onClick={props.addToCart}>
                +Keranjang
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListBarang;
