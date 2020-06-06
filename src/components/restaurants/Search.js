import React, { useContext } from 'react';
import RestaurantContext from '../../context/restaurant/restaurantContext';

const Search = () => {
  const restaurantContext = useContext(RestaurantContext);

  const onSubmit = (e) => {
    e.preventDefault();
    restaurantContext.searchRestaurants();
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='submit'
          value='現在地で再検索'
          className='btn btn-dark btn-block'
        />
      </form>
    </div>
  );
};

export default Search;
