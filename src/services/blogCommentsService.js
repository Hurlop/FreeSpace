import axios from "axios";
export async function blogCommentsService (){
    const BLOG_API_URL = 'http://localhost:3000/comments'
    try {
        const response = await axios.get(BLOG_API_URL)
        return response
    } catch (error) {
        console.error('Not getting response', error)
    }
}