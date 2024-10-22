import { useState } from 'react'
import './App.css'
import Parent from './assets/components/Parent'
import Parent1 from './assets/components/Parent1'
import MyApp from './assets/components/Test'

function App() {
  const [count, setCount] = useState(10)
  const [color, setColor] = useState('white');
  function inc(){
    setCount(count+1)
  }

  function dec(){
    setCount(count-1)
  }

  return (
    <>
     {/* <Parent1/> */}
     {/* <MyApp/> */}
     <div style={{background:color,width:"160px",padding:"10px"}}>
     <button onClick={inc}>+</button>
     <p style={{color:"black"}}>{count}</p>
     <button onClick={dec}>1</button>
     </div>
     <button onClick={()=>{
      setColor("red")
     }}>Red</button>
    <button onClick={()=>{
      setColor("Green")
     }}>Green</button>
    </>
  )
}

export default App
