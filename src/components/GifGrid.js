import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import GifGridItem from './GifGridItem'
import { getGifs } from '../helpers/getGifs'

const GifGrid = ({category}) => {
  const [images, setImages] = useState([])

  useEffect(() => {
    _getGifs()
  }, [category]);

  const _getGifs = async () => {
    try {
      const imgs = await getGifs(category)
      setImages(imgs)
    } catch (error) {
      console.log('error en la peticon getGifs', error)
    }
  }

  console.log(images)
  return <>
    <h3>{category}</h3>
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
