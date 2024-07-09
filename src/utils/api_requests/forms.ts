import axios, { AxiosResponse } from "axios"

const developer = process.env.NEXT_PUBLIC_DEVELOPER_BASE_URL as string
const production = process.env.NEXT_PUBLIC_DOMAIN as string

let endpoint = developer !== "" ? developer : production

export const requestSignIn = async (payload: {
  email: string,
  password: string
}): Promise<AxiosResponse> => {
  try {
    const response = await axios({
      method: "post",
      url: `${endpoint}/api/routes/user/sign-in`,
      data: payload
    })
    return response as AxiosResponse
  } catch (error) {
    return error as AxiosResponse
  }
}