import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const CarCard = () => {
  return (
          <Link to={'/user/car-detail/:id'}>
              <div className="car-box">
                <div className="top">
                  <div className="top-left">
                    <div className="rating">
                      <i className="bi bi-star-fill" />
                      <span>4.8</span>
                    </div>
                    <span className="available">Available</span>
                  </div>
                  <i className="bi bi-heart-fill heart" />
                </div>
                <div className="mid">
                  <img src={'../src/assets/car.png'} alt="" />
                </div>
                <div className="bottom">
                  <div className="model">
                    <span>FORD FOCUS</span>
                    <div>
                      <p>1.5 Eco Blue ST-line style 115c</p>
                      <p className="rate">
                        1200 <span>/hr</span>
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="deatail">
                    <div className="model-type">
                      <img src={'../src/assets/car-model.png'} alt="" />
                      <span>Hatchback</span>
                    </div>
                    <div className="model-type">
                      <img src={'../src/assets/gear.png'} alt="" />
                      <span>Manual</span>
                    </div>
                    <div className="model-type">
                      <img src={'../src/assets/speed.png'} alt="" />
                      <span>Diesel</span>
                    </div>
                    <div className="model-type">
                      <img src={"../src/assets/seat.png"} alt="" />
                      <span>5</span>
                    </div>
                  </div>
                </div>
              </div>
              </Link>
  )
}

export default CarCard