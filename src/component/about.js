import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Cover3 from './img/cover_3.jpg' ;


function About() {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
      <>
      <section id="about" class="bg-cover" style={{backgroundImage: `url(${Cover3})`}}>
        <div class="overlay"></div>
        <div class="container text-white text-center">
            <div class="row">
                <div class="col-12 section-intro text-center" data-aos="fade-up">
                    <h1>Watch our video</h1>
                    <div class="divider"></div>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                        suffered<br/>
                        alteration in some form, by injected humour, or randomised words which don't look even slightly
                    </p>
                    <a href="#" class="video-btn"><i class='bx bx-play'></i></a>
                </div>
            </div>
        </div>
    </section>
      </>   
      
    );
  }

export default About;