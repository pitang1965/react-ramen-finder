import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
  return (
    <div className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <Link to='/'>ホーム</Link>
        </li>
        <li>
          <Link to='/about'>本アプリについて</Link>
        </li>
      </ul>
    </div>
  );
};

Navbar.defaultProps = {
  title: '近所のラーメン検索',
  icon: 'fab fa-github',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
