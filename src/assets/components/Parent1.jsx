import React, { useState } from 'react'
import Child1 from './Child1'

function Parent1() {
    const [message, setMessage] = useState('');
    const msg = (message) =>{
        setMessage(message)
    }

  return (
    <div>
      <p>Message : {message}</p>
      <Child1 messageFromParent={msg}/>
    </div>
  )
}

export default Parent1
