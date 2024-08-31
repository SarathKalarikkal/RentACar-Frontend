import React from 'react'
import "./style.css"
import { BiSolidDashboard } from "react-icons/bi";

const AdminHomePage = () => {
  return (
    <>
    <div className='d-flex flex-column w-100 '>
      <div className="admin-top">
        <h5 ><BiSolidDashboard />DASHBOARD</h5>
      </div>
      <div className="admin-bottom">
           <div className="container">
          <div className="row">

         
          </div>
           </div>
      </div>
    </div>
  </>
  )
}

export default AdminHomePage