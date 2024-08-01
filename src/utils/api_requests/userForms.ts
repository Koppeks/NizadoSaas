import axios, { AxiosError, AxiosResponse } from "axios"

const developer = process.env.NEXT_PUBLIC_DEVELOPER_BASE_URL as string
const production = process.env.NEXT_PUBLIC_DOMAIN as string

let endpoint = developer !== "" ? developer : production

export const requestSignIn = async (payload: {
  email: string,
  password: string
}): Promise<AxiosResponse | AxiosError> => {
  try {
    const response = await axios({
      method: "post",
      url: `${endpoint}/api/routes/user/sign-in`,
      data: payload
    })
    return response as AxiosResponse
  } catch (error) {
    return error as AxiosError
  }
}

export const requestSignOut = async (): Promise<AxiosResponse | AxiosError> => {
  try {
    const response = await axios({
      method: "get",
      url: `${endpoint}/api/routes/user/sign-out`,
    })

    console.log(response)
    return response as AxiosResponse
  } catch (error) {
    return error as AxiosError
  }
}

export const requestSignUp = async (payload:{
  username: string,
  email: string,
  password:string,
  repeatPassword: string
}): Promise<AxiosResponse | AxiosError> => {
  try {
    const response = await axios({
      method: "post",
      url: `${endpoint}/api/routes/user/sign-up`,
      data: payload
    })
    return response as AxiosResponse
  } catch (error) {
    console.log(error)
    return error as AxiosError
  }
}
