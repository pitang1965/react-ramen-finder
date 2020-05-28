import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';

const Photos = ({ imageUrls }) => {
  return (
    <div style={style}>
      {imageUrls.map((url) => <Photo url={url} key={url} />)}
    </div>
  );
};

Photos.prototype = {
  imageUrls: PropTypes.array.isRequired,
};

const style = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Photos;
