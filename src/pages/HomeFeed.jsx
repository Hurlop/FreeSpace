import { useBlogs } from '../hooks/useBlogs.jsx'
import { SideBar } from '../components/SideBar.jsx'
export function HomeFeed() {
    const {blogs} = useBlogs()
  return (
    <>
    
    <SideBar/>
        
    </>
  )
}
{/* {blogs.map((blog) => (
    <div key={blog.id}>
    <img src={blog.image_url} alt='alt' />
    </div>
))} */}