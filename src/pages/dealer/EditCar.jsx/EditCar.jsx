import React from 'react'

const EditCar = () => {
  return (
   <>
    <section className='addCar-header'>
      <div className="container">
         <h1>EDIT A CAR</h1>
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
                          defaultChecked
                        />
                        Automatic
                      </label>
                      <label>
                        <input
                          type="radio"
                          id="transmission-manual"
                          name="transmission"
                          value="Manual"
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
                      required
                    />
                    <div id="imagePreview" className='image-preview'></div>
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
  )
}

export default EditCar