import { Routes, Route } from "react-router-dom"
import { Login } from "./pages/Login.jsx"

import './App.css'
import { HomeFeed } from "./pages/HomeFeed.jsx"
import { LoginContextProvider } from "./context/LoginContext.jsx"

function App() {
  return (
    <>
      <LoginContextProvider>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/homeFeed" element={<HomeFeed/>} />
        </Routes>
      </LoginContextProvider>
    </>
  )
}

export default App
