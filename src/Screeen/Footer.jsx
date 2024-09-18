import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom'
import Slider from './Slider'

const Footer = () => {
  return (
    <>

      
      {/* <div className="marquee-container">
        <div className="marquee-content">
          <img src="assets/images/india-gov.png" alt="..." />
          <img src="assets/images/mii.png" alt="..." />
          <img src="assets/images/logo_survey_logo.png" alt="..." />
          <img src="assets/images/eage-logo.png" alt="..." />
          <img src="assets/images/data-gov.png" alt="..." />
          <img src="assets/images/dst-logo1.png" alt="..." />
          <img src="assets/images/digital.png" alt="..." />
          <img src="assets/images/pg-logo.png" alt="..." />
        </div>
      </div> */}


      {/* <footer className="footer img-fluid grayscale">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <h5>Contact Us</h5>
              <ul className="list-unstyled">
                <li><a href="#"><i className="fa-solid fa-caret-right text-white"></i>  Geodetic And Research Branch, Survey of India, 17 E.C. Road, Dehradun-248001</a></li>
                <li><a href="#"><i className="fa-solid fa-phone text-white"></i>  Phone : 0135-2975366,
                  0135-2713296</a></li>
                <li><a href="#"><i className="fa-regular fa-envelope"></i>  Email : cors-grb.soi@gov.in</a></li>
                <div className="text-start">
                  <div className="social-icons">
                    <a href="#" className="text-light text-white"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="text-light text-white"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="text-light text-white"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="text-light text-white"><i className="fab fa-linkedin-in"></i></a>
                  </div>
                </div>
              </ul>

            </div>
            <div className="col-md-2">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><Link to={"/faq"} href="#"> <i className="fa-solid fa-arrow-right-from-bracket"></i> FAQs</Link></li>
                <li><a href="#"> <i className="fa-solid fa-arrow-right-from-bracket"></i>RTI</a></li>
                <li><a href="#"> <i className="fa-solid fa-arrow-right-from-bracket"></i>Feedback</a></li>
                <li><a href="#"><i className="fa-solid fa-arrow-right-from-bracket"></i>Public Grievances</a></li>
                <li><a href="#"><i className="fa-solid fa-arrow-right-from-bracket"></i>Software and Plugins</a></li>
                <li><a href="#"><i className="fa-solid fa-arrow-right-from-bracket"></i>Accessbility Statement</a></li>




              </ul>
            </div>
            <div className="col-md-2">
              <h5>Websites Policies</h5>
              <ul className="list-unstyled">
                <li><a href="#">Accessbility Options</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Hyperlinking Policy</a></li>
                <li><a href="#">Copyright Policy</a></li>
                <li><a href="#">Terms and Conditions</a></li>
                <li><a href="#">Disclaimer</a></li>



              </ul>
            </div>

            <div className="col-md-2">
              <h5>Locate Us</h5>
              <ul className="list-unstyled">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">FAQs</a></li>
              </ul>
            </div>



          </div>
          <hr />
          <div className="text-center mt-4">
            <p className="mb-0">Website Content Owned and Managed by CORS Processing and Monitoring Center
              <div>  2024 © CORS | Survey of India | All Rights Reseved.</div>
              Last Updated on: 12-Sep-2024 02:25 PM</p>
          </div>
        </div>
      </footer > */}

      {/* <footer>
        <div className="widget_wrap overlay" id="footer-wrap">
          <div className="container">
            <div className="row footer-main">
              <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
                <h5 className="footer-heading white">Contact Us</h5>
                <div className="footer-heading-bottom"></div>
                <ul className="list-unstyled">
                  <li>
                    <p className="py-1 d-block white">&#9655; Geodetic And Research Branch, Survey of India, 17 E.C.
                      Road, Dehradun-248001</p>
                  </li>
                  <li>
                    <p className="py-1 d-block white"> &#9743; Phone : 0135-2975366, <br />0135-2713296 </p>
                  </li>
                  <li>
                    <p className="py-1 d-block  white">&#9993; Email : cors-grb.soi@gov.in</p>
                  </li>
                  <ul className="social-links">
                    <li><a href="https://www.facebook.com/SOIDST" target="_blank" className="me-4 text-reset white">
                      <i className="fab fa-2x fa-facebook-f" style={{color:"#fff"}}></i></a></li>
                    <li><a href="https://x.com/india_soi" target="_blank" className="me-4 text-reset white">
                      <i className="fab fa-2x fa-twitter" style={{color:"#fff"}}></i></a></li>
                    <li><a href="https://www.instagram.com/surveyofindia_dst/" target="_blank" className="me-4 text-reset white">
                      <i className="fab fa-2x fa-instagram" style={{color:"#fff"}}></i></a></li>
                    <li><a href="https://www.linkedin.com/company/survey-of-india-dist?trk=public_post_feed-actor-name" target="_blank" className="me-4 text-reset white">
                      <i className="fab fa-2x fa-linkedin" style={{color:"#fff"}}></i></a></li>
                    <li><a href="https://www.youtube.com/@soicors" target="_blank" className="me-4 text-reset white">
                      <i className="fab fa-2x fa-youtube" style={{color:"#fff"}}></i></a></li>
                  </ul>
                </ul>
              </div>

              <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
                <h5 className="footer-heading white">Quick Links</h5>
                <div className="footer-heading-bottom"></div>
                <ul className="list-unstyled">
                  <li><a href="faq.php" className="py-1 d-block white">&#8618; FAQs</a></li>
                  <li><a href="rti.php" className="py-1 d-block  white">&#8618; RTI</a></li>
                  <li><a href="feedback.php" className="py-1 d-block  white">&#8618;
                    Feedback</a></li>
                  <!-- <li><a href="" className="py-1 d-block  white">&#8618;  Notices</a></li> 
                  <li><a href="https://www.pgportal.gov.in/" className="py-1 d-block white" target="_blank">&#8618;
                    Public Grievances</a></li>
                  <li><a href="software-and-plugins.php" className="py-1 d-block  white">&#8618; Software and Plugins</a></li>
                  <li><a href="accessbility-statement.php" className="py-1 d-block  white">&#8618; Accessbility Statement</a></li>
                </ul>
              </div>
              <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
                <h5 className="footer-heading white">Website Policies</h5>
                <div className="footer-heading-bottom"></div>
                <ul className="list-unstyled">
                  <li><a href="accessbility-options.php" className="py-1 d-block white">&#8618; Accessbility Options</a></li>
                  <li><a href="privacy-policy.php" className="py-1 d-block  white">&#8618;
                    Privacy Policy</a></li>
                  <li><a href="hyperlinking.php" className="py-1 d-block  white">&#8618;
                    Hyperlinking Policy</a></li>
                  <li><a href="copyright-policy.php" className="py-1 d-block  white">&#8618;
                    Copyright Policy</a></li>
                  <li><a href="terms-and-conditions.php" className="py-1 d-block white">&#8618; Terms and Conditions</a></li>
                  <li><a href="disclaimer.php" className="py-1 d-block  white">&#8618;
                    Disclaimer</a></li>
                </ul>
              </div>
              <div className="col-md-4 col-lg-3 mb-md-0 mb-4">
                <h5 className="footer-heading white">Locate Us</h5>
                <div className="footer-heading-bottom"></div>
                <div className="mapouter">
                  <div className="gmap_canvas">
                    <iframe width="250" height="200" id="gmap_canvas" src="https://maps.google.com/maps?q=17%20E,%20Canal%20Road,%20Survey%20Chowk,%20Dalanwala,%20Dehradun,%20Uttarakhand%20248001&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>

                  </div>
                  <a href="https://www.embedgooglemap.net"></a>

                </div>
              </div>
            </div>
          </div>
          <hr style={{"margin: "10px 0px !important" }}/>
          <div className="text-center copyright">
            Website Content Owned and Managed by CORS Processing and Monitoring Center<br />
            &copy; CORS | Survey of India | All Rights Reseved. <br />
            Last Updated on: 01-Sept-2024 03:15 PM
          </div>
        </div>
      </footer> */}
      <Slider/>
    </>
  )
}

export default Footer










