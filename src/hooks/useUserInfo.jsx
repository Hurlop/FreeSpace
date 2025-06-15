import { getUserService } from "../services/getUserService"
import { useState, useEffect } from "react"

export default function useUserInfo() {
    const [userData, setUserData] = useState({})
    async function getUserInfo(){
        try {
            const userInfo = await getUserService()
            setUserData(userInfo.data)
        } catch (error) {
            console.error('error inesperado: ',error)
        }
    }
    useEffect(()=>{
        getUserInfo()
    },[])
  return {
    userData
  }
}
