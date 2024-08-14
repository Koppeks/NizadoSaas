import { errorHandler } from "@/app/api/_Utils/ErrorHandling"
import { verifyToken } from "@/app/api/_Utils/Jwt"
import { prisma } from "@/app/api/_Utils/Prisma"
import { successCreated, successTest } from "@/app/api/_Utils/SuccessHandling"
import { cookies } from "next/headers"


export async function POST(request: Request) {

    const {userId, ...values} = await request.json()
    try {
        const newCalendar = await prisma.calendar.create({
            data: values
        })

        await prisma.user_Calendar.create({
            data: {
                userId,
                calendarId: newCalendar.id,
            },
        });

        return successCreated("Calendar created succesfully", newCalendar)
    } catch (error:any) {
        return errorHandler(error)
    }
}

export async function GET(request: Request) {

    try {
        //get cookies, validate and decript to get the userId
        const tokenCookie = cookies().get("token")
        if(!tokenCookie) throw({code:"S003", message: "The token of the user is either invalid or expired"})
        const tokenDecript = await verifyToken(tokenCookie.value) as {userId: string, exp: number}
        if(!tokenDecript) throw({code: "S006", message: "Expired or incorrect token"})
        const userId = tokenDecript.userId
    
        //With userId find the middletable user_calendar and process all to be send.
        const userCalendars = await prisma.user_Calendar.findMany({where: {userId:userId}})
        let allCalendarsIdFromUser = []
        for (const index in userCalendars) {
            allCalendarsIdFromUser.push(userCalendars[index].calendarId)
        }

        const calendars = await prisma.calendar.findMany({
            where:{
                id: {in: allCalendarsIdFromUser}
            }
        })

        return successCreated("Calendars correctly fetched", calendars)
    } catch (error:any) {
        return errorHandler(error)
    }
}