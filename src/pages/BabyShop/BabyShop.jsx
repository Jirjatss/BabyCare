import React from "react";
import ListBarang from "../../components/ListBarang/ListBarang";
import "./BabyShop.css";
import { useEffect, useState } from "react";
import SearchShop from "../../components/Search/SearchShop";
import * as searchHelper from "./Search.Helper";
import { addCart, delCart, totalCart } from "../../context/Action";
import { useAuthDispatch, useAuthState } from "../../context/store";
import { Link } from "react-router-dom";

import DaftarBarang from "../../components/Keranjang/DaftarBarang";
import KeranjangSaya from "../../components/Keranjang/KeranjangSaya";

function BabyShop() {
  const dispatch = useAuthDispatch();
  const state = useAuthState();

  const url = "https://631cc4864fa7d3264cb66955.mockapi.io/shop";

  const [data, setUsers] = useState([]);

  const [filtered, setFiltered] = useState([]);

  const [keyword, setKeyword] = useState("");

  useEffect(async () => {
    const response = await fetch(url);
    const result = await response.json();
    setUsers(result);
    setFiltered(result);
  }, []);

  useEffect(() => {
    if (keyword.length > 0) {
      const filtered = searchHelper.search(data, keyword);
      setFiltered(filtered);
    } else {
      setFiltered(data);
      console.log("ini state", state);
    }
  }, [keyword, state]);

  const handleSearch = (updates) => {
    setKeyword(updates);
  };

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
          <div className="container">
            <div className="row mb-3 d-flex justify-content-end">
              <div className="col-3 ">
                <SearchShop keyword={keyword} onSearch={handleSearch} />
              </div>
              <div className="col-3">
                <Link to="/keranjang" style={{ textDecoration: "none", color: "black", fontWeight: "bolder" }}>
                  Keranjang
                  <img class="mt-12" style={{ width: 25, height: 30 }} src={require("../../assets/shopping-cart.png")} alt="" />
                </Link>
                <span style={{ width: 40, height: 25 }} class="inline-block mt-14 pt-1 px-1.5 leading-none text-center  font-bold bg-red-600 text-white rounded">
                  {state.items.length}
                </span>
                <span className="dropdown" style={{ marginTop: "0.1rem" }}>
                  <a style={{ color: "black" }} className="btn dropdown-toggle" href="" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    About
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li>
                      <a className="dropdown-item" href="/#About">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#keranjang">
                        Keranjang
                      </a>
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </div>

          <div class="container-fluid" style={{ marginBottom: "22rem" }}>
            <div class="row d-flex justify-content-center">
              {filtered.map((barang) => (
                <div class="col-lg-2 col-sm-4 mb-2" style={{ marginLeft: "1rem", marginRight: "1rem" }}>
                  <div key={barang.id}>
                    <ListBarang key={barang.id} title={barang.title} url={barang.url} deskripsi={barang.kategori} harga={barang.harga} addToCart={() => addCart(dispatch, barang)} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div id="keranjang" style={{ marginBottom: "12rem" }}>
          <div class="text-center">
            <h1 id="tagline" class="section-heading">
              Baby Shop
            </h1>
            <h5 class="section-subheading">Lengkapi kebutuhan si kecil anda</h5>
            <hr />
          </div>
          <div class="pt-44 pb-10">
            <KeranjangSaya />

            {state.items.map((list) => (
              <div key={list.id}>
                <DaftarBarang key={list.id} title={list.title} harga={list.harga} deskripsi={list.deskripsi} url={list.url} DelCart={() => delCart(dispatch, list)} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default BabyShop;
