import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='signup-wrapper'>
      <form >
         <h2>Signup</h2>
         <div className="form-grp">
            <div className="inp-grp">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name"  placeholder='Enter your name'/>
            </div>
            <div className="inp-grp">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email"  placeholder='Enter your email'/>
            </div>
            <div className="inp-grp">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" id="password"  placeholder='Enter a password'/>
            </div>
            <div className="inp-grp role">
              <label htmlFor="role">Role</label>

             <div className="rol-wrap">
               <input type="radio" name="role" id="user" value="user"  />
               <label htmlFor="user">User</label>
             </div>
             <div className="rol-wrap">
               <input type="radio" name="role" id="dealer" value="dealer"  />
               <label htmlFor="dealer">Dealer</label>
             </div>
             <div className="rol-wrap">
               <input type="radio" name="role" id="admin" value="admin"  />
               <label htmlFor="admin">Admin</label>
             </div>
              
            </div>
            <button type='submit'>Signup</button>
         </div>
         <p>Already a memeber ?<Link to={'/common/login'}>Login</Link></p>
      </form>
    </div>
  )
}

export default Signup