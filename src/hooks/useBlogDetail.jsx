import { useEffect, useState } from 'react'
import { getBlogDetailService } from '../services/getBlogDetailService'


export function useBlogDetail(id) {
  const [blog, setBlog] = useState(null)
      async function fetchBlogDetail(){
          try {
              const blogDetail = await getBlogDetailService(id)
              setBlog(blogDetail.data)
          } catch (error) {
              console.error('error inesperado: ',error)
          }
      }
      useEffect( () => {
          fetchBlogDetail()
      }, [])
      return{
          blog
      }
}
