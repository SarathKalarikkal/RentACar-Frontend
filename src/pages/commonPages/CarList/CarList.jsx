import React, { useEffect, useState } from 'react'
import "./style.css"
import CarCard from '../../../components/carCard/CarCard'
import CarListView from '../../../components/carListView/CarListView'
import axiosInstance from '../../../config/axiosInstance'
import { useDispatch, useSelector } from 'react-redux'
import { setCarList } from '../../../Redux/features/carSlice'


const CarList = () => {

const [boxView, setBoxView] = useState(true)

const dispatch = useDispatch()
const carList = useSelector((state)=>state.car.carList)

const handleViewMod=()=>{
    setBoxView(!boxView)
}


const fetchCarlist = async()=>{
  try {
    const response = await axiosInstance.get('/car/list');
    const cars = response.data
    dispatch(setCarList(cars.data));
  } catch (err) {
    setCarList(err);
  }
}

useEffect(()=>{
  fetchCarlist()
},[])


console.log("carlist", carList);




  return (
   <>
   <section className="carList-header">
         <div className="container">
            <h1>Cars</h1>
            <div className="CarList-contact">
                <span><i className="bi bi-geo-fill me-3"></i>All over Kerala</span>
                <span><i className="bi bi-telephone-fill me-3"></i>+91 9876543210</span>
                <span><i className="bi bi-clock-fill me-3"></i>Mon - Sat : 24hrs</span>
            </div>
         </div>
      </section>

      <section className='carlist-sec'>
      <div className="container">
  <div className="row">
    {/* Sidebar */}
    <div className="col-12 col-lg-3">
      <div className="sidebar-wrapper">
        <h5 className="sidebar-title">SEARCH CAR</h5>
        <div className="sidebar">
          {/* Make and Model Filter */}
          <div className="filter-group">
            <label htmlFor="make">BY MAKE</label>
            <select id="make" className="form-select">
            <option  default>All Make</option>
             {
              carList?.map((car)=>{
                return  <option>{car.make}</option>
              })
             }
            </select>
            <select id="model" className="form-select">
            <option  default>All Model</option>
             {
              carList?.map((car)=>{
                return  <option>{car.name}</option>
              })
             }
            </select>
          </div>
          {/* Price Range Filter */}
          <div className="filter-group">
            <label htmlFor="priceRange">BY PRICE</label>
            <input
              className="price-range"
              type="range"
              id="volume"
              name="volume"
              min={0}
              max={9999}
            />
            <div className="d-flex justify-content-between price-values">
              <span>0</span>
              <span>99,999</span>
            </div>
          </div>
          {/* Body Type Filter */}
          {/* <div class="filter-group">
                  <label>BODY TYPE</label>
                  <div class="body-type-options">
                      <div class="form-check">
                          <input type="radio" name="bodyType" id="convertible" class="form-check-input">
                          <label for="convertible" class="form-check-label">
                            
                              <span>Convertible</span>
                          </label>
                      </div>
                      <div class="form-check">
                          <input type="radio" name="bodyType" id="coupe" class="form-check-input">
                          <label for="coupe" class="form-check-label">
                              
                              <span>Coupe</span>
                          </label>
                      </div>
                      
                  </div>
              </div> */}
          {/* Other Filters */}
          <div className="filter-group">
            <label htmlFor="fuelType">FUEL TYPE</label>
            <select id="fuelType" className="form-select">
            <option  default>All Fuel Types</option>
             {
              carList?.map((car)=>{
                return  <option>{car.fuelType}</option>
              })
             }
            </select>
          </div>
          <div className="filter-group">
            <label htmlFor="transmission">TRANSMISSION RANGE</label>
            <select id="transmission" className="form-select">
            <option  default>All transmissions</option>
             {
              carList?.map((car)=>{
                return  <option>{car.transmission}</option>
              })
             }
            </select>
          </div>
          <div className="filter-group">
            <label htmlFor="condition">CONDITION</label>
            <select id="condition" className="form-select">
              <option>All conditions</option>
              {/* Add more options as needed */}
            </select>
          </div>
          {/* Reset Filter Button */}
          <button className="btn main-btn w-100">SEARCH</button>
          <button type="reset" className="reset-button">
            <i className="bi bi-arrow-clockwise me-1" />
            Reset all
          </button>
        </div>
      </div>
    </div>
    {/* Car List Section */}
    <div className="col-12 col-lg-9">
      <div className="car-list">
        <div className="row">
          <div className="row top-controls mb-4">
            <div className="col-6 col-md-3">
              <select className="form-select">
                <option selected="">9 Autos</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="col-6 col-md-3">
              <select className="form-select">
                <option selected="">SORT</option>
                <option selected="">Low to high</option>
                <option selected="">High to low</option>
                {/* Add sorting options as needed */}
              </select>
            </div>
            <div className="col-md-6 text-end view-switcher-wrap ">
              <div className="view-switcher">
                <button className={`btn ${boxView ? '' : "active"}`} onClick={handleViewMod}
                data-bs-toggle="tooltip" data-bs-placement="top" title="List View">
                  <i className="bi bi-list" />
                </button>
                <button className={`btn ${boxView ? 'active' : ""}`} onClick={handleViewMod}
                data-bs-toggle="tooltip" data-bs-placement="top" title="Box view">
                  <i className="bi bi-grid-3x3-gap-fill" />
                </button>
              </div>
            </div>
          </div>
          <hr />
          {/* Car Component */}

          {
            boxView ? 
            ( <div className="row">
                
                {
                          carList.map((car) => (
                            <div className="col-12 col-md-6" key={car?.id}> 
                              <CarCard car={car} />
                            </div>
                          ))
                        }
           </div>
           )
            :
            (
              <div className="row">
                {
                  carList.map((car) => (
                    <div className="col-md-12" key={car?.id}> 
                      <CarListView car={car} />
                    </div>
                  ))
                }
              </div>
            )
          }

        </div>
      </div>
    </div>
  </div>
</div>

      </section>
   </>
  )
}

export default CarList