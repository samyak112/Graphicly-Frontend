import React, { useState } from 'react'
import logincss from '../Login/login.module.css'
import {useNavigate} from 'react-router-dom'
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import GoogleIcon from '@mui/icons-material/Google';
import { useGoogleLogin } from '@react-oauth/google';
import Spinner from 'react-bootstrap/Spinner';
import axios from "axios";

function Login() {

  const Navigate = useNavigate();
  const url = import.meta.env.VITE_URL

  // Loading state till data is retrieved
  const [is_data_retrieved, setis_data_retrieved] = useState(null)

  // user details state
  const [user_details, setuser_details] = useState({email:'' , password:''})

  //   alert box states
  const [alert_box, setalert_box] = useState(false)
  const [alert_message, setalert_message] = useState('')

  const handle_user_details = (e) => {
    const name = e.target.name;
    const value = e.target.value
    setuser_details({...user_details,[name]:value})
  };

  const google_login = useGoogleLogin({
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
  


  const login_req = async(e) => {
    setis_data_retrieved(false)
    e.preventDefault();
          const {email,password} = user_details;

          const res = await fetch(`${url}/signin`,{
              method:'POST',
              headers:{
                  'Content-Type' : 'application/json',
              },
              body:JSON.stringify({
                  email,password
              }),
              
          })

          const data = await res.json();

          if(data.status === 442){
            setis_data_retrieved(true)
            setalert_message('invalid username or password');
            setalert_box(true)
          }

          else if(data.status === 201){
            localStorage.setItem('token', data.token);            
            Navigate('/dashboard')
             
          }

          else if(data.status === 422){
            setis_data_retrieved(true)
            setalert_message('not verified yet');
            setalert_box(true)
          }

   };
  

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
    <div id={logincss.main}>
      <div id={logincss.login_wrap}>
        <form id={logincss.login_box} onSubmit={login_req}>
          <div className={`${logincss.login_comps} ${logincss.top_comps}`} id={logincss.comp_1}>Welcome Back!</div>
          <div className={`${logincss.login_comps} ${logincss.top_comps}`} id={logincss.comp_2}>We're so excited to see you again</div>
          <div className={`${logincss.login_comps} ${logincss.input_labels}`} id={logincss.comp_3}>EMAIL</div>
          <div className={`${logincss.login_comps} ${logincss.input_fields}`} id={logincss.comp_4}><input name='email' value={user_details.email} onChange={handle_user_details} required type="text" /></div>
          <div className={`${logincss.login_comps} ${logincss.input_labels}`} id={logincss.comp_5}>PASSWORD</div>
          <div className={`${logincss.login_comps} ${logincss.input_fields}`} id={logincss.comp_6}><input name='password' value={user_details.password} onChange={handle_user_details} required type="password" /></div>
          <div className={logincss.login_comps} id={logincss.comp_7}>
            <button id={logincss.login_button}>
              {
                is_data_retrieved==null || is_data_retrieved==true?
                <>
                  Log in
                </>
                :
                <>
                  <Spinner animation="border" variant="light" />
                </>
                
              }
            
            </button></div>
          <div className={logincss.login_comps} id={logincss.comp_8_wrap}>
            <div className={logincss.comp_8_comps} id={logincss.comp_8_1}>Need an account?</div>
            <div className={logincss.comp_8_comps} id={logincss.comp_8_2} onClick={()=>{Navigate('/register')}} >Register</div>
          </div>
          <div className={logincss.login_comps} id={logincss.comp_9}>Or Login with</div>
          <div id={logincss.comp_10_wrap}>
            <div className={logincss.login_comps} id={logincss.comp_10}><GoogleIcon onClick={google_login}></GoogleIcon></div>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login