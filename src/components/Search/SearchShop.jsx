import React from "react";
import PropsTypes from "prop-types";

function SearchShop(props) {
  const { keyword, onSearch } = props;

  return (
    <>
      <div className="container h-100">
        <div className="d-flex justify-content-center h-100">
          <div className="searchbar">
            <p className="control has-icons-left">
              <input className="input is-warning" type="text" placeholder="Cari Produk Disini" value={keyword} onChange={(e) => onSearch(e.target.value)} />
              <span className="icon is-left">
                <i className="fas fa-search" aria-hidden="true"></i>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

SearchShop.propTypes = {
  keyword: PropsTypes.string.isRequired,
  onSearch: PropsTypes.func.isRequired,
};

export default SearchShop;
