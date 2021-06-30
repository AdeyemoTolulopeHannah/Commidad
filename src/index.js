import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CartState from './components/context/CartState'


ReactDOM.render(
 <CartState>
  <App />
  </CartState>
  ,
  document.getElementById('root')
  
  
);

