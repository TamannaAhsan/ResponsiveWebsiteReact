import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Cover3 from './img/cover_3.jpg' ;


function Contact() {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
      <>
       <section id="contact" class="bg-cover text-white" style={{backgroundImage: `url(${Cover3})`}}>
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
                <div class="col-12 section-intro text-center" data-aos="fade-up">
                    <h1>Get in touch</h1>
                    <div class="divider"></div>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                        suffered<br/>
                        alteration in some form, by injected humour, or randomised words which don't look even slightly
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-8 mx-auto" data-aos="fade-up">
                    <form action="#" class="row g-4">
                        <div class="form-group col-md-6">
                            <input type="text" class="form-control" placeholder="Full name"/>
                        </div>
                        <div class="form-group col-md-6">
                            <input type="email" class="form-control" placeholder="Email address"/>
                        </div>
                        <div class="form-group col-md-12">
                            <input type="text" class="form-control" placeholder="Subject"/>
                        </div>
                        <div class="form-group col-md-12">
                            <textarea name="" id="" cols="30" rows="4" class="form-control" placeholder="Message"></textarea>
                        </div>
                        <div class="text-center">
                            <button class="btn btn-main" type="submit">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
      </>
       

        
      
    );
  }

export default Contact;