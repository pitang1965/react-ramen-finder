import React, { Fragment, useEffect, useContext } from 'react';
import Photos from '../photos/Photos';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import RestaurantContext from '../../context/restaurant/restaurantContext';

const RestDetails = ({ match }) => {
  const restaurantContext = useContext(RestaurantContext);

  const { getRestaurant, isMobile, loading, restaurant } = restaurantContext;

  useEffect(() => {
    getRestaurant(match.params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    url_mobile,
    url,
    image_url,
    name,
    address,
    pr,
    holiday,
    e_money,
    credit_card,
    image_urls,
  } = restaurant;

  if (loading) return <Spinner />;

  return (
    <div style={style}>
      <Link to='/' className='btn btn-light'>
        「近所のラーメン屋」に戻る
      </Link>
      {isMobile
        ? url_mobile && (
            <a href={url_mobile} className='btn btn-dark my-1'>
              お店のホームページへ
            </a>
          )
        : url && (
            <a href={url} className='btn btn-dark my-1'>
              お店のホームページへ
            </a>
          )}

      <div className='card'>
        <div className='all-center'>
          {image_url && (
            <img
              src={image_url.shop_image1}
              // className='round-img'
              alt=''
              style={{ width: '150px' }}
            />
          )
          }
          <h1>{name}</h1>
          <p>住所: {address}</p>
        </div>
        <div>
          {pr && pr.pr_short && (
            <Fragment>
              <h3>PR(宣伝)</h3>
              <p>{pr.pr_short}</p>
            </Fragment>
          )}
          <ul>
            <li>
              {holiday && (
                <Fragment>
                  <strong>休日: </strong> {holiday}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div>
        {image_urls && (
          <Photos imageUrls={image_urls} />
        )}
      </div>
      <div className='card text-center'>
        <div className='badge badge-primary'>
          電子マネー: {e_money ? '使える' : '不可'}
        </div>
        <div className='badge badge-success'>
          クレジットカード: {credit_card ? '使える' : '不可'}
        </div>
      </div>
    </div>
  );
};

const style = {
  padding: "0.5rem 0.5rem",
};

export default RestDetails;
