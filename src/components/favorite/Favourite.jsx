import React, {useState, useEffect} from 'react'
import Product from '../Product/Product'
import Button from '../../Constants/button/button'
import './favourite.css'
import data from '../../pages/shop/data'
const Favourite = () => {
    const {products} = data
    const [filterProduct, setFilterProduct] = useState([])
    const [toggle, setToggle] = useState(false)

 const   handleToggle =() =>{
        setToggle(!toggle)
    }

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
               <button  onClick={handleToggle} className='button'   pad='.6em 1em' >{toggle ===false? "add to cart" : "sign in to add"}</button>
               <div>
                   
                   
               </div>
              </div>
        
          ))}  
        </div>
        </div>
    )
}

export default Favourite
