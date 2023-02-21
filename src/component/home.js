import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './navbar';
import Hero from './hero';
import Service from './service';
import About from './about';
import Feature from './feature';
import Counter from './counter';
import Review from './review';
import Contact from './contact';
import Footer from './footer';
import Blog from './blog';

function Home() {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
      <>
       <div data-bs-spy="scroll" data-bs-target=".navbar">
        <Navbar/>
        <Hero/>
        <Service/>
        <About/>
        <Feature/>
        <Counter/>
        <Review/>
        <Blog/>
        <Contact/>
        <Footer/>
        </div>

      </>
       

        
      
    );
  }

export default Home;