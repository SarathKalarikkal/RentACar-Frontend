import React from 'react'
import { FaEye } from "react-icons/fa";


const UserCard = ({user}) => {

  return (
   <>
     <div className="col-md-4">
              <div className="user-card">
                <div className="profile-pic">
                  <img src={user?.profilePic} alt="Profile Picture" />
                </div>
                <div className="user-info">
                  <h2 className="name">{user?.name}</h2>
                  <p className="email">{user?.email}</p>
                  <p className="address">{user?.location}</p>
                  <div className='userInfo-btns'>
                  <button className="view-button"><FaEye /> View</button>
                  </div>
                </div>
              </div>
              </div>
   </>
  )
}

export default UserCard