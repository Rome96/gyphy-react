import React from 'react'
import PropTypes from 'prop-types'
import GifGridItem from './GifGridItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

const GifGrid = ({category}) => {
  const {loading, data:images} = useFetchGifs(category)
  return <>
    <h3>{category}</h3>
      { loading && <p>Cargando...</p> }
      <div className='card-grid'>
        {images.map(img => (
          <GifGridItem
            key={img.id}
            {...img}
          />
        ))}
      </div>
  </>
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}

export default GifGrid
