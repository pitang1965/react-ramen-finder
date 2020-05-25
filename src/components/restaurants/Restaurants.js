import React, { useContext, useEffect } from 'react'
import Restaurant from './Restaurant';
import Spinner from '../layout/Spinner';
import RestaurantContext from '../../context/restaurant/restaurantContext';

const Restaurants = () => {
  const restaurantContext = useContext(RestaurantContext);

  const { searchRestaurants, loading, restaurants } = restaurantContext;

  useEffect(() => {
    searchRestaurants();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={style}>
        {restaurants.map(restaurant => (
          <Restaurant key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    );
  }
}

const style = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default Restaurants
