import { Routes, Route } from "react-router-dom"
import { Login } from "./pages/Login.jsx"
import { Layout } from "./pages/Layout.jsx"
import { LoginContextProvider } from "./context/LoginContext.jsx"
import { UserProfile } from "./pages/UserProfile.jsx"
import { UserFeed } from "./pages/UserFeed.jsx"
import { Register } from "./pages/Register.jsx"
import { UserFeedDetail } from "./pages/UserFeedDetail.jsx"
import './App.css'

function App() {
  return (
    <>
      <LoginContextProvider>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route element={<Layout/>}> 
              <Route path="/homeFeed" element={<UserFeed/>} />
              <Route path="/homeFeed/:id" element={<UserFeedDetail/>} />
              <Route path="/userProfile" element={<UserProfile/>} />
            </Route>
          </Routes>
      </LoginContextProvider>
    </>
  )
}
export default App
