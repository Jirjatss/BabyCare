import PropsTypes from "prop-types";

function SearchShop(props) {
  const { keyword, onSearch } = props;

  return (
    <>
      <div class="container h-100">
        <div class="d-flex justify-content-center h-100">
          <div class="searchbar">
            <input class="search_input" type="text" name="" id="exampleSearch2" placeholder="Cari Produk Disini" value={keyword} onChange={(e) => onSearch(e.target.value)} />
            <a href="#" class="search_icon">
              <i class="fas fa-search"></i>
            </a>
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
