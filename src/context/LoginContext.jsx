import { createContext, useContext, useState, useEffect } from "react"
import { postLoginService } from "../services/postLoginService.js"

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
    const storedToken = localStorage.getItem('token')
    const storedUser = localStorage.getItem('user')

    setToken(storedToken)
    setUser(JSON.parse(storedUser))
  },[])
  return (
    <LoginContext.Provider value={{user, token, logIn, logOut, setUser}}>
      {children}
    </LoginContext.Provider>
  )
}


export function useLoginContext(){
  return useContext(LoginContext)
}
    
