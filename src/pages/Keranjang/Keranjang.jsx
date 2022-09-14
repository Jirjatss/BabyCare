import React from "react";
import DaftarBarang from "../../components/Keranjang/DaftarBarang";
import { useAuthState, useAuthDispatch } from "../../context/store";
import { delCart } from "../../context/Action";
import Navbar from "../../components/Layout/Navbar";
import TotalHarga from "../../components/Keranjang/TotalHarga";
import { useEffect, useState } from "react";

function Keranjang() {
  const state = useAuthState();
  const dispatch = useAuthDispatch();

  const [Harga, setHarga] = useState([]);
  const [jumlah, setJumlah] = useState("");

  const [show, setShow] = useState(false);

  const handel = () => {
    const harga = state.items.map((list) => {
      return parseInt(list.harga);
    });
    setJumlah(state.items.length);
    const result = harga.reduce(function (total, currentValue) {
      return total + currentValue;
    }, 0);
    setHarga(result);
    setShow(!show);
  };

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
        {show && (
          <>
            <button onClick={handel} className="noselect">
              Tutup
            </button>
            <TotalHarga totalbarang={jumlah} harga={Harga} hargatotal={40000 + Harga} />
          </>
        )}

        {!show && (
          <button onClick={handel} className="noselect">
            Cek
          </button>
        )}
        {state.items.map((list) => (
          <div key={list.id}>
            <DaftarBarang key={list.id} title={list.title} harga={list.harga} deskripsi={list.kategori} url={list.url} Kondisi={list.Kondisi} BeratSatuan={list.BeratSatuan} DelCart={() => delCart(dispatch, list, setShow(!show))} />
          </div>
        ))}
      </section>
      (
    </>
  );
}

export default Keranjang;
