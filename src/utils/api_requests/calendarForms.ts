import axios, { AxiosError, AxiosResponse } from "axios"
import { newCalendarCreation } from "../types/creation.types"

const developer = process.env.NEXT_PUBLIC_DEVELOPER_BASE_URL as string
const production = process.env.NEXT_PUBLIC_DOMAIN as string

const endpoint = developer !== "" ? developer : production

export const createCalendar = async (payload:newCalendarCreation): Promise<AxiosResponse | AxiosError> => {
    console.log(payload)
    try {
        const response = await axios({
            method: "POST",
            withCredentials: true,
            url: `${endpoint}/api/routes/user/calendar`,
            data:payload
        })
        return response as AxiosResponse
    } catch (error) {
        return error as AxiosError
    }
}

export const getAllUserCalendars = async (payload: {userId: string}): Promise<AxiosResponse | AxiosError> => {
    console.log(payload)
    try {
        const response = await axios({
            method: "GET",
            withCredentials: true,
            url: `${endpoint}/api/routes/user/calendar`,
            data:payload
        })
        return response as AxiosResponse
    } catch (error) {
        return error as AxiosError
    }
}