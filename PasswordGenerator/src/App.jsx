import { useState, useCallback } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [pass, setPass] = useState("")

  const passwordGenerator = useCallback(() => {
    let password = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed){
      str += "0123456789"
    }
    if(characterAllowed){
      str += "!@#$%^&*()_+{}[]|<>.,/~`"

    for (let i = 0; i < array.length; i++) {
      let char = Math.floor(Math.random()* str.length +1)
      password = str.charAt(char)
      
    }
    setPass(pass)
      
    }
  }, [length, numberAllowed, characterAllowed, setPass])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center px-1 py-2'> Password generator </h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text" 
          value={pass}
          className="outline-none w-full py-1 px-3"
          placeholder='Password'
          readOnly
          />
          <button
          className='outline-none bg-blue-800 text-white px-3 py-0.5 shrink-0'
          >
            copy
          </button>
        </div>
        <div
        className='flex text-sm gap-x-2'
        >
          <div
          className='flex items-center gap-x-1'
          >
            <input 
            type="range" 
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {setLength(e.target.value)}}
            />
              <label>Length: {length}</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
