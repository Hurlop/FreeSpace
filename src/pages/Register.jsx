import { postCreateUser } from "../services/postCreateUser.js"
import { useForm } from "react-hook-form";
import { useNavigate, NavLink } from "react-router-dom";

export function Register() {
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()
  async function signUp(data) {
    const register = await postCreateUser(data.email, data.password,data.cellphone, data.first_name, data.last_name)
    console.log(data)
    if (register) {
      alert('User Created!')
      navigate('/homeFeed')
    } else {
      alert('Error')
    }
  }
  
  return (
    <>
      <section className="flex flex-col h-screen">
        <h1 className="text-5xl my-10 text-center">FreeSpace</h1>
        <form onSubmit={handleSubmit(signUp)} className="flex flex-col gap-4 bg-gray-100 p-6 rounded-lg border mx-auto">
          <h3 className="text-gray-600">Sign up to know more about space</h3>
          <input type="email" {...register("email")} placeholder="Email" className="border border-gray-400 p-1 rounded-lg" />
          <input type="password" {...register("password")} placeholder="Password" className="border border-gray-400 p-1 rounded-lg" />
          <input type="number" {...register("cellphone")} placeholder="Cellphone" className="border border-gray-400 p-1 rounded-lg" />
          <input type="text" {...register("first_name")} placeholder="First Name" className="border border-gray-400 p-1 rounded-lg" />
          <input type="text" {...register("last_name")} placeholder="Last Name" className="border border-gray-400 p-1 rounded-lg" />
          <div className="mx-auto flex gap-3">
            <button type="submit" className="bg-black text-white py-1 px-20 rounded-lg "> Sign up </button>
          </div>
          <span className="m-auto">Have an account? <NavLink to='/' className="text-blue-600"> Login </NavLink></span>
        </form>
      </section>
    </>
  )
}
