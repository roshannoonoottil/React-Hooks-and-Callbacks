import React, { useState } from 'react'
import Child from './Child'

function Parent() {
  const [count,setCount] = useState(0);
  const [messageFromChild, setMessageFromChild] = useState('');

  const handleDataFromChild = (message) =>{
    setMessageFromChild(message);
  }
  const increseCount = (newCount) =>{
    setCount(newCount);
  }
  return (
    <div>
      <h1>Parent Component</h1>
      <p>Count: {count}</p>
      <p>Message From Child: {messageFromChild}</p>
      <Child sendMessageToParrent={handleDataFromChild} countToParrent={increseCount} count={count}/>
    </div>
  )
}

export default Parent
