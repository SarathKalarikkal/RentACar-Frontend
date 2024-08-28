import React from "react";
import "./style.css";

const Contact = () => {
  return (
    <>
      <section className="contact-header">
        <div className="container">
          <h1>Contact</h1>
        </div>
      </section>

      <section className="contact-boxes-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="contact-box">
                <div className="icon-box">
                  <i class="bi bi-geo-alt-fill"></i>
                </div>
                <div className="contact-box-content">
                  <h4>HEAD OFFICE</h4>
                  <p>
                    68 LandSilver, St.Welson, <br />
                    California 22082
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-box">
                <div className="icon-box">
                  <i class="bi bi-telephone-fill"></i>
                </div>
                <div className="contact-box-content">
                  <h4>PHONE</h4>
                  <p>+91 9876543210</p>
                  <p>+91 9876543210</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-box">
                <div className="icon-box">
                  <i class="bi bi-envelope-at-fill"></i>
                </div>
                <div className="contact-box-content">
                  <h4>EMAIL</h4>
                  <p>info@domain.com</p>
                  <p>support@domain.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125531.64774478372!2d76.14084860083456!3d10.511376971552032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ee15ed42d1bb%3A0x82e45aa016ca7db!2sThrissur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1724481709280!5m2!1sen!2sin"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="col-12 col-md-6">
              <div className="contact-msg">
                <h2>Send a Message</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis, adipisci.onsectetur adipisicing elit. Corporis,
                  adipisci.
                </p>

                <form action="">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter your name"
                  />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Email Address"
                  />
                  <textarea name="" id="" rows={5} cols={40} placeholder="Message"></textarea>
                  <button className="main-btn">SEND</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
