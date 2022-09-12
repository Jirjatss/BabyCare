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

    default:
      return state;
  }
};

export default Reducer;
