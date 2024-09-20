import React from 'react'
import "./header.css"
const Header = () => {
    return (
        <>

            <header className="container-fluid p-3">
                <div className="row align-items-center">
                    {/* Left side logo and text */}
                    <div className="col-md-4 d-flex align-items-center">
                        <img
                            src="assets/images/logo_survey_logo.png"
                            alt="Survey of India"
                            className="img-fluid logo"
                            style={{ width: '330px', height: '90px' }}
                        />

                    </div>

                    {/* Middle Section */}
                    <div className="col-md-4 text-center">
                        <div className="banner fs-5">
                            Ā SETU HIMACHALAM - FROM KANYAKUMARI TO THE HIMALAYAS
                        </div>
                        <p className='fs-5'>Welcome to the CORS Registration Portal</p>
                    </div>

                    {/* Right side logo */}
                    <div className="col-md-4 text-end">
                        <div className="d-flex align-items-center justify-content-end">

                            <img
                                src="assets/images/eage-logo.png"
                                alt="Department of Science and Technology"
                                className="img-fluid ms-2"
                                style={{ width: '330px', height: '90px' }}
                            />
                        </div>
                    </div>
                </div>
            </header></>
    )
}

export default Header