import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useLoginContext } from "../context/LoginContext"

export  function UserFeed() {
    const checkLogin = useNavigate()
    const loginContext = useLoginContext()
    useEffect(() =>{
      const tokenExists = loginContext.token
      if(!tokenExists){
          checkLogin('/')
      }
    },[loginContext.token])
  return (
    <div>UserFeed</div>
  )
}

{/* {blogs.map((blog) => (
    <div key={blog.id}>
    <img src={blog.image_url} alt='alt' />
    </div>
))} */}
