import axios from "axios";
export async function patchUserData(id, updatedData) {
  const PATCH_USER_URL = `http://localhost:3000/users/${id}`
  try {
    const response = await axios.patch(PATCH_USER_URL, updatedData )
    return response.data
  } catch (error) {
    console.error('error updating user', error)
    return null
  }
}