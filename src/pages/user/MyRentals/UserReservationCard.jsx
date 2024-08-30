import React from 'react'
import { formatDate } from '../../../math/formatDate'

const UserReservationCard = ({reservation}) => {

const startDate = formatDate(reservation?.startDate)
const endDate = formatDate(reservation?.endDate)
const updatedDate = formatDate(reservation?.updatedAt)

  return (
    <>
    <div className="col-md-4">
                <div className="rental-img">
                  <img src={reservation?.car.images[0]} alt="" /> 
                </div>
              </div>
              <div className="col-md-8">
                 <div className="rental-card-right">
                    
                    <div className="rental-status">
                     <p>Status :</p>
                     <span>{reservation?.status}</span>
                    </div>

                    <h3>{reservation?.car.make} {reservation?.car.model}</h3>

                    <div className="rented-box">
                       <label>Rental Preiod :</label>
                       <span>{startDate} - {endDate}</span>
                    </div>
                    <div className="rented-box">
                       <label>Total Price :</label>
                       <span>{reservation?.totalPrice} Rs</span>
                    </div>

                    <div className="rented-box-below">
                       
                       <div className="rental-btn">
                          <button className="edit-reservation">Edit</button>
                          <button className="cancel-reservation" >Cancel</button>
                       </div>
                       <p className="updated-status">Last updated on {updatedDate}</p>
                    </div>

                 </div>
              </div>
    </>
  )
}

export default UserReservationCard