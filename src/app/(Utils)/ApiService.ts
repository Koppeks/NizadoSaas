import axios from "axios"

const developer = process.env.NEXT_PUBLIC_DEVELOPER_BASE_URL as string
const production = process.env.NEXT_PUBLIC_DOMAIN as string

let endpoint = developer !== "" ? developer : production

export async function verifyTokenService(token: string) {
  const response = await axios.get(`${endpoint}/api/routes/user/verify`,{
    headers:{
      Authorization: `Bearer: ${token}`
    }
  })
  return response
}