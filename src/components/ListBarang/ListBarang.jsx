import React from "react";
import "./ListBarang.css";

function ListBarang() {
  return (
    <>
      <div className="row row-cols-md-4 md-3 mx-3 mb-3 g-4">
        <div className="col">
          <div className="card">
            <img src="https://img.freepik.com/free-vector/baby-cosmetics-bottles-with-kids-design-plastic-packages_33099-1543.jpg?size=626&ext=jpg&ga=GA1.2.329440172.1660900196" className="card-img-top" alt="Photo" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-title">Harga</h6>
              <p className="card-text">Stok : 6</p>
              <button type="button" className="btn btn-primary btn-block mb-4">
                + Keranjang
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://img.freepik.com/free-vector/baby-cosmetics-bottles-with-kids-design-plastic-packages_33099-1543.jpg?size=626&ext=jpg&ga=GA1.2.329440172.1660900196" className="card-img-top" alt="Photo" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-title">Harga</h6>
              <p className="card-text">Stok : 6</p>
              <button type="button" className="btn btn-primary btn-block mb-4">
                + Keranjang
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://img.freepik.com/free-vector/baby-cosmetics-bottles-with-kids-design-plastic-packages_33099-1543.jpg?size=626&ext=jpg&ga=GA1.2.329440172.1660900196" className="card-img-top" alt="Photo" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-title">Harga</h6>
              <p className="card-text">Stok : 6</p>
              <button type="button" className="btn btn-primary btn-block mb-4">
                + Keranjang
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="https://img.freepik.com/free-vector/baby-cosmetics-bottles-with-kids-design-plastic-packages_33099-1543.jpg?size=626&ext=jpg&ga=GA1.2.329440172.1660900196" className="card-img-top" alt="Photo" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-title">Harga</h6>
              <p className="card-text">Stok : 6</p>
              <button type="button" className="btn btn-primary btn-block mb-4">
                + Keranjang
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListBarang;
