import { useState, useEffect } from "react"

export function useUserInfo() {
    //En esta variable de estado vamos a guardar la informacion de nuestro usuario
    const [storedUser, setStoredUser] = useState(
    { email: "",
        password: "",
        cellphone: null,
        gender: "",
        first_name: "",
        last_name: ""
    })
    useEffect(()=>{
        //Aqui traemos la informacion desde el local storage de nuestro usuario
        const userInfo = localStorage.getItem('user')
        if (userInfo) {
            setStoredUser(JSON.parse(userInfo));
        }
    },[])
  return {
    storedUser
  }
}
