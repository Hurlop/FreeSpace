import { useState, useEffect } from "react"
import { getAllBlogs } from "../services/blogService.js"

export function useBlogs(){
    const [blogs, setBlogs] = useState([])
    async function fetchBlogsData(){
        try {
            const blogsData = await getAllBlogs()
            setBlogs(blogsData.results)
        } catch (error) {
            console.error('error inesperado: ',error)
        }
    }
    //cuando se cargue por primera vez el componente, activa la funcion para hacer la peticion
    useEffect( () => {
        fetchBlogsData()
    }, [])
    return{ //los hooks pueden o no retornar
        blogs
        //El resto de variables y metodos
    }
}