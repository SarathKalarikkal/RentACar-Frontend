import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axiosInstance from '../../../config/axiosInstance';
import toast, { Toaster } from 'react-hot-toast';

const EditCar = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [carData, setCarData] = useState(null);
  const [imageFiles, setImageFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await axiosInstance.get(`/car/${id}`);
        setCarData(response.data.data);
      } catch (error) {
        console.error("Error fetching car details:", error);
      }
    };

    fetchCarDetails();
  }, [id]);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const previews = files.map(file => URL.createObjectURL(file));
    setImageFiles(files);
    setImagePreviews(previews);
  };

  const handleRemoveImage = (index) => {
    const newImageFiles = imageFiles.filter((_, i) => i !== index);
    const newImagePreviews = imagePreviews.filter((_, i) => i !== index);
    setImageFiles(newImageFiles);
    setImagePreviews(newImagePreviews);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', event.target.name.value);
      formData.append('make', event.target.make.value);
      formData.append('model', event.target.model.value);
      formData.append('fuelType', event.target.fuelType.value);
      formData.append('color', event.target.color.value);
      formData.append('transmission', event.target.transmission.value);
      formData.append('seating', event.target.seating.value);
      formData.append('mileage', event.target.mileage.value);
      formData.append('rentPerHour', event.target.rentPerHour.value);
      formData.append('description', event.target.description.value);
      imageFiles.forEach(file => formData.append('images', file));

      await axiosInstance.put(`/car/update/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      toast.success("Car updated successfully!");
      navigate(`/dealer/inventory`);
    } catch (error) {
      console.error("Error updating car:", error);
      toast.error("Failed to update car. Please try again.");
    }
  };

  if (!carData) return <p>Loading...</p>;

  return (
    <>
      <Toaster />
      <section className='addCar-header'>
        <div className="container">
          <h1>EDIT A CAR</h1>
        </div>
      </section>
      <section className='py-5'>
        <div className="container">
          <form id="edit-car-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="name">Car Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    defaultValue={carData.name}
                    placeholder="Enter car name"
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
                    defaultValue={carData.make}
                    placeholder="Enter car make"
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
                    defaultValue={carData.model}
                    placeholder="Enter car model"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="fuelType">Fuel Type</label>
                  <select
                    className="form-control"
                    id="fuelType"
                    name="fuelType"
                    defaultValue={carData.fuelType}
                    required
                  >
                    <option value="">Select Fuel Type</option>
                    <option value="Gasoline">Gasoline</option>
                    <option value="Diesel">Diesel</option>
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
                    defaultValue={carData.color}
                    placeholder="Enter car color"
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
                        defaultChecked={carData.transmission === 'Automatic'}
                      />
                      Automatic
                    </label>
                    <label>
                      <input
                        type="radio"
                        id="transmission-manual"
                        name="transmission"
                        value="Manual"
                        defaultChecked={carData.transmission === 'Manual'}
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
                    defaultValue={carData.seating}
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
                    defaultValue={carData.mileage}
                    placeholder="Enter mileage"
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
                    defaultValue={carData.rentPerHour}
                    placeholder="Enter rent per hour"
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
                    defaultValue={carData.description}
                    placeholder="Enter a brief description"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="carImage">Car Images</label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="carImage"
                    name="carImage[]"
                    multiple
                    onChange={handleImageChange}
                  />
                  <div id="imagePreview" className='image-preview'>
                    {imagePreviews.map((preview, index) => (
                      <div key={index} className="image-preview-item">
                        <img src={preview} alt={`Preview ${index}`} />
                        <button type="button" onClick={() => handleRemoveImage(index)}>Remove</button>
                      </div>
                    ))}
                  </div>
                </div>
                <button type="submit" className="addCar-btn main-btn">
                  Update Car
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default EditCar;
