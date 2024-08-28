import React from 'react'
import "./style.css"

const Inventory = () => {
  return (
    <>
    <section className="inventory-header">
        <div className="container">
          <h1>Inventory</h1>
        </div>
      </section>

      <section className='inventory py-5'>
          <div className="container">
          <div className="row">
             <div className="col-md-6">
             <div className="car-box-list-view">
              {/* <div className="list-rating-wrap">
      <div className="list-rating">
        <span className="rating me-2">
          <i className="bi bi-star-fill" /> 4.8
        </span>
        <span className="available">Available</span>
      </div>
      <i className="bi bi-heart-fill heart" />
    </div> */}
              <div className="left">
                <img src={'../src/assets/car.png'} alt="" />
              </div>
              <div className="right inventory">
                <div className="car-list-content ">
                  <h6 className="title">FORD FOCUS</h6>
                  <h5 className="head">1.5 Eco Blue ST-line style 115c</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum ducimus illo sapiente blanditiis vitae consequatur
                    iste expedita animi reiciendis veniam.
                  </p>
                </div>
                <div className="list-bottom">
                  <div className="deatail">
                    <div className="model-type">
                      <img src={"../src/assets/car-model.png"} alt="" />
                      <span>Hatchback</span>
                    </div>
                    <div className="model-type">
                      <img src={"../src/assets/gear.png"} alt="" />
                      <span>Manual</span>
                    </div>
                    <div className="model-type">
                      <img src={"../src/assets/speed.png"} alt="" />
                      <span>Diesel</span>
                    </div>
                    <div className="model-type">
                      <img src={"../src/assets/seat.png"} alt="" />
                      <span>5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
             </div>
             <div className="col-md-6">
             <div className="car-box-list-view">
              {/* <div className="list-rating-wrap">
      <div className="list-rating">
        <span className="rating me-2">
          <i className="bi bi-star-fill" /> 4.8
        </span>
        <span className="available">Available</span>
      </div>
      <i className="bi bi-heart-fill heart" />
    </div> */}
              <div className="left">
                <img src={'../src/assets/car.png'} alt="" />
              </div>
              <div className="right inventory">
                <div className="car-list-content ">
                  <h6 className="title">FORD FOCUS</h6>
                  <h5 className="head">1.5 Eco Blue ST-line style 115c</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum ducimus illo sapiente blanditiis vitae consequatur
                    iste expedita animi reiciendis veniam.
                  </p>
                </div>
                <div className="list-bottom">
                  <div className="deatail">
                    <div className="model-type">
                      <img src={"../src/assets/car-model.png"} alt="" />
                      <span>Hatchback</span>
                    </div>
                    <div className="model-type">
                      <img src={"../src/assets/gear.png"} alt="" />
                      <span>Manual</span>
                    </div>
                    <div className="model-type">
                      <img src={"../src/assets/speed.png"} alt="" />
                      <span>Diesel</span>
                    </div>
                    <div className="model-type">
                      <img src={"../src/assets/seat.png"} alt="" />
                      <span>5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
             </div>
          </div>
          </div>
      </section>
    </>
  )
}

export default Inventory