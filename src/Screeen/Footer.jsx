import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom'
import Slider from './Slider'

const Footer = () => {
  return (
    <>
     <Slider/>
      <footer className="footer bg-dark p-4 text-light clearfix footer-dd">
      <div className="container-fluid col-md-12 col-lg-12 col-xl-12 ">
        <div className="row">
          <div className="col-md-3 col-lg-3 col-xl-3">
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
              <li>Geodetic And Research Branch, Survey of India</li>
              <li>17 E.C. Road, Dehradun-248001</li>
              <li>Phone: 0135-2975366, 0135-2713296</li>
              <li>Email: <a to="mailto:cors-grb.soi@gov.in" className="text-light">cors-grb.soi@gov.in</a></li>
            </ul>
            <div className="social-icons mt-3">
              <Link to="https://x.com/i/flow/login?redirect_after_login=%2Findia_soi" target='_blank'><i className="fab fa-twitter"></i></Link>
              <Link to="https://www.facebook.com/SOIDST" target='_blank'><i className="fab fa-facebook-f"></i></Link>
              <Link to="https://www.instagram.com/surveyofindia_dst/" target='_blank'><i className="fab fa-instagram"></i></Link>
              <Link to="https://www.linkedin.com/company/survey-of-india-dist?trk=public_post_feed-actor-name" target='_blank'><i className="fab fa-linkedin-in"></i></Link>
              <Link to="https://www.youtube.com/@soicors" target='_blank'><i className="fab fa-youtube"></i></Link>
            </div>
          </div>

          <div className="col-md-3 col-lg-3 col-xl-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li> <i className="fa-solid fa-right-from-bracket"></i>   <Link to="#" className="text-light">FAQs</Link></li>
              <li> <i className="fa-solid fa-right-from-bracket"></i>  <Link to="#" className="text-light">RTI</Link></li>
              <li><i className="fa-solid fa-right-from-bracket"></i>  <Link to="#" className="text-light">Feedback</Link></li>
              <li><i className="fa-solid fa-right-from-bracket"></i>  <Link to="#" className="text-light">Public Grievances</Link></li>
              <li><i className="fa-solid fa-right-from-bracket"></i>  <Link to="#" className="text-light">Software and Plugins</Link></li>
              <li><i className="fa-solid fa-right-from-bracket"></i>  <Link to="#" className="text-light">Accessibility Statement</Link></li>
            </ul>
          </div>

          <div className="col-md-3 col-lg-3 col-xl-3">
            <h5>Website Policies</h5>
            <ul className="list-unstyled">
              <li><Link to="#" className="text-light">Accessibility Options</Link></li>
              <li><Link to="#" className="text-light">Privacy Policy</Link></li>
              <li><Link to="#" className="text-light">Hyperlinking Policy</Link></li>
              <li><Link to="#" className="text-light">Copyright Policy</Link></li>
              <li><Link to="#" className="text-light">Terms and Conditions</Link></li>
              <li><Link to="#" className="text-light">Disclaimer</Link></li>
            </ul>
          </div>

          <div className="col-md-3 col-lg-3 col-xl-3">
            <h5>Locate Us</h5>
            <div >
              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.6230734147547!2d77.99812621509593!3d30.320545281784088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092957f2b82e35%3A0x5d614cfa6aa1eefe!2sSurvey%20Of%20India%2C%20Dehradun!5e0!3m2!1sen!2sin!4v1631616100751!5m2!1sen!2sin"
                width="100%" height="1200px" style={{ border: 0 }} allowFullScreen="" loading="lazy" ></iframe> */}
            </div>
           
          </div>
        </div>

       
        <div className="row ">
          <div className="col-md-12 col-lg-12 col-sm-12 col-xl-12 fs-1 text-light text-center">
        <hr/>
            <p className="m-0">
              Website Content Owned and Managed by CORS Processing and Monitoring Center
              <br />
              2024 © CORS | Survey of India | All Rights Reserved.
            </p>
            <p>Last Updated on: 12-Sep-2024 02:25 PM</p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer










