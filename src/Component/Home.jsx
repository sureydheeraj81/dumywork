import React, { useEffect, useRef, Component } from 'react';
// import React, { } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.css";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import { Link } from 'react-router-dom';

const Home = () => {
  var settings = {
    // dots: true,
    // fade: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    // waitForAnimate: true,
    // vertical: true, 
    // verticalSwiping: true , 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  };


  // const carouselRef = useRef(null);

  // useEffect(() => {
  //   // Initialize the Bootstrap carousel with an interval
  //   const carousel = carouselRef.current;
  //   const bootstrapCarousel = new window.bootstrap.Carousel(carousel, {
  //     interval: 1000, // Interval in milliseconds (3 seconds)
  //     wrap: true,     // Continuously cycle through slides
  //   });

  //   // Cleanup function to dispose of the carousel when the component unmounts
  //   return () => {
  //     bootstrapCarousel.dispose();
  //   };
  // });

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
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
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

      <div className="flud-container">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h1>Introduction to Continuously Operating Reference Stations</h1>
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
                <marquee width="100%" direction="up" className="marque">
                  <div className="Latest-update"><img src='assets/images/Youtube.png' alt='youtue'></img> <a href='https://www.youtube.com/watch?v=jgc_ALf2LMU'>सी ओ आर एस (CORS) क्या है? </a> </div>
                  <div className="Latest-update"><img src='assets/images/Youtube.png' alt='youtue'></img> <a href='https://www.youtube.com/watch?v=sxMXPO5L_ZU'>Introduction  to CORS ? </a> </div>
                  <div className="Latest-update"><img style={{ width: "32px", height: "32px" }} src='assets/images/blink.gif' alt='general-info'></img> <a href='https://www.youtube.com/watch?v=sxMXPO5L_ZU'>Click here to  know the  Details of  CORS Services ? </a> </div>
                  <div className="Latest-update"><img style={{ width: "32px", height: "32px" }} src='assets/images/blink.gif' alt='youtue'></img> <a href='https://www.youtube.com/watch?v=sxMXPO5L_ZU'>Click here for CORS Registration </a> </div>
                  <div className="Latest-update"><img style={{ width: "32px", height: "32px" }} src='assets/images/blink.gif' alt='youtue'></img> <a href='https://www.youtube.com/watch?v=sxMXPO5L_ZU'>Click here for Revised SOP for CORS Registration </a> </div>
                  <div className="Latest-update"><img style={{ width: "32px", height: "32px" }} src='assets/images/blink.gif' alt='youtue'></img> <a href='https://www.youtube.com/watch?v=sxMXPO5L_ZU'>Click here to know the Details of CORS Subscription Plan  </a> </div>
                  <div className="Latest-update"><img style={{ width: "32px", height: "32px" }} src='assets/images/blink.gif' alt='youtue'></img> <a href='https://www.youtube.com/watch?v=sxMXPO5L_ZU'>Click here to know your CORS Region </a> </div>
                  <div className="Latest-update"><img style={{ width: "32px", height: "32px" }} src='assets/images/blink.gif' alt='youtue'></img> <a href='https://www.youtube.com/watch?v=sxMXPO5L_ZU'>Click here to know the Real Time Positioning Services Operational Area </a> </div>
                  <div className="Latest-update"><img style={{ width: "32px", height: "32px" }} src='assets/images/blink.gif' alt='youtue'></img> <a href='https://www.youtube.com/watch?v=sxMXPO5L_ZU'>Click here to know the Reference Data Services Operational Area</a> </div>
                </marquee>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flud-container">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>CORS Registration and Subscription</h1>
              <p className='fs-5' style={{ textAlign: "justify" }}>Registration for CORS services is free of cost and
                can be availed by all Indian entities by a simple online
                registration and KYC process. Link and SoP for registration
                are available in CORS services  portal  <a href='https://cors.surveyofindia.gov.in'>https://cors.surveyofindia.gov.in</a>.  After successful Registration to avail CORS services user need to acquire subscription
                for one or more service as per their choice.</p>

              <p className='fs-5' style={{ textAlign: "justify" }}>Subscriptions are available free of charge basis to (1) Central Govt. users, (2) State Govt. users, (3) Govt. academic institutions. For rest of the categories, Subscriptions are available on the chargeable basis. Link for subscription purchase and rates of subscription packages are available in CORS service portal.</p>
            </div>
            <div className="col-md-6 ">
              <div className=" w-100">
                {/* <h3 className='  p-2'>CORS SERVICES</h3> */}
                <img src='assets/images/region.jpg' alt='...' width={"100%"}></img>


              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="fluid-container">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="card mb-2" >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src="assets/images/department-fig.jpg" className="img-fluid rounded-start" alt="Card image" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">RTK 1</h5>
                      <p className="card-text" style={{ textAlign: "justify" }}>
                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a bit longer.
                      </p>
                      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-md-3">
              <div className="card mb-2" >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src="assets/images/department-fig.jpg" className="img-fluid rounded-start" alt="Card image" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">RTK 3</h5>
                      <p className="card-text">
                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a bit longer.
                      </p>
                      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-md-3">
              <div className="card mb-2" >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src="assets/images/department-fig.jpg" className="img-fluid rounded-start" alt="Card image" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">RTK 6</h5>
                      <p className="card-text">
                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a bit longer.
                      </p>
                      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="card mb-2" >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src="assets/images/department-fig.jpg" className="img-fluid rounded-start" alt="Card image" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">RTK 12</h5>
                      <p className="card-text">
                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a bit longer.
                      </p>
                      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-md-3">
              <div className="card mb-2" >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src="assets/images/department-fig.jpg" className="img-fluid rounded-start" alt="Card image" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">DGNSS 1</h5>
                      <p className="card-text">
                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a bit longer.
                      </p>
                      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-md-3">
              <div className="card mb-2" >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src="assets/images/department-fig.jpg" className="img-fluid rounded-start" alt="Card image" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">DGNSS 3</h5>
                      <p className="card-text">
                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a bit longer.
                      </p>
                      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>

          <div className="row">
            <div className="col-md-3">
              <div className="card mb-2" >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src="assets/images/department-fig.jpg" className="img-fluid rounded-start" alt="Card image" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">DGNSS 6</h5>
                      <p className="card-text">
                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a bit longer.
                      </p>
                      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-md-3">
              <div className="card mb-2" >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src="assets/images/department-fig.jpg" className="img-fluid rounded-start" alt="Card image" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">DGNSS 12</h5>
                      <p className="card-text">
                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a bit longer.
                      </p>
                      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-md-3">
              <div className="card mb-12" >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src="assets/images/department-fig.jpg" className="img-fluid rounded-start" alt="Card image" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">DGNSS 3</h5>
                      <p className="card-text">
                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a bit longer.
                      </p>
                      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div> */}






      <div className="fluid-container card-slide">
        <div className="container container-slide">
          <div className="slider-container">
            <div className="row ">
              <Slider {...settings}>
                {data.map((d) => (
                  <div className=' col-md-4  col-4 col-lg-4 border cards-work'   >

                    <div >
                      <img src={d.img}  alt="Card-image" />
                        <h5 >{d.name}</h5>
                    </div>
                    <div >
                      <div >
                        <p >
                          {d.dis}
                        </p>
                      </div>
                    </div>


                  </div>

                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>










      <div className="fluid-container">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Application Process</h1>
              <p className='fs-5' style={{ textAlign: "justify" }}>User can register himself by filling the Online Application Form available on the website. For this user needs to fill the personal information, viz., Name, Address, Mobile Number, Email id, Organization name, etc. Along with this, the user needs to download hardcopy of Annexures available in .pdf format on the web site and upload duly filled copy along with personal and organizational ID card copy during the registration process.</p>
              <h1>Limitations</h1>
              <p className='fs-5' style={{ textAlign: "justify" }}>Each login entitles the subscriber to access one stream from the CORS servers anywhere in the Network at any time (but not for concurrent streams from two or more devices, to do so requires multiple-login subscriptions). Both type of Real time positioning Services, Network RTK and D-GNSS, surveys can only achieve relative positioning with desired precision when following a set of best practices. There are several important factors that need to be accounted for when doing RTK/RTN surveys. Many of these are common to other types of GNSS surveys and include: equipment calibration, atmospheric errors, multipath, satellite geometry, reference system integration, redundancy, and validation.</p>
              <p className='fs-5' style={{ textAlign: "justify" }}>Due to the rapidly changing environment of Global Navigation Satellite System (GNSS) positioning, Standard Operating Services will be dynamic, improvements to GNSS hardware and software, increased wireless communication capabilities, new signals, and additional satellite constellations will yield significantly easier, faster and more accurate RT positioning in the near future. Hence the users are advised to keep abreast themselves with guidelines and best practice documents made available on CORS Service Portal website as well as issued by their equipment’s manufacturer.</p>
              <h1>No Warranties, Limitation of Liability</h1>
              <p className='fs-5' style={{ textAlign: "justify" }}>The Survey of India provides services on an 'as is' basis. There is no representation or warranty of merchantability or fitness for a particular purpose. CORS Services and information related thereto are subject to change without prior notice. Notwithstanding any provision to the contrary, in no event shall any party be liable to another party for any incidental, consequential, special, exemplary or indirect damages, lost business profits or lost data arising out of or in any way related to the usages of CORS data or services.</p>
              <h1>Connection Settings</h1>
              <p className='fs-5' style={{ textAlign: "justify" }}>To access the CORS real time and post processing services, the user will need:

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



let data = [
  {
    name: "RTK 1",
    img: "assets/images/department-fig.jpg",
    dis: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a bit longer.",
  },
  {
    name: "RTK 3",
    img: "assets/images/department-fig.jpg",
    dis: "Get access to all sports within Your city",
  },
  {
    name: "RTK 6",
    img: "assets/images/department-fig.jpg",
    dis: "Get access to all sports within Your city",
  },
  {
    name: "RTK 12",
    img: "assets/images/department-fig.jpg",
    dis: "Get access to all sports within Your city",
  },
  {
    name: "DGNSS 1",
    img: "assets/images/department-fig.jpg",
    dis: "Get access to all sports within Your city",
  },
  {
    name: "DGNSS 3",
    img: "assets/images/department-fig.jpg",
    dis: "Get access to all sports within Your city",
  },
  {
    name: "DGNSS 6",
    img: "assets/images/department-fig.jpg",
    dis: "Get access to all sports within Your city",
  },
  {
    name: "DGNSS 12",
    img: "assets/images/department-fig.jpg",
    dis: "Get access to all sports within Your city",
  },
  {
    name: "RDS6",
    img: "assets/images/department-fig.jpg",
    dis: "Get access to all sports within Your city",
  },
  {
    name: "RDS20",
    img: "assets/images/department-fig.jpg",
    dis: "Get access to all sports within Your city",
  },
  {
    name: "RDS50",
    img: "assets/images/department-fig.jpg",
    dis: "Get access to all sports within Your city",
  },
  {
    name: "OPS1",
    img: "assets/images/department-fig.jpg",
    dis: "Get access to all sports within Your city",
  },
  {
    name: "OPS3",
    img: "assets/images/department-fig.jpg",
    dis: "Get access to all sports within Your city",
  },
  {
    name: "OPS6",
    img: "assets/images/department-fig.jpg",
    dis: "Get access to all sports within Your city",
  },
  {
    name: "OPS20",
    img: "assets/images/department-fig.jpg",
    dis: "Get access to all sports within Your city",
  },
  {
    name: "OPS50",
    img: "assets/images/department-fig.jpg",
    dis: "Get access to all sports within Your city",
  },
  {
    name: "RTKRDS1",
    img: "assets/images/department-fig.jpg",
    dis: "Get access to all sports within Your city",
  },
  {
    name: "RTKRDS3",
    img: "assets/images/department-fig.jpg",
    dis: "Get access to all sports within Your city",
  },
  {
    name: "RTKRDS6",
    img: "assets/images/department-fig.jpg",
    dis: "Get access to all sports within Your city",
  },
  {
    name: "RTKRDS12",
    img: "assets/images/department-fig.jpg",
    dis: "Get access to all sports within Your city",
  },
  {
    name: "DGNSSOPS1",
    img: "assets/images/department-fig.jpg",
    dis: "Get access to all sports within Your city",
  },
  {
    name: "DGNSSOPS3",
    img: "assets/images/department-fig.jpg",
    dis: "Get access to all sports within Your city",
  },
  {
    name: "DGNSSOPS6",
    img: "assets/images/department-fig.jpg",
    dis: "Get access to all sports within Your city",
  },
  {
    name: "DGNSSOPS12",
    img: "assets/images/department-fig.jpg",
    dis: "Get access to all sports within Your city",
  },
  {
    name: "RDS300",
    img: "assets/images/department-fig.jpg",
    dis: "Get access to all sports within Your city",
  },
  {
    name: "RTOPS1",
    img: "assets/images/department-fig.jpg",
    dis: "Get access to all sports within Your city",
  },
  {
    name: "RTOPS3",
    img: "assets/images/department-fig.jpg",
    dis: "Get access to all sports within Your city",
  },
  {
    name: "RTOPS6",
    img: "assets/images/department-fig.jpg",
    dis: "Get access to all sports within Your city",
  },
  {
    name: "RTOPS12",
    img: "assets/images/department-fig.jpg",
    dis: "Get access to all sports within Your city",
  },
  {
    name: "DGNSSRDS1",
    img: "assets/images/department-fig.jpg",
    dis: "Get access to all sports within Your city",
  },
  {
    name: "DGNSSRDS3",
    img: "assets/images/department-fig.jpg",
    dis: "Get access to all sports within Your city",
  },
  {
    name: "DGNSSRDS6",
    img: "assets/images/department-fig.jpg",
    dis: "Get access to all sports within Your city",
  },
  {
    name: "DGNSSRDS12",
    img: "assets/images/department-fig.jpg",
    dis: "Get access to all sports within Your city",
  },


]



// <div>
// <div className="col-md-4">
//     <img src="assets/images/department-fig.jpg" className="img-fluid rounded-start" alt="Card image" />
//   </div>
//   <div className="col-md-8">
//     <div className="card-body">
//       <h5 className="card-title">RTK 1</h5>
//       <p className="card-text" style={{ textAlign: "justify" }}>
//         This is a wider card with supporting text below as a natural lead-in to additional content. This content is a bit longer.
//       </p>
//     </div>
//   </div>
// </div>
// <div>
// <div className="col-md-4">
//     <img src="assets/images/department-fig.jpg" className="img-fluid rounded-start" alt="Card image" />
//   </div>
//   <div className="col-md-8">
//     <div className="card-body">
//       <h5 className="card-title">RTK 1</h5>
//       <p className="card-text" style={{ textAlign: "justify" }}>
//         This is a wider card with supporting text below as a natural lead-in to additional content. This content is a bit longer.
//       </p>
//     </div>
//   </div>
// </div>
// <div>
// <div className="col-md-4">
//     <img src="assets/images/department-fig.jpg" className="img-fluid rounded-start" alt="Card image" />
//   </div>
//   <div className="col-md-8">
//     <div className="card-body">
//       <h5 className="card-title">RTK 1</h5>
//       <p className="card-text" style={{ textAlign: "justify" }}>
//         This is a wider card with supporting text below as a natural lead-in to additional content. This content is a bit longer.
//       </p>
//     </div>
//   </div>
// </div>
// <div>
// <div className="col-md-4">
//     <img src="assets/images/department-fig.jpg" className="img-fluid rounded-start" alt="Card image" />
//   </div>
//   <div className="col-md-8">
//     <div className="card-body">
//       <h5 className="card-title">RTK 1</h5>
//       <p className="card-text" style={{ textAlign: "justify" }}>
//         This is a wider card with supporting text below as a natural lead-in to additional content. This content is a bit longer.
//       </p>
//     </div>
//   </div>
// </div>






















