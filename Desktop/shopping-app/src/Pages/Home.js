import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import BlogCard from '../Components/BlogCard';
import ProductCard from '../Components/ProductCard';

const Home = () => {
  return (
    <>
     <section className='home-wrapper-1 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-6'>
            <div className='main-banner position-relative p-3'>
              <img src="images/main-banner-1.jpg " className='img-fluid rounded-3' alt='main-banner'/>
              <div className='main-banner-content position-absolute'>
                <h4>SUPERCHARGERD FOR PROS.</h4>
                <h5>iPad S13+Pro.</h5>
                <p>from $999.00 or $41.62/mo<br/>for 24 mo.footnote.</p>
                <Link className='button'>BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className='col-6'>
            <div className='d-flex flex-wrap justify-content-between align-items-center'>
            <div className='small-banner position-relative gap-10 p-1'>
              <img src="images/catbanner-01.jpg " className='img-fluid rounded-3' alt='main-banner'/>
              <div className='small-banner-content position-absolute'>
                <h4>SUPERCHARGERD FOR PROS.</h4>
                <h5>iPad S13+Pro.</h5>
                <p>from $999.00 or $41.62/mo<br/>for 24 mo.footnote.</p>
              </div>
            </div>
            
            <div className='small-banner position-relative p-1'>
              <img src="images/catbanner-03.jpg " className='img-fluid rounded-3' alt='main-banner'/>
              <div className='small-banner-content position-absolute'>
                <h4>SUPERCHARGERD FOR PROS.</h4>
                <h5>iPad S13+Pro.</h5>
                <p>from $999.00 or $41.62/mo<br/>for 24 mo.footnote.</p>
              </div>
            </div>
            
            <div className='small-banner position-relative p-1'>
              <img src="images/catbanner-04.jpg " className='img-fluid rounded-3' alt='main-banner'/>
              <div className='small-banner-content position-absolute'>
                <h4>SUPERCHARGERD FOR PROS.</h4>
                <h5>iPad S13+Pro.</h5>
                <p>from $999.00 or $41.62/mo<br/>for 24 mo.footnote.</p>
              </div>
            </div>
            
            <div className='small-banner position-relative p-1'>
              <img src="images/catbanner-02.jpg " className='img-fluid rounded-3' alt='main-banner'/>
              <div className='small-banner-content position-absolute'>
                <h4>SUPERCHARGERD FOR PROS.</h4>
                <h5>iPad S13+Pro.</h5>
                <p>from $999.00 or $41.62/mo<br/>for 24 mo.footnote.</p>
              </div>
            </div>
            


            </div>
          </div>
        </div>
      </div>
      </section> 

      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='services d-flex align-items-center justify-content-between'>
                  <div className='d-flex align-items-center gap-15'>
                    <img src='images/service.png' alt='services'/>
                  <div>
                    <h6>Free Service</h6>
                    <p className="mb-0">From All Orders From $5</p>
                    </div>
                  </div >
                  <div className='d-flex align-items-center gap-15'>
                    <img src='images/service-02.png' alt='services'/>
                  <div>
                    <h6>Daily Serprise Offers</h6>
                    <p className="mb-0">Save upto 25% off</p>
                    </div>
                  </div>
                  <div className='d-flex align-items-center gap-15'>
                    <img src='images/service-03.png' alt='services'/>
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an expert</p>
                    </div>
                  </div>
                  <div className='d-flex align-items-center gap-15'>
                    <img src='images/service-04.png' alt='services'/>
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Get factory default price</p>
                    </div>
                  </div>
                  <div className='d-flex align-items-center gap-15'>
                    <img src='images/service-05.png' alt='services'/>
                  <div >
                    <h6>Secure payments</h6>
                    <p className="mb-0">100% protected payments</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='home-wrapper-03 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='categories flex-wrap d-flex justify-content-between align-items-center'>
                <div className='d-flex  align-items-center gap-10 justify-content-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/camera.jpg' alt='camera'/>
                </div>

                <div className='d-flex align-items-center gap-10 justify-content-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/homeapp.jpg' alt='camera'/>
                </div>

                <div className='d-flex align-items-center gap-10 justify-content-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/footware.jpg' alt='camera'/>
                </div>

                <div className='d-flex align-items-center gap-10 justify-content-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/tv.jpg' alt='camera'/>
                </div>
                
                <div className='d-flex align-items-center  gap-10 justify-content-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/j.jpg' alt='camera'/>
                </div>

                <div className='d-flex align-items-center gap-10 justify-content-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/speaker.jpg' alt='camera'/>
                </div>

                <div className='d-flex align-items-center gap-10 justify-content-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/laptop.jpg' alt='camera'/>
                </div>

                <div className='d-flex align-items-center gap-10 justify-content-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/headphone.jpg' alt='camera'/>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='marque-wrapper py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='marquee-inner-wrapper card-wrapper'>
            <Marquee className='d-flex'>
                <div className='mx-4 w-25'>
                  <img src="images/brand-01.png" alt="brand"/>
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-02.png" alt="brand"/>
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-03.png" alt="brand"/>
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-04.png" alt="brand"/>
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-05.png" alt="brand"/>
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-06.png" alt="brand"/>
                </div>
                <div>
                  <img src="images/brand-07.png" alt="brand"/>
                </div>
                <div>
                  <img src="images/brand-08.png" alt="brand"/>
                </div>
            </Marquee>
            </div>
          </div>
        </div>
      </div>
      </section>

      <section className='blog-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Featured Collection</h3>
            </div>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>

          </div>
        </div>
      </section>

      <section className='blog-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Latest Blogs</h3>
            </div>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
