// cart action type
const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
const UPDATE_QUANTITY = 'UPDATE_QUANTITY';

// action creator
export const addProductToCart = product => {
  return {
    type: ADD_PRODUCT_TO_CART,
    product,
  };
};

export const setQuantity = quantity => {
  return {
    type: UPDATE_QUANTITY,
    quantity,
  };
};

// Reducers
const initialState = {
  cart: [],
  quantity: 1,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return { ...state, cart: [...state.cart, action.product] };
    case UPDATE_QUANTITY:
      return { ...state, quantity: action.quantity };
    default:
      return state;
  }
};

export default cart;
