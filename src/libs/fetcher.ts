import axios from "axios";

const developer = process.env.NEXT_PUBLIC_DEVELOPER_BASE_URL as string
const production = process.env.NEXT_PUBLIC_DOMAIN as string

const endpoint = developer !== "" ? developer : production

export const fetcher = (url: string | URL | Request) =>
  fetch(url).then((res) => res.json());


// Test fetcher
export const fetcherSigned = async (
  url: string | URL | Request
) => await axios({
  method: "GET",
  url:`${endpoint}${url}`,
  withCredentials: true
});
