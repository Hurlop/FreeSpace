import { createContext, useContext, useState, useEffect } from "react"
import { postLoginService } from "../services/postLoginService"
import { set } from "react-hook-form"

const LoginContext = createContext()
export const LoginContextProvider = ({children}) => {

  const [token, setToken] = useState(null)

  async function logIn(email, password){
    const response = await postLoginService(email,password)
    console.log('respuesta: ',response)
    
    if(response && response.request.status === 200){
      setToken(response.data.token)
      localStorage.setItem('token', JSON.stringify(response.data.token))
      return true
    } else {
      return false
    }
  }

  function logOut(){
    localStorage.removeItem('token')
    setToken(null)
    alert('Logged Out')
  }
  useEffect(() =>{
    const stored = localStorage.getItem('token')
    setToken(stored)
  },[])
  return (
    <LoginContext.Provider value={{logIn, logOut}}>
      {children}
    </LoginContext.Provider>
  )
}

export function useLoginContext(){
    return useContext(LoginContext)
}
    
