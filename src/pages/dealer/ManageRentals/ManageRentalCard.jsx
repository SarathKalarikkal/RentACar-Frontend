import React from 'react'
import { formatDate } from '../../../math/formatDate'

const ManageRentalCard = ({reservation}) => {

const startDate = formatDate(reservation?.startDate)
const endDate = formatDate(reservation?.endDate)

  return (
    <>
     <div className="col-md-6">
             <div className="rent-card">
                 <div className="rent-left">
                   <img src={reservation?.car.images[0]}  alt="" className='img-fluid' />
                 </div>
                 <div className="rent-right">
                   <h3>{reservation?.car.make} {reservation?.car.model}</h3>
                   <p>Rented By : <span>{reservation?.user.name}</span></p>
                   <p>Email : <span>{reservation?.user.email}</span></p>
                   <p>Start Date : <span>{startDate}</span></p>
                   <p>End Date : <span>{endDate}</span></p>
                   <div className="rent-btns">
                      <button className='approve'>Approve</button>
                      <button className='reject'>Reject</button>
                   </div>

                   <span className='re-status-pending'>{reservation?.status}</span>
                 </div>
             </div>
          </div>
    </>
  )
}

export default ManageRentalCard