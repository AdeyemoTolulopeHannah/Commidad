import React from 'react'
import image5 from '../asset/image5.jpg'
import image3 from '../asset/image3.jpg'
import image4 from '../asset/image4.jpg'


const Destination = ()=>{
    return(
  <>
  <section className='grid'>
  <h3> we are currently in 70 countries!</h3>
  
  <div className='grid-image'>
     <div>
          <img src={image3}/>
          <h4>Fly to Nigeria</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
     </div>
  
     <div>
          <img src={image5}/>
          <h4>Experience Ghana</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
     </div>
  
     <div>
          <img src={image4}/>
          <h4>Enjoy China</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
     </div>
     </div>
  </section>
  </>
    )
}
export default Destination
