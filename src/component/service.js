import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Service() {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div>
        <section id="services" className="text-center">
        <div className="container">
            <div className="row">
                <div className="col-12 section-intro text-center" data-aos="fade-up">
                    <h1>Our Services</h1>
                    <div className="divider"></div>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                        suffered<br/>
                        alteration in some form, by injected humour, or randomised words which don't look even slightly
                    </p>
                </div>
            </div>
            <div className="row g-4">
                <div className="col-md-4" data-aos="zoom-in">
                    <div className="service">
                        <div className="service-img">
                            <img src="img/image_1.jpg" alt=""/>
                            <div className="icon"><i className="icon-browser"></i></div>
                        </div>
                        <h5 className="mt-5 pt-4">Service Name</h5>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered alteration in some form</p>
                    </div>
                </div>
                <div className="col-md-4" data-aos="zoom-in">
                    <div className="service">
                        <div className="service-img">
                            <img src="img/image_2.jpg" alt=""/>
                            <div className="icon"><i className="icon-bargraph"></i></div>
                        </div>
                        <h5 className="mt-5 pt-4">Service Name</h5>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered alteration in some form</p>
                    </div>
                </div>
                <div className="col-md-4" data-aos="zoom-in">
                    <div className="service">
                        <div className="service-img">
                            <img src="img/image_3.jpg" alt=""/>
                            <div className="icon"><i className="icon-camera"></i></div>
                        </div>
                        <h5 className="mt-5 pt-4">Service Name</h5>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered alteration in some form</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
        
        </div>

        
      
    );
  }

export default Service;