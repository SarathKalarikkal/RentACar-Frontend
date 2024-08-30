import React, { useState } from 'react'
import './style.css'
import { Link, useLocation } from 'react-router-dom'
import { HiMenuAlt2 } from "react-icons/hi";

const UserHeader = () => {

  const [theme, setTheme] = useState(true)

const handleTheme =()=>{
 const body =  document.querySelector('body')
 if(body.classList.contains('dark')){
    body.classList.remove('dark')
    body.classList.add('light')
 }else{
    body.classList.remove('light')
    body.classList.add('dark')
 }
   setTheme(!theme)
}

const location = useLocation()
console.log(location.pathname);

const activeLink = (path)=>{
  return location.pathname === path
}

  return (
    <div className='navbar-sec'>
       <nav className="navbar navbar-expand-lg">
  <div className="container">
  <Link className="navbar-brand" to='/'>
     RentACar
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" ><HiMenuAlt2 /></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        {/* <li>
          <i className={theme ? 'bi bi-moon' : 'bi bi-sun'}onClick={handleTheme}></i>
        </li> */}
        <li className="nav-item">
          <Link className={`nav-link ${activeLink('/user') ? 'active' : ''}`} aria-current="page" to={'/user'}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${activeLink('/user/carlist') ? 'active' : ''}`}  to={'/user/carlist'}>Cars</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${activeLink('/user/myrentals') ? 'active' : ''}`} to={'/user/myrentals'}>My Rentals</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${activeLink('/user/contact') ? 'active' : ''}`} to={'/user/contact'}>Contact</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link icon ${activeLink('/user/profile') ? 'active' : ''}`} to={'/user/profile'}><i class="bi bi-person-circle"></i></Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link icon ${activeLink('/user/notification') ? 'active' : ''}`} to={'/user/notification'}><i className="bi bi-bell"></i></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/'}>Logout</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default UserHeader