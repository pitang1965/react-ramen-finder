import React, { Fragment } from 'react';
import Search from '../restaurants/Search';
import Restaurants from '../restaurants/Restaurants';

const Home = () => (
  <Fragment>
    <Search />
    <Restaurants />
  </Fragment>
);

export default Home;
