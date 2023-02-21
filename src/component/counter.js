import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import cover2 from './img/cover_2.jpg' ;


function Counter() {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
      <>
      <section class="bg-cover" style={{backgroundImage: `url(${cover2})`}}>
        <div class="overlay"></div>
        <div class="container text-white text-center">
            <div class="row gy-4" data-aos="fade-up">
                <div class="col-md-3">
                    <i class="icon-trophy h1"></i>
                    <h1 class="mt-3 mb-2">45,00</h1>
                    <p>Awards Won</p>
                </div>
                <div class="col-md-3">
                    <i class="icon-camera h1"></i>
                    <h1 class="mt-3 mb-2">120k</h1>
                    <p>Pictures Taken</p>
                </div>
                <div class="col-md-3">
                    <i class="icon-happy h1"></i>
                    <h1 class="mt-3 mb-2">30M+</h1>
                    <p>Happy Clients</p>
                </div>
                <div class="col-md-3">
                    <i class="icon-paintbrush h1"></i>
                    <h1 class="mt-3 mb-2">4,005</h1>
                    <p>Themes Designed</p>
                </div>
            </div>
        </div>
    </section>
      </>
       

        
      
    );
  }

export default Counter;