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
import Registration from './pages/Registration';
import Dashboard from './pages/Dashboard';
import MainLayout from './pages/MainLayout';

function App() {
  const [data, setData] = useState();
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
            <Route path="/login" element={<Login logData={data} />}></Route>
            <Route
              path="/registration"
              element={<Registration regData={setData} />}
            ></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/" element={<MainLayout />}></Route>
          </Routes>
        </BrowserRouter>
        <h2>{JSON.stringify(data)}</h2>
      </div>
    </>
  );
}

export default App
