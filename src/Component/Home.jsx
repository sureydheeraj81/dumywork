import React, {  useState } from 'react';

import "./home.css";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import { Link } from 'react-router-dom';
import SubscriptionCharges1 from './Models/SubscriptionCharges1';

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);



  const openModal = (index) => {
    setActiveSlide(index);
    const modal = new window.bootstrap.Modal(document.getElementById('sliderModal'));
    modal.show();
  };

  const closeModal = () => {
    const modalElement = document.getElementById('sliderModal');
    const modal = window.bootstrap.Modal.getInstance(modalElement);
    modal.hide();
  };










  return (
    <>

      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="assets/images/img__b1.jpg" className="d-block w-100 " style={{ height: '70vh' }} alt="slide1" />
          </div>
          <div className="carousel-item">
            <img src="assets/images/img_b2.jpg" className="d-block w-100 " style={{ height: '70vh' }} alt="slide1" />
          </div>
          <div className="carousel-item">
            <img src="assets/images/img_b3.jpg" className="d-block w-100 " style={{ height: '70vh' }} alt="slide1" />
          </div>
          <div className="carousel-item">
            <img src="assets/images/img_b4.jpeg" className="d-block w-100 " style={{ height: '70vh' }} alt="slide1" />
          </div>
          <div className="carousel-item">
            <img src="assets/images/img_b5.jpeg" className="d-block w-100 " style={{ height: '70vh' }} alt="slide1" />
          </div>
          <div className="carousel-item">
            <img src="assets/images/img_b6.jpg" className="d-block w-100 " style={{ height: '70vh' }} alt="slide1" />
          </div>
          <div className="carousel-item">
            <img src="assets/images/img_b7_11.jpg" className="d-block w-100 " style={{ height: '70vh' }} alt="slide1" />
          </div>


        </div>
        <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bg-primary rounded" aria-hidden="true"></span>
          <span className="visually-hidden ">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon bg-primary rounded" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-8 col-md-3 mb-3 ">
            <button className="btn btn-primary rounded-pill btn-lg btn-block d-flex align-items-center justify-content-center">
              <HowToRegIcon style={{ fontSize: 50, color: 'white' }} />
              <span className="ms-2" style={{ fontSize: 22 }}>Registration</span>
            </button>
          </div>
          <div className="col-8 col-md-3 mb-3">
            <button className="btn btn-primary rounded-pill btn-lg btn-block d-flex align-items-center justify-content-center">
              <ArrowForwardIcon style={{ fontSize: 50, color: 'white' }} />
              <span className="ms-2" style={{ fontSize: 22 }}>Sign In</span>
            </button>
          </div>
          <div className="col-8 col-md-3 mb-3">
            <button className="btn btn-primary rounded-pill btn-lg btn-block d-flex align-items-center justify-content-center">
              <SubscriptionsIcon style={{ fontSize: 50, color: 'white' }} />
              <span className="ms-2" style={{ fontSize: 22 }}>Buy Subscription</span>
            </button>
          </div>
        </div>
      </div>
      <hr />

      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-8 home-intro">
              <h1> <div className="vr" style={{ color: "magenta", width: "7px", border: "1px solid red" }}></div> Introduction to Continuously Operating Reference Stations</h1>
              <p className='fs-5' style={{ textAlign: "justify" }}>Introduction to Continuously Operating Reference Stations
                Global Navigation Satellite Systems (GNSS) has revolutionized our ability to access location information. In nutshell
                it measures its distances from a bunch of satellites hovering over the earth in predefined orbits, through radio signals and estimates
                its own position on earth. However these systems have their own share of errors due to Orbit errors, Satellite Clock error, Receiver noise, Ionospheric
                and Tropospheric delays, Satellite Geometry over receiver and multipath etc, which causes dilution in its precision up to 10 -11 meters. To overcome this accuracy limit,
                various Surveying techniques such as DGNSS, Static GPS/GNSS surveying, RTK, SBAS, GBAS, and PPP are being used by Geospatial community. Each of these method works own principle of
                taking GNSS measurement. In most of GNSS applications where precise positioning
                is required, users usually pair their GNSS instruments with other GNSS instruments...</p>

              <Link to={"/readmore"} type='submit' className='btn btn-primary'>READ MORE</Link>



            </div>


            <div className="col-md-4 contain-update ">
              <div className=" w-100">
                <h3 className=' text-center p-2'>Latest Updates</h3>
                <div class="marquee-container">
                  <div className="marquee">
                    <div class="Latest-update"><img src='assets/images/Youtube.png' alt='youtube' /> <a href='https://www.youtube.com/watch?v=jgc_ALf2LMU' target='_blank'>सी ओ आर एस (CORS) क्या है?</a></div>
                    <div className="Latest-update"><img src='assets/images/Youtube.png' alt='youtube' /> <a href='https://www.youtube.com/watch?v=sxMXPO5L_ZU' target='_blank'>Introduction to CORS?</a></div>
                    <div className="Latest-update"><img style={{ width: "32px", height: "32px" }} src='assets/images/blink.gif' alt='general-info' /> <a href='https://www.youtube.com/watch?v=sxMXPO5L_ZU' target='_blank'>Click here to know the Details of CORS Services?</a></div>
                    <div className="Latest-update"><img style={{ width: "32px", height: "32px" }} src='assets/images/blink.gif' alt='youtube' /> <a href='https://www.youtube.com/watch?v=sxMXPO5L_ZU' target='_blank'>Click here for CORS Registration</a></div>
                    <div className="Latest-update"><img style={{ width: "32px", height: "32px" }} src='assets/images/blink.gif' alt='youtube' /> <a href='https://www.youtube.com/watch?v=sxMXPO5L_ZU' target='_blank'>Click here for Revised SOP for CORS Registration</a></div>
                    <div className="Latest-update"><img style={{ width: "32px", height: "32px" }} src='assets/images/blink.gif' alt='youtube' /> <a href='https://www.youtube.com/watch?v=sxMXPO5L_ZU' target='_blank'>Click here to know the Details of CORS Subscription Plan</a></div>
                    <div className="Latest-update"><img style={{ width: "32px", height: "32px" }} src='assets/images/blink.gif' alt='youtube' /> <a href='https://www.youtube.com/watch?v=sxMXPO5L_ZU' target='_blank'>Click here to know your CORS Region</a></div>
                    <div className="Latest-update"><img style={{ width: "32px", height: "32px" }} src='assets/images/blink.gif' alt='youtube' /> <a href='https://www.youtube.com/watch?v=sxMXPO5L_ZU' target='_blank'>Click here to know the Real Time Positioning Services Operational Area</a></div>
                    <div className="Latest-update"><img style={{ width: "32px", height: "32px" }} src='assets/images/blink.gif' alt='youtube' /> <a href='https://www.youtube.com/watch?v=sxMXPO5L_ZU' target='_blank'>Click here to know the Reference Data Services Operational Area</a></div>
                  </div>
                </div>


              </div>
            </div>








          </div>
        </div>
      </div>

      <div className="container-fluid mt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h1 ><div className="vr" style={{ color: "magenta", width: "7px", border: "1px solid red" }}></div> CORS Registration and Subscription</h1>
              <p className='fs-5' style={{ textAlign: "justify", }}>Registration for CORS services is free of cost and
                can be availed by all Indian entities by a simple online
                registration and KYC process. Link and SoP for registration
                are available in CORS services  portal  <a href='https://cors.surveyofindia.gov.in'>https://cors.surveyofindia.gov.in</a>.  After successful Registration to avail CORS services user need to acquire subscription
                for one or more service as per their choice.</p>

              <p className='fs-5 mt-4' style={{ textAlign: "justify" }}>Subscriptions are available free of charge basis to (1) Central Govt. users, (2) State Govt. users, (3) Govt. academic institutions. For rest of the categories, Subscriptions are available on the chargeable basis. Link for subscription purchase and rates of subscription packages are available in CORS service portal.</p>
            </div>
            <div className="col-md-4 ">
              <div className=" w-100 ">
                {/* <h3 className='  p-2'>CORS SERVICES</h3> */}
                <a href='assets/images/region.jpg' target='_blank'><img src='assets/images/region.jpg' alt='...' width={"100%"}></img></a>


              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid card-slide">
        <div className="container container-slide">
          <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">

              {slides.map((slide, index) => {
                if (index % 3 === 0) {
                  return (
                    <div
                      className={`carousel-item ${index === 0 ? 'active' : ''}`}
                      key={index}
                    >
                      <div className="row">
                        {slides.slice(index, index + 3).map((subslide, subIndex) => (
                          <div className="col-md-4" key={subIndex} onClick={() => openModal(index + subIndex)}>
                            <img src={subslide.imgSrc} className="d-block w-100" alt={`Slide ${index + subIndex + 1}`} />
                            {subslide.cors_description}
                            
                           <h4> {`${subslide.subscription_charges} +GST`}</h4>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="sliderModal"
        tabIndex="-1"
        aria-labelledby="sliderModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="sliderModalLabel">
                Plan Id : {slides[activeSlide].cors_plan}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">

              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Plan</th>
                    <th>Description</th>
                    <th>Charges</th>
                    <th>GST</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{slides[activeSlide].cors_plan}</td>
                    <td>{slides[activeSlide].cors_description}</td>
                    <td>{slides[activeSlide].subscription_charges}</td>
                    <td>{slides[activeSlide].GST_amt}</td>
                    <td>{slides[activeSlide].subscription_charges + slides[activeSlide].GST_amt}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button className="btn btn-success" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>



      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1> <div className="vr" style={{ color: "magenta", width: "7px", border: "1px solid red" }}></div>  Application Process</h1>
              <p className='fs-5' style={{ textAlign: "justify" }}>User can register himself by filling the Online Application Form available on the website. For this user needs to fill the personal information, viz., Name, Address, Mobile Number, Email id, Organization name, etc. Along with this, the user needs to download hardcopy of Annexures available in .pdf format on the web site and upload duly filled copy along with personal and organizational ID card copy during the registration process.</p>
              <h1 className='mt-3'> <div className="vr" style={{ color: "magenta", width: "7px", border: "1px solid red" }}></div>  Limitations</h1>
              <p className='fs-5' style={{ textAlign: "justify" }}> Each login entitles the subscriber to access one stream from the CORS servers anywhere in the Network at any time (but not for concurrent streams from two or more devices, to do so requires multiple-login subscriptions). Both type of Real time positioning Services, Network RTK and D-GNSS, surveys can only achieve relative positioning with desired precision when following a set of best practices. There are several important factors that need to be accounted for when doing RTK/RTN surveys. Many of these are common to other types of GNSS surveys and include: equipment calibration, atmospheric errors, multipath, satellite geometry, reference system integration, redundancy, and validation.</p>
              <p className='fs-5' style={{ textAlign: "justify" }}> Due to the rapidly changing environment of Global Navigation Satellite System (GNSS) positioning, Standard Operating Services will be dynamic, improvements to GNSS hardware and software, increased wireless communication capabilities, new signals, and additional satellite constellations will yield significantly easier, faster and more accurate RT positioning in the near future. Hence the users are advised to keep abreast themselves with guidelines and best practice documents made available on CORS Service Portal website as well as issued by their equipment’s manufacturer.</p>
              <h1 className='mt-3'> <div className="vr" style={{ color: "magenta", width: "7px", border: "1px solid red" }}></div>  No Warranties, Limitation of Liability</h1>
              <p className='fs-5' style={{ textAlign: "justify" }}>The Survey of India provides services on an 'as is' basis. There is no representation or warranty of merchantability or fitness for a particular purpose. CORS Services and information related thereto are subject to change without prior notice. Notwithstanding any provision to the contrary, in no event shall any party be liable to another party for any incidental, consequential, special, exemplary or indirect damages, lost business profits or lost data arising out of or in any way related to the usages of CORS data or services.</p>
              <h1 className='mt-3'> <div className="vr" style={{ color: "magenta", width: "7px", border: "1px solid red" }}></div> Connection Settings</h1>
              <p className='fs-5 mt-3' style={{ textAlign: "justify" }}>To access the CORS real time and post processing services, the user will need:

                <ul>
                  <li>Username and password,</li>
                  <li>Internet access,</li>
                  <li>Connection details:</li>
                </ul></p>

              <h3>IP Address and Port:</h3>
              <p className='fs-5'><b>For Region 1:</b>  IP: 103.205.244.106, Port: 2101<br />
                <b>For Region 2:</b>  IP: 43.240.5.42, Port: 2105</p>

            </div>
          </div>
        </div>
      </div>




    </>
  );
};

export default Home;

const slides = [
  {
    "imgSrc": 'assets/images/department-fig.jpg',
    "id": 1,
    "cors_plan": "RTK1",
    "cors_description": "1 Month Unlimited Subscription of Real Time Kinematic Correction Services",
    "subscription_charges": 5000,
    "GST_amt": 900,
    "cors_active": 1
  },
  {
    "imgSrc": 'assets/images/department-fig.jpg',
    "id": 2,
    "cors_plan": "RTK3",
    "cors_description": "3 Months Unlimited Subscription of Real Time Kinematic Correction Services",
    "subscription_charges": 15000,
    "GST_amt": 2700,
    "cors_active": 1
  },
  {
    "imgSrc": 'assets/images/department-fig.jpg',
    "id": 3,
    "cors_plan": "RTK6",
    "cors_description": "6 Months Unlimited Subscription of Real Time Kinematic Correction Services",
    "subscription_charges": 30000,
    "GST_amt": 5400,
    "cors_active": 1
  },
  {
    "imgSrc": 'assets/images/department-fig.jpg',
    "id": 4,
    "cors_plan": "RTK12",
    "cors_description": "1 Year Unlimited Subscription of Real Time Kinematic Correction Services",
    "subscription_charges": 60000,
    "GST_amt": 10800,
    "cors_active": 1
  },
  {
    "imgSrc": 'assets/images/department-fig.jpg',
    "id": 5,
    "cors_plan": "DGNSS1",
    "cors_description": "1 Month Unlimited Subscription of Differential GNSS Correction Services",
    "subscription_charges": 2000,
    "GST_amt": 360,
    "cors_active": 1
  },
  {
    "imgSrc": 'assets/images/department-fig.jpg',
    "id": 6,
    "cors_plan": "DGNSS3",
    "cors_description": "3 Months Unlimited Subscription of Differential GNSS Correction Services",
    "subscription_charges": 6000,
    "GST_amt": 1080,
    "cors_active": 1
  },
  {
    "imgSrc": 'assets/images/department-fig.jpg',
    "id": 7,
    "cors_plan": "DGNSS6",
    "cors_description": "6 Months Unlimited Subscription of Differential GNSS Correction Services",
    "subscription_charges": 12000,
    "GST_amt": 2160,
    "cors_active": 1
  },
  {
    "imgSrc": 'assets/images/department-fig.jpg',
    "id": 8,
    "cors_plan": "DGNSS12",
    "cors_description": "1 Year Unlimited Subscription of Differential GNSS Correction Services",
    "subscription_charges": 24000,
    "GST_amt": 4320,
    "cors_active": 1
  },
  {
    "imgSrc": 'assets/images/department-fig.jpg',
    "id": 9,
    "cors_plan": "RDS1",
    "cors_description": "CORS/VRS Data Download Subscription limited to 36,000 epoch (equivalent to 10 Hrs Data with 1 Sec frequency) valid for 1 Month",
    "subscription_charges": 48,
    "GST_amt": 9,
    "cors_active": 1
  },
  {
    "imgSrc": 'assets/images/department-fig.jpg',
    "id": 10,
    "cors_plan": "RDS3",
    "cors_description": "CORS/VRS Data Download Subscription limited to 1,08,000 epoch (equivalent to 30 Hrs Data with 1 Sec frequency) valid for 3 Months",
    "subscription_charges": 144,
    "GST_amt": 26,
    "cors_active": 1
  },
  {
    "imgSrc": 'assets/images/department-fig.jpg',
    "id": 11,
    "cors_plan": "RDS6",
    "cors_description": "CORS/VRS Data Download Subscription limited to 3,60,000 epoch (equivalent to 100 Hrs Data with 1 Sec frequency) valid for 6 Months",
    "subscription_charges": 480,
    "GST_amt": 86,
    "cors_active": 1
  },
  {
    "imgSrc": 'assets/images/department-fig.jpg',
    "id": 12,
    "cors_plan": "RDS20",
    "cors_description": "CORS/VRS Data Download Subscription limited to 7,20,000 epoch (equivalent to 200 Hrs Data with 1 Sec frequency) valid for 1 Year",
    "subscription_charges": 960,
    "GST_amt": 173,
    "cors_active": 1
  },
  {
    "imgSrc": 'assets/images/department-fig.jpg',
    "id": 13,
    "cors_plan": "RDS50",
    "cors_description": "CORS/VRS Data Download Subscription limited to 18,00,000 epoch (equivalent to 500 Hrs Data with 1 Sec frequency) valid for 1 Year",
    "subscription_charges": 2400,
    "GST_amt": 432,
    "cors_active": 1
  },
  {
    "imgSrc": 'assets/images/department-fig.jpg',
    "id": 14,
    "cors_plan": "OPS1",
    "cors_description": "Online GNSS Processing Subscription limited to 36,000 epoch (equivalent to 10 Hrs Data with 1 Sec frequency) valid for 1 Month",
    "subscription_charges": 180,
    "GST_amt": 32,
    "cors_active": 1
  },
  {
    "imgSrc": 'assets/images/department-fig.jpg',
    "id": 15,
    "cors_plan": "OPS3",
    "cors_description": "Online GNSS Processing Subscription limited to 1,08,000 epoch (equivalent to 30 Hrs Data with 1 Sec frequency) valid for 3 Months\u003C/p\u003E\r\n",
    "subscription_charges": 540,
    "GST_amt": 97,
    "cors_active": 1
  },
  {
    "imgSrc": 'assets/images/department-fig.jpg',
    "id": 16,
    "cors_plan": "OPS6",
    "cors_description": "Online GNSS Processing Subscription limited to 3,60,000 epoch (equivalent to 100 Hrs Data with 1 Sec frequency) valid for 6 Months",
    "subscription_charges": 1800,
    "GST_amt": 324,
    "cors_active": 1
  },
  {
    "imgSrc": 'assets/images/department-fig.jpg',
    "id": 17,
    "cors_plan": "OPS20",
    "cors_description": "Online GNSS Processing Subscription limited to 7,20,000 epoch (equivalent to 200 Hrs Data with 1 Sec frequency) valid for 1 Year",
    "subscription_charges": 3600,
    "GST_amt": 648,
    "cors_active": 1
  },
  {
    "imgSrc": 'assets/images/department-fig.jpg',
    "id": 18,
    "cors_plan": "OPS50",
    "cors_description": "Online GNSS Processing Subscription limited to 18,00,000 epoch (equivalent to 500 Hrs Data with 1 Sec frequency) valid for 1 Year",
    "subscription_charges": 9000,
    "GST_amt": 1620,
    "cors_active": 1
  },
  {
    "imgSrc": 'assets/images/department-fig.jpg',
    "id": 19,
    "cors_plan": "RTKRDS1",
    "cors_description": "Unlimited Subscription of Real Time Kinematic Correction Services and CORS/VRS Data Download Subscription limited to 36,000 epoch (equivalent to 10 Hrs Data with 1 Sec frequency) valid for 1 Month",
    "subscription_charges": 5032,
    "GST_amt": 906,
    "cors_active": 1
  },
  {
    "imgSrc": 'assets/images/department-fig.jpg',
    "id": 20,
    "cors_plan": "RTKRDS3",
    "cors_description": "Unlimited Subscription of Real Time Kinematic Correction Services and CORS/VRS Data Download Subscription limited to 1,08,000 epoch (equivalent to 30 Hrs Data with 1 Sec frequency) valid for 3 Months",
    "subscription_charges": 15096,
    "GST_amt": 2717,
    "cors_active": 1
  },
  {
    "imgSrc": 'assets/images/department-fig.jpg',
    "id": 21,
    "cors_plan": "RTKRDS6",
    "cors_description": "Unlimited Subscription of Real Time Kinematic Correction Services and CORS/VRS Data Download Subscription limited to 3,60,000 epoch (equivalent to 100 Hrs Data with 1 Sec frequency) valid for 6 Months\u003C/p\u003E\r\n",
    "subscription_charges": 30320,
    "GST_amt": 5458,
    "cors_active": 1
  },
  {
    "imgSrc": 'assets/images/department-fig.jpg',
    "id": 22,
    "cors_plan": "RTKRDS12",
    "cors_description": "Unlimited Subscription of Real Time Kinematic Correction Services and CORS/VRS Data Download Subscription limited to 7,20,000 epoch (equivalent to 200 Hrs Data with 1 Sec frequency) valid for 1 Year",
    "subscription_charges": 60640,
    "GST_amt": 10915,
    "cors_active": 1
  },
  {
    "imgSrc": 'assets/images/department-fig.jpg',
    "id": 23,
    "cors_plan": "DGNSSOPS1",
    "cors_description": "Unlimited Subscription of Differential GNSS Correction Services and Online GNSS Processing Subscription limited to 36,000 epoch (equivalent to 10 Hrs Data with 1 Sec frequency) valid for 1 Month",
    "subscription_charges": 2164,
    "GST_amt": 390,
    "cors_active": 1
  },
  {
    "imgSrc": 'assets/images/department-fig.jpg',
    "id": 24,
    "cors_plan": "DGNSSOPS3",
    "cors_description": "Unlimited Subscription of Differential GNSS Correction Services and Online GNSS Processing Subscription limited to 1,08,000 epoch (equivalent to 30 Hrs Data with 1 Sec frequency) valid for 3 Months\u003C/p\u003E",
    "subscription_charges": 6492,
    "GST_amt": 1169,
    "cors_active": 1
  },
  {
    "imgSrc": 'assets/images/department-fig.jpg',
    "id": 25,
    "cors_plan": "DGNSSOPS6",
    "cors_description": "Unlimited Subscription of Differential GNSS Correction Services and Online GNSS Processing Subscription limited to 3,60,000 epoch (equivalent to 100 Hrs Data with 1 Sec frequency) valid for 6 Months\u003C/p\u003E",
    "subscription_charges": 13640,
    "GST_amt": 2455,
    "cors_active": 1
  },
  {
    "imgSrc": 'assets/images/department-fig.jpg',
    "id": 26,
    "cors_plan": "DGNSSOPS12",
    "cors_description": "Unlimited Subscription of Differential GNSS Correction Services and Online GNSS Processing Subscription limited to 7,20,000 epoch (equivalent to 200 Hrs Data with 1 Sec frequency) valid for 1 Year",
    "subscription_charges": 27280,
    "GST_amt": 4910,
    "cors_active": 1
  },
  {
    "imgSrc": 'assets/images/department-fig.jpg',
    "id": 27,
    "cors_plan": "RDS300",
    "cors_description": "CORS/VRS Data Download Subscription limited to 1,08,00,000 epoch (equivalent to 3000 Hrs Data with 1 Sec frequency) valid for 1 Year",
    "subscription_charges": 14400,
    "GST_amt": 2592,
    "cors_active": 1
  },
  {
    "imgSrc": 'assets/images/department-fig.jpg',
    "id": 28,
    "cors_plan": "RTKOPS1",
    "cors_description": "Unlimited Subscription of Real Time Kinematic Correction Services and Online GNSS Processing Subscription limited to 36,000 epoch (equivalent to 10 Hrs Data with 1 Sec frequency) valid for 1 Month\u003C/p\u003E",
    "subscription_charges": 5164,
    "GST_amt": 930,
    "cors_active": 1
  },
  {
    "imgSrc": 'assets/images/department-fig.jpg',
    "id": 29,
    "cors_plan": "RTKOPS3",
    "cors_description": "Unlimited Subscription of Real Time Kinematic Correction Services and Online GNSS Processing Subscription limited to 1,08,000 epoch (equivalent to 30 Hrs Data with 1 Sec frequency) valid for 3 Months",
    "subscription_charges": 15492,
    "GST_amt": 2789,
    "cors_active": 1
  },
  {
    "imgSrc": 'assets/images/department-fig.jpg',
    "id": 30,
    "cors_plan": "RTKOPS6",
    "cors_description": "Unlimited Subscription of Real Time Kinematic Correction Services and Online GNSS Processing Subscription limited to 3,60,000 epoch (equivalent to 100 Hrs Data with 1 Sec frequency) valid for 6 Months",
    "subscription_charges": 31640,
    "GST_amt": 5695,
    "cors_active": 1
  },
  {
    "imgSrc": 'assets/images/department-fig.jpg',
    "id": 31,
    "cors_plan": "RTKOPS12",
    "cors_description": "Unlimited Subscription of Real Time Kinematic Correction Services and Online GNSS Processing Subscription limited to 7,20,000 epoch (equivalent to 200 Hrs Data with 1 Sec frequency) valid for 1 Year",
    "subscription_charges": 63280,
    "GST_amt": 11390,
    "cors_active": 1
  },
  {
    "imgSrc": 'assets/images/department-fig.jpg',
    "id": 32,
    "cors_plan": "DGNSSRDS1",
    "cors_description": "Unlimited Subscription of Differential GNSS Correction Services and CORS/VRS Data Download Subscription limited to 36,000 epoch (equivalent to 10 Hrs Data with 1 Sec frequency) valid for 1 Month",
    "subscription_charges": 2032,
    "GST_amt": 366,
    "cors_active": 1
  },
  {
    "imgSrc": 'assets/images/department-fig.jpg',
    "id": 33,
    "cors_plan": "DGNSSRDS3",
    "cors_description": "Unlimited Subscription of Differential GNSS Correction Services and CORS/VRS Data Download Subscription limited to 1,08,000 epoch (equivalent to 30 Hrs Data with 1 Sec frequency) valid for 3 Months",
    "subscription_charges": 6096,
    "GST_amt": 1097,
    "cors_active": 1
  },
  {
    "imgSrc": 'assets/images/department-fig.jpg',
    "id": 34,
    "cors_plan": "DGNSSRDS6",
    "cors_description": "Unlimited Subscription of Differential GNSS Correction Services and CORS/VRS Data Download Subscription limited to 3,60,000 epoch (equivalent to 100 Hrs Data with 1 Sec frequency) valid for 6 Months",
    "subscription_charges": 12320,
    "GST_amt": 2218,
    "cors_active": 1
  },
  {
    "imgSrc": 'assets/images/department-fig.jpg',
    "id": 35,
    "cors_plan": "DGNSSRDS12",
    "cors_description": "Unlimited Subscription of Differential GNSS Correction Services and CORS/VRS Data Download Subscription limited to 7,20,000 epoch (equivalent to 200 Hrs Data with 1 Sec frequency) valid for 1 Year",
    "subscription_charges": 24640,
    "GST_amt": 4435,
    "cors_active": 1
  }
]




























