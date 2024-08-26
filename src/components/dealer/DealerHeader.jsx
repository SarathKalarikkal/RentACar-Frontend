import React, { useState } from 'react'
import './style.css'
import { Link, useLocation } from 'react-router-dom'

const DealerHeader = () => {

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
 <a className="navbar-brand" href="#">
  RentACar
 </a>
 <button
   className="navbar-toggler"
   type="button"
   data-bs-toggle="collapse"
   data-bs-target="#navbarSupportedContent"
   aria-controls="navbarSupportedContent"
   aria-expanded="false"
   aria-label="Toggle navigation"
 >
   <span className="navbar-toggler-icon" />
 </button>
 <div className="collapse navbar-collapse" id="navbarSupportedContent">
   <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
     <li>
       <i className={theme ? 'bi bi-moon' : 'bi bi-sun'}onClick={handleTheme}></i>
     </li>
     <li className="nav-item">
       <Link className={`nav-link ${activeLink('/dealer') ? 'active' : ''}`} aria-current="page" to={'/dealer'}>Home</Link>
     </li>
     <li className="nav-item">
       <Link className={`nav-link ${activeLink('/dealer/carlist') ? 'active' : ''}`} to={'/dealer/carlist'}>Cars</Link>
     </li>
     <li className="nav-item">
       <Link className={`nav-link ${activeLink('/dealer/inventory') ? 'active' : ''}`} to={'/dealer/inventory'}>Inventory</Link>
     </li>
     <li className="nav-item">
       <Link className={`nav-link ${activeLink('/dealer/addcar') ? 'active' : ''}`} to={'/dealer/addcar'}>Add Car</Link>
     </li>
     <li className="nav-item">
       <Link className={`nav-link ${activeLink('/dealer/managerentals') ? 'active' : ''}`} to={'/dealer/managerentals'}>Manage Rentals</Link>
     </li>
     <li className="nav-item">
       <Link className={`nav-link ${activeLink('/dealer/profile') ? 'active' : ''}`} to={'/dealer/profile'}><i class="bi bi-person-circle"></i></Link>
     </li>
     <li className="nav-item">
       <Link className={`nav-link ${activeLink('/dealer/notification') ? 'active' : ''}`} to={'/dealer/notification'}><i className="bi bi-bell"></i></Link>
     </li>
     <li className="nav-item">
       <Link className={`nav-link ${activeLink('/') ? 'active' : ''}`} to={'/'}>Logout</Link>
     </li>
     
   </ul>
 </div>
</div>
</nav>

 </div>
  )
}

export default DealerHeader