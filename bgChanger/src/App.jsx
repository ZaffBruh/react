import React from 'react'
import { useState } from "react"


function App() {
  const change = () => {

    // const [color, setColor] = useState("olive")
    document.body.style.backgroundColor = "olive"

  }
  

  return (
    <>
      {/* <div className="w-full h-screen duration-200"></div> */}
      <button onClick={change}>Olive</button>
    </>
  )
}

export default App
