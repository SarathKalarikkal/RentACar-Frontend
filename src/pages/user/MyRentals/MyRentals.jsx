import React, { useEffect } from "react";
import "./style.css";
import axiosInstance from "../../../config/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import UserReservationCard from "./UserReservationCard";

import { deleteUserReservation, setUserReservationList } from "../../../Redux/features/reservationSlice";
import { Link } from "react-router-dom";

function MyRentals() {

  const userReservationList = useSelector((state) => state.reservation.userReservationList);
  const dispatch = useDispatch()

  const fetchReservation = async()=>{
    const response = await axiosInstance.get('/reservation/user/reservations')
    const reservationData = response.data.data
    console.log("reservation",reservationData);
    dispatch(setUserReservationList(reservationData))
    set
  }

useEffect(()=>{
   fetchReservation()
},[])


const handleDelete = async (reservationId) => {
  try {
    // Send delete request to the server
    const response = await axiosInstance.delete(`/reservation/reservation/${reservationId}`);
    
    if (response.status === 200) {
      // Dispatch delete action to Redux store
      dispatch(deleteUserReservation(reservationId));
    } else {
      console.error('Failed to delete reservation:', response.statusText);
    }
  } catch (error) {
    console.error('Failed to delete reservation:', error);
  }
};

  return (
    <>
      <section className="myrentals-header">
        <div className="container">
          <h1>My Rentals</h1>
        </div>
      </section>

      <section className="reserved-car">
        <div className="container ">
          <div className="rental-card">
            <div className="row g-0">
              {
                userReservationList.length > 0 ? (
                  userReservationList.map((reservation) => (
                    <UserReservationCard
                      key={reservation._id}
                      reservation={reservation}
                      onDelete={() => handleDelete(reservation._id)}
                    />
                  ))
                ) : (
                  <div>You don't Reserved a car yet? <Link to={'/user/carlist'}>Book your fav car.</Link></div>
                )
              }
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MyRentals;
