import React, { useEffect } from "react";
import "./style.css";
import axiosInstance from "../../../config/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import UserReservationCard from "./UserReservationCard";
import { setUserReservationList } from "../../../Redux/features/reservationSlice";

function MyRentals() {

  const {userReservationList } = useSelector((state)=>state.reservation)
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
              userReservationList?.map((reservation)=>{
                return (
                  <UserReservationCard key={reservation._id} reservation={reservation} />
                )
              })
             }
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MyRentals;
