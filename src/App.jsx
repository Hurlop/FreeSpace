import { Routes, Route } from "react-router-dom"
import { Login } from "./pages/Login.jsx"

import './App.css'
import { HomeFeed } from "./pages/HomeFeed.jsx"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/homeFeed" element={<HomeFeed/>} />
      </Routes>
    </>
  )
}

export default App
