import React, {useState, useEffect} from 'react'
import Button from '../../Constants/button/button'
import  './product.css'
const Product = (props) => {
    const {product,onAdd} = props



    return (
        <>
     

<div className="produ">
               <img src={product.image} alt={product.name} />
               <h3>{product.name}</h3>
               <div className="price">
                   ${product.price}
               </div>
               <div>
                   <button onClick={onAdd}>add to cart</button>
               </div>
               </div>

           
        </>
    )
}

export default Product
