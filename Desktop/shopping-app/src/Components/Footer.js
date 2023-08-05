import React from 'react'
import {Link } from 'react-router-dom'
import {BsLinkedin,BsGithub,BsFacebook,BsYoutube, BsInstagram} from 'react-icons/bs'
const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
              <div className='col-5'>
                <div className='footer-top-data d-flex gap-30 align-items-center'>
                  <img src="images/newsletter.png" alt='-imagenewsletter'/>
                  <h2 className='mb-0 text-white'>Sign Up For Newsletter</h2>
                </div>
              </div>
              <div className='col-7'>
              <div className="input-group ">
            <input type="text" className="form-control py-1" 
            placeholder="Your Email Address"
             aria-label="Your Email Address" aria-describedby="basic-addon2"/>
             <span className="input-group-text p-2" id="basic-addon2"> {/* p-3 means padding from left right top and bottom */}
              Subscribe</span>
          </div>
              </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
          <div className='container-xxl'>
            <div className='row'>
                <div className='col-4'>
                  <h4 className='text-white mb-4'>Contact Us</h4>
                  <div>
                    <address className='text-white'>
                      HNo:11 Mite College Campus Moodbidri<br/>
                      PinCode:
                    </address>
                    <a href='tel:+91 8618986849' className='mt-4 d-block mb-1 text-white'>
                      +91 8618986849</a>
                      <a href='mail-to:Archana@dlithe.com' className='mt-4 d-block mb-0 text-white'>
                      Archana@dlithe.com</a>
                      <div className='social-icons d-flex align-items-center gap-15'>
                        <a href=''><BsGithub className='text-white fs-4'/></a>
                        <a href=''><BsFacebook className='text-white fs-4'/></a>
                        <a href=''><BsLinkedin className='text-white fs-4'/></a>
                        <a href=''><BsYoutube className='text-white fs-4'/></a>
                        <a href=''><BsInstagram className='text-white fs-4'/></a>
                      </div>
                  </div>
                </div>
                <div className='col-3'>
                  <h4 className='text-white mb-4'>Information</h4>
                  <div className='footer-links d-flex flex-column'>
                    <Link className='text-white py-2 mb-1'>Privacy Policy</Link>
                    <Link className='text-white py-2 mb-1'>Refund Policy</Link>
                    <Link className='text-white py-2 mb-1'>Shipping Policy</Link>
                    <Link className='text-white py-2 mb-1'>Terms and conditions</Link>
                    <Link className='text-white py-2 mb-1'>Blogs</Link>
                    </div>
                </div>
                <div className='col-3'>
                  <h4 className='text-white mb-4'>Account</h4>
                  <div className='footer-links d-flex flex-column'>
                    <Link className='text-white  py-2 mb-1'>About Us</Link>
                    <Link className='text-white  py-2 mb-1'>Faq</Link>
                    <Link className='text-white  py-2 mb-1'>Contact</Link>
                  </div>
                </div>
                <div className='col-2'>
                  <h4 className='text-white mb-4'>Quick links</h4>
                  <div className='footer-links d-flex flex-column'>
                    <Link className='text-white py-2 mb-1'>Laptops</Link>
                    <Link className='text-white py-2 mb-1'>Headphones</Link>
                    <Link className='text-white py-2 mb-1'>Tablets</Link>
                    <Link className='text-white py-2 mb-1'>Watch</Link>
                    </div>
                </div>
            </div>
          </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'>&copy; {new Date().getFullYear()};Powered by DLithe</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
