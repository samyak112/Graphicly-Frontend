import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Routes,
  } from "react-router-dom";
import Auth from './Components/Auth/Auth'
import Dashboard from './Pages/Dashboard/Dashboard';
// const Dashboard = React.lazy(() => import('./Pages/Dashboard/Dashboard'));
const Login = React.lazy(() => import('./Pages/Login/Login'));
const Register = React.lazy(() => import('./Pages/Register/Register'));

function App() {
  return (
    <div>
      <Router>
        <Routes>

          {/* Authorized pages */}
          <Route element={<Auth/>}>

              <Route path="/" element={
                  <React.Suspense fallback={<>.......</>}>
                    <Login/>
                  </React.Suspense>
                }>
              </Route>

              <Route path="/dashboard" element={
                  // <React.Suspense fallback={<>...</>}>
                    <Dashboard/>
                  // </React.Suspense>
                }>
              </Route>
              
          </Route>

          {/* Non authorized pages */}
          <Route path="/register" element={
              <React.Suspense fallback={<>...</>}>
                <Register/>
              </React.Suspense>
            }>
          </Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
