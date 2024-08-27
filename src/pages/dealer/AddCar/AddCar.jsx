import React from 'react'
import "./style.css"

const AddCar = () => {
  return (
  <>
   <section className='addCar-header'>
      <div className="container">
         <h1>ADD A CAR</h1>
      </div>
   </section>

   <section className='py-5'>
     <div className="container">
     <form id="add-car-form" >
    <div className="row">
      <div className="col-md-6">
        <div className="form-group">
          <label htmlFor="name">Car Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            required=""
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows={3}
            required=""
            defaultValue={""}
          />
        </div>
        <div className="form-group">
          <label htmlFor="make">Make</label>
          <input
            type="text"
            className="form-control"
            id="make"
            name="make"
            required=""
          />
        </div>
        <div className="form-group">
          <label htmlFor="model">Model</label>
          <input
            type="text"
            className="form-control"
            id="model"
            name="model"
            required=""
          />
        </div>
        <div className="form-group">
          <label htmlFor="fuelType">Fuel Type</label>
          <select
            className="form-control"
            id="fuelType"
            name="fuelType"
            required=""
          >
            <option value="">Select Fuel Type</option>
            <option value="Gasoline">Gasoline</option>
            <option value="Diesel">Diesel</option>
            <option value="Electric">Electric</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="transmission">Transmission</label>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="transmission-automatic"
              name="transmission"
              defaultValue="Automatic"
              defaultChecked=""
            />
            <label
              className="form-check-label"
              htmlFor="transmission-automatic"
            >
              Automatic
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="transmission-manual"
              name="transmission"
              defaultValue="Manual"
            />
            <label className="form-check-label" htmlFor="transmission-manual">
              Manual
            </label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="color">Color</label>
          <input
            type="text"
            className="form-control"
            id="color"
            name="color"
            required=""
          />
        </div>
        <div className="form-group">
          <label htmlFor="seating">Seating Capacity</label>
          <select
            className="form-control"
            id="seating"
            name="seating"
            required=""
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
            required=""
          />
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-group">
          <label htmlFor="rentPerHour">Rent Per Hour</label>
          <input
            type="number"
            className="form-control"
            id="rentPerHour"
            name="rentPerHour"
            required=""
          />
        </div>
        <div className="form-group">
          <label htmlFor="carImage">Car Images</label>
          <input
            type="file"
            className="form-control-file"
            id="carImage"
            name="carImage[]"
            multiple=""
            required=""
          />
        </div>
        <div id="imagePreview"></div>
      </div>
    </div>
    <button type="submit" className="btn btn-primary mt-3">
      Add Car
    </button>
     </form>
     </div>
   </section>
  </>
   
  )
}

export default AddCar