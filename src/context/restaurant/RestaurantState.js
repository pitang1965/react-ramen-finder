import React, { useReducer } from 'react';
import {
  restSearchApi,
  restByIdApi,
  imageUrlsByIdApi,
} from '../../utils/restSearch';
import { currentLocation } from '../../utils/location';
import RestaurantContext from './restaurantContext';
import RestaurantReducer from './restaurantReducer';
import {
  SEARCH_RESTAURANTS,
  GET_RESTAURANT,
  SET_LOADING,
  CLEAR_RESTAURANTS,
} from '../types';

let KEYID;

// ぐるなびAPI及び検索条件
if (process.env.NODE_ENV !== 'production') {
  KEYID = process.env.REACT_APP_KEYID;
} else {
  KEYID = process.env.KEYID;
}

const RestaurantState = (props) => {
  const initialState = {
    restaurants: [],
    restaurant: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(RestaurantReducer, initialState);

  // レストランを検索
  const searchRestaurants = async () => {
    setLoading();
    console.log('★searchRestaurants');

    const { latitude, longitude } = await currentLocation();
    console.log(`緯度:${latitude}　経度:${longitude}`);

    let res;
    try {
      res = await restSearchApi(KEYID, latitude, longitude);
    } catch (err) {
      res = [];
      console.log(err.statusText);
    }

    dispatch({
      type: SEARCH_RESTAURANTS,
      payload: res,
    });
  };

  const getRestaurant = async (id) => {
    setLoading();
    console.log('★getRestaurant');
    let res;
    try {
      res = await restByIdApi(KEYID, id);
      res.image_urls = await imageUrlsByIdApi(KEYID, id);
    } catch (err) {
      console.log(err);
    }

    console.log(res);

    dispatch({
      type: GET_RESTAURANT,
      payload: res,
    });
  };

  // レストラン検索結果をクリア
  const clearRestaurants = () => dispatch({ type: CLEAR_RESTAURANTS });

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <RestaurantContext.Provider
      value={{
        restaurants: state.restaurants,
        restaurant: state.restaurant,
        loading: state.loading,
        searchRestaurants,
        getRestaurant,
        clearRestaurants,
        setLoading,
      }}
    >
      {props.children}
    </RestaurantContext.Provider>
  );
};

export default RestaurantState;
