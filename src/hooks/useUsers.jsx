import { getUserService } from "../services/getUserService"
import { useEffect, useState } from "react"

export function useUsers() {
    const [usersData,setUsersData] = useState([])
    async function fetchUsers(){
        try {
            const users = await getUserService()
            setUsersData(users)
        } catch (error) {
            console.error('error inesperado: ',error)
        }
    }
    useEffect(()=>{
        fetchUsers()
    },[])
    return {
        usersData
    }
}
