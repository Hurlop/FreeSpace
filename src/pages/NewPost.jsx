import { useEffect } from "react";
import { useForm } from "react-hook-form"
import { NavLink, useNavigate } from "react-router-dom"
import { useLoginContext } from "../context/LoginContext";

export function NewPost() {
  const loginContext = useLoginContext()
  const navigate = useNavigate()
  const { register, handleSubmit} = useForm({
    // primero los dejamos vacios
    defaultValues: {
      id: Date.now()
    }
  })
  function createNewPost(data) {
    const existingPosts = JSON.parse(localStorage.getItem('posts')) || [];
    existingPosts.push(data);
    localStorage.setItem('posts', JSON.stringify(existingPosts));
    navigate('/homeFeed')
  }
  useEffect(() => {
      const tokenExists = loginContext.token
      if (!tokenExists) {
        navigate('/')
      }
    }, [loginContext.token, navigate])

  return (
    <>
      <form onSubmit={handleSubmit(createNewPost)} className="flex flex-col mx-6 gap-4 bg-gray-200 p-6 rounded-2xl mt-6">
        <label className="flex flex-col px-4">
          Title
          <input type="text" required {...register("title")} className="border border-gray-400 p-2 rounded-lg w-[200px]" />
        </label>
        <label className="flex flex-col px-4">
          Description
          <input type="text" required {...register("description")} className="text-left align-top border border-gray-400 p-2 rounded h-[150px]" />
        </label>
        <div className="ml-0 flex justify-end gap-3">
          <NavLink to='/homeFeed' className="border border-gray-700 py-2 px-6 rounded-lg "> Cancel </NavLink>
          <button type="submit" className="bg-black text-white py-2 px-6 rounded-lg "> Create post! </button>
        </div>
      </form>
    </>
  )
}
