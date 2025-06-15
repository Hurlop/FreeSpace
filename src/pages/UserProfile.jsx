import { useNavigate } from "react-router-dom"
import { useLoginContext } from "../context/LoginContext"
import { useEffect } from "react"

export function UserProfile() {
  const checkLogin = useNavigate()
  const loginContext = useLoginContext()
  useEffect(() =>{
    const tokenExists = loginContext.token
    if(!tokenExists){
        checkLogin('/')
    }
  },[loginContext.token])
  return (
    <>
    <div>UserProfile</div>
    </>
    
  )
}
