import React from 'react'
import './Category.css'

const CategoryButton = ({name,handleTag}) => {
    return (
      <button className='tagbtn' onClick={() => handleTag(name)}>{name}</button>
    )
}

export default CategoryButton
