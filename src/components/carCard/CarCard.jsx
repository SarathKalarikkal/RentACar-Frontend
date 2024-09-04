import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const CarCard = ({car}) => {



  return (
          <Link to={`/user/car-detail/${car?._id}`}>
              <div className="car-box">
                <div className="top">
                  <div className="top-left">
                    <div className="rating">
                      <i className="bi bi-star-fill" />
                      <span>4.8</span>
                    </div>
          
                    <span className={car.availableStatus === 'Available' ? 'available' : 'not-available'}>{car.availableStatus}</span>
              
                  </div>
                  <i className="bi bi-heart-fill heart" />
                </div>
                <div className="mid">
                  <img src={car?.images[0]} alt="" />
                </div>
                <div className="bottom">
                  <div className="model">
                    <span>{car?.make}</span>
                    <div>
                      <p>{car?.name}</p>
                      <p className="rate">
                      {car?.rentPerHour} <span>/hr</span>
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="deatail">
                    <div className="model-type">
                      <img src={'../src/assets/car-model.png'} alt="" />
                      <span>{car.type}</span>
                    </div>
                    <div className="model-type">
                      <img src={'../src/assets/gear.png'} alt="" />
                      <span>{car?.transmission}</span>
                    </div>
                    <div className="model-type">
                      <img src={'../src/assets/speed.png'} alt="" />
                      <span>{car?.fuelType}</span>
                    </div>
                    <div className="model-type">
                      <img src={"../src/assets/seat.png"} alt="" />
                      <span>{car?.seating}</span>
                    </div>
                  </div>
                </div>
              </div>
              </Link>
  )
}

export default CarCard