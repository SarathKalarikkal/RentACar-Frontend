import React, { useEffect, useState } from 'react';
import "./style.css";
import { useForm } from 'react-hook-form';
import axiosInstance from '../../config/axiosInstance';

const VehicleTabs = ({carDetail}) => {
  const [activeTab, setActiveTab] = useState('description');
  const [reviews, setReviews] = useState('description');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


  const { register, handleSubmit } = useForm()

  const onSubmit = async(data) => {
    const response = await axiosInstance.post(`/review/create/${carDetail._id}`, data)
    console.log(response.data)
  }


  useEffect(async()=>{
    const response = await axiosInstance.get(`/review/car/${carDetail._id}`)
    console.log(response.data)
    setReviews(response.data.data)
  },[])

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
             {carDetail?.description}
            </p>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="reviews tab-pane fade show active" role="tabpanel">
            {
              reviews?.map((review)=>{
                return(
                  <div className="review-box">
                  <h6>{review?.user.name}</h6>
                  <div className="star-rating">
                    {review?.rating}
                  </div>
                  <p>
                   {review?.comment}
                  </p>
                </div>
                )
              })
            }
           
           
          </div>
        )}

        {activeTab === 'addReview' && (
          <div className=" addReview tab-pane fade show active" role="tabpanel">
            <h5>Leave a Review</h5>
            <form onClick={handleSubmit(onSubmit)}>
            <div className="form-group">
              <textarea className="form-control" rows="3" placeholder="Your Comment" {...register("comment")}></textarea>
            </div>
            <div className="form-group">
              <label>Rating:</label>
              <select className="form-control" {...register("rating")}>
                <option value="5">⭐⭐⭐⭐⭐</option>
                <option value="4">⭐⭐⭐⭐</option>
                <option value="3">⭐⭐⭐</option>
                <option value="2">⭐⭐</option>
                <option value="1">⭐</option>
              </select>
            </div>
            <button className="post-btn" type="submit">Post Comment</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default VehicleTabs;
