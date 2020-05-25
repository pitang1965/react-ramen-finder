import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Restaurant = ({ restaurant: { name, distance, image_url, id } }) => {
  console.log(image_url);
  return (
    <div className='card text-center'>
      <img
        src={image_url.shop_image1}
        alt=''
        // className='round-img'
        style={{ width: '60px' }}
      />
      <h3>{name}</h3>
      <h4>{distance} m</h4>
      <div>
        <Link to={`/restaurant/${id}`} className='btn btn-dark btn-sm my-1'>
          詳細
        </Link>
      </div>
    </div>
  );
};

Restaurant.propTypes = {
  restaurant: PropTypes.object.isRequired,
};

export default Restaurant;
