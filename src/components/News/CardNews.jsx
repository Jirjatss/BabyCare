import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function CardNews(props) {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  AOS.init();

  return (
    <>
      <div data-aos="flip-left" data-aos-duration="2000">
        <div className="populer-item">
          <img className="img-fluid" src={props.picture} alt="" />
          <div className="Populer-caption p-2 mb-4">
            <h5 className="Populer-caption-heading" style={{ marginBottom: "1rem" }}>
              {props.title}
            </h5>
          </div>
        </div>

        <button style={{ marginBottom: "1.5rem" }} className="noselect" onClick={() => openInNewTab(props.URL)}>
          Baca
        </button>

        <hr />
      </div>
    </>
  );
}

export default CardNews;
