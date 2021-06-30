import React, {useState, useEffect,useContext} from 'react'

import './favourite.css'
import CartContext from '../context/CartContext'
import data from '../../pages/shop/data'
const Favourite = (props) => {
    const {products} = data
    const {onAdd} = props
    const {addToCart} = useContext(CartContext)
    const [filterProduct, setFilterProduct] = useState([])
  

useEffect(
    () =>{
        setFilterProduct(products.filter(product =>product.favourite === true))
    }
)
    return (
        <div className="productWrapper">
            <h4>customer <br /> favourites</h4>
          
        <div className='productContain'>
            
          {filterProduct.map(product =>(
              <div className="product" key ={product.id}>
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
               <div className="price">
                   ${product.price}
               </div>
               <button className='favourbtn' onClick ={() => onAdd(product)}      > add to cart</button>
               <div>
                   
                   
               </div>
              </div>
        
          ))}  
        </div>
        </div>

    )
}

export default Favourite
