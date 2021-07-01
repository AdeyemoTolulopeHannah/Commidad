import React from 'react'
import "./cart.css"

const Cart = (props) => {
    const {cartItems, onAdd,onRemove} = props
    const itemsPrice = cartItems.reduce((a,c) => a+c.price * c.qty,0)
    const shippingPrice = itemsPrice <500 ? 17:50;
    const totalPrice = itemsPrice  +shippingPrice;
 
 
    return (
        <>
       <div className="cartWrapper">
           <div>{cartItems.length ==0 && <div>cart is empty</div> }</div>
           {cartItems.map((item) =>(
               <div key ={item.id} className='cartcontain'>
                   <div className='cartname'>{item.name}</div>
                   <div className='cartimage'> <img src={item.image} alt={item.name} /></div>
              
               <div className='cartbtn'>
                   <button onClick ={() => onAdd(item)}>+</button>
                   <button onClick ={() => onRemove(item)}>-</button>
               </div>
               <div className='cartprice'>
                   {item.qty} x ${item.price}
               </div>
                </div>
           ))}
           
           {cartItems.length !== 0 &&(
               <>
               <i className='line'></i>
               <div className="row">
                   <div>items price</div>
                   <div className='cprice'> ${itemsPrice.toFixed(2)}</div>
               </div>
               <div className="row">
                   <div>delivery price</div>
                   <div className='cprice'> ${shippingPrice.toFixed(2)}</div>
               </div>
               <div className="row">
                   <div> total price</div>
                   <div className='total'> ${totalPrice.toFixed(2)}</div>
               </div>
                <div className="checkbtn">
               <button>checkout</button>
           </div>
               </>
           )}
          
        
        </div>
        </>
    )
}

export default Cart
