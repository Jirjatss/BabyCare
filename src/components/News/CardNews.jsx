import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import NewsModal from "./NewsModal";

function CardNews(props) {
  AOS.init();
  return (
    <>
      <div data-aos="flip-left" data-aos-duration="2000">
        <div class="populer-item">
          <img class="img-fluid" src={props.url} alt="" />
          <div class="Populer-caption">
            <h4 class="Populer-caption-heading">{props.title}</h4>
            <hr />
          </div>
        </div>
        <div key={props.key} data-bs-toggle="modal" data-bs-target={`#exampleModalLg-${props.id}`}>
          <button className="Populerbtn">Selengkapnya</button>
        </div>
      </div>
      <NewsModal key={props.id} title={props.title} deskripsi={props.deskripsi} id={props.id} />
    </>
  );
}

export default CardNews;
