import { createContext, useContext, useState, useEffect } from "react"
import { postLoginService } from "../services/postLoginService.js"
import { set } from "react-hook-form"

const LoginContext = createContext()
export const LoginContextProvider = ({children}) => {

  const[user, setUser] = useState(null)
  const[token, setToken] = useState(null)

  async function logIn(email, password){
    const response = await postLoginService(email,password)
    const userFound = response.data.find((users) => users.email === email && users.password === password)
    if(userFound){
      setUser(userFound)
      const tokenGenerated = new Date().getTime()
      localStorage.setItem('token', tokenGenerated)
      setToken(tokenGenerated)
      localStorage.setItem('user', JSON.stringify(userFound))
      return true
    } else {
      return false
    }
  }

  function logOut(){
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setToken(null)
    setUser(null)
    alert('Logged Out')
  }
  useEffect(() =>{
    const stored = localStorage.getItem('token')
    setToken(stored)
  },[])
  return (
    <LoginContext.Provider value={{user, token, logIn, logOut}}>
      {children}
    </LoginContext.Provider>
  )
}

export function useLoginContext(){
    return useContext(LoginContext)
}
    
