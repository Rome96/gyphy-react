import React, {useState} from 'react'
import GifGrid from './components/GifGrid';
import AddCategory from './components/AddCategory'

const GifExpertApp = ({ defaulCategories= ['Naruto'] }) => {
  const [categories, setCategories] = useState(defaulCategories);

  // const handleAdd = () => {
  //   setCategories([
  //     'Turiano',
  //     ...categories,
  //   ])
  // }

  return (
    <>
      <h2>Gif Expert App</h2>
      <AddCategory setCategories={setCategories}/>
      <hr />
      <ol>
        {categories.map((category, i) => (
          <GifGrid
            key={i}
            category={category}
          />
        ))}
      </ol>
    </>
  );
}

export default GifExpertApp
