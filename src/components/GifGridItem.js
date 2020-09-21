import React from 'react'
import PropTypes from 'prop-types'

const GifGridItem = props => {
  const { urlImg, title } = props;
  return (
    <div>
      <h4>{title}</h4>
      <img src={urlImg} alt={title} />
    </div>
  );
};

GifGridItem.propTypes = {
  urlImg: PropTypes.string.isRequired
};

export default GifGridItem
