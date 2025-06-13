import axios from "axios";
export async function postLoginService(email, password) {
    const LOGIN_API_URL = 'https://reqres.in/api/login'
    //manejo de errores
    try {
        const response = await axios.post(
            LOGIN_API_URL,
            { email, password },
            {
                headers: {
                    'x-api-key': 'reqres-free-v1',
                    'Content-Type': 'application/json'
                }
            }
        );
        console.log(response.request.status)
        return response
    } catch (error) {
        console.error('Not getting response', error)
    }
}

//{email,password},{headers:{'x-api-key':'reqres-free-v1'}}