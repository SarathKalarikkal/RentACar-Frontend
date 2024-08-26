import React from 'react'
import './style.css'

const Footer = () => {
  return (
    <footer>
  <div className="container">
    <div className="footer-top">
      <div className="row">
        <div className="col-lg-3">
          <div className="footer-box">
            <h2>LOGO</h2>
            <p className="footer-desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. At,
              nemo?dolor sit amet consectetur adipisicing elit. A
            </p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="footer-box">
            <h6>Useful Links</h6>
            <ul className="footer-links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Cars</a>
              </li>
              <li>
                <a href="#">Dealers</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="footer-box">
            <h6>Terms &amp; Conditions</h6>
            <ul className="footer-links">
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="footer-box">
            <h6>Connect us</h6>
            <ul className="social-acc">
              <li>
                <a href="#">
                  <img src={'../src/assets/facebook.png'} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={'../src/assets/instagram.png'} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={'../src/assets/whatsapp.png'} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={'../src/assets/youtube.png'} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="row">
        <div className="col-lg-6">
          <p>2023 All rights reserved</p>
        </div>
        <div className="col-lg-6">
          <p className="creator-tag">
            Designed &amp; and developed by : Sarath
          </p>
        </div>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer