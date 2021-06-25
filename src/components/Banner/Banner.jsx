import React from 'react'
import Button from '../../Constants/button/button'
import './banner.css'

const Banner = ({image,title}) => {
    return (
        <>
            <div className="banner"  style={{backgroundImage:{image}}}>
               
               
               
               <div className="content">
                   <h3>{title}</h3>
               <Button  className='button'  color= "rgb(209, 133, 10)" text="grab food" pad=".8em 3em"/>
               </div>
               
            </div>
        </>
    )
}

export default Banner
