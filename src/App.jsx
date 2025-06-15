import { Routes, Route } from "react-router-dom"
import { Login } from "./pages/Login.jsx"
import { Layout } from "./pages/Layout.jsx"
import { LoginContextProvider } from "./context/LoginContext.jsx"
import { UserProfile } from "./pages/UserProfile.jsx"
import { UserFeed } from "./pages/UserFeed.jsx"
import './App.css'
import { Register } from "./pages/Register.jsx"

function App() {
  return (
    <>
      <LoginContextProvider>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route element={<Layout/>}> 
              <Route path="/homeFeed" element={<UserFeed/>} />
              <Route path="/userProfile" element={<UserProfile/>} />
            </Route>
          </Routes>
      </LoginContextProvider>
    </>
  )
}
export default App
