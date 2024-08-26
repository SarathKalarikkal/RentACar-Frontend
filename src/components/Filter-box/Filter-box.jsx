import React from 'react'
import "./style.css"

const Filterbox = () => {
  return (
    <div className="search-container">
    <h3>I'M LOOKING FOR</h3>
    <ul className="nav nav-pills mb-4">
      <li className="nav-item">
        <a className="nav-link active" href="#">
          All conditions
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          New Cars
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Used Cars
        </a>
      </li>
    </ul>
    <form>
      <div className="row g-3">
        <div className="col-md-3 dropdown-wrapper">
          <label htmlFor="make" className="form-label">
            Make
          </label>
          <select id="make" className="form-select">
            <option selected="">All makes</option>
            {/* Add more options here */}
          </select>
        </div>
        <div className="col-md-3 dropdown-wrapper">
          <label htmlFor="model" className="form-label">
            Model
          </label>
          <select id="model" className="form-select">
            <option selected="">All models</option>
            {/* Add more options here */}
          </select>
        </div>
        <div className="col-md-3 dropdown-wrapper">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <select id="price" className="form-select">
            <option selected="">All prices</option>
            {/* Add more options here */}
          </select>
        </div>
        <div className="col-md-3 dropdown-wrapper">
          <label htmlFor="location" className="form-label">
            Location
          </label>
          <select id="location" className="form-select">
            <option selected="">All locations</option>
            {/* Add more options here */}
          </select>
        </div>
        <button type="submit" className="btn-search small">
          SEARCH
        </button>
      </div>
      <div className="d-flex justify-content-between align-items-center mt-lg-4 mt-2 bottom-sec">
        <span className="text-muted">Available 30 cars</span>
        <div className="d-flex">
          <button type="submit" className="btn-search large">
            SEARCH
          </button>
          <button type="reset" className="btn btn-link btn-reset ms-3">
            <i className="bi bi-arrow-clockwise me-1" />
            Reset all
          </button>
        </div>
      </div>
    </form>
  </div>
  )
}

export default Filterbox