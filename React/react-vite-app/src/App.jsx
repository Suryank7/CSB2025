import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './components/Profile';

function App() {

  return (
    <>
      <div className="container">
        <h2>Welcome To React</h2>
        <h3 style={{ backgroundColor: 'cyan', color: 'red' }}>
          <Profile/>
        </h3>
      </div>
    </>
  );
}

export default App
