


// import React, { useState } from 'react';


// const ImageSliderModal = () => {
//   const [activeSlide, setActiveSlide] = useState(0);



//   const openModal = (index) => {
//     setActiveSlide(index);
//     const modal = new window.bootstrap.Modal(document.getElementById('sliderModal'));
//     modal.show();
//   };

//   const closeModal = () => {
//     const modalElement = document.getElementById('sliderModal');
//     const modal = window.bootstrap.Modal.getInstance(modalElement);
//     modal.hide();
//   };

//   return (
//     <div>
//       {/* Image Slider */}
//       <div className="continer-fluid">
//         <div className="container">
//           <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
//             <div className="carousel-inner">
//               {slides.map((slide, index) => (
//                 <div
//                   className={`carousel-item ${index === 0 ? 'active' : ''}`}
//                   key={index}
//                   onClick={() => openModal(index)}  // Opens modal on click
//                 >
//                   <img src={slide.imgSrc} className="d-block w-100" alt={`Slide ${index + 1}`} />
//                 </div>
//               ))}
//             </div>
//             <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
//               <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//               <span className="visually-hidden">Previous</span>
//             </button>
//             <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
//               <span className="carousel-control-next-icon" aria-hidden="true"></span>
//               <span className="visually-hidden">Next</span>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Bootstrap Modal */}
//       <div
//         className="modal fade"
//         id="sliderModal"
//         tabIndex="-1"
//         aria-labelledby="sliderModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog modal-lg" role="document">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="sliderModalLabel">
//                 {slides[activeSlide].cors_plan}
//               </h5>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div className="modal-body">
//               {/* <img src={slides[activeSlide]."imgSrc"} className="d-block w-100 mb-4" alt={`Slide ${activeSlide + 1}`} /> */}

//               {/* Plan Information Table */}
//               <table className="table table-bordered">
//                 <thead>
//                   <tr>
//                     <th>Plan</th>
//                     <th>Description</th>
//                     <th>Charges</th>
//                     <th>GST</th>
//                     <th>Total</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td>{slides[activeSlide].cors_plan}</td>
//                     <td>{slides[activeSlide].cors_description}</td>
//                     <td>{slides[activeSlide].subscription_charges}</td>
//                     <td>{slides[activeSlide].GST_amt}</td>
//                     <td>{slides[activeSlide].subscription_charges + slides[activeSlide].GST_amt}</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//             <div className="modal-footer">
//               <button className="btn btn-success" onClick={closeModal}>
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageSliderModal;





// const slides = [
//   {
//     "imgSrc": 'https://via.placeholder.com/800x400?text=Slide+2',
//     "id": 1,
//     "cors_plan": "RTK1",
//     "cors_description": "1 Month Unlimited Subscription of Real Time Kinematic Correction Services",
//     "subscription_charges": 5000,
//     "GST_amt": 900,
//     "cors_active": 1
//   },
//   {
//     "imgSrc": 'https://via.placeholder.com/800x400?text=Slide+2',
//     "id": 2,
//     "cors_plan": "RTK3",
//     "cors_description": "3 Months Unlimited Subscription of Real Time Kinematic Correction Services",
//     "subscription_charges": 15000,
//     "GST_amt": 2700,
//     "cors_active": 1
//   },
//   {
//     "imgSrc": 'https://via.placeholder.com/800x400?text=Slide+2',
//     "id": 3,
//     "cors_plan": "RTK6",
//     "cors_description": "6 Months Unlimited Subscription of Real Time Kinematic Correction Services",
//     "subscription_charges": 30000,
//     "GST_amt": 5400,
//     "cors_active": 1
//   },
//   {
//     "imgSrc": 'https://via.placeholder.com/800x400?text=Slide+2',
//     "id": 4,
//     "cors_plan": "RTK12",
//     "cors_description": "1 Year Unlimited Subscription of Real Time Kinematic Correction Services",
//     "subscription_charges": 60000,
//     "GST_amt": 10800,
//     "cors_active": 1
//   },
//   {
//     "imgSrc": 'https://via.placeholder.com/800x400?text=Slide+2',
//     "id": 5,
//     "cors_plan": "DGNSS1",
//     "cors_description": "1 Month Unlimited Subscription of Differential GNSS Correction Services",
//     "subscription_charges": 2000,
//     "GST_amt": 360,
//     "cors_active": 1
//   },
//   {
//     "imgSrc": 'https://via.placeholder.com/800x400?text=Slide+2',
//     "id": 6,
//     "cors_plan": "DGNSS3",
//     "cors_description": "3 Months Unlimited Subscription of Differential GNSS Correction Services",
//     "subscription_charges": 6000,
//     "GST_amt": 1080,
//     "cors_active": 1
//   },
//   {
//     "imgSrc": 'https://via.placeholder.com/800x400?text=Slide+2',
//     "id": 7,
//     "cors_plan": "DGNSS6",
//     "cors_description": "6 Months Unlimited Subscription of Differential GNSS Correction Services",
//     "subscription_charges": 12000,
//     "GST_amt": 2160,
//     "cors_active": 1
//   },
//   {
//     "imgSrc": 'https://via.placeholder.com/800x400?text=Slide+2',
//     "id": 8,
//     "cors_plan": "DGNSS12",
//     "cors_description": "1 Year Unlimited Subscription of Differential GNSS Correction Services",
//     "subscription_charges": 24000,
//     "GST_amt": 4320,
//     "cors_active": 1
//   },
//   {
//     "imgSrc": 'https://via.placeholder.com/800x400?text=Slide+2',
//     "id": 9,
//     "cors_plan": "RDS1",
//     "cors_description": "CORS/VRS Data Download Subscription limited to 36,000 epoch (equivalent to 10 Hrs Data with 1 Sec frequency) valid for 1 Month",
//     "subscription_charges": 48,
//     "GST_amt": 9,
//     "cors_active": 1
//   },
//   {
//     "imgSrc": 'https://via.placeholder.com/800x400?text=Slide+2',
//     "id": 10,
//     "cors_plan": "RDS3",
//     "cors_description": "CORS/VRS Data Download Subscription limited to 1,08,000 epoch (equivalent to 30 Hrs Data with 1 Sec frequency) valid for 3 Months",
//     "subscription_charges": 144,
//     "GST_amt": 26,
//     "cors_active": 1
//   },
//   {
//     "imgSrc": 'https://via.placeholder.com/800x400?text=Slide+2',
//     "id": 11,
//     "cors_plan": "RDS6",
//     "cors_description": "CORS/VRS Data Download Subscription limited to 3,60,000 epoch (equivalent to 100 Hrs Data with 1 Sec frequency) valid for 6 Months",
//     "subscription_charges": 480,
//     "GST_amt": 86,
//     "cors_active": 1
//   },
//   {
//     "imgSrc": 'https://via.placeholder.com/800x400?text=Slide+2',
//     "id": 12,
//     "cors_plan": "RDS20",
//     "cors_description": "CORS/VRS Data Download Subscription limited to 7,20,000 epoch (equivalent to 200 Hrs Data with 1 Sec frequency) valid for 1 Year",
//     "subscription_charges": 960,
//     "GST_amt": 173,
//     "cors_active": 1
//   },
//   {
//     "imgSrc": 'https://via.placeholder.com/800x400?text=Slide+2',
//     "id": 13,
//     "cors_plan": "RDS50",
//     "cors_description": "CORS/VRS Data Download Subscription limited to 18,00,000 epoch (equivalent to 500 Hrs Data with 1 Sec frequency) valid for 1 Year",
//     "subscription_charges": 2400,
//     "GST_amt": 432,
//     "cors_active": 1
//   },
//   {
//     "imgSrc": 'https://via.placeholder.com/800x400?text=Slide+2',
//     "id": 14,
//     "cors_plan": "OPS1",
//     "cors_description": "Online GNSS Processing Subscription limited to 36,000 epoch (equivalent to 10 Hrs Data with 1 Sec frequency) valid for 1 Month",
//     "subscription_charges": 180,
//     "GST_amt": 32,
//     "cors_active": 1
//   },
//   {
//     "imgSrc": 'https://via.placeholder.com/800x400?text=Slide+2',
//     "id": 15,
//     "cors_plan": "OPS3",
//     "cors_description": "Online GNSS Processing Subscription limited to 1,08,000 epoch (equivalent to 30 Hrs Data with 1 Sec frequency) valid for 3 Months\u003C/p\u003E\r\n",
//     "subscription_charges": 540,
//     "GST_amt": 97,
//     "cors_active": 1
//   },
//   {
//     "imgSrc": 'https://via.placeholder.com/800x400?text=Slide+2',
//     "id": 16,
//     "cors_plan": "OPS6",
//     "cors_description": "Online GNSS Processing Subscription limited to 3,60,000 epoch (equivalent to 100 Hrs Data with 1 Sec frequency) valid for 6 Months",
//     "subscription_charges": 1800,
//     "GST_amt": 324,
//     "cors_active": 1
//   },
//   {
//     "imgSrc": 'https://via.placeholder.com/800x400?text=Slide+2',
//     "id": 17,
//     "cors_plan": "OPS20",
//     "cors_description": "Online GNSS Processing Subscription limited to 7,20,000 epoch (equivalent to 200 Hrs Data with 1 Sec frequency) valid for 1 Year",
//     "subscription_charges": 3600,
//     "GST_amt": 648,
//     "cors_active": 1
//   },
//   {
//     "imgSrc": 'https://via.placeholder.com/800x400?text=Slide+2',
//     "id": 18,
//     "cors_plan": "OPS50",
//     "cors_description": "Online GNSS Processing Subscription limited to 18,00,000 epoch (equivalent to 500 Hrs Data with 1 Sec frequency) valid for 1 Year",
//     "subscription_charges": 9000,
//     "GST_amt": 1620,
//     "cors_active": 1
//   },
//   {
//     "imgSrc": 'https://via.placeholder.com/800x400?text=Slide+2',
//     "id": 19,
//     "cors_plan": "RTKRDS1",
//     "cors_description": "Unlimited Subscription of Real Time Kinematic Correction Services and CORS/VRS Data Download Subscription limited to 36,000 epoch (equivalent to 10 Hrs Data with 1 Sec frequency) valid for 1 Month",
//     "subscription_charges": 5032,
//     "GST_amt": 906,
//     "cors_active": 1
//   },
//   {
//     "imgSrc": 'https://via.placeholder.com/800x400?text=Slide+2',
//     "id": 20,
//     "cors_plan": "RTKRDS3",
//     "cors_description": "Unlimited Subscription of Real Time Kinematic Correction Services and CORS/VRS Data Download Subscription limited to 1,08,000 epoch (equivalent to 30 Hrs Data with 1 Sec frequency) valid for 3 Months",
//     "subscription_charges": 15096,
//     "GST_amt": 2717,
//     "cors_active": 1
//   },
//   {
//     "imgSrc": 'https://via.placeholder.com/800x400?text=Slide+2',
//     "id": 21,
//     "cors_plan": "RTKRDS6",
//     "cors_description": "Unlimited Subscription of Real Time Kinematic Correction Services and CORS/VRS Data Download Subscription limited to 3,60,000 epoch (equivalent to 100 Hrs Data with 1 Sec frequency) valid for 6 Months\u003C/p\u003E\r\n",
//     "subscription_charges": 30320,
//     "GST_amt": 5458,
//     "cors_active": 1
//   },
//   {
//     "imgSrc": 'https://via.placeholder.com/800x400?text=Slide+2',
//     "id": 22,
//     "cors_plan": "RTKRDS12",
//     "cors_description": "Unlimited Subscription of Real Time Kinematic Correction Services and CORS/VRS Data Download Subscription limited to 7,20,000 epoch (equivalent to 200 Hrs Data with 1 Sec frequency) valid for 1 Year",
//     "subscription_charges": 60640,
//     "GST_amt": 10915,
//     "cors_active": 1
//   },
//   {
//     "imgSrc": 'https://via.placeholder.com/800x400?text=Slide+2',
//     "id": 23,
//     "cors_plan": "DGNSSOPS1",
//     "cors_description": "Unlimited Subscription of Differential GNSS Correction Services and Online GNSS Processing Subscription limited to 36,000 epoch (equivalent to 10 Hrs Data with 1 Sec frequency) valid for 1 Month",
//     "subscription_charges": 2164,
//     "GST_amt": 390,
//     "cors_active": 1
//   },
//   {
//     "imgSrc": 'https://via.placeholder.com/800x400?text=Slide+2',
//     "id": 24,
//     "cors_plan": "DGNSSOPS3",
//     "cors_description": "Unlimited Subscription of Differential GNSS Correction Services and Online GNSS Processing Subscription limited to 1,08,000 epoch (equivalent to 30 Hrs Data with 1 Sec frequency) valid for 3 Months\u003C/p\u003E",
//     "subscription_charges": 6492,
//     "GST_amt": 1169,
//     "cors_active": 1
//   },
//   {
//     "imgSrc": 'https://via.placeholder.com/800x400?text=Slide+2',
//     "id": 25,
//     "cors_plan": "DGNSSOPS6",
//     "cors_description": "Unlimited Subscription of Differential GNSS Correction Services and Online GNSS Processing Subscription limited to 3,60,000 epoch (equivalent to 100 Hrs Data with 1 Sec frequency) valid for 6 Months\u003C/p\u003E",
//     "subscription_charges": 13640,
//     "GST_amt": 2455,
//     "cors_active": 1
//   },
//   {
//     "imgSrc": 'https://via.placeholder.com/800x400?text=Slide+2',
//     "id": 26,
//     "cors_plan": "DGNSSOPS12",
//     "cors_description": "Unlimited Subscription of Differential GNSS Correction Services and Online GNSS Processing Subscription limited to 7,20,000 epoch (equivalent to 200 Hrs Data with 1 Sec frequency) valid for 1 Year",
//     "subscription_charges": 27280,
//     "GST_amt": 4910,
//     "cors_active": 1
//   },
//   {
//     "imgSrc": 'https://via.placeholder.com/800x400?text=Slide+2',
//     "id": 27,
//     "cors_plan": "RDS300",
//     "cors_description": "CORS/VRS Data Download Subscription limited to 1,08,00,000 epoch (equivalent to 3000 Hrs Data with 1 Sec frequency) valid for 1 Year",
//     "subscription_charges": 14400,
//     "GST_amt": 2592,
//     "cors_active": 1
//   },
//   {
//     "imgSrc": 'https://via.placeholder.com/800x400?text=Slide+2',
//     "id": 28,
//     "cors_plan": "RTKOPS1",
//     "cors_description": "Unlimited Subscription of Real Time Kinematic Correction Services and Online GNSS Processing Subscription limited to 36,000 epoch (equivalent to 10 Hrs Data with 1 Sec frequency) valid for 1 Month\u003C/p\u003E",
//     "subscription_charges": 5164,
//     "GST_amt": 930,
//     "cors_active": 1
//   },
//   {
//     "imgSrc": 'https://via.placeholder.com/800x400?text=Slide+2',
//     "id": 29,
//     "cors_plan": "RTKOPS3",
//     "cors_description": "Unlimited Subscription of Real Time Kinematic Correction Services and Online GNSS Processing Subscription limited to 1,08,000 epoch (equivalent to 30 Hrs Data with 1 Sec frequency) valid for 3 Months",
//     "subscription_charges": 15492,
//     "GST_amt": 2789,
//     "cors_active": 1
//   },
//   {
//     "imgSrc": 'https://via.placeholder.com/800x400?text=Slide+2',
//     "id": 30,
//     "cors_plan": "RTKOPS6",
//     "cors_description": "Unlimited Subscription of Real Time Kinematic Correction Services and Online GNSS Processing Subscription limited to 3,60,000 epoch (equivalent to 100 Hrs Data with 1 Sec frequency) valid for 6 Months",
//     "subscription_charges": 31640,
//     "GST_amt": 5695,
//     "cors_active": 1
//   },
//   {
//     "imgSrc": 'https://via.placeholder.com/800x400?text=Slide+2',
//     "id": 31,
//     "cors_plan": "RTKOPS12",
//     "cors_description": "Unlimited Subscription of Real Time Kinematic Correction Services and Online GNSS Processing Subscription limited to 7,20,000 epoch (equivalent to 200 Hrs Data with 1 Sec frequency) valid for 1 Year",
//     "subscription_charges": 63280,
//     "GST_amt": 11390,
//     "cors_active": 1
//   },
//   {
//     "imgSrc": 'https://via.placeholder.com/800x400?text=Slide+2',
//     "id": 32,
//     "cors_plan": "DGNSSRDS1",
//     "cors_description": "Unlimited Subscription of Differential GNSS Correction Services and CORS/VRS Data Download Subscription limited to 36,000 epoch (equivalent to 10 Hrs Data with 1 Sec frequency) valid for 1 Month",
//     "subscription_charges": 2032,
//     "GST_amt": 366,
//     "cors_active": 1
//   },
//   {
//     "imgSrc": 'https://via.placeholder.com/800x400?text=Slide+2',
//     "id": 33,
//     "cors_plan": "DGNSSRDS3",
//     "cors_description": "Unlimited Subscription of Differential GNSS Correction Services and CORS/VRS Data Download Subscription limited to 1,08,000 epoch (equivalent to 30 Hrs Data with 1 Sec frequency) valid for 3 Months",
//     "subscription_charges": 6096,
//     "GST_amt": 1097,
//     "cors_active": 1
//   },
//   {
//     "imgSrc": 'https://via.placeholder.com/800x400?text=Slide+2',
//     "id": 34,
//     "cors_plan": "DGNSSRDS6",
//     "cors_description": "Unlimited Subscription of Differential GNSS Correction Services and CORS/VRS Data Download Subscription limited to 3,60,000 epoch (equivalent to 100 Hrs Data with 1 Sec frequency) valid for 6 Months",
//     "subscription_charges": 12320,
//     "GST_amt": 2218,
//     "cors_active": 1
//   },
//   {
//     "imgSrc": 'https://via.placeholder.com/800x400?text=Slide+2',
//     "id": 35,
//     "cors_plan": "DGNSSRDS12",
//     "cors_description": "Unlimited Subscription of Differential GNSS Correction Services and CORS/VRS Data Download Subscription limited to 7,20,000 epoch (equivalent to 200 Hrs Data with 1 Sec frequency) valid for 1 Year",
//     "subscription_charges": 24640,
//     "GST_amt": 4435,
//     "cors_active": 1
//   }
// ]



import React, { useState } from 'react';
const ImageSliderModal = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Example image and content data for the slider
  const slides = [
    {
      imgSrc: 'https://via.placeholder.com/400x200?text=Slide+1',
      title: 'Plan 1',
      description: 'Description for Plan 1',
      charges: '₹6,096.00',
      gst: '₹1,097.00',
      total: '₹7,193.00',
    },
    {
      imgSrc: 'https://via.placeholder.com/400x200?text=Slide+2',
      title: 'Plan 2',
      description: 'Description for Plan 2',
      charges: '₹7,096.00',
      gst: '₹1,297.00',
      total: '₹8,393.00',
    },
    {
      imgSrc: 'https://via.placeholder.com/400x200?text=Slide+3',
      title: 'Plan 3',
      description: 'Description for Plan 3',
      charges: '₹8,096.00',
      gst: '₹1,497.00',
      total: '₹9,593.00',
    },
    {
      imgSrc: 'https://via.placeholder.com/400x200?text=Slide+4',
      title: 'Plan 4',
      description: 'Description for Plan 4',
      charges: '₹9,096.00',
      gst: '₹1,697.00',
      total: '₹10,793.00',
    },
    {
      imgSrc: 'https://via.placeholder.com/400x200?text=Slide+5',
      title: 'Plan 5',
      description: 'Description for Plan 5',
      charges: '₹10,096.00',
      gst: '₹1,797.00',
      total: '₹11,893.00',
    },
    {
      imgSrc: 'https://via.placeholder.com/400x200?text=Slide+6',
      title: 'Plan 6',
      description: 'Description for Plan 6',
      charges: '₹11,096.00',
      gst: '₹1,897.00',
      total: '₹12,993.00',
    },
  ];

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
    <div>
      {/* Image Slider */}
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* Grouping items into chunks of 3 */}
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

      {/* Bootstrap Modal */}
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
                {slides[activeSlide].title}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img src={slides[activeSlide].imgSrc} className="d-block w-100 mb-4" alt={`Slide ${activeSlide + 1}`} />
              
              {/* Plan Information Table */}
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
                    <td>{slides[activeSlide].title}</td>
                    <td>{slides[activeSlide].description}</td>
                    <td>{slides[activeSlide].charges}</td>
                    <td>{slides[activeSlide].gst}</td>
                    <td>{slides[activeSlide].total}</td>
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
    </div>
  );
};

export default ImageSliderModal;
