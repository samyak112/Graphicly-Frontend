import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// import '../node_modules/react-bootstrap/dist/react-bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.css'
import store from './Components/Redux/store'
import { Provider } from 'react-redux'
import { GoogleOAuthProvider } from '@react-oauth/google';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}><App /></GoogleOAuthProvider>
    
  </Provider>
)
