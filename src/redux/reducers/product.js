import axios from 'axios';

// Constants
const PRODUCT_REQUEST = 'PRODUCT_REQUEST';
const PRODUCT_REQUEST_FAILURE = 'PRODUCT_REQUEST_FAILURE';
const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
const CHECK_FOR_PENDING_ORDER = 'CHECK_FOR_PENDING_ORDER';
const GET_SINGLE_PRODUCT = 'GET_SINGLE_PRODUCT';

// Action Creators
const getAllProducts = products => ({
  type: GET_ALL_PRODUCTS,
  products,
});

const getSingleProduct = product => ({
  type: GET_SINGLE_PRODUCT,
  product,
});

const fetchingProductData = () => ({
  type: PRODUCT_REQUEST,
});

const fetchingProductDataError = error => ({
  type: PRODUCT_REQUEST_FAILURE,
  error: 'Failed to fetch product data',
  payload: error,
});

const checkPendingOrder = sessionId => ({
  type: CHECK_FOR_PENDING_ORDER,
  sessionId,
});

// Thunks
export const fetchAllProducts = () => dispatch => {
  dispatch(fetchingProductData());
  axios
    .get('/api/products')
    .then(res => res.data)
    .then(products => dispatch(getAllProducts(products)))
    .catch(error => dispatch(fetchingProductDataError(error)));
};

export const fetchOrCreateOrder = () => dispatch => {
  // use the cookie to fetch the session from db?
  // fetch the session
  // Order.findOne({where: sessionId, status: 'PENDING'})
  // if no order, Order.create
  //if order, return order
};

export const addProductToOrder = () => dispatch => {
  // takes order id and product id
  // check if that product already exists in this order
  // if exists, increase quantity by 1
  // if it doesn't exist, OrderProduct.create(orderId, productId, productQuantity: 1)
};
export const fetchSingleProduct = prodId => dispatch => {
  axios
    .get(`/api/products/${prodId}`)
    .then(res => res.data)
    .then(product => dispatch(getSingleProduct(product)))
    .catch(error => console.error(error));
};

// Reducers
const initialState = {
  products: [],
  suppliers: [],
  singleProduct: {},
  isFetching: false,
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_REQUEST:
      return { ...state, isFetching: true };
    case GET_ALL_PRODUCTS:
      return { products: action.products, isFetching: false, cart: state.cart };
    case GET_SINGLE_PRODUCT:
      return {
        ...state,
        singleProduct: action.product,
      };
    default:
      return state;
  }
};

export default products;
