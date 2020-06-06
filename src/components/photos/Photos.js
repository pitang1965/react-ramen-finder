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
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 1fr))",
  gridGap: "1rem",
  justifyContent: "center",
  alignItems: "center",
  margin: "auto",
  padding: "0.5rem 0.5rem",
};

export default Photos;
