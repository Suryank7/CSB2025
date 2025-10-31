import React from 'react'
import './profile.css'
function Profile({ data }) {
  return (
    <div className="parent">
      <h2>Profile</h2>
      <img
        src="https://img.freepik.com/free-vector/man-profile-cartoon_18591-58479.jpg"
        height={200}
        width={250}
        alt=""
      />
      <h3>Name: {data.myName}</h3>
      <h3>Branch: {data.branch} </h3>
      <h3>Section: {data.section} </h3>
      <h3>College: {data.College} </h3>
    </div>
  );
}

export default Profile