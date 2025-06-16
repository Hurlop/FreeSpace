import { useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { useLoginContext } from "../context/LoginContext.jsx"
import { useBlogs } from "../hooks/useBlogs.jsx"
import { Blog } from "../components/Blog.jsx"
import UserPosts from "../components/UserPosts.jsx"

export function UserFeed() {
  const { blogs } = useBlogs()
  const checkLogin = useNavigate()
  const loginContext = useLoginContext()
  const [userPosts, setUserPosts] = useState(() => {
    return JSON.parse(localStorage.getItem('posts')) || [];
  });
  const userData = JSON.parse(localStorage.getItem('user'))
  const handleDelete = (id) => {
    const updatedPosts = userPosts.filter(post => post.id !== id)
    setUserPosts(updatedPosts)
    if (updatedPosts.length > 0) {
      localStorage.setItem('posts', JSON.stringify(updatedPosts));
    } else {
      localStorage.removeItem('posts');
    }
  }
  useEffect(() => {
    const postsFromStorage = JSON.parse(localStorage.getItem('posts')) || [];
    setUserPosts(postsFromStorage);

    const tokenExists = loginContext.token;
    if (!tokenExists) {
      checkLogin('/');
    }
  }, [loginContext.token, checkLogin]);
  return (
    <div className="h-screen overflow-y-auto ">
      <div className="flex justify-between items-center p-4">
        <h1 className="bg-white text-2xl font-bold">Feeds</h1>
        <NavLink to="/newPost" className="bg-black text-white rounded-lg text-sm p-1 px-4">New Post</NavLink>
      </div>
      {
        userPosts.length > 0  ?
          <div>
            <h2 className="m-3 text-xl font-bold">Your posts</h2>
            {
              userPosts.slice().reverse().map((post) => (<UserPosts key={post.id} post={post} userData={userData} onDelete={handleDelete} />))
            }
          </div>
          :
          <section className="bg-yellow-100 m-4 p-6 rounded-2xl" >
            <h2 className="m-3 text-xl font-bold">Your posts</h2>
            <div className="flex flex-col gap-4 rounded-xl p-5 shadow-[2px_0_15px_rgba(0,0,0,0.15)]">
              <h3 className="font-bold">You don't have any posts yet</h3>
              <p>Click on the "new post" button to begin</p>
            </div>
          </section>

      }
      <h2 className="text-3xl font-bold p-4">Latest articles</h2>
      {
        blogs.map((blog) => (<Blog key={blog.id} blog={blog} />))
      }
    </div>
  )
}
