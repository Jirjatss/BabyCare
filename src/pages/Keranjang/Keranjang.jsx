import React from "react";
import DaftarBarang from "../../components/Keranjang/DaftarBarang";
import { useAuthState, useAuthDispatch } from "../../context/store";
import { delCart } from "../../context/Action";
import Navbar from "../../components/Layout/Navbar";
import TotalHarga from "../../components/Keranjang/TotalHarga";
import { useState } from "react";
import { Link } from "react-router-dom";

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

  if (state.items.length === 0) {
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
        <div className="container justify-content-center konsul">
          <div className="row d-flex justify-content-center">
            <Link to="/BabyShop" className="text-center pesan" style={{ textDecoration: "none", color: "black" }}>
              <h4>Keranjang kosong, Belanja Sekarang</h4>
            </Link>
          </div>
        </div>
      </>
    );
  } else {
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
              <TotalHarga totalbarang={jumlah} harga={Harga} hargatotal={40000 + Harga} link={"/Pembayaran"} />
            </>
          )}

          {!show && (
            <button onClick={handel} className="noselect">
              Bayar Sekarang
            </button>
          )}
          {state.items.map((list) => (
            <div key={list.id}>
              <DaftarBarang key={list.id} title={list.title} harga={list.harga} deskripsi={list.kategori} url={list.url} Kondisi={list.Kondisi} BeratSatuan={list.BeratSatuan} DelCart={() => delCart(dispatch, list, setShow(false))} />
            </div>
          ))}
        </section>
      </>
    );
  }
}

export default Keranjang;
