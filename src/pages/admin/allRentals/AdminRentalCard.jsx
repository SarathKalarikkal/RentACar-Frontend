import React from 'react'


const AdminRentalCard = ({reservation}) => {
  return (
    <>
     <div className="col-md-4">
     <div className="reservation-card">
  <img src="https://via.placeholder.com/300x200" alt="Car Photo" />
  <h3>Reservation Details</h3>
  <p>
    <strong>Reservation Done By:</strong> {reservation?.user.name}
  </p>
  <p>
    <strong>Owned By Dealer:</strong> {reservation?.dealer.name}
  </p>
  <p>
    <strong>Rent Per Hour:</strong>{reservation?.car.rentPerhour} 
  </p>
  <a href="#" className="view-button">
    View
  </a>
</div>
    
     </div>
   </>
  )
}

export default AdminRentalCard