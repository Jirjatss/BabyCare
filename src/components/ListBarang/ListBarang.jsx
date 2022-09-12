import React from "react";
import "./ListBarang.css";
import Aos from "aos";

function ListBarang(props) {
  Aos.init();

  return (
    <>
      <div data-aos="flip-left" data-aos-duration="2000">
        <div class="card h-100 shadow-sm mt-2 mb-2">
          <img src={props.url} class="card-img-top" alt="..." />
          <div class="card-body">
            <div class="clearfix mb-2">
              <span class="float-start badge rounded-pill bg-primary">{props.deskripsi}</span>
              <span class="float-end price-hp">Rp {props.harga}</span>
            </div>
            <h5 class="card-title">{props.title}</h5>
            <div class="text-center my-4 mb-1">
              <button class="noselect" onClick={props.addToCart}>
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
