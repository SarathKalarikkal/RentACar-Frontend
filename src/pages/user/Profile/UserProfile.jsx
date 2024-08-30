import React from 'react'
import "./style.css"
import { useSelector } from 'react-redux'
import { formatDate } from '../../../math/formatDate'

const UserProfile = () => {

const user =  useSelector((state)=>state.user.userInfo)
console.log("user details",user)

const Createdate = user?.updatedAt

const formattedDate = formatDate(Createdate);


  return (
    <>
   <div className="container my-5">
  <div className="row">
    {/* Profile Sidebar */}
    <div className="col-md-4">
      <div className="profile-sidebar">
        <div className="profile-userpic">
          <img
            src="https://via.placeholder.com/150"
            className="img-fluid rounded-circle"
            alt="Profile Picture"
          />
        </div>
        <div className="profile-usertitle">
          <div className="profile-usertitle-name">{user?.name}</div>
          <div className="profile-usertitle-email">{user?.email}</div>
        </div>
        <div className="profile-userbuttons">
          <a href="#" className="btn btn-outline-primary btn-sm">
            Edit Profile
          </a>
          <a href="#" className="btn btn-outline-danger btn-sm">
            Logout
          </a>
        </div>
      </div>
      <div className="user-about">
         <h3>About Me</h3>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa non ex maiores maxime nobis esse repellat repudiandae, quasi quo eius id, velit omnis officiis dolore libero quibusdam saepe, aperiam ad.</p>
      </div>
    </div>
    {/* Profile Content */}
    <div className="col-md-8">
      <div className="profile-content">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">User Information</h5>
            <div className="row">
              <div className="col-md-6">
                <p>
                  <strong>Name:</strong> {user?.name}
                </p>
                <p>
                  <strong>Email:</strong> {user?.email}
                </p>
                <p>
                  <strong>Mobile:</strong> {user?.mobile}
                </p>
              </div>
              <div className="col-md-6">
                <p>
                  <strong>Address:</strong>  {user?.location}
                </p>
                <p>
                  <strong>Role:</strong>  {user?.role}
                </p>
                <p>
                  <strong>Account Created:</strong> {formattedDate}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card mt-4">
          <div className="card-body">
            <h5 className="card-title">Rented Cars</h5>
            <div className="rented-cars">
              <div className="car-item">
                <img src="https://via.placeholder.com/100x60" alt="BMW X5" />
                <div className="car-info">
                  <h6>BMW X5</h6>
                  <p>Status: Active</p>
                </div>
              </div>
              <div className="car-item">
                <img src="https://via.placeholder.com/100x60" alt="Audi Q7" />
                <div className="car-info">
                  <h6>Audi Q7</h6>
                  <p>Status: Returned</p>
                </div>
              </div>
              <div className="car-item">
                <img
                  src="https://via.placeholder.com/100x60"
                  alt="Mercedes GLC"
                />
                <div className="car-info">
                  <h6>Mercedes GLC</h6>
                  <p>Status: Active</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    </>
  )
}

export default UserProfile