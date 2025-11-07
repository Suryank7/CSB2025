import React, { useState } from 'react'
import tree from './tree.png'

function imageManipulation() {
    const [imgHeight, setImageHeight] = useState(200);
    const [imgWidth, setImageWidth] = useState(200);
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    const [imgAngle, setImageAngle] = useState(0);

    function increaseHeight() {
        setImageHeight(imgHeight + 10);
    }

    function ChangeBgColor() {
        setRed(Math.random() * 255);
        setGreen(Math.random() * 255);
        setBlue(Math.random() * 255);
    }

    function ImageRotate() {
        setImageAngle(imgAngle + 30);
    }
  return (
    <div>
      <h2>imageManipulation</h2>
      <div
        style={{
          border: "1px solid blue",
          height: "450px",
          width: "350px",
          margin: "0px",
        }}
      >
        <img src={tree} height={200} width={250} alt="tree image" style={{paddingTop:'70px',paddingLeft:'70px',backgroundColor:`rgb($(red),$(green),&{blue})`,transform:'rotate($(imageAngle)deg)'}} />
      </div>
      <div>
        <button onClick={()=>{imgHeight+20}}>Increase Height</button>
        <button>Decrease Height</button>
              <button onClick={() => { imgWidth + 15 }}>Increase Width</button>
              <button onClick={ChangeBgColor}>ChangeBgColor</button>
              <button onClick={ImageRotate}>RotateImage</button>
      </div>
      <div>
        <h2 style={{ color: "cyan", backgroundColor: "green" }}>
                  Image height:{imgHeight}
                  </h2>
        <h2 style={{ color: "cyan", backgroundColor: "green" }}>
          Image height:{imgWidth}
        </h2>
      </div>
    </div>
  );
}

export default imageManipulation