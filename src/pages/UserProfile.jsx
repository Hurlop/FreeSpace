import { NavLink, useNavigate } from "react-router-dom"
import { useLoginContext } from "../context/LoginContext.jsx"
import { useEffect } from "react"
import { useUserInfo } from "../hooks/useUserInfo.jsx"
import { useForm } from "react-hook-form"
import { postLoginService } from "../services/postLoginService.js"
import { patchUserData } from "../services/patchUserData.js"

export function UserProfile() {
  const checkLogin = useNavigate()
  const loginContext = useLoginContext()
  const { storedUser } = useUserInfo()
  //Haremos uso de la funcion 'reset' para poder cargar defaultValues
  const { register, handleSubmit, reset } = useForm({
    // primero los dejamos vacios
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      cellphone: ""
    }
  })
  //Esta funcion se ejecuta al hacer el submit del form
  async function updateData(data) {
    const user = await postLoginService(storedUser.email, storedUser.password)
    const userFound = user.data.find((users) => users.email === storedUser.email && users.password === storedUser.password)
    if (userFound) {
      const updated = await patchUserData(storedUser.id, data)
      if (updated) {
        localStorage.setItem("user", JSON.stringify(updated))
        loginContext.setUser(updated)
        alert('User updated and saved!')
      }
    }
  }
  useEffect(() => {
    const tokenExists = loginContext.token
    if (!tokenExists) {
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
  }, [checkLogin, loginContext.token, reset, storedUser])

  return (
    <form onSubmit={handleSubmit(updateData)} className="flex flex-col gap-4 max-w-sm mx-auto bg-gray-200 p-6 rounded-2xl mt-6">
      <label className="flex flex-col px-4">
        Name
        <input type="text" {...register("first_name")} className="border border-gray-400 p-2 rounded-lg" />
      </label>
      <label className="flex flex-col px-4">
        Last Name
        <input type="text" {...register("last_name")} className="border border-gray-400 p-2 rounded-lg" />
      </label>
      <label className="flex flex-col px-4">
        Email
        <input type="text" disabled {...register("email")} className="border border-gray-400 p-2 rounded-lg" />
      </label>
      <label className="flex flex-col px-4">
        Cellphone
        <input type="text" {...register("cellphone")} className="border border-gray-400 p-2 rounded-lg" />
      </label>
      <div className="mx-auto flex gap-3">
        <NavLink to='/homeFeed' className="border border-gray-700 py-2 px-6 rounded-lg "> Cancel </NavLink>
        <button type="submit" className="bg-black text-white py-2 px-6 rounded-lg "> Save Changes </button>
      </div>
    </form>
  )
}
