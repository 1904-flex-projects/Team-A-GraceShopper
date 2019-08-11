import axios from 'axios';

// Constants
const SET_LOGGED_IN_USER = 'SET_LOGGED_IN_USER';
const CLEAR_LOGGED_IN_USER = 'CLEAR_LOGGED_IN_USER';
const SET_AUTH_STATUS = 'SET_AUTH_STATUS';

// Action Creators
const setLoggedInUser = user => ({
  type: SET_LOGGED_IN_USER,
  user,
});

const clearLoggedInUser = () => ({
  type: CLEAR_LOGGED_IN_USER,
});

const setAuthStatus = authStatus => ({
  type: SET_AUTH_STATUS,
  authStatus,
});

// Thunks

export const fetchAuthStatus = () => dispatch => {
  return axios
    .get('api/auth')
    .then(res => {
      console.log('fetchAuthStatus thunk', res.data.loggedIn);
      dispatch(setAuthStatus(res.data.loggedIn));
    })
    .catch(e => console.log(e));
};

export const postLogin = user => dispatch => {
  axios
    .post('api/auth/login', user)
    .then(res => {
      dispatch(setLoggedInUser(res.data));
      return fetchAuthStatus()(dispatch);
    })
    .then(() => {
      console.log('Login and Auth check success.');
    })
    .catch(e => console.error(e));
};

export const postSignup = user => dispatch => {
  axios
    .post('/api/auth/signup', user)
    .then(res => {
      dispatch(setLoggedInUser(res.data));
    })
    .catch(e => console.log(e));
};

export const postLogout = history => dispatch => {
  axios
    .post('/api/auth/logout')
    .then(() => {
      dispatch(clearLoggedInUser());
      history.push('/products');
    })
    .catch(e => console.log(e));
};

// Reducers
const initialState = {
  loggedInUser: {},
  loggedIn: false,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGGED_IN_USER:
      return { ...state, loggedInUser: action.user };
    case CLEAR_LOGGED_IN_USER:
      return { ...state, loggedInUser: null };
    case SET_AUTH_STATUS:
      return { ...state, loggedIn: action.authStatus };
    default:
      return state;
  }
};

export default users;
