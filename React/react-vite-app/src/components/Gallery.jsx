import React from 'react'
import Profile from './Profile'
import "./Gallery.css";
function Gallery() {
  const student = [
    {
      pic: "https://www.freepik.com/free-vector/man-profile-account-picture_137411837.htm#fromView=keyword&page=1&position=0&uuid=de006e8d-32bf-41fb-8f9a-dbbb124771aa&query=Profile+illustration",
      myName: "Rahul",
      branch: "CS",
      section: "B",
      College: "ABES Engineering COllege",
    },
    {
      pic: "https://www.freepik.com/free-vector/businessman-character-avatar-isolated_6769264.htm#fromView=keyword&page=1&position=8&uuid=de006e8d-32bf-41fb-8f9a-dbbb124771aa&query=Profile+illustration",
      myName: "Amit",
      branch: "CSE",
      section: "A",
      College: "ABES Engineering COllege",
    },
    {
      pic: "https://www.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_36332638.htm#fromView=keyword&page=1&position=19&uuid=de006e8d-32bf-41fb-8f9a-dbbb124771aa&query=Profile+illustration",
      myName: "Pardeep",
      branch: "ECE",
      section: "C",
      College: "ABES Engineering COllege",
    },
  ];
  return (
    <div className='gallery'>
      {/* <div><Profile name="Rahul Kumar" branch="CS" section="B" college="ABES Engineering COllege"/> </div>
      <div><Profile name="Amit Singh " branch="CSE" section="A" college="ABES Engineering COllege"/> </div>
      <div><Profile name="Amit Singh " branch="CSE" section="A" college="ABES Engineering COllege"/> </div>
      <div><Profile/></div> */}
      {
        student.map((ele) => (
          <Profile data={ele} />
        ))
      }
    </div>
  )
}

export default Gallery