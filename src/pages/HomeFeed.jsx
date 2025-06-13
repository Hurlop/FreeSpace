import React from 'react'
import { useBlogs } from '../hooks/useBlogs'
export function HomeFeed() {
    const {blogs} = useBlogs()
  return (
    <>
    <div>Funciona!</div>
    </>
  )
}
