import React from 'react'
import { FaEye } from "react-icons/fa";


const DealerCard = ({dealer}) => {
  return (
    <>
    <div className="col-md-4">
              <div className="user-card">
                <div className="profile-pic">
                  <img src={dealer?.profilePic} alt="Profile Picture" />
                </div>
                <div className="user-info">
                  <h2 className="name">{dealer?.name}</h2>
                  <p className="email">{dealer?.email}</p>
                  <p className="address">{dealer?.location}</p>
                  <div className='userInfo-btns'>
                  <button className="view-button"><FaEye /> View</button>
                  </div>
                </div>
              </div>
              </div>
    </>
  )
}

export default DealerCard