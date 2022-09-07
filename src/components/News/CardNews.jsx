import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function CardNews(props) {
  AOS.init();
  return (
    <>
      <div data-aos="flip-left" data-aos-duration="2000">
        <div class="populer-item">
          <img class="img-fluid" src={props.picture} alt="" />
          <div class="Populer-caption">
            <h5 class="Populer-caption-heading" style={{ marginBottom: "1rem" }}>
              {props.title}
            </h5>
            <p>{props.desc}</p>
          </div>
        </div>

        <a href={props.URL}>
          <button style={{ marginBottom: "1.5rem" }} className="Populerbtn">
            Selengkapnya
          </button>
        </a>
        <hr />
      </div>
    </>
  );
}

export default CardNews;
