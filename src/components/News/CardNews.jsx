import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function CardNews(props) {
  AOS.init();
  return (
    <>
      <div data-aos="flip-left" data-aos-duration="2000">
        <div className="populer-item">
          <img className="img-fluid" src={props.picture} alt="" />
          <div className="Populer-caption">
            <h5 className="Populer-caption-heading" style={{ marginBottom: "1rem" }}>
              {props.title}
            </h5>
          </div>
        </div>

        <a href={props.URL} target="_blank">
          <button style={{ marginBottom: "1.5rem" }} className="noselect">
            Selengkapnya
          </button>
        </a>
        <hr />
      </div>
    </>
  );
}

export default CardNews;
