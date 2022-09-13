import React from "react";
import DaftarBarang from "../../components/Keranjang/DaftarBarang";
import { useAuthState, useAuthDispatch } from "../../context/store";
import { delCart } from "../../context/Action";
import { useEffect } from "react";
import Navbar from "../../components/Layout/Navbar";

function Keranjang() {
  const state = useAuthState();
  const dispatch = useAuthDispatch();
  useEffect(() => {
    console.log("ini state", state);
  }, [state]);
  return (
    <>
      <Navbar />
      <section className="page-section" id="babyshop">
        <div className="container">
          <div className="text-center">
            <h2 id="tagline" className="section-heading">
              Keranjang Saya
            </h2>
            <h5 className="section-subheading">Daftar Barang Yang Saya Beli</h5>
            <hr />
          </div>
        </div>
      </section>

      {state.items.map((list) => (
        <div key={list.id}>
          <DaftarBarang key={list.id} title={list.title} harga={list.harga} deskripsi={list.kategori} url={list.url} Kondisi={list.Kondisi} BeratSatuan={list.BeratSatuan} DelCart={() => delCart(dispatch, list)} />
        </div>
      ))}
    </>
  );
}

export default Keranjang;
