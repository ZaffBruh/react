import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [pass, setPass] = useState("")
  const [copy, setCopy] = useState("Copy")
  const [copyColor, setCopyColor] = useState("green")

  //useRef hook
  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,14)
    // document.querySelector("button").innerHTML = "Copied"
    // document.querySelector("button").style.backgroundColor="orange"
    setCopy("Copied")
    setCopyColor("orange")
    window.navigator.clipboard.writeText(pass)
  }, [pass])

  const passwordGenerator = useCallback(() => {
    let password = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed){
      str += "0123456789"
    }
    if(characterAllowed){
      str += "!@#$%^&*()_+{}[]|<>.,/~`"
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random()* str.length )
      password += str.charAt(char)      
    }
    setPass(password)
      
    }, [length, numberAllowed, characterAllowed, setPass])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed, passwordGenerator])

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
          ref={passwordRef}
          />
          <button
          onClick={copyPasswordToClipboard}
          style={{backgroundColor:copyColor}}
          className='outline-none text-white px-3 py-0.5 shrink-0 hover:scale-110'
          >
            {copy}
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
          <div className='flex items-center gap-x-1'>
              <input 
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={(e) => {
                setNumberAllowed((prev) => !prev)
              }} 
              />
              <label>Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
              <input 
              type="checkbox"
              defaultChecked={characterAllowed}
              id="numberInput"
              onChange={(e) => {
                setCharacterAllowed((prev) => !prev)
              }} 
              />
              <label>Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
