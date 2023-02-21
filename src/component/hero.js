import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import cover1 from './img/cover_1.jpg' ;

function Hero() {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <>
    <section id="home" className="bg-cover hero-section" style={{backgroundImage: `url(${cover1})`}}>
        <div className="overlay"></div>
        <div className="container text-white text-center">
            <div className="row">
                <div className="col-12">
                    <h1 className="display-4" data-aos="zoom-in">We Design Remarkable and<br/>
                        Stunning Bootstrap Websites</h1>
                    <p className="my-4" data-aos="fade-up">There are many variations of passages of Lorem Ipsum available, but the majority<br/>
                        have suffered alteration in some form, by injected humour, or randomised words</p>
                    <a href="#" data-aos="fade-up" className="btn btn-main">Get started</a>
                </div>
            </div>
        </div>
    </section>

    </>
    
  );
}

export default Hero;
