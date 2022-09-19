import React from "react";
import ListBarang from "../../components/ListBarang/ListBarang";
import "./BabyShop.css";
import { useEffect, useState } from "react";
import SearchShop from "../../components/Search/SearchShop";
import * as searchHelper from "./Search.Helper";
import { addCart } from "../../context/Action";
import { useAuthDispatch, useAuthState } from "../../context/store";
import Navbar from "../../components/Layout/Navbar";
import { Link } from "react-router-dom";

function BabyShop() {
  const dispatch = useAuthDispatch();
  const state = useAuthState();

  const url = "https://631cc4864fa7d3264cb66955.mockapi.io/shop";

  const [data, setUsers] = useState([]);

  const [filtered, setFiltered] = useState([]);

  const [keyword, setKeyword] = useState("");

  const fetchProduct = async () => {
    const response = await fetch(url);
    const result = await response.json();
    setUsers(result);
    setFiltered(result);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  useEffect(() => {
    if (keyword.length > 0) {
      const filtered = searchHelper.search(data, keyword);
      setFiltered(filtered);
    } else {
      setFiltered(data);
      console.log("ini state", state);
    }
  }, [keyword, state, data]);

  const handleSearch = (updates) => {
    setKeyword(updates);
  };

  return (
    <>
      <Navbar />
      <div id="containernews">
        <div data-aos="zoom-out-up" data-aos-duration="1500">
          <div id="services">
            <div className="text-center">
              <h1 id="tagline" className="section-heading">
                Baby Shop
              </h1>
              <h5 className="section-subheading">Lengkapi kebutuhan si kecil anda</h5>
              <hr />
            </div>
          </div>
          <div className="container">
            <div className="row mb-3 d-flex justify-content-center">
              <div className="col-3 ">
                <SearchShop keyword={keyword} onSearch={handleSearch} />
              </div>
              <div className="col-3 position-relative text-end">
                <Link to="/keranjang" style={{ textDecoration: "none", color: "black", fontWeight: "bolder" }}>
                  <img className="mt-12" style={{ width: 25, height: 30 }} src={require("../../assets/shopping-cart.png")} alt="" />
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{state.items.length}</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="container-fluid">
            <div className="row d-flex justify-content-center">
              {filtered.map((barang) => (
                <div key={barang.id} className="col-lg-2 col-sm-4 mb-2" style={{ marginLeft: "1rem", marginRight: "1rem" }}>
                  <div>
                    <ListBarang key={barang.id} title={barang.title} url={barang.url} deskripsi={barang.kategori} harga={barang.harga} kondisi={barang.Kondisi} BeratSatuan={barang.BeratSatuan} addToCart={() => addCart(dispatch, barang)} />
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
