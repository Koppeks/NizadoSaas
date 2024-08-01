import axios, { AxiosError, AxiosResponse } from "axios"
import { newCalendarCreation } from "../types/calendar.types"

const developer = process.env.NEXT_PUBLIC_DEVELOPER_BASE_URL as string
const production = process.env.NEXT_PUBLIC_DOMAIN as string

let endpoint = developer !== "" ? developer : production

export const createCalendar = async (payload:newCalendarCreation): Promise<AxiosResponse | AxiosError> => {
    console.log(payload)
    try {
        const response = await axios({
            method: "POST",
            url: `${endpoint}/api/routes/user/calendar`,
            data:payload
        })
        return response as AxiosResponse
    } catch (error) {
        return error as AxiosError
    }
}