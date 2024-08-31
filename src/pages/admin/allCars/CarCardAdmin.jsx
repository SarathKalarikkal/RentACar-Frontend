import React from 'react'
import "./style.css"

const CarCardAdmin = ({car}) => {
  return (
    <>
    <div className="col-md-3">
    <div className="car-card">
  <img src={car?.images[0]} alt="Car Photo" />
  <h3>{car?.make}</h3>

  <p>
    <strong>Car Model:</strong> {car?.name}
  </p>
  <p>
    <strong>Rent Per Hour:</strong>{car?.rentPerHour}.Rs
  </p>
  <a href="#" className="view-button">
    View
  </a>
</div>

    </div>
  </>
  )
}

export default CarCardAdmin