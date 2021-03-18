import React from 'react'


const SignUp =() =>{
    return (
        <>
        <section className='showcase login'>
             <div className='overlay'>
              <form className='form'>
                  <input type='text' placeholder='Username' id='username' required/>
                  <input type='email' id='email' placeholder='your email@example.com' required/>
                  <input type='password' id='password' placeholder=' Enter your password' required/>
                  <input type='password' id='password2' placeholder=' Confirm your password' required/>
                  <button type='submit'>Create Your Account</button>

              </form>
             </div>
        </section>
       </>
    )
}
export default SignUp