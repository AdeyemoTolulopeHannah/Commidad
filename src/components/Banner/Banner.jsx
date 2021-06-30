import React from 'react'
import {Link} from 'react-router-dom'
import Button from '../../Constants/button/button'
import './banner.css'

const Banner = ({image,title}) => {
    return (
        <>
            <div className="banner"  style={{backgroundImage:{image}}}>
               
               
               
               <div className="content">
                   <h3>{title}</h3>
                   <Link className='bannerbtn' to='/shop'>grab food </Link>
              
               </div>
               
            </div>
        </>
    )
}

export default Banner
