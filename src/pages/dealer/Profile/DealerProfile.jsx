import React from 'react'
import './style.css'
import { useSelector } from 'react-redux'
import { formatDate } from '../../../math/formatDate'

const DealerProfile = () => {

const {userInfo} = useSelector((state)=>state.user)
console.log(userInfo)


const updatedAt = formatDate(userInfo?.updatedAt)

  return (
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
            <div className="profile-usertitle-name">{userInfo?.name}</div>
            <div className="profile-usertitle-email">{userInfo?.email}</div>
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
                    <strong>Name:</strong> {userInfo?.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {userInfo?.email}
                  </p>
                  <p>
                    <strong>Mobile:</strong> {userInfo?.phone}
                  </p>
                </div>
                <div className="col-md-6">
                  <p>
                    <strong>Address:</strong> {userInfo?.location}
                  </p>
                  <p>
                    <strong>Role:</strong> Dealer
                  </p>
                  <p>
                    <strong>Account Created:</strong> {updatedAt}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card mt-4">
            <div className="card-body">
              <h5 className="card-title">Owned Cars</h5>
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
  


  )
}

export default DealerProfile