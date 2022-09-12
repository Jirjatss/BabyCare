import PropsTypes from "prop-types";

function SearchShop(props) {
  const { keyword, onSearch } = props;

  return (
    <>
      <div class="container h-100">
        <div class="d-flex justify-content-center h-100">
          <div class="searchbar">
            <p class="control has-icons-left">
              <input class="input is-warning" type="text" placeholder="Cari Produk Disini" value={keyword} onChange={(e) => onSearch(e.target.value)} />
              <span class="icon is-left">
                <i class="fas fa-search" aria-hidden="true"></i>
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
