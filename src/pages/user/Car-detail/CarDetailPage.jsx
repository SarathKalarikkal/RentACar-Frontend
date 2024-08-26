import React from "react";
import "./style.css";
import NavTab from "../../../components/NavTab/NavTab";

const CarDetailPage = () => {
  return (
    <>
      <section className="car-detail-header">
        <div className="container">
          <h1>CAR NAME</h1>
        </div>
      </section>

      <section className="car-detail">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <div className="detail-main-img">
                <img src={"../../src/assets/car.png"} alt="" />
              </div>
              <div className="sub-img">
                <div className="detail-sub-img">
                  <img src={"../../src/assets/car.png"} alt="" />
                </div>
                <div className="detail-sub-img">
                  <img src={"../../src/assets/car.png"} alt="" />
                </div>
                <div className="detail-sub-img">
                  <img src={"../../src/assets/car.png"} alt="" />
                </div>
                <div className="detail-sub-img">
                  <img src={"../../src/assets/car.png"} alt="" />
                </div>
              </div>

              <div className="row my-5">
                <h4 className="vehicle-des-hd">Vehicle Specification</h4>
                <div className="col-lg-12 mt-4">
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <th>Make</th>
                        <td>Audi</td>
                        <th>Model</th>
                        <td>A4</td>
                        <th>Available</th>
                        <td>Yes</td>
                      </tr>
                      <tr>
                        <th>Year</th>
                        <td>2019</td>
                        <th>Mileage</th>
                        <td>20km</td>
                        <th>Fuel</th>
                        <td>Electric</td>
                      </tr>
                      <tr>
                        <th>Transmission</th>
                        <td>Automatic</td>
                        <th>Color</th>
                        <td>Blue</td>
                        <th>Seating</th>
                        <td>5</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="row">
                <div className="description-box">
                  <div className="col-lg-12">
                      <NavTab />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="dealer-info-sec">
                <div className="payment-sec">
                  <div className="right-header">PRICE : 200 RS</div>
                  <div className="payment-available">
                    <img
                      className="paypal"
                      src={"../../src/assets/paypal.png"}
                      alt=""
                    />
                    <div className="payment-below">
                      <img
                        className="visa"
                        src={"../../src/assets/visaCard.jpg"}
                        alt=""
                      />
                      <img
                        className="master-card"
                        src={"../../src/assets/masterCard.jpg"}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="Dealer-sec">
                  <div className="right-header">DEALER</div>
                  <div className="Dealer">
                    <div className="dealer-img">
                      <img src={"../../src/assets/dealerImage.jpg"} alt="" />
                    </div>
                    <div className="dealer-content">
                      <h4>John Samual</h4>
                      <span>Member since May 2019</span>
                      <div className="dealer-soc">
                        <i className="bi bi-facebook"></i>
                        <i className="bi bi-whatsapp"></i>
                        <i className="bi bi-instagram"></i>
                      </div>
                    </div>
                    <div className="dealer-contact">
                      <i className="bi bi-telephone-fill"></i>
                      <label htmlFor="">Conatact</label>
                      <span>+91 9876543221</span>
                    </div>
                  </div>
                </div>
                <div className="Message-sec">
                  <div className="right-header">MESSAGE</div>
                  <div className="Message">
                    <form>
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Enter your name"
                      />
                      <input
                        type="email"
                        name=""
                        id=""
                        placeholder="Enter your mail address"
                      />
                      <textarea
                        name=""
                        id=""
                        rows={4}
                        placeholder="Message"
                      ></textarea>
                      <button type="submit">SEND</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CarDetailPage;
