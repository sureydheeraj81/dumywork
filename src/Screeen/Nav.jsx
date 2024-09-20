import React from 'react'
import "./nav.css"
import { Link } from 'react-router-dom'
import Header from './Header'

const Nav = () => {
    return (
        <>

            {/* <div className="container-fluid">

                <div className="row d-flex justify-content-center">
                    <div className="col-md-4">
                        <img src="assets/images/logo_survey_logo.png" width="17%"  alt="Survey Logo" />
                    </div>
                    <div className="col-md-4 ">
                        <p className='custom-header'> Ā SETU HIMACHALAM - FROM KANYAKUMARI TO THE HIMALAYAS</p>
                        <span className="subheading text-dark">Welcome to the CORS Registration Portal</span>
                    </div>
                    <div className="col-md-4">
                        <img src="assets/images/eage-logo.png" width="17%"  alt="EAGE Logo" />
                    </div>
                </div>
            </div> */}

            {/* Navigation Bar */}
            {/* <div className="row w-100 mt-2"> */}
            <Header/>
            <nav className="navbar navbar-expand-lg bg-body-tertiary w-100  ">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"

                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav mx-auto">
                            <Link to="/" className="nav-link fs-4 text-white active" aria-current="page">Home</Link>
                            <Link to="https://www.surveyofindia.gov.in/pages/who-we-are" target='_blank' className="nav-link fs-4 text-white">About SOI</Link>

                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle fs-4 text-white"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Policies
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">National Geospatial Policy-2022</a></li>
                                    <li><a className="dropdown-item" href="#">New Guidelines Geospatial Policy-2021</a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle fs-4 text-white"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    General Info
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">CORS Services</a></li>
                                    <li><a className="dropdown-item" href="#">Abbreviations Used and their Definitions</a></li>
                                    <li><a className="dropdown-item" href="#">Usages</a></li>
                                    <li><a className="dropdown-item" href="#">Advantages and Network RTK</a></li>
                                    <li><a className="dropdown-item" href="#">Requirements at User End</a></li>
                                    <li><a className="dropdown-item" href="#">Connection Settings</a></li>
                                    <li><a className="dropdown-item" href="#">Guidelines & Operating Procedures</a></li>
                                    <li><a className="dropdown-item" href="#">Video Tutorials</a></li>
                                </ul>
                            </li>

                            <Link to="/subscription-charges" className="nav-link fs-4 text-white">Subscription Charges</Link>
                            <Link to="/faq" className="nav-link fs-4 text-white">FAQs</Link>
                            <Link to="/contact" className="nav-link fs-4 text-white">Contact Us</Link>
                        </div>
                    </div>
                </div>
                {/* </div> */}
                {/* </div> */}
            </nav>










        </>
    )
}

export default Nav