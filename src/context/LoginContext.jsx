import { createContext, useContext, useState, useEffect } from "react"
import { postLoginService } from "../services/postLoginService"
const LoginContext = createContext()
export const LoginContextProvider = ({children}) => {
  const [user, setUser] = useState(null)
  function logIn({}){
    
  }
  function logOut(){
    localStorage.removeItem(postLoginService)
    setUser(null)
    alert('Logged Out')
  }
  useEffect(() =>{
    const stored = JSON.parse(localStorage.setItem('userLogged'))
    setUser(stored)
  },[])
  return (
    <LoginContext.Provider value={{}}>
      {children}
    </LoginContext.Provider>
  )
}
    
