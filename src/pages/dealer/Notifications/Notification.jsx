import React from 'react';
import "./style.css";
import DealerNotifiactionCard from '../../../components/dealer/DealerNotifiactionCard';


const DealerNotification = () => {


  return (
    <>
      <div className="notification-head">
        <h2 className="text-center mb-4">Dealer Notifications</h2>
      </div>
      <div className="container py-5">
        <div className="row">
           <DealerNotifiactionCard />
            {/* <DealerNotification /> */}
        </div>
      </div>
    </>
  );
};

export default DealerNotification;
