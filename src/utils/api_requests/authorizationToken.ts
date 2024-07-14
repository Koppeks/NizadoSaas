import axios, { AxiosResponse } from "axios";

const developer = process.env.NEXT_PUBLIC_DEVELOPER_BASE_URL as string;
const production = process.env.NEXT_PUBLIC_DOMAIN as string;

let endpoint = developer !== "" ? developer : production;

export const checkTokenAuthorization = async (
  token: string
): Promise<AxiosResponse> => {
  try {
    console.log(token)
    const response = await axios({
      method: "post",
      url: `${endpoint}/api/routes/user/authorization`,
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return response as AxiosResponse;
  } catch (error) {
    return error as AxiosResponse;
  }
};


export async function userVerification(token: string) {
  const response = await axios.get(`${endpoint}/api/routes/user/verify`,{
    headers:{
      Authorization: `Bearer: ${token}`
    }
  })
  return response
}