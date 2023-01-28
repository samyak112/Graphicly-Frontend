import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Routes,
  } from "react-router-dom";
import Auth from './Components/Auth/Auth'
import Loading from './Components/Loading/Loading';
// import Editor from './Pages/Editor/Editor';
const Login = React.lazy(() => import('./Pages/Login/Login'));
const Home = React.lazy(() => import('./Pages/Home/Home'));
const Editor = React.lazy(() => import('./Pages/Editor/Editor'));
const Register = React.lazy(() => import('./Pages/Register/Register'));

function App() {
  return (
    <div>
      <Router>
        <Routes>

          {/* Authorized pages */}
          <Route element={<Auth/>}>

              <Route path="/" element={
                  <React.Suspense fallback={<Loading></Loading>}>
                    <Login/>
                  </React.Suspense>
                }>
              </Route>

              <Route path="/editor" element={
                  <React.Suspense fallback={<Loading></Loading>}>
                    <Editor/>
                  </React.Suspense>
                }>
              </Route>

              <Route path="/home" element={
                  <React.Suspense fallback={<Loading></Loading>}>
                    <Home/>
                  </React.Suspense>
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
