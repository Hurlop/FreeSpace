import axios from "axios";
export async function postLoginService(email, password) {
    const LOGIN_API_URL = 'http://localhost:3000/users'
    //manejo de errores
    try {
        const response = await axios.get(LOGIN_API_URL,{ email, password });
        console.log(response)
        return response
    } catch (error) {
        console.error('Not getting response', error)
    }
}