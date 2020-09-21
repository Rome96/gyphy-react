import React from 'react'
import PropTypes from 'prop-types'
import GifGridItem from './GifGridItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

const GifGrid = ({category}) => {
  const {loading, data:images} = useFetchGifs(category)
  return <>
    <p className="title__category animate__animated animate__backInDown animate__delay-1s">{category}</p>
      { loading && <p className="animate__animated animate__flash">Cargando...</p> }
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
