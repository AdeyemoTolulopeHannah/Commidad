import React from 'react'
import Banner from '../../components/Banner/Banner'
import Hour from '../../components/hourOfOperation/Hour'

import Favourite from '../../components/favorite/Favourite'


const Landing = (props) => {
    const {onAdd}= props
    return (
        <>
           
           <Banner title='delicious food dish' image ='images/4.jpg'/> 
           
           <Favourite onAdd={onAdd}/>
           <Hour/>
           
        </>
    )
}

export default Landing
