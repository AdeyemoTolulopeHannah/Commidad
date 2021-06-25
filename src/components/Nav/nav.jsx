import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

const Navbar = () => {
    return (
        <>
         <div className="nav">
             <div className="logo">
                 <img src="images/logo.png" alt="LOGO" />
                 </div>
                   <nav className='navlink'>
                     <ul>
                         <Link className='link' to ="/shop"> shop</Link>
                         <Link className='link' to="/cart"> cart</Link>
                        
                     </ul>
                 </nav>
                 </div>   
        </>
    )
}

export default Navbar
