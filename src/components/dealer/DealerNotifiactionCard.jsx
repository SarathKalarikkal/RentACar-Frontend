import React, { useState } from 'react'

const DealerNotifiactionCard = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };


  return (
    <div className="col-lg-12">
         <div className="card notification-card">
          <div className="card-body" onClick={() => handleToggle(0)}>
            <h5 className="card-title notification-header">
              Car Reservation Request
            </h5>
            <p className="card-text notification-body">
              A user has requested to reserve <strong>Toyota Camry</strong>.
            </p>
            <p className="notification-date">Requested on: August 25, 2024</p>
          </div>
          {activeIndex === 0 && (
            <div className="card-body notification-details">
              <p><strong>User:</strong> John Doe</p>
              <p><strong>Email:</strong> john@example.com</p>
              <p><strong>Phone:</strong> +123456789</p>
              <p><strong>Message:</strong> Interested in renting the car for a month.</p>
            </div>
          )}
        </div>
    </div>
  )
}

export default DealerNotifiactionCard