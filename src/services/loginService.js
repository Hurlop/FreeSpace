import axios from "axios";
export async function postLogin (){
    const LOGIN_API_URL = 'https://reqres.in/api/login'
    //manejo de errores
    try {
        const response = await axios.post(LOGIN_API_URL,{email,password},{headers:{'x-api-key':'reqres-free-v1'}})
        return response.data.token
    } catch (error) {
        console.error('Not getting response', error)
    }
}