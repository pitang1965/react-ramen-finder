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

let KEYID, DEMO_MODE;

// ぐるなびAPI及び検索条件
// 注意：APIキーはJavaScriptファイルに埋め込まれるので安全ではありません。
// サーバー側のコードで扱うなどすべきです。
KEYID = process.env.REACT_APP_KEYID;
DEMO_MODE = process.env.REACT_APP_DEMO_MODE;

const RestaurantState = (props) => {
  const initialState = {
    restaurants: [],
    restaurant: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(RestaurantReducer, initialState);

  let latitude, longitude;

  // レストランを検索
  const searchRestaurants = async () => {
    setLoading();

    console.log(`TEST: ${process.env.TEST}`);

    let res = [];

    await currentLocation(DEMO_MODE && DEMO_MODE === 'true')
      .then((obj) => {
        latitude = obj.latitude;
        longitude = obj.longitude;
        console.log(`緯度:${latitude}　経度:${longitude}`);
      })
      .catch((err) => {
        latitude = 35.7;
        longitude = 139;
        console.log(err);
        return;
      })
      .then(async () => {
        res = await restSearchApi(KEYID, latitude, longitude);
      })
      .catch((err) => {
        console.log(err.statusText);
      });

    dispatch({
      type: SEARCH_RESTAURANTS,
      payload: res,
    });
  };

  const getRestaurant = async (id) => {
    setLoading();
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
