import axios from "axios";
export async function getUserService() {
    const GET_USER_API_URL = 'https://reqres.in/api/users/1'
    //manejo de errores
    try {
        const response = await axios.get(
            GET_USER_API_URL,
            {
                headers: {
                    'x-api-key': 'reqres-free-v1',
                    'Content-Type': 'application/json'
                }
            }
        );
        return response.data
    } catch (error) {
        console.error('Not getting response', error)
    }
}
