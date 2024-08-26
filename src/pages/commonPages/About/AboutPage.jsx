import React from 'react'
import './style.css'

const AboutPage = () => {
  return (
    <>
      <section className="about-header">
         <div className="container">
            <h1>ABOUT US</h1>
            <div className="about-contact">
                <span><i className="bi bi-geo-fill me-3"></i>All over Kerala</span>
                <span><i className="bi bi-telephone-fill me-3"></i>+91 9876543210</span>
                <span><i className="bi bi-clock-fill me-3"></i>Mon - Sat : 24hrs</span>
            </div>
         </div>
      </section>
 
      <section className="vision-mission">
          <div className="container">
             <div className="row">
                <div className="col-12 col-md-6">
                   <div className="vision-box">
                      <h2>ABOUT</h2>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, totam accusantium? Possimus, ea sapiente ex optio quidem dolorum, magnam iusto eaque officia adipisci culpa eveniet error sed beatae, quaerat omnis!
                      Expedita natus magnam veniam totam molestias nostrum ea repudiandae rem commodi earum incidunt, cumque sapiente enim error nobis assumenda fugit tenetur eum iusto atque, quibusdam veritatis! Distinctio amet asperiores eaque.
                      Quo inventore, odit laborum officia quos magnam maxime quasi sequi nisi accusantium nemo nostrum, similique harum a et optio qui soluta sit? Necessitatibus quasi error eveniet repellendus consequatur itaque enim.</p>
                   </div>
                </div>
                <div className="col-12 col-md-6">
                <div className="vision-box">
                      <h2>VISION & MISSION</h2>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, totam accusantium? Possimus, ea sapiente ex optio quidem dolorum, magnam iusto eaque officia adipisci culpa eveniet error sed beatae, quaerat omnis!
                      Expedita natus magnam veniam totam molestias nostrum ea repudiandae rem commodi earum incidunt, cumque sapiente enim error nobis assumenda fugit tenetur eum iusto atque, quibusdam veritatis! Distinctio amet asperiores eaque.
                      Quo inventore, odit laborum officia quos magnam maxime quasi sequi nisi accusantium nemo nostrum, similique harum a et optio qui soluta sit? Necessitatibus quasi error eveniet repellendus consequatur itaque enim.</p>
                   </div>
                </div>
             </div>
          </div>
      </section>
     
     <section className="why-to-choose">
        <div className="container">
            <div className="why-head">
               <h2>WHY TO CHOOSE US</h2>
               <hr />
            </div>

            <div className="row ">
            <div className="col-lg-4">
                <div className="row g-4">
                    <div className="col-lg-12">
                        <div className="features-box">
                            <div className="content">
                                <h2>01</h2>
                            <h6>heading</h6>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis minus, sed et in tempore esse!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="features-box">
                           <div className="content">
                            <h2>02</h2>
                            <h6>heading</h6>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis minus, sed et in tempore esse!</p>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="feature-center">
                   <div className="content">
                    <h2>RENT A CAR</h2>
                   </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="row  g-4">
                    <div className="col-lg-12">
                        <div className="features-box three">
                           <div className="content">
                            <h2>03</h2>
                            <h6>heading</h6>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis minus, sed et in tempore esse!</p>
                           </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="features-box">
                           <div className="content">
                            <h2>04</h2>
                            <h6>heading</h6>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis minus, sed et in tempore esse!</p>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
     </section>

    </>
  )
}

export default AboutPage