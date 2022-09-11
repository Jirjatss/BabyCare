import React from "react";

function KeranjangSaya() {
  return (
    <>
      {/* <!-- Table prodak --> */}
      <div className="container fluit" id="rincian-keranjang">
        {/*  */}
        <div className="row">
          <div className="col-md-12">
            <div className="row d-flex justify-content-between" id="rincian">
              <div className="col-2 col-sm-2" style={{ fontFamily: "times New Rowman" }}>
                Produk
              </div>
              <div className="col-2 col-sm-2">Nama</div>
              <div className="col-2 col-sm-2">Harga</div>
              <div className="col-2 col-sm-2">Kuantitas</div>
              <div className="col-2 col-sm-2">Hapus</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default KeranjangSaya;
