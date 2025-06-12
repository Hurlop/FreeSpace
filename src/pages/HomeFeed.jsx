import React from 'react'
import { useBlogs } from '../hooks/useBlogs'
export function HomeFeed() {
    const {blogs} = useBlogs()
  return (
    <>
    <div>HomeFeed</div>
    {blogs.map((blog) => (
        <div key={blog.id}>
          <img src={blog.image_url} alt='alt' />
        </div>
      ))}
    </>
  )
}
