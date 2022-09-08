import React from "react";
import CardNews from "../../components/News/CardNews";
import datas from "../../data-news";
import "./News.css";

function News() {
  return (
    <>
      <div id="containernews">
        <div data-aos="zoom-out-up" data-aos-duration="1500">
          <div id="services">
            <div class="text-center">
              <h1 id="tagline" class="section-heading">
                Artikel
              </h1>
              <h5 class="section-subheading">Info menarik untuk bayi anda dari sumber terpercaya</h5>
              <hr />
            </div>
          </div>
          <div class="container-fluid">
            <div class="row d-flex justify-content-center">
              {datas.map((data) => (
                <div class="col-lg-3 col-sm-6 mb-3" style={{ marginLeft: "1rem", marginRight: "1rem" }}>
                  <div key={data.id}>
                    <CardNews title={data.title} picture={data.picture} URL={data.URL} id={data.id} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default News;