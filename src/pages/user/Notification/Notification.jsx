import React, { useState } from 'react';
import "./style.css";

const UserNotification = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="notification-head">
        <h2 className="text-center mb-4">Notifications</h2>
      </div>
      <div className="container notification-container">
        {/* Notification Card 1 */}
        <div className="card notification-card">
          <div
            className="card-body"
            onClick={() => toggleAccordion(0)}
            style={{ cursor: 'pointer' }}
          >
            <h5 className="card-title notification-header">
              Car Reservation Approved
            </h5>
            <p className="card-text notification-body">
              Your reservation for <strong>Toyota Camry</strong> has been{" "}
              <span className="notification-status approved">approved</span> by
              the dealer.
            </p>
            <p className="notification-date">Approved on: August 25, 2024</p>
            {activeIndex === 0 && (
              <div className="notification-details">
                <p>
                  <strong>Reason:</strong> The dealer has confirmed availability and readiness of the vehicle.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Notification Card 2 */}
        <div className="card notification-card">
          <div
            className="card-body"
            onClick={() => toggleAccordion(1)}
            style={{ cursor: 'pointer' }}
          >
            <h5 className="card-title notification-header">
              Car Reservation Rejected
            </h5>
            <p className="card-text notification-body">
              Your reservation for <strong>Honda Civic</strong> has been{" "}
              <span className="notification-status rejected">rejected</span> by
              the dealer.
            </p>
            <p className="notification-date">Rejected on: August 20, 2024</p>
            {activeIndex === 1 && (
              <div className="notification-details">
                <p>
                  <strong>Reason:</strong> The vehicle is currently unavailable due to maintenance.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserNotification;
