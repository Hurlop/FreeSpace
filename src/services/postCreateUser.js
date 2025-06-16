import axios from "axios"

export async function postCreateUser(email,password,cellphone,first_name,last_name) {
    const REGISTER_URL = 'http://localhost:3000/users'
    try {
        const response = await axios.post(REGISTER_URL, {email,password,cellphone,first_name,last_name})
        console.log(response)
        return response
    } catch (error) {
        console.error('Not getting response', error)
    }
}
