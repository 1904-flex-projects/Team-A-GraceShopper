import axios from 'axios';

// Constants
const PRODUCT_REQUEST = 'PRODUCT_REQUEST';
const PRODUCT_REQUEST_FAILURE = 'PRODUCT_REQUEST_FAILURE';
const GET_PRODUCT = 'GET_PRODUCT';
const GET_PRODUCTS = 'GET_PRODUCTS';

// Action Creators
const fetchingProductData = () => ({
  type: PRODUCT_REQUEST,
});

const fetchingProductDataError = error => ({
  type: PRODUCT_REQUEST_FAILURE,
  error: 'Failed to fetch product data',
  payload: error,
});

const getProduct = product => ({
  type: GET_PRODUCT,
  product,
});

const getProducts = (products, category = null, supplier = null) => ({
  type: GET_PRODUCTS,
  products,
  category,
  supplier,
});

// Thunks
export const postProducts = products => dispatch => {
  axios
  .post('/api/products', products)
  .then(({ data }) => {
    dispatch(getProducts(data));
  })
  .catch(error => console.log(error))
}

export const fetchProducts = (category = null, supplier = null) => dispatch => {
  dispatch(fetchingProductData());
  axios
    .get(`/api/products?category=${category}&brewery=${supplier}`)
    .then(({ data }) => dispatch(getProducts(data)))
    .catch(error => dispatch(fetchingProductDataError(error)));
};

export const fetchProduct = productId => dispatch => {
  dispatch(fetchingProductData());
  axios
    .get(`/api/products/${productId}`)
    .then(({data}) => dispatch(getProduct(data)))
    .catch(error => console.error(error));
};

// Reducers
const initialState = {
  products: [],
  product: {},
  isFetching: false,
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_REQUEST:
      return { ...state, isFetching: true };
    case GET_PRODUCTS:
      return { ...state, products: action.products, isFetching: false };
    case GET_PRODUCT:
      return { ...state, product: action.product, isFetching: false };
    default:
      return state;
  }
};

export default products;
