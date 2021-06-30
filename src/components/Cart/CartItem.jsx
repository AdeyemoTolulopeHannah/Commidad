import React,{useContext,useState} from 'react'
import CartContext from './context/CartContext'
import formatCurrency from "format-currency"

const CartItem = ({item}) => {
    const [cartItems, setCartItems] = useState([]);
  // const {removeItem} =useContext(CartContext);
   // let opts ={format:"%s%v" , symbol: "£"};
   const onAdd = (product)=>{
       const exist = cartItems.find((x) =>x.id === product.id);
       if (exist){
           setCartItems(
               cartItems.map((x) =>
               x.id === product.id?{...exist,qty:exist.qty+1}: x)
           );
       } else{
           setCartItems([...cartItems,{...product, qty: 1}])
       }
   }
    return ({/*
        <div>
            <li className='cartitem'>
             <img src={item.image} alt={item.name} />
             <div>
                 {item.name}
                 {formatCurrency(`${item.price}`,opts)}
             </div>
             <button onClick={() => removeItem(item._id)}> remove</button>
            </li>
        </div>*/}
    )
}

export default CartItem
