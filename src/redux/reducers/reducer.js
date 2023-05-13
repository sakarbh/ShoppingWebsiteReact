const INITIAL_STATE = {
  carts: []
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_CART":
      // ...state,
      // carts:[...state.carts,action.payload]
      let index = state.carts.findIndex((e) => e.id === action.payload.id);
      if (index >= 0) {
        state.carts[index].count++;
        return {
            ...state,
            carts:[...state.carts]}
      } else {
        return {
          ...state,
          carts: [...state.carts, action.payload],
        };
      }

    case "REMOVE_PRODUCT":
      let index2 = state.carts.findIndex((e) => e.id === action.payload.id);
      if (index2 >= 0 && state.carts[index2].count > 1) {
        state.carts[index2].count--;
        return {
            ...state,
            carts:[...state.carts]}
      } else {
        const newData = state.carts.filter(
          (items) => items.id !== action.payload.id
        );
        return {
          ...state,
          carts: newData,
        };
      }
      default:
      return state;
  }
};


