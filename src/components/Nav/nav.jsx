import React,{useState} from 'react'
import { Link } from 'react-router-dom'

import {FaBars,FaShoppingCart} from 'react-icons/fa'

import './nav.css'


const Navbar = (props) => {
 const   { countCartItems} =props
 const [show, setShow] = useState(false)
   
    return (
        <>
         <div className="nav">
             <div className="logo">
                 
             <Link  to ="/">  <img src="images/logo.png" alt="LOGO" /></Link>
                
                 </div>
                   <nav className={show === true? "hidden": " navlink"} >

                         <Link className='link' to ="/shop"> shop</Link>
                        
                         
                   
                     
                
                 <Link className='link' to="/cart"> <FaShoppingCart className='cart'/> {' '}
                 {countCartItems ?(
                     <button className ='badge'>{countCartItems}</button>
                 ):(' ')}
                         
                         
                         </Link>
                        
                       
                          </nav>
                           <FaBars className='navbtn' onClick={() =>setShow(!show)}></FaBars>
                 </div>   
        </>
    )
}

export default Navbar
