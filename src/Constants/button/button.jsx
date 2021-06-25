import React from 'react'
import './button.css'

const Button = ({color,text,pad}) => {
    return (
        <>
           <button style={{backgroundColor:color, padding:pad}}> 
            {text}
            </button> 
        </>
    )
}
Button.defaultProps ={
    color:'rgb(209, 133, 10)'
}
export default Button
