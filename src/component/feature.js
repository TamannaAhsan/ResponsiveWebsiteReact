import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Feature() {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
      <>
      <section id="features" class="text-center">
        <div class="container">
            <div class="row">
                <div class="col-12 section-intro text-center" data-aos="fade-up">
                    <div class="divider"></div>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                        suffered<br/>
                        alteration in some form, by injected humour, or randomised words which don't look even slightly
                    </p>
                </div>
            </div>
            <div class="row gx-4 gy-5">
                <div class="col-md-4 feature" data-aos="fade-up">
                    <div class="icon"><i class="icon-tools"></i></div>
                    <h5 class="mt-4 mb-3">Feature Title</h5>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration in some form</p>
                </div>
                <div class="col-md-4 feature" data-aos="fade-up">
                    <div class="icon"><i class="icon-browser"></i></div>
                    <h5 class="mt-4 mb-3">Feature Title</h5>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration in some form</p>
                </div>
                <div class="col-md-4 feature" data-aos="fade-up">
                    <div class="icon"><i class="icon-calendar"></i></div>
                    <h5 class="mt-4 mb-3">Feature Title</h5>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration in some form</p>
                </div>
                <div class="col-md-4 feature" data-aos="fade-up">
                    <div class="icon"><i class="icon-camera"></i></div>
                    <h5 class="mt-4 mb-3">Feature Title</h5>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration in some form</p>
                </div>
                <div class="col-md-4 feature" data-aos="fade-up">
                    <div class="icon"><i class="icon-scissors"></i></div>
                    <h5 class="mt-4 mb-3">Feature Title</h5>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration in some form</p>
                </div>
                <div class="col-md-4 feature" data-aos="fade-up">
                    <div class="icon"><i class="icon-strategy"></i></div>
                    <h5 class="mt-4 mb-3">Feature Title</h5>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration in some form</p>
                </div>
            </div>
        </div>
    </section>
      </>
       

        
      
    );
  }

export default Feature;