import React,{useState} from 'react'
 import data from './data'
import MainProduct from '../../components/MainProduct/MainProduct'

const Shop = (props) => {
    const {products} = data
    return (
        <div>
           
           <MainProduct  products={products}/>
          
        </div>
    )
}

export default Shop
