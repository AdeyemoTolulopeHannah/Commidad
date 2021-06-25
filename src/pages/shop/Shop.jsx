import React,{useState} from 'react'
 import data from './data'
import Favourite from '../../components/favorite/Favourite'
import MainProduct from '../../components/MainProduct'
import Cart from '../../components/Cart'
const Shop = (props) => {
    const {products} = data
    const [cartItems, setCartItems]=useState([])
    const onAdd =(product) => {
        const exist = cartItems.find((x) => x.id ===product.id);
        if(exist){
            setCartItems(
                cartItems.map((x) =>
                x.id === product.id?{...exist, qty:exist.qty+1}:x
                )
            )
        } else{
            setCartItems([...cartItems,{...product,qty:1}])
        }
    }
    return (
        <div>
           
           <MainProduct onAdd={onAdd} products={products}/>
           <Cart onAdd={onAdd} cartItems={cartItems}/>
        </div>
    )
}

export default Shop
