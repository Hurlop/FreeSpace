//gestionar la logica de conexion con el servidor para peticiones de las peliculas 
import axios from "axios";
export async function getAllBlogs (){
    const BLOG_API_URL = 'https://api.spaceflightnewsapi.net/v4/blogs'
    //manejo de errores
    try {
        const response = await axios.get(BLOG_API_URL)
        return response.data
    } catch (error) {
        console.error('Not getting response', error)
    }
}