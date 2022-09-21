import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import TotalBayar from "./TotalBayar";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useAuthDispatch, useAuthState } from "../../context/store";
import { delstate } from "../../context/Action";

function FromPembayaran() {
  const state = useAuthState();
  const dispatch = useAuthDispatch();
  const [nama, setNama] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [alamat, setAlamat] = useState("");
  const [metode, setMetode] = useState("");
  const [show, setShow] = useState(true);
  const [barang, setBarang] = useState();
  const [Harga, setHarga] = useState([]);
  const [jumlah, setJumlah] = useState("");
  const navigate = useNavigate();
  const [isipesan, setIsipesan] = useState([]);

  const getpesanan = () => {
    const pesan = localStorage.getItem("listpembayaran");
    setIsipesan(JSON.parse(pesan));
  };

  const bayar = () => {
    let listdata = [
      {
        nama: nama,
        nohp: phonenumber,
        alamat: alamat,
        metode: metode,
        detail: barang,
        hargatotal: Harga,
        jumlahtotal: jumlah,
      },
    ];

    if (nama === "" || phonenumber === "" || alamat === "" || metode === "") {
      Swal.fire({
        title: "Oops",
        icon: "error",
        text: "Silahkan isi form dengan benar",
        confirmButtonText: '<i className="fa fa-thumbs-up"></i> Great!',
      });
    } else if (!Harga || !jumlah) {
      Swal.fire({
        title: "Oops",
        icon: "error",
        text: "Rincian Keranjang belum ditambahkan",
        confirmButtonText: '<i className="fa fa-thumbs-up"></i> Great!',
      });
    } else {
      if (isipesan === null) {
        setIsipesan([listdata]);
        localStorage.setItem("listpembayaran", JSON.stringify(listdata));
      } else {
        localStorage.setItem("listpembayaran", JSON.stringify(isipesan.concat(listdata)));
        setIsipesan(isipesan.concat(listdata));
      }

      Swal.fire({
        title: "Sweet!",
        icon: "success",
        text: "Selamat Pembayaran Berhasil",
        confirmButtonText: '<i className="fa fa-thumbs-up"></i> Great!',
      });
      navigate("/Pemesanan");
      delstate(dispatch, state);
    }
  };

  useEffect(() => {
    const barang = state.items.map((list) => {
      return list;
    });
    const harga = state.items.map((list) => {
      return parseInt(list.harga);
    });
    setJumlah(state.items.length);
    const result = harga.reduce(function (total, currentValue) {
      return total + currentValue;
    }, 0);
    setHarga(result);
    setShow(!show);
    getpesanan();
    setBarang(barang);
    console.log("inibarang", barang);
  }, []);

  useEffect(() => {
    console.log(isipesan);
  }, [isipesan]);
  return (
    <>
      <div className="container">
        <div className="row d-flex justofy-content-center">
          <div className="col-lg-6 col-sm-12">
            <div className="form-body">
              <div className="row">
                <div className="">
                  <form className="requires-validation" noValidate>
                    <div className="col-md-12">
                      <input className="form-control" type="text" name="name" placeholder="Full Name" onChange={(e) => setNama(e.target.value)} />
                    </div>

                    <div className="col-md-12 mt-3">
                      <input className="form-control" type="number" name="number" placeholder="Phone Number" onChange={(e) => setPhoneNumber(e.target.value)} />
                      <div className="valid-feedback">Password field is valid!</div>
                    </div>
                    <div className="col-md-12 mt-3 mb-3">
                      <input className="form-control" type="text" name="text" placeholder="Alamat Lengkap" onChange={(e) => setAlamat(e.target.value)} />
                      <div className="valid-feedback">Adress is invalid!</div>
                    </div>

                    <div className="col-md-12 mb-3">
                      <select className="form-select text-center" aria-label="Default select example" onChange={(e) => setMetode(e.target.value)}>
                        <option selected>Metode Pembayaran </option>
                        <option value="COD">COD</option>
                        <option value="Transfer Bank">Transfer Bank</option>
                        <option value="Dana">Dana</option>
                        <option value="Ovo">Ovo</option>
                      </select>
                    </div>

                    <div className="text-center mt-4">
                      <label className="form-check-label">
                        <b>I confirm that all data are correct and can be responsible</b>
                      </label>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <TotalBayar totalbarang={jumlah} harga={Harga} hargatotal={40000 + Harga} />
          </div>
          <div className="row d-flex justify-content-center mt-5" style={{ marginBottom: "5rem" }}>
            <div className="col-12 text-center">
              <button onClick={() => bayar()} className="noselect text-center p-3" style={{ textDecoration: "none", color: "black" }}>
                Bayar Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FromPembayaran;
