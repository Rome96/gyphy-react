import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import GifGridItem from './GifGridItem'

const GifGrid = ({category}) => {
  const [images, setImages] = useState([])

  useEffect(() => {
    getGifs()
  }, [])

  const getGifs = async () => {
    const host = `https://api.giphy.com/v1/gifs/search?q=naruto&limit=10&api_key=fvs9AwDk1cJlHvKtIvF73Ar2ncHRisep`;
    const res =  await fetch(host);
    const { data } = await res.json();
    const gifs = data.map(img => {
      return {
        id: img.id,
        title: img.title,
        urlImg: img.images?.downsized_medium.url,
      };
    })
    setImages(gifs);
  }

  return (
    <>
      <h3>{category}</h3>
        {images.map(img => (
          <GifGridItem
            key={img.id}
            {...img}
          />
        ))}
    </>
  );
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}

export default GifGrid
