import React from 'react'
import Button from '../../Constants/button/button'
import './hour.css'
const Hour = () => {
    return (
        <div className='hourWrapper'>
           <div className="wrap">
               <h5>hours of operation</h5>
               <h6>mon-fri</h6>
               <p>10:00am - 1:00pm</p>
               <p>4:00pm - 10:30pm</p>
               <div className="sat">
                   <h6>sat</h6>
                   <p>3:00pm - 10:30pm</p>
               </div>
                  <h6>sun</h6>
                  <p className='add'>we are closed</p>
                  <Button pad='1em 2em 1em 1em'   text='make a reservation'/>
           </div>
           <div className="wrap">
               <div className="contact">
                   <h5>drop us a line</h5>
               <p>Dont be shy.Let us know if you have any questions!</p>
               <Button text='contact us' pad='.7em 1em'/>
               </div>
               
               <div className="new">
                   <h5>our newsletter</h5>
                   <p>Dialogue is an essential part of any script</p>
                   <form action="">
                       <label htmlFor="">
                       <input type="text" placeholder='first name'/>
                       <input type="text" placeholder='last name'/>
                       <input type="email" placeholder='email name'/>
                       </label>
                       <Button text='contact us' pad='.7em 3em'/>

                   </form>
               </div>
           </div>
        </div>
    )
}

export default Hour
