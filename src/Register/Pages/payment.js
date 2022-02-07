// import React, {useState} from "react";
// import {authFetch} from "../../auth"
// import {useLocation,useNavigate} from 'react-router-dom';
// import NotLoggedIn from "./notLoggedIn.jsx"

// const Payment = () => {

//     const nav = useNavigate();
//     const register = ()=>{
//         // e.preventDefault()
//         console.log("You pressed button")
//         let opts = {
//           'fname': location.state.fname,
//           'mname': location.state.mname,
//           'lname': location.state.lname,
//           'dob': location.state.dob,
//           'email': location.state.email,
//           'phone': location.state.phone,
//           'password': location.state.password,
//           'user_type_id': 1 //check later
//         }
//         // nav('/payment', {state: opts});
//         console.log(opts)
//         fetch('api/register_user', {
//           method: 'post',
//           body: JSON.stringify(opts)
//         }).then(r => r.json())
//           .then(r => {
//             console.log(r)
//             if(r.status == 'success'){
//               nav('/signIn');
//             } 
//           })
//           .catch(error => console.log(error))
//       }

//     const location = useLocation();
//     function loadScript(src) {
//         return new Promise((resolve) => {
//             const script = document.createElement("script");
//             script.src = src;
//             script.onload = () => {
//                 resolve(true);
//             };
//             script.onerror = () => {
//                 resolve(false);
//             };
//             document.body.appendChild(script);
//         });
//     }
//     const [amount, setamount] = useState('');
//     const [order_id, setorder_id] = useState('');
//     const [currency, setcurrency] = useState('');
    
//     async function displayRazorpay() {
//         const res = await loadScript(
//             "https://checkout.razorpay.com/v1/checkout.js"
//         );

//         if (!res) {
//             alert("Razorpay SDK failed to load. Are you online?");
//             return;
//         }

//         fetch('/test', {
//             method: 'GET',
//           }).then(r => r.json())
//             .then(r => {
//               console.log(r)
//               setamount(r.amount)
//               setorder_id(r.id)
//               setcurrency(r.currency)
//               console.log(location.state.fname)              
//             })
//             .catch(error => console.log(error))

//         // RAZOR_PAY_ID = 'rzp_test_Vk9SxQEHXGwJQp'
//         // RAZOR_PAY_SECRET = 'sNGOwgoYnUAO8n3SOlMsgLGR'

//         const options = {
//             key: "rzp_test_Vk9SxQEHXGwJQp", // Enter the Key ID generated from the Dashboard
//             amount: amount,
//             currency: "INR", //explicitly set abhi
//             name: "Bloomscope",
//             description: "Registration payment",
//             order_id: order_id,
//             handler: async function (response) {
//                 const data = {
//                     // orderCreationId: order_id,
//                     razorpay_payment_id: response.razorpay_payment_id,
//                     razorpay_order_id: response.razorpay_order_id,
//                     razorpay_signature: response.razorpay_signature,
//                 };
//                 console.log(data)
//                 register(); //remove when verify is there
//                 fetch('/verify', {
//                     method: 'POST',
//                     body: JSON.stringify(data),
//                   }).then(r => r.json())
//                     .then(r => {
//                       console.log(r)    
//                       //check if success
//                       register();
//                     })
//                     .catch(error => console.log(error))
//             },
//             "prefill": {
//                 "name": "Test User",
//                 "email": "user@example.com",
//                 "contact": "9999999999"
//             },
//             notes: {
//                 address: "Product by IIT Bombay",
//             },
//             theme: {
//                 color: "#0090F8",
//             },
//         };

//         const paymentObject = new window.Razorpay(options);
//         paymentObject.open();
//     }

//     return (
//         <>
//             <button className="custom-button" onClick={displayRazorpay}>
//             Payment
//             </button>
//         </>
//     );
// };
// export default Payment;