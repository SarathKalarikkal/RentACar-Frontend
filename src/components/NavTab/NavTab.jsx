import React, { useState } from 'react';
import "./style.css";

const VehicleTabs = () => {
  const [activeTab, setActiveTab] = useState('description');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="col-12 detail-tabs">
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'description' ? 'active' : ''}`}
            onClick={() => handleTabClick('description')}
          >
            Vehicle Description
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'reviews' ? 'active' : ''}`}
            onClick={() => handleTabClick('reviews')}
          >
            Reviews
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'addReview' ? 'active' : ''}`}
            onClick={() => handleTabClick('addReview')}
          >
            Add Review
          </button>
        </li>
      </ul>

      <div className="tab-content mt-3" id="myTabContent">
        {activeTab === 'description' && (
          <div className="tab-pane fade show active" role="tabpanel">
            <p className='des'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fugit et dolore ipsa natus ratione ducimus aliquid quos, nisi odit voluptates officiis expedita quibusdam optio omnis ipsam architecto animi vitae.
              Distinctio a vel facere quasi dolor aperiam dolore laborum est veniam laboriosam libero ex temporibus, laudantium fugiat quis id earum animi! Assumenda ratione corrupti iusto aliquam inventore non nisi molestias!
            </p>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="reviews tab-pane fade show active" role="tabpanel">
            
            <div className="review-box">
              <h6>John Doe</h6>
              <div className="star-rating">
                ⭐⭐⭐⭐⭐
              </div>
              <p>
                Great car! Smooth ride and very comfortable. Highly recommend.
              </p>
            </div>
            <div className="review-box">
              <h6>Rohit JP</h6>
              <div className="star-rating">
                ⭐⭐⭐⭐
              </div>
              <p>
                Great car! Smooth ride and very comfortable. Highly recommend.
              </p>
            </div>
            {/* Add more review boxes as needed */}
          </div>
        )}

        {activeTab === 'addReview' && (
          <div className=" addReview tab-pane fade show active" role="tabpanel">
            <h5>Leave a Review</h5>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Your name" />
            </div>
            <div className="form-group">
              <input type="email" className="form-control" placeholder="Your Email" />
            </div>
            <div className="form-group">
              <textarea className="form-control" rows="3" placeholder="Your Comment"></textarea>
            </div>
            <div className="form-group">
              <label>Rating:</label>
              <select className="form-control">
                <option value="5">⭐⭐⭐⭐⭐</option>
                <option value="4">⭐⭐⭐⭐</option>
                <option value="3">⭐⭐⭐</option>
                <option value="2">⭐⭐</option>
                <option value="1">⭐</option>
              </select>
            </div>
            <button className="post-btn" type="submit">Post Comment</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VehicleTabs;
