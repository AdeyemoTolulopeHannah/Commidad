import React from 'react'


const Login =() =>{
    return (
        <>
         <section className='showcase login'>
              <div className='overlay'>
               <form className='form'>
                   <input type='email' id='email' placeholder='your email@example.com' required/>
                   <input type='password' id='password' placeholder='your password' required/>
                   <button type='submit'>Log In</button>

               </form>
              </div>
         </section>
        </>

    )
}
export default Login