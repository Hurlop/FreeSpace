import axios from "axios"

export async function storiesService() {
    const STORIES_API_URL = "http://localhost:3000/stories"
    try {
        const response = await axios.get(STORIES_API_URL)
        return response
    } catch (error) {
        console.error('Not getting response', error)
    }
}