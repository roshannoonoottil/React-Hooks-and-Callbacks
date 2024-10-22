import React from 'react'

function Child1({messageFromParent}) {

    const message = 'Hai Its Mee!'
    messageFromParent(message   )
  return (
    <div>
      
    </div>
  )
}

export default Child1
