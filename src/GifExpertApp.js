import React, {useState} from 'react'
// import PropTypes from 'prop-types'

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Death note', 'Naruto', 'Dragon ball', 'One'])

  const handleAdd = () => {
    setCategories([
      'Turiano',
      ...categories,
    ])
  }
  return (
    <>
      <h2>Gif Expert App</h2>
      <hr />
      <button onClick={handleAdd}>Add</button>
      <ol>
        {categories.map((category, i) => (
          <li key={i}>{category}</li>
        ))}
      </ol>
    </>
  );
}

GifExpertApp.propTypes = {

}

export default GifExpertApp
