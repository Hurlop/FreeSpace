import axios from "axios";
export async function getUserService() {
    const GET_USER_API_URL = 'http://localhost:3000/suggestions'
    try {
        const response = await axios.get(GET_USER_API_URL);
        return response.data
    } catch (error) {
        console.error('Not getting response', error)
    }
}
