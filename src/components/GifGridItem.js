import React from 'react'
import PropTypes from 'prop-types'

const GifGridItem = props => {
  const { urlImg, title } = props;
  return (
    <div className="card animate__animated animate__backInLeft">
      <h4>{title}</h4>
      <img src={urlImg} alt={title} />
    </div>
  );
};

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  urlImg: PropTypes.string.isRequired,
};

export default GifGridItem
