import UserContextProvider from "./context/UserContextProvider"


function App() {

  return (
    <UserContextProvider>
      <h1>context</h1>
    </UserContextProvider>
  )
}

export default App
