import React, {useState} from 'react'
import{BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Navbar from './components/Nav/nav'
import Landing from './pages/Landing/landing'
import Cart from './components/Cart/Cart'
import data from './pages/shop/data'
import MainProduct from './components/MainProduct/MainProduct'

 const App = () => {
  const {products} = data
  const [cartItems, setCartItems] = useState([]);
  
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
   const onRemove =(product) =>{
     const exist = cartItems.find((x) => x.id === product.id);
     if (exist.qty ===1){
       setCartItems(cartItems.filter((x) => x.id !== product.id))
     } else {
       setCartItems(
         cartItems.map((x) => x.id === product.id? {...exist, qty:exist.qty-1}:x)
       )
     }
   }
  return (
    <div>
     
      <Router>
        <Navbar cartItems={cartItems}  countCartItems ={cartItems.length}/>
        <Switch>
        <Route exact path='/'>
          <Landing onAdd={onAdd}/>
        </Route>
        <Route exact path='/shop'>
          <MainProduct onAdd={onAdd} products={products}/>
        </Route>
        <Route exact path='/cart'>
          <Cart  onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
        </Route>
       
        </Switch>
        <Footer/>
      </Router>
     
    </div>
  )
}

 export default App