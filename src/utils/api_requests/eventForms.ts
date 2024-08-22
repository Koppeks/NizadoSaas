import axios, { AxiosError, AxiosResponse } from "axios";
import { newEventCreation } from "../types/creation.types";

const developer = process.env.NEXT_PUBLIC_DEVELOPER_BASE_URL as string
const production = process.env.NEXT_PUBLIC_DOMAIN as string

const endpoint = developer !== "" ? developer : production

export const createEvent = async (payload: newEventCreation) => {
    try {
        const response = await axios({
            method: "POST",
            url:`${endpoint}/api/routes/user/event`,
            data: payload
        })
        return response as AxiosResponse
    } catch (error) {
        return error as AxiosError
    }
}

export const getAllEvents = async () => {
    try {
        const response = await axios({
            method: "GET",
            url:`${endpoint}/api/routes/user/event`
        })
        return response as AxiosResponse
    } catch (error) {
        return error as AxiosError
    }
} 