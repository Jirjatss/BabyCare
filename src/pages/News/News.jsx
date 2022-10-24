import React from "react";
import CardNews from "../../components/News/CardNews";
import "./News.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../../components/Layout/Navbar";

function News() {
  const [data, setData] = useState([]);

  const getApi = async () => {
    const dataartikel = await axios.get("https://631cc4864fa7d3264cb66955.mockapi.io/artikel");
    setData(dataartikel.data);
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      <Navbar />
      <div id="containernews">
        <div data-aos="fade-up">
          <div id="services">
            <div className="text-center">
              <h1 id="tagline" className="section-heading">
                Artikel
              </h1>
              <h5 className="section-subheading">Info menarik untuk bayi anda dari sumber terpercaya</h5>
              <hr />
            </div>
          </div>
          <div className="container-fluid">
            <div className="row d-flex justify-content-center">
              {data.map((data) => (
                <div className="col-lg-3 col-sm-6 mb-3" style={{ marginLeft: "1rem", marginRight: "1rem" }}>
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
