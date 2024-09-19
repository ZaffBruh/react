import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(15)

  // let count = 15
  const addValue = () => {
    if(count != 20){
      count++
      setCount(count)
    }else{
      setCount(20)
    }
    // document.querySelector("h2").innerHTML = `counter value: ${count}`
  }

  const removeValue = () => {
    if(count != 0){
      count--
      setCount(count)
    }else{
      setCount(0)
    }
  }

  return (
    <>
     <h1>chai and react</h1>
     <h2>counter value: {count}</h2>

     <button onClick={addValue}>Add Value</button>
     <br />
     <button onClick={removeValue}>Decrease Value</button>
     <p>Footer: {count}</p>
    </>
  )
}

export default App
