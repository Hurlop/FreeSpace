import { useEffect, useState } from 'react'
import { blogCommentsService } from '../services/blogCommentsService.js'


export function useBlogComments() {
  const [comments, setComments] = useState([])
      async function fetchBlogComments(){
          try {
              const blogComments = await blogCommentsService()
              setComments(blogComments.data)
          } catch (error) {
              console.error('error inesperado: ',error)
          }
      }
      useEffect( () => {
          fetchBlogComments()
      }, [])
      return{
          comments
      }
}
