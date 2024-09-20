import React, { useState, useEffect } from "react";
import "./subdmodel.css"

// import "bootstrap/dist/css/bootstrap.min.css";

const SubscriptionCharges1 = ({closemodel,fadeIn}) => {


    
  
    
  return (
    <>
     <div className="wrapperdd" onClick={closemodel}></div>
   
      
     <div
          className={`modal fade ${fadeIn ? "show" : ""}`}
          style={{ display: "block" }}
          tabIndex="-1"
          role="dialog"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title"></h5>
                <button type="button" className="close" >
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {/* Bootstrap Table */}
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
                      <td>DGNSSRDS3</td>
                      <td>
                        Unlimited Subscription of Differential GNSS Correction Services and
                        CORS/VRS Data Download Subscription limited to 1,08,000 epoch
                        (equivalent to 30 Hrs Data with 1 Sec frequency) valid for 3 Months
                      </td>
                      <td>₹6,096.00</td>
                      <td>₹1,097.00</td>
                      <td>₹7,193.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button className="btn btn-success" onClick={closemodel}>
                  Close
                </button>
              </div>
            </div>
          </div>

          {/* Modal backdrop with fade-in effect */}
          {/* <div className={`modal-backdrop fade ${fadeIn ? "show" : ""}`}></div> */}
        
     </div>
  
    </>
  )
}

export default SubscriptionCharges1

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























// import React, { useState, useEffect } from "react";

// // import "bootstrap/dist/css/bootstrap.min.css";

// const SubscriptionCharges1 = () => {
//     const [showModal, setShowModal] = useState(false);
//     const [fadeIn, setFadeIn] = useState(false);
  
//     const toggleModal = () => {
//       if (!showModal) {
//         setShowModal(true);
//         setTimeout(() => setFadeIn(true), 10); // Delay to trigger fade-in animation
//       } else {
//         setFadeIn(false);
//         setTimeout(() => setShowModal(false), 300); // Wait for fade-out before hiding
//       }
//     };
  
//     useEffect(() => {
//       if (showModal) {
//         document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
//       } else {
//         document.body.style.overflow = "auto";
//       }
//     }, [showModal]);
//   return (
//     <>
//     <div>
//       {/* Button to open modal */}
//       <button className="btn btn-primary" onClick={toggleModal}>
//         View Plan Details
//       </button>

//       {/* Modal structure with animation */}
//       {showModal && (
//         <div
//           className={`modal fade ${fadeIn ? "show" : ""}`}
//           style={{ display: "block" }}
//           tabIndex="-1"
//           role="dialog"
//         >
//           <div className="modal-dialog modal-lg" role="document">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">Plan Id : DGNSSRDS3</h5>
//                 <button type="button" className="close" onClick={toggleModal}>
//                   <span>&times;</span>
//                 </button>
//               </div>
//               <div className="modal-body">
//                 {/* Bootstrap Table */}
//                 <table className="table table-bordered">
//                   <thead>
//                     <tr>
//                       <th>Plan</th>
//                       <th>Description</th>
//                       <th>Charges</th>
//                       <th>GST</th>
//                       <th>Total</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <td>DGNSSRDS3</td>
//                       <td>
//                         Unlimited Subscription of Differential GNSS Correction Services and
//                         CORS/VRS Data Download Subscription limited to 1,08,000 epoch
//                         (equivalent to 30 Hrs Data with 1 Sec frequency) valid for 3 Months
//                       </td>
//                       <td>₹6,096.00</td>
//                       <td>₹1,097.00</td>
//                       <td>₹7,193.00</td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//               <div className="modal-footer">
//                 <button className="btn btn-success" onClick={toggleModal}>
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Modal backdrop with fade-in effect */}
//           {/* <div className={`modal-backdrop fade ${fadeIn ? "show" : ""}`}></div> */}
//         </div>
//       )}
//     </div>
//     </>
//   )
// }

// export default SubscriptionCharges1











