import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from './logo384.png';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Restaurant = ({
  restaurant: { name, distance, image_url, id, latitude, longitude },
}) => {
  console.log(image_url);
  return (
    <div className='card restaurant'>
      {image_url.shop_image1 ? (
        <img
          src={image_url.shop_image1}
          alt=''
          style={{ width: '60%', height: '10rem', objectFit: 'cover' }}
        />
      ) : (
        <img
          src={logo}
          alt=''
          style={{ width: '60%', height: '10rem', objectFit: 'cover' }}
        />
      )}

      <h3>{name}</h3>
      {distance !== Infinity ? (
        <Fragment>
          <h4 className='text-success'>
            <a
              className='App-link'
              href={`https://google.com/maps?q=${latitude},${longitude}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaMapMarkerAlt />
              {distance} m
            </a>
          </h4>
        </Fragment>
      ) : (
        <h4 className='text-danger'>距離不明</h4>
      )}
      <div>
        <Link to={`/restaurant/${id}`} className='btn btn-primary btn-sm my-1'>
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
