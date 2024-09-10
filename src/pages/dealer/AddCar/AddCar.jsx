import React, { useState } from 'react';
import axiosInstance from '../../../config/axiosInstance';
import toast from 'react-hot-toast';
import './style.css';

const AddCar = () => {
  const [formData, setFormData] = useState({
    name: '',
    make: '',
    model: '',
    fuelType: '',
    color: '',
    type: '',
    transmission: 'Automatic', 
    seating: '',
    mileage: '',
    rentPerHour: '',
    location: '',
    description: '',
  });

  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setImages(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const data = new FormData();
      
      // Append text fields
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });
      
      // Append file inputs
      for (let i = 0; i < images.length; i++) {
        data.append('images', images[i]);
      }
  
      const response = await axiosInstance.post('/car/create', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      console.log("Successfully uploaded");
      toast.success(response.data.message);
      
      // Reset form
      setFormData({
        name: '',
        make: '',
        model: '',
        fuelType: '',
        color: '',
        type: '',
        transmission: 'Automatic',
        seating: '',
        mileage: '',
        rentPerHour: '',
        location: '',
        description: '',
      });
      setImages([]);
    } catch (error) {
      toast.error('Failed to add car. Please try again.');
      console.error('There was an error uploading the car details:', error);
    }
  };
  

  

  return (
    <>
      <section className="addCar-header">
        <div className="container">
          <h1>ADD A CAR</h1>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <form id="add-car-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="name">Car Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Enter car name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="make">Make</label>
                  <input
                    type="text"
                    className="form-control"
                    id="make"
                    name="make"
                    placeholder="Enter car make"
                    value={formData.make}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="model">Model</label>
                  <input
                    type="text"
                    className="form-control"
                    id="model"
                    name="model"
                    placeholder="Enter car model"
                    value={formData.model}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="fuelType">Fuel Type</label>
                  <select
                    className="form-control"
                    id="fuelType"
                    name="fuelType"
                    value={formData.fuelType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Fuel Type</option>
                    <option value="Gasoline">Gasoline</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Petrol">Petrol</option>
                    <option value="Electric">Electric</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="color">Color</label>
                  <input
                    type="text"
                    className="form-control"
                    id="color"
                    name="color"
                    placeholder="Enter car color"
                    value={formData.color}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="type">Type</label>
                  <input
                    type="text"
                    className="form-control"
                    id="type"
                    name="type"
                    placeholder="Enter car type"
                    value={formData.type}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="transmission">Transmission</label>
                  <div className="transmission-options">
                    <label>
                      <input
                        type="radio"
                        id="transmission-automatic"
                        name="transmission"
                        value="Automatic"
                        checked={formData.transmission === 'Automatic'}
                        onChange={handleChange}
                      />
                      Automatic
                    </label>
                    <label>
                      <input
                        type="radio"
                        id="transmission-manual"
                        name="transmission"
                        value="Manual"
                        checked={formData.transmission === 'Manual'}
                        onChange={handleChange}
                      />
                      Manual
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="seating">Seating Capacity</label>
                  <select
                    className="form-control"
                    id="seating"
                    name="seating"
                    value={formData.seating}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Seating Capacity</option>
                    <option value={2}>2</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={7}>7</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="mileage">Mileage</label>
                  <input
                    type="number"
                    className="form-control"
                    id="mileage"
                    name="mileage"
                    placeholder="Enter mileage"
                    value={formData.mileage}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="rentPerHour">Rent Per Hour</label>
                  <input
                    type="number"
                    className="form-control"
                    id="rentPerHour"
                    name="rentPerHour"
                    placeholder="Enter rent per hour"
                    value={formData.rentPerHour}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="location">Location</label>
                  <input
                    type="text"
                    className="form-control"
                    id="location"
                    name="location"
                    placeholder="Enter location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    rows={4}
                    placeholder="Enter a brief description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="carImage">
                    Car Images (Upload Atleast 5 images)
                  </label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="carImage"
                    name="images"
                    multiple
                    onChange={handleFileChange}
                  />
                </div>
              
                <button type="submit" className="addCar-btn main-btn">
                  Add Car
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddCar;
