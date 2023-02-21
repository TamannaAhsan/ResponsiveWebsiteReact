import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Blog1 from './img/blog_post1.png' ;
import Blog2 from './img/blog_post2.png' ;
import Blog3 from './img/blog_post3.png' ;


function Blog() {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
      <>
       <section id="blog" class="bg-light">
        <div class="container">
            <div class="row">
                <div class="col-12 section-intro text-center" data-aos="fade-up">
                    <h1>Our Blog Posts</h1>
                    <div class="divider"></div>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                        suffered<br/>
                        alteration in some form, by injected humour, or randomised words which don't look even slightly
                    </p>
                </div>
            </div>
            <div class="row text-start">
                <div class="col-md-4" data-aos="fade-up">
                    <img src={Blog1} alt=""/>
                    <div class="mt-4">
                        <small>Posted in <a href="#">Web Design</a>, 12 Dec 2055</small>
                        <h5 class="mt-1 mb-2"><a href="#">Website design in 2055</a></h5>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis aperiam unde officiis?</p>
                    </div>
                </div>
                <div class="col-md-4" data-aos="fade-up">
                    <img src={Blog2} alt=""/>
                    <div class="mt-4">
                        <small>Posted in <a href="#">Web Design</a>, 12 Dec 2055</small>
                        <h5 class="mt-1 mb-2"><a href="#">Website design in 2055</a></h5>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis aperiam unde officiis?</p>
                    </div>
                </div>
                <div class="col-md-4" data-aos="fade-up">
                    <img src={Blog3} alt=""/>
                    <div class="mt-4">
                        <small>Posted in <a href="#">Web Design</a>, 12 Dec 2055</small>
                        <h5 class="mt-1 mb-2"><a href="#">Website design in 2055</a></h5>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis aperiam unde officiis?</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
      </>   
      
    );
  }

export default Blog;