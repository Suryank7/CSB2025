import React from 'react'
import { Link } from 'react-router-dom'

function MainLayout() {
  return (
    <div>
      <nav>
        <Link
          style={{
            fontSize: "48px",
            color: "Red",
            marginLeft: "100px",
            marginTop: "200px",
          }}
          to="/Login"
        >
          Login
        </Link>
        <Link
          style={{
            fontSize: "48px",
            color: "Blue",
            marginLeft: "100px",
            marginTop: "100px",
          }}
          to="/registration"
        >
          Register
        </Link>
        <Link
          style={{
            fontSize: "48px",
            color: "Green",
            marginLeft: "100px",
            marginRight: "100px",
            marginTop: "100px",
          }}
          to="/dashboard"
        >
          Dashboard
        </Link>
      </nav>
    
    </div>
  );
}

export default MainLayout