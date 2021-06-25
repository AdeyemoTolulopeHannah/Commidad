import React,{useState} from 'react'

const Cart = (props) => {

    const [cartItems, setCartItems]=useState([])
    return (
        <>
        <div className="cotain">
            <h2>cart items</h2>
       
        <div className="cart">

           {cartItems.length === 0 && <div> cart is empty</div>}

        </div>
        {cartItems.map((items) =>{
            <div></div>
        })}
         </div>   
        </>
    )
}

export default Cart
