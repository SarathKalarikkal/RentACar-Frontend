import React from "react";
import "./style.css";

function MyRentals() {
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
              <div className="col-md-4">
                <div className="rental-img">
                  <img src="../../src/assets/car.png" alt="" /> 
                </div>
              </div>
              <div className="col-md-8">
                 <div className="rental-card-right">
                    
                    <div className="rental-status">
                     <p>Status :</p>
                     <span>Pending</span>
                    </div>

                    <h3>Maruthi Swift VXI</h3>

                    <div className="rented-box">
                       <label>Rental Preiod :</label>
                       <span>20 Aug - 26 AUg</span>
                    </div>
                    <div className="rented-box">
                       <label>Total Price :</label>
                       <span>200 Rs</span>
                    </div>

                    <div className="rented-box-below">
                       
                       <div className="rental-btn">
                          <button className="edit-reservation">Edit</button>
                          <button className="cancel-reservation" >Cancel</button>
                       </div>
                       <p className="updated-status">Last updated on 22 Aug 2024</p>
                    </div>

                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MyRentals;
