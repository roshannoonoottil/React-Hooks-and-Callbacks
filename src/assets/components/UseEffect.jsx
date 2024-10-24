import React, { useEffect, useState } from 'react'



function UseEffect(props) {
    const [boom, setBoom] = useState(false)
    useEffect(()=>{
        setBoom(false)
        const id = setTimeout(()=>{
            setBoom(true)
        },props.count * 1000)
        console.log("useEffect Hook is called "+props.count);
        return()=>{
            clearTimeout(id)
            console.log("useEffect Hook is cleaned up "+ props.count);
        }
    },[props.count])
  return (
    <div>
      {
        boom && props.count ?(
            <div style={{width:"100px",height:"20px",background:"red"}}>
            <span style={{fontSize:"20px",color:"black"}}>BOOM!</span>
            </div>
        ):null
      }
    </div>
  )
}

export default UseEffect
