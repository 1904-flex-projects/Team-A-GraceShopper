import axios from 'axios';

// Constants
const SET_LOGGED_IN_USER = 'SET_LOGGED_IN_USER';
const CLEAR_LOGGED_IN_USER = 'CLEAR_LOGGED_IN_USER';
const SET_AUTH_STATUS = 'SET_AUTH_STATUS';

// Action Creators
const setLoggedInUser = user => ({
  type: SET_LOGGED_IN_USER,
  user
});

const clearLoggedInUser = () => ({
  type: CLEAR_LOGGED_IN_USER
});

const setAuthStatus = (authStatus, loggedUser) => ({
  type: SET_AUTH_STATUS,
  authStatus,
  loggedUser
});

// Thunks

export const fetchAuthStatus = () => dispatch => {
  return axios
    .get('/api/auth')
    .then(res => {
      console.log(res.data);
      console.log('fetchAuthStatus thunk', res.data.loggedIn);
      dispatch(setAuthStatus(res.data.loggedIn, res.data.loggedUser));
    })
    .catch(e => console.log(e));
};

export const postLogin = (user, history) => dispatch => {
  axios
    .post('/api/auth/login', user)
    .then(res => {
      dispatch(setLoggedInUser(res.data));
      history.push('/');
      return fetchAuthStatus()(dispatch);
    })
    .then(() => {
      console.log('Login and Auth check success.');
    })
    .catch(e => console.error(e));
};

export const postSignup = (user, history) => dispatch => {
  axios
    .post('/api/auth/signup', user)
    .then(res => {
      dispatch(setLoggedInUser(res.data));
      history.push('/');
    })
    .catch(e => console.log(e));
};

export const postLogout = history => dispatch => {
  axios
    .post('/api/auth/logout')
    .then(() => {
      dispatch(clearLoggedInUser());
      history.push('/');
    })
    .catch(e => console.log(e));
};

// Reducers
const initialState = {
  loggedInUser: {},
  loggedIn: false
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGGED_IN_USER:
      return { ...state, loggedInUser: action.user };
    case CLEAR_LOGGED_IN_USER:
      return { ...state, loggedInUser: null, loggedIn: false };
    case SET_AUTH_STATUS:
      return {
        ...state,
        loggedInUser: action.loggedUser,
        loggedIn: action.authStatus
      };
    default:
      return state;
  }
};

export default users;
