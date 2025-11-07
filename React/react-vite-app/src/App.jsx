import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './components/Profile';
import Gallery from './components/Gallery';
import StateHandling from './components/StateHandling';
import image from './components/imageManipulation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';

function App() {

  return (
    <>
      <div>
        {/* <div className="container">
        <h2>Welcome To React</h2>
        <h3 style={{ backgroundColor: 'cyan', color: 'red' }}>
          <Gallery />
          <StateHandling/>
        </h3>
        <image/>
      </div> */}
        <BrowserRouter>
          <Routes>
            
            <Route path='/login' element={<Login/>}></Route>
          </Routes>
        </BrowserRouter>
        
      </div>
    </>
  );
}

export default App
