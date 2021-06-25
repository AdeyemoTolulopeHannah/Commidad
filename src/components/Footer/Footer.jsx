import React from 'react'
import {Link} from 'react-router-dom'
import {Facebookfa} from 'react-icons/fa'

import './footer.css'
const Footer = () => {
    return (
        <>
            <div className="footerWrapper">
                <div className="logo">
                    <img src="images/logo.png" alt="LOGO" />
                </div>

                <div className="links">
                    <h6>quick links</h6>
                <Link className='link' to ="/signin"> Sign In</Link>
                <Link className='link' to ="/faq"> FAQ</Link>
                <Link className='link' to ="/about"> About Us</Link>
                <Link className='link' to ="/contact"> Contact</Link>
                <Link className='link' to ="/shop"> Shop</Link>
              
                </div>
                <div className="social">
                    <h6>social</h6>
                    <a href="#">face</a>
                    <a href="#">twitter</a>
                    <a href="#">instagram</a>
                </div>
            </div>
        </>
    )
}

export default Footer
