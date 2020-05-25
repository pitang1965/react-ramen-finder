import {
  SEARCH_RESTAURANTS,
  GET_RESTAURANT,
  CLEAR_RESTAURANTS,
  SET_LOADING,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_RESTAURANTS:
      console.log('●SEARCH_RESTAURANTS');
      return {
        ...state,
        restaurants: action.payload,
        loading: false,
      };
    case GET_RESTAURANT:
      console.log('●GET_RESTAURANT');
      return {
        ...state,
        restaurant: action.payload,
        loading: false,
      };
    case CLEAR_RESTAURANTS:
      console.log('●CLEAR_RESTAURANTS');
      return {
        ...state,
        restaurants: [],
        loading: false,
      };
    case SET_LOADING:
      console.log('●SET_LOADING');
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
