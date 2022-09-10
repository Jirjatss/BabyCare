import React from "react";
import ListBarang from "../../components/ListBarang/ListBarang";
import "./BabyShop.css";
import axios from "axios";
import { useEffect, useState } from "react";

function BabyShop() {
  const [data, setData] = useState([]);

  const getApi = async () => {
    const dataartikel = await axios.get("https://631cc4864fa7d3264cb66955.mockapi.io/shop");
    setData(dataartikel.data);
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      <div id="containernews">
        <div data-aos="zoom-out-up" data-aos-duration="1500">
          <div id="services">
            <div class="text-center">
              <h1 id="tagline" class="section-heading">
                Baby Shop
              </h1>
              <h5 class="section-subheading">Lengkapi kebutuhan si kecil anda</h5>
              <hr />
            </div>
          </div>
          <div class="container-fluid">
            <div class="row d-flex justify-content-center">
              {data.map((data) => (
                <div class="col-lg-3 col-sm-6 mb-3" style={{ marginLeft: "1rem", marginRight: "1rem" }}>
                  <div key={data.id}>
                    <ListBarang key={data.id} title={data.title} url={data.url} deskripsi={data.kategori} harga={data.harga} />
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

export default BabyShop;
