import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Routes,
  } from "react-router-dom";
import Loading from './Components/Loading/Loading';
const Home = React.lazy(() => import('./Pages/Home/Home'));
const Editor = React.lazy(() => import('./Pages/Editor/Editor'));

function App() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path="/editor/:id" element={
                <React.Suspense fallback={<Loading/>}>
                  <Editor/>
                </React.Suspense>
              }>
            </Route>
            <Route path="/" element={
                <React.Suspense fallback={<Loading/>}>
                  <Home/>
                </React.Suspense>
              }>
            </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
