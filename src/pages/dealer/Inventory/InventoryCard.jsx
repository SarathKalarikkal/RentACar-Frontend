import React from 'react'
import { Link } from 'react-router-dom'

const InventoryCard = ({car, handleDeleteCar}) => {



  return (
    <>
    <div className="col-md-6" key={car._id}>
                  <div className="car-box-list-view">
                    <div className="left">
                      <img src={car.images[0]} alt={car.make} />
                    </div>
                    <div className="right inventory">
                      <div className="car-list-content ">
                        <h6 className="title">{car.make}</h6>
                        <h5 className="head">{car.name}</h5>
                        <p>{car.description}</p>
                      </div>
                      <div className="inventory-btns">
                        <button className='edit-btn'>
                          <Link to={`/dealer/car/edit/${car._id}`}>Edit</Link>
                        </button>
                        <button className='delete-btn' onClick={()=>handleDeleteCar(car._id)}>Delete</button>
                      </div>
                    </div>
                  </div>
                </div>
    </>
  )
}

export default InventoryCard