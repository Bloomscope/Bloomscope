import React, {useState} from 'react';
import FormInput from '../form-input/form-input.component';
import {useLocation,useNavigate} from 'react-router-dom';
import CustomButton from '../custom-button/custom-button-component';
import './sign-up.styles.scss';

const SignUp_student = () =>{
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [contact, setContact] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [lineClicked, setLineClicked] = useState(0);
    
    const nav = useNavigate();
    const register = ()=>{
        // e.preventDefault()
        console.log("You pressed button")
        let opts = {
          'fname': firstName,
          'mname': middleName,
          'lname': lastName,
          'dob': dob,
          'email': email,
          'phone': contact,
          'password': password,
          'user_type_id': 1 //check later
        }
        // nav('/payment', {state: opts});
        console.log(opts)
        fetch('api/register_user', {
          method: 'post',
          body: JSON.stringify(opts)
        }).then(r => r.json())
          .then(r => {
            console.log(r)
            if(r.status == 'success'){
              nav('/signIn');
            } 
          })
          .catch(error => console.log(error))
      }

    const location = useLocation();
    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }
    const [amount, setamount] = useState('');
    const [order_id, setorder_id] = useState('');
    const [currency, setcurrency] = useState('');
    
    async function displayRazorpay(e) {
      e.preventDefault()
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );
        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }
        fetch('/test', {
            method: 'GET',
          }).then(r => r.json())
            .then(r => {
              console.log(r)
              setamount(r.amount)
              setorder_id(r.id)
              setcurrency(r.currency)           
            })
            .catch(error => console.log(error))

        // RAZOR_PAY_ID = 'rzp_test_Vk9SxQEHXGwJQp'
        // RAZOR_PAY_SECRET = 'sNGOwgoYnUAO8n3SOlMsgLGR'

        const options = {
            key: "rzp_test_Vk9SxQEHXGwJQp", // Enter the Key ID generated from the Dashboard
            amount: amount,
            currency: "INR", //explicitly set abhi
            name: "Bloomscope",
            description: "Registration payment",
            order_id: order_id,
            handler: async function (response) {
                const data = {
                    // orderCreationId: order_id,
                    razorpay_payment_id: response.razorpay_payment_id,
                    razorpay_order_id: response.razorpay_order_id,
                    razorpay_signature: response.razorpay_signature,
                };
                console.log(data)
                register(); //remove when verify is there
                fetch('/verify', {
                    method: 'POST',
                    body: JSON.stringify(data),
                  }).then(r => r.json())
                    .then(r => {
                      console.log(r)    
                      //check if success
                      register();
                    })
                    .catch(error => console.log(error))
            },
            "prefill": {
                "name": "Test User",
                "email": "user@example.com",
                "contact": "9999999999"
            },
            notes: {
                address: "Product by IIT Bombay",
            },
            theme: {
                color: "#0090F8",
            },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }
   
    return (
      <>
      <div className='sign-up' >
        <h2 className='title'>Student Registration</h2>
        <form className='sign-up-form' onSubmit='required()'>
          <FormInput
            type='text'
            name='firstName'
            value={firstName}
            onChange={(e)=>{setFirstName(e.target.value)}}
            label='First Name'
            required
          />
          <FormInput
            type='text'
            name='middleName'
            value={middleName}
            onChange={(e)=>{setMiddleName(e.target.value)}}
            label='Middle Name'
            required
          />
          <FormInput
            type='text'
            name='lastName'
            value={lastName}
            onChange={(e)=>{setLastName(e.target.value)}}
            label='Last Name'
            required
          />
          <FormInput onMouseEnter = {()=>{setLineClicked(1)}} onMouseLeave = {()=>{setLineClicked(0)}}
            type={lineClicked ? 'date' : 'text'}
            name='dob'
            value={dob}
            onChange={(e)=>{setDob(e.target.value)}}
            label={lineClicked ? '' : 'Date of Birth'}
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            label='Email'
            required
          />
          <FormInput
            type='text'
            name='contact'
            value={contact}
            onChange={(e)=>{setContact(e.target.value)}}
            label='Contact no.'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={(e)=>{setConfirmPassword(e.target.value)}}
            label='Confirm Password'
            required
          />
          <CustomButton onClick={displayRazorpay} type='submit'>PAYMENT</CustomButton>
        {/* <CustomButton type='submit'>PAYMENT</CustomButton> */}
        </form>
      </div>

  </>
    );
}

export default SignUp_student;