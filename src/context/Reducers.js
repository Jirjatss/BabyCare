export const initialState = {
  items: [],
  total: 0,
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CART":
      return {
        ...state,
        items: [...state.items, action.addCart],
      };
    case "DEL_CART":
      return {
        items: state.items.filter((item) => item.id !== action.delCart.id),
      };
    case "TOTAL_CART":
      return {
        counterCart: action.totalCart,
      };

    default:
      return state;
  }
};

export default Reducer;
