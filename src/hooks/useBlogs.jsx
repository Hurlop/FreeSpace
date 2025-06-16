import { useState, useEffect } from "react"
import { getAllBlogs } from "../services/blogService.js"

export function useBlogs(){
    const [blogs, setBlogs] = useState([])
    async function fetchBlogsData(){
        try {
            const blogsData = await getAllBlogs()
            setBlogs(blogsData.data)
        } catch (error) {
            console.error('error inesperado: ',error)
        }
    }
    useEffect( () => {
        fetchBlogsData()
    }, [])
    return{
        blogs
    }
}