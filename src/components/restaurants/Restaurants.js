import React, { useContext, useEffect } from 'react';
import Restaurant from './Restaurant';
import Spinner from '../layout/Spinner';
import RestaurantContext from '../../context/restaurant/restaurantContext';
import AlertContext from '../../context/alert/alertContext';

const Restaurants = () => {
  const restaurantContext = useContext(RestaurantContext);
  const alertContext = useContext(AlertContext);

  const { searchRestaurants, loading, restaurants } = restaurantContext;

  useEffect(() => {
    const search = () => {
      searchRestaurants()
        .then((res) => {
          if (res.length === 0) {
            alertContext.setAlert('3km以内にお店が見つかりません。');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    search();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={style}>
        {restaurants.map((restaurant) => (
          <Restaurant key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    );
  }
};

const style = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))',
  gridGap: '1rem',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 'auto',
  padding: '0.5rem 0.5rem',
};

export default Restaurants;
