import { useNavigate } from "react-router-dom"
import { useLoginContext } from "../context/LoginContext.jsx"
import { useEffect, useState } from "react"
import { useUserInfo } from "../hooks/useUserInfo.jsx"
import { useForm } from "react-hook-form"
import { postLoginService } from "../services/postLoginService.js"
import { patchUserData } from "../services/patchUserData.js"

export function UserProfile() {
  const checkLogin = useNavigate()
  const loginContext = useLoginContext()
  const {storedUser} = useUserInfo()
  //Haremos uso de la funcion 'reset' para poder cargar defaultValues
  const{register, handleSubmit, reset} = useForm({
    // primero los dejamos vacios
    defaultValues: {
    first_name: "",
    last_name: "",
    email: "",
    cellphone: ""
    }
  })
  //Esta funcion se ejecuta al hacer el submit del form
  async function updateData(data){
    const user = await postLoginService(storedUser.email,storedUser.password)
    const userFound = user.data.find((users) => users.email === storedUser.email && users.password === storedUser.password)
    if(userFound){
      const updated = await patchUserData(storedUser.id, data)
      if(updated){
        localStorage.setItem("user",JSON.stringify(updated))
        alert('User updated and saved!')
      }
    }
  }
  useEffect(() =>{
    const tokenExists = loginContext.token
    if(!tokenExists){
        checkLogin('/')
    }
    //Aqui verificamos que la variable storedUser tenga datos y de ser asi nos guarde la informacion dentro de reset
    if (storedUser) {
    reset({
      first_name: storedUser.first_name || "",
      last_name: storedUser.last_name || "",
      email: storedUser.email || "",
      cellphone: storedUser.cellphone || ""
      })
    }
  },[loginContext.token, storedUser])
  return (
    <>
      <h1>User Profile</h1>
      <form onSubmit={handleSubmit(updateData)}>
        <label>
          Name:
          <input type="text" {...register("first_name")} />
        </label>
        <label>
          Last Name:
          <input type="text" {...register("last_name")} />
        </label>
        <label>
          Email:
          <input type="text" {...register("email")} />
        </label>
        <label>
          Cellphone:
          <input type="text" {...register("cellphone")} />
        </label>
        <button type="submit">
          Save Changes
        </button>
      </form>
    </>
    
  )
}
