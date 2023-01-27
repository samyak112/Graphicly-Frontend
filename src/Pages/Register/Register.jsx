import React, { useState } from 'react'
import registercss from '../Register/register.module.css'
import {useNavigate} from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import plane from '../../Images/plane.png'
import GoogleIcon from '@mui/icons-material/Google';
import { useGoogleLogin } from '@react-oauth/google';
import axios from "axios"

function Register() {
  const Navigate = useNavigate()  
  const url = import.meta.env.VITE_URL

//   user data state
  const [user_details, setuser_details] = useState({username:'' , email:'' , password:'' })

//   verification modal state
  const [show, setShow] = useState(false);

//   alert box states
   const [alert_box, setalert_box] = useState(false)
   const [alert_message, setalert_message] = useState('')

   const [otp, setotp] = useState('');

   const google_signup = useGoogleLogin({
    onSuccess: async respose => {
        try {
            const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
                headers: {
                    "Authorization": `Bearer ${respose.access_token}`
                }
            })

            console.log(res.data)
        } catch (err) {
            console.log(err)

        }

    }
});

  const verify_modal = ()=>{
    return(
        <>
        <Modal id={registercss.outer_modal}
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <div id={registercss.modal}>
                <div id={registercss.plane_div}>
                    <img id={registercss.plane_img} src={plane} alt="paper plane pic" />
                </div>
                <div className={registercss.modal_content}>
                    <div className={registercss.header}>
                        Verification for Email
                    </div>
                    <div className={registercss.modal_message}>
                        We have sent a verification code on your email that you used to register, kindly check.
                    </div>
                    <div  className={`${registercss.components} ${registercss.otp_fiels}`}>
                        <input type="text" onChange={handle_otp} name='otp' placeholder='Enter OTP Here' value={otp} />
                    </div>
                    <div className={registercss.verify_button}>
                        <button onClick={verify_req} id={registercss.actual_button}>Verify</button>
                    </div>
                </div>
            </div>
        </Modal>
      </>
    )
   
  }

  const handle_user_values = (e) => {
    const name = e.target.name;
    const value = e.target.value
    setuser_details({...user_details,[name]:value})
  };

  const handle_otp = (e) =>{
    setotp(e.target.value)
    console.log(e.target.value)
}

  const signup_req = async(e) => {
    console.log('entered')
    e.preventDefault();
          const {email,password,username} = user_details;

          const res = await fetch(`${url}/signup`,{
              method:'POST',
              headers:{
                  'Content-Type' : 'application/json',
              },
              body:JSON.stringify({
                  email,password,username
              }),
              
          })

          const data = await res.json();
          console.log(data)

            if(data.status === 201){
                setShow(true)
            }

            else if(data.status === 202){
                setalert_message('User Already Exists');
                setalert_box(true)
            }

            else if(data.status === 204){
                setalert_message('Field is empty');
                setalert_box(true)
            }

            else if(data.status === 400){
                setalert_message('Password must be atleast 7 characters long');
                setalert_box(true)
            }

   };

   const verify_req = async(e) =>{
    e.preventDefault()

    const res = await fetch(`${url}/verify`,{
        method:'POST',
        headers:{
            'Content-Type' : 'application/json',
        },
        body:JSON.stringify({
            otp,email:user_details.email,username:user_details.username
        }),
        
    })


    // to check if data is coming perfectly or not
    const data = await res.json();
        console.log(data)

        if(data.status === 201){
            Navigate('/');
        }

        else if(data.status === 432){
            setalert_message('Incorrect OTP try again');
            setalert_box(true)
        }

        else if(data.status === 442){
            setalert_message('Your current OTP has been expired , New otp is sent to your email');
            setalert_box(true)
        }

}


  return (
    <>

    <Box sx={{ width: '100%', height:'0px' }}>
        <Collapse in={alert_box}>
            <Alert
            action={
                <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                    setalert_box(false);
                }}
                >
                <CloseIcon fontSize="inherit" />
                </IconButton>
            }
            sx={{ mb: 2 }}
            >
            {alert_message}
            </Alert>
        </Collapse>
        </Box>

    <div id={registercss.main}>
        <div id={registercss.register_box_wrap}>
            <form id={registercss.register_box} onSubmit={signup_req}>
                <div className={registercss.register_comps} id={registercss.comp_1}>Create an account</div>
                <div className={`${registercss.register_comps} ${registercss.input_labels}`} id={registercss.comp_2}>EMAIL</div>
                <div className={`${registercss.register_comps} ${registercss.input_fields}`} id={registercss.comp_3}>
                    <input type="email" name='email' onChange={handle_user_values} value={user_details.email} required />
                </div>
                <div className={`${registercss.register_comps} ${registercss.input_labels}`} id={registercss.comp_4}>USERNAME</div>
                <div className={`${registercss.register_comps} ${registercss.input_fields}`} id={registercss.comp_5}>
                    <input type="text" name='username' onChange={handle_user_values} value={user_details.username} required />
                </div>
                <div className={`${registercss.register_comps} ${registercss.input_labels}`} id={registercss.comp_6}>PASSWORD</div>
                <div className={`${registercss.register_comps} ${registercss.input_fields}`} id={registercss.comp_7}>
                    <input type="password" name='password' onChange={handle_user_values} value={user_details.password} required/>
                    </div>
                <div className={registercss.register_comps} id={registercss.comp_8}><button id={registercss.signup_button}>Sign up</button></div>
                <div className={registercss.register_comps} id={registercss.comp_9_wrap}>
                    <div className={registercss.comp_9_comps} id={registercss.comp_9_1}>Already have an account?</div>
                    <div className={registercss.comp_9_comps} id={registercss.comp_9_2} onClick={()=>{Navigate('/')}}>Login</div>
                </div>
                <div className={registercss.register_comps} id={registercss.comp_10_wrap}>
                    <div className={registercss.comp_10_comps} id={registercss.comp_10_1}>Or sign up with</div>
                    <div className={registercss.comp_10_comps} id={registercss.comp_10_2}><GoogleIcon onClick={google_signup}></GoogleIcon></div>

                </div>

            </form>
            {verify_modal()}
        </div>
    </div>
    </>
  )
}

export default Register