import { errorHandler } from "@/app/api/_Utils/ErrorHandling"
import { prisma } from "@/app/api/_Utils/Prisma"
import { successCreated, successTest } from "@/app/api/_Utils/SuccessHandling"


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