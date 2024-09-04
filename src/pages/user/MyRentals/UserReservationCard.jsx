import React, { useState } from 'react';
import { formatDate } from '../../../math/formatDate';
import ReservationForm from '../../../components/ReservationForm/ReservationForm';
import axiosInstance from '../../../config/axiosInstance';
import toast, { Toaster } from 'react-hot-toast';
import ReservationUpdateForm from '../../../components/user/ReservationUpdateForm';



const UserReservationCard = ({ reservation, onDelete  }) => {
    const startDate = formatDate(reservation?.startDate);
    const endDate = formatDate(reservation?.endDate);
    const updatedDate = formatDate(reservation?.updatedAt);

    console.log("sadsadasdasd",reservation?.startDate);
    

    const [formActive, setFormActive] = useState(false);

    const editHandler = () => {
        setFormActive(true);
    };

    const closeForm = () => {
        setFormActive(false);
    };


// const cancelReservation =async()=>{
//    const response = await axiosInstance.delete(`/reservation/reservation/${reservation?._id}`)
//    toast.success(response.data.message)
// }



    return (
        <>
            <div className="col-md-12">
               <Toaster />
                <div className="rent-card-long mb-3 row">
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
                            <h3>{reservation?.car?.make } {reservation?.car?.model}</h3>
                            <div className="rented-box">
                                <label>Rental Period :</label>
                                <span>{startDate} - {endDate}</span>
                            </div>
                            <div className="rented-box">
                                <label>Total Price :</label>
                                <span>{reservation?.rentPerHour} Rs</span>
                            </div>
                            <div className="rented-box-below">
                                <div className="rental-btn">
                                    <button className={`${reservation?.status === 'confirmed' ? 'd-none' : 'edit-reservation'}`} onClick={editHandler}>Edit</button>
                                    <button className="cancel-reservation" onClick={onDelete}>Cancel</button>
                                </div>
                                <p className="updated-status">Last updated on {updatedDate}</p>
                            </div>
                            {formActive && (
                                <ReservationUpdateForm
                                    setFormActive={setFormActive}
                                    reservation={reservation}
                                    carDetail={{
                                        name: `${reservation?.car?.make || "Car Make"} ${reservation?.car?.model}`,
                                        rentPerHour: reservation?.rentPerHour,
                                        id: reservation?.car._id
                                    }}
                                    initialData={{
                                        startDate: reservation?.startDate,
                                        endDate: reservation?.endDate,
                                        rentPerHour: reservation?.rentPerHour
                                    }}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserReservationCard;
