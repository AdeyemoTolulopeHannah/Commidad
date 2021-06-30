import React from 'react'
import {Link} from 'react-router-dom'
import {FaFacebookF,FaInstagram,FaTwitter} from 'react-icons/fa'

import './footer.css'
const Footer = () => {
    return (
        <>
            <div className="footerWrapper">
                <div className="footlogo">
                    <img src="images/logo.png" alt="LOGO" />
                </div>

                <div className="links">
                    <h6>quick links</h6>
                <Link className='flink' to ="/signin"> Sign In</Link>
                <Link className='flink' to ="/faq"> FAQ</Link>
                <Link className='flink' to ="/about"> About Us</Link>
                <Link className='flink' to ="/contact"> Contact</Link>
                <Link className='flink' to ="/shop"> Shop</Link>
              
                </div>
                <div className="social">
                    <h6>social</h6>
                    <div className="socialink">
                    <a href="#"><FaFacebookF className="socialicon"/></a>
                    <a href="#"><FaTwitter className="socialicon"/></a>
                    <a href="#"><FaInstagram className="socialicon"/></a></div>
                </div>
            </div>
        </>
    )
}

export default Footer
