import { useEffect } from "react";
import { Form, Button, Input } from "antd";
import { useNavigate, NavLink } from 'react-router-dom';
import { useLoginContext } from '../context/LoginContext.jsx';
import { useForm } from "react-hook-form";

export function Login() {
  const loginContext = useLoginContext()
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm()
  async function logIn(data) {
    const isLoggedIn = await loginContext.logIn(data.email, data.password)
    console.log(data)
    if (isLoggedIn) {
      alert('Sesion Iniciada')
      navigate('/homeFeed')
    } else {
      alert('Error')
    }
  }
  useEffect(() => {
    const tokenExists = localStorage.getItem('token')
    if (tokenExists) {
      navigate('/homeFeed')
    } else {
      navigate('/')
    }
  }, [navigate])

  return (
    <>
      <section className="flex flex-row justify-evenly">
        <img className="h-screen" src="../../public/background.png" alt="background" />
        <div className="my-auto">
          <h1 className="text-5xl m-2 text-center">FreeSpace</h1>
          <form onSubmit={handleSubmit(logIn)} className="flex flex-col gap-4 bg-gray-100 p-6 rounded-lg border">
            <input type="text" {...register("email")} placeholder="Email" className="border border-gray-400 p-1 rounded-lg" />
            <input type="password" {...register("password")} placeholder="Password" className="border border-gray-400 p-1 rounded-lg" />
            <div className="mx-auto flex gap-3">
              <button type="submit" className="bg-black text-white py-1 px-20 rounded-lg "> Login </button>
            </div>
            <span>Don't have an account? <NavLink to='/register' className="text-blue-600"> Register </NavLink></span>
          </form>
        </div>
      </section>
    </>
  )
}
