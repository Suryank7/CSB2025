import React from 'react'
import { useState } from 'react';
// import { Button } from "@/components/ui/button";

function StateHandling() {
  const [counter, setCounter] = useState(20);

  function increaseCounter(){
    setCounter(counter+2);
  }
  return (
    <div>
      <h2>Counter value={counter}</h2>
      <button onClick={increaseCounter}>Increment Counter</button>
      <button onClick={()=>setCounter(counter+2)}>Increment Counter</button>
    </div>
  );
}

export default StateHandling