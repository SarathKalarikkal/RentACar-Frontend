import React from 'react';
import "./style.css";
import NotificationCard from '../../../components/user/NotificationCard';

const UserNotification = () => {
  

  return (
    <>
      <div className="notification-head">
        <h2 className="text-center mb-4">Notifications</h2>
      </div>

      <div className="container py-5">

        <div className="row">
            <NotificationCard />
            <NotificationCard />
        </div>
      </div>
    </> 
  );
};

export default UserNotification;
