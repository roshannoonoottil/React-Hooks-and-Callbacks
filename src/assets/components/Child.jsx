import React from 'react'

function Child({sendMessageToParrent,countToParrent,count}) {

  const handleClick = ()=>{
    const message = 'Hello From The Child.'
    sendMessageToParrent(message)
  }
  const handleCountClick = ()=>{
    countToParrent(count + 1);
  }
  return (
    <div>
      <h1>Child Component</h1>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleCountClick}>Click Me For Count</button>
    </div>
  )
}

export default Child
