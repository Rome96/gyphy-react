import React, { useState } from 'react'
// import PropTypes from 'prop-types'

const AddCategory = props => {
  const [value, setValue] = useState('')

  const handleInputChange = e => {
    const texInput = e.target.value;
    setValue(texInput);
  }

  const handleSubmit = e => {
    e.preventDefault()
  }

  return <form onSubmit={handleSubmit}>
    <input
      type='value'
      placeholder='Search...'
      value={value}
      onChange={handleInputChange}
    />
  </form>
}

AddCategory.propTypes = {

}

export default AddCategory
