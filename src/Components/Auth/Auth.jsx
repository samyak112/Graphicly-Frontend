import { useEffect} from 'react';
import {useNavigate,Outlet} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import {authorized,not_authorized} from '../Redux/Auth_slice'
import Login from '../../Pages/Login/Login';
import Loading from '../Loading/Loading'


const Auth = (props) => {
    const Navigate = useNavigate();
    // reading data from redux store
    const auth_state = useSelector(state => state.isauthorized.value)

    const dispatch = useDispatch();

    const url = import.meta.env.VITE_URL

    const private_routes = async() =>{
        
        const res = await fetch(`${url}/verification_route`,{
            method:'POST',
            headers:{
                'Content-Type' : 'application/json',
                'x-auth-token':localStorage.getItem('token')
            }
        })
        const data = await res.json();
        
        
        if(data.status == 201){
            dispatch(authorized())
        }
        else{
            dispatch(not_authorized())
        }

    }
console.log(auth_state)
    // made a use effect here so that whenever this file is invoked through app.js then this function must runs otherwise it will have the default values in it
    
    useEffect(()=>{
        if(localStorage.getItem('token')==''||localStorage.getItem('token')==undefined){
            dispatch(not_authorized())
        }
        else{
            private_routes()
        }
    })

    return(
        <>
            {
            auth_state==true?
                window.location.pathname=='/'?
                Navigate('/home')
                :
                <Outlet/>
            :
            
            auth_state==false
            ?
            <Login/>
            :
            <Loading/>
            }
        </>
    )
}

export default Auth