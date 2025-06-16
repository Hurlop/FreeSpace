import { useEffect } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { useLoginContext } from "../context/LoginContext"
import { useBlogs } from "../hooks/useBlogs"
import {Blog} from "../components/Blog"

export  function UserFeed() {
  const {blogs} = useBlogs()
  const checkLogin = useNavigate()
  const loginContext = useLoginContext()
  useEffect(() =>{
    const tokenExists = loginContext.token
    if(!tokenExists){
        checkLogin('/')
    }
  },[loginContext.token, checkLogin])
  return (
    <div className="h-screen overflow-y-auto ">
      <div className="flex justify-between items-center p-4">
        <h1 className="bg-white text-2xl font-bold">Feeds</h1>
          <NavLink to="/newPost" className="bg-black text-white rounded-lg text-sm p-1 px-4">New Post</NavLink>
      </div>
      
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog}/>
      ))}
    </div>
  )
}
