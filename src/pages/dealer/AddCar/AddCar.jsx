import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './style.css';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { CgSoftwareUpload } from 'react-icons/cg';
import axiosInstance from '../../../config/axiosInstance';
import toast, { Toaster } from 'react-hot-toast';

const AddCar = () => {
  const { register, handleSubmit, reset } = useForm();
  const [imageFiles, setImageFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  const onSubmit = async (data) => {
    try {
      
      const formData = new FormData();
      for (let key in data) {
        if (Array.isArray(data[key])) {
          data[key].forEach(file => formData.append(key, file));
        } else {
          formData.append(key, data[key]);
        }
      }
      const response = await axiosInstance.post('/car/create', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      toast.success(response.data.message);
      reset(); 
      setImageFiles([]); 
      setImagePreviews([]); 
      console.log("formdat", formData)
    } catch (error) {
      toast.error(error.response.data.message)
      console.error("asdasds",error);
      reset()
    }
  };

  // Handle file input change
  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const previews = files.map(file => URL.createObjectURL(file));
    setImageFiles(files);
    setImagePreviews(previews);
  };

  // Handle image removal
  const handleRemoveImage = (index) => {
    const newImageFiles = imageFiles.filter((_, i) => i !== index);
    const newImagePreviews = imagePreviews.filter((_, i) => i !== index);
    setImageFiles(newImageFiles);
    setImagePreviews(newImagePreviews);
  };

  // Handle image re-upload
  const handleReupload = (index) => {
    document.getElementById('carImage').click(); 
    setImageFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
    setImagePreviews(prevPreviews => prevPreviews.filter((_, i) => i !== index));
  };

  return (
    <>
      <Toaster />
      <section className='addCar-header'>
        <div className="container">
          <h1>ADD A CAR</h1>
        </div>
      </section>

      <section className='py-5'>
        <div className="container">
          <form id="add-car-form" onSubmit={handleSubmit(onSubmit)}>
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
                    required
                    {...register("name")}
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
                    required
                    {...register("make")}
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
                    required
                    {...register("model")}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="fuelType">Fuel Type</label>
                  <select
                    className="form-control"
                    id="fuelType"
                    name="fuelType"
                    required
                    {...register("fuelType")}
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
                    required
                    {...register("color")}
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
                    required
                    {...register("type")}
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
                        defaultChecked
                        {...register("transmission")}
                      />
                      Automatic
                    </label>
                    <label>
                      <input
                        type="radio"
                        id="transmission-manual"
                        name="transmission"
                        value="Manual"
                        {...register("transmission")}
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
                    required
                    {...register("seating")}
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
                    required
                    {...register("mileage")}
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
                    required
                    {...register("rentPerHour")}
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
                    required
                    {...register("location")}
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
                    required
                    {...register("description")}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="images">Car Images</label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="carImage"
                    name="images"
                    multiple
                    required
                    onChange={handleImageChange}
                    ref={register("images")}
                  />
                  <button type="button" className='upload-btn' onClick={() => document.getElementById('carImage').click()}>
                    Upload Images
                  </button>
                  <div id="imagePreview" className='image-preview'>
                    {imagePreviews.map((preview, index) => (
                      <div key={index} className="image-container">
                        <img
                          src={preview}
                          alt={`Preview ${index}`}
                          className="img-thumbnail"
                        />
                        <div className="button-wrap">
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => handleRemoveImage(index)}
                          >
                            <RiDeleteBin2Line />
                          </button>
                          <button
                            type="button"
                            className="btn btn-secondary ms-2"
                            onClick={() => handleReupload(index)}
                          >
                            <CgSoftwareUpload />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
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
