import React from 'react'

const ReadMoreIntroduction = () => {
    return (
        <>
            <div className="container-fluid mt-4" >
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-md-9">
                                    <h1>Introduction</h1>
                                    <h4 className="fs-5 fst-italic">
                                        The CORS users may utilize the CORS real-time services by applying for a subscription.
                                    </h4>
                                    <p className="fs-5" style={{ textAlign: "justify" }}>
                                        Global Navigation Satellite Systems (GNSS) have revolutionized our ability to access location information. In a nutshell, GNSS measures its distances from satellites hovering over the earth in predefined orbits, through radio signals, and estimates its position on Earth. However, these systems have their own share of errors due to orbit errors, satellite clock errors, receiver noise, ionospheric and tropospheric delays, satellite geometry over the receiver, multipath effects, etc., which cause dilution in precision up to 10–11 meters. To overcome this accuracy limit, various surveying techniques such as DGNSS, Static GPS/GNSS surveying, RTK, SBAS, GBAS, and PPP are used by the geospatial community. Each of these methods works on the principle of taking GNSS measurements.
                                    </p>
                                </div>
                                <div className="col-md-3">
                                    <img src="assets/images/sattelite1.jpeg" className="img-fluid rounded-5" alt="satellite-photo" />
                                </div>
                            </div>
                            <p className="fs-5" style={{ textAlign: "justify" }}>
                                In most GNSS applications where precise positioning is required, users pair their GNSS instruments with other GNSS instruments, simultaneously observing one or more known positions, termed as reference stations. With the help of these reference stations, estimated corrections to be applied over the point of interest or rover position are obtained through Static GNSS Survey or Real Time-Kinematic (RTK) Survey methods. To facilitate users by not requiring to set up their own reference station each time they wish to undertake GNSS measurement, and provide a country-wide consistent reference frame, Survey of India has established a network of Continuously Operating Reference Stations (CORS). These CORS stations are capable of providing Real-Time Positioning Service through RTK/NRTK with an accuracy of ±3 cm and also host an array of different positioning services targeted to cater to the requirements of the geospatial and scientific community.
                            </p>
                            <p className="fs-5" style={{ textAlign: "justify" }}>
                                These networked CORS stations (or GNSS receivers) are permanent installations and continuously stream satellite observations to a central server. The entire setup of reference stations and the central server is known as the Continuous Operating Reference Station (CORS) Network. The central server runs specialized software that performs calculations to further refine the rover's position by sending Network Real-Time Kinematic (NRTK) corrections to the rover. The distance between a GNSS rover and the corresponding base station is no longer an issue. Users can subscribe to the CORS network on a monthly or yearly basis to receive NRTK corrections with their rover instead of having to set up their own base station. The CORS network is available 24 hours per day, 7 days a week, and 365 days a year, though it depends on the communication service provider and satellite availability.
                            </p>
                            <p className="fs-5" style={{ textAlign: "justify" }}>
                                Data streaming of RTCM 2.4, RTCM 3.2 is supported in real-time, and users can also retrieve stored GNSS data from the central server via the internet for post-processing. Users can also submit static survey GNSS data for online processing.
                            </p>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default ReadMoreIntroduction