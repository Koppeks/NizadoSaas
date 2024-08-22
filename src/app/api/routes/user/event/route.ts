import { errorHandler } from "@/app/api/_Utils/ErrorHandling";
import { decript } from "@/app/api/_Utils/Jwt";
import { prisma } from "@/app/api/_Utils/Prisma";
import { successCreated, successTest } from "@/app/api/_Utils/SuccessHandling";
import { cookies } from "next/headers";

export async function POST(request:Request) {

    const body = await request.json()
    try {
        const validEvents = ["Repetition", "Lineal", "Secuense"]
        console.log(body)
        const checkValidEventType = validEvents.some(event => event == body.eventType)

        if (!checkValidEventType)throw({code: "S003", message: "The eventType cannot be null"})
        else if (!body.eventType) throw({code: "S004", message: "The eventType is incorrect"})
    
        let event

        switch (body.eventType) {
            case "Repetition":
                if(!body.timeFrame || !body.repeatedDays) throw ({code:"S003",message: "Time or days where not found"})
                const createEvent = await prisma.event.create({
                    data:{
                        title: body.title,
                        description: body.description || "",
                        color: body.color || "",
                        type: body.eventType.toUpperCase()
                    }
                })
                if(typeof createEvent === "undefined") throw ({code:"S003",message: "The event was not created."})
                await prisma.repetition.create({
                    data:{
                        repeatedDays: body.repeatedDays,
                        timeFrame: body.timeFrame,
                        eventId: createEvent.id
                    }
                })
                event = await prisma.event.findUnique({
                    where: {id: createEvent.id},
                    include: {repetition: true},
                })
                break;
            case "Lineal":
                //Wip
                break;
            case "Secuence":
                //Wip
                break;
            default:
                break;
        }

        if(event == null) throw ({code: "S001", message: "The event was not found or created"})
        return successCreated("Exito", event)
    } catch (error:any) {
        return errorHandler(error)
    }
}
export async function GET(request:Request) {
    try {
        const tokenCookie = cookies().get("token")
        console.log(tokenCookie)
        if(!tokenCookie) throw({code:"S003", message: "The token of the user is either invalid or expired"})
        const tokenDecript = await decript(tokenCookie.value) as {userId: string, exp: number}
        if(!tokenDecript) throw({code: "S006", message: "Expired or incorrect token"})
        const userId = tokenDecript.userId
        
        ////

        return successTest("Si")
    } catch (error:any) {
        return errorHandler(error)
    }
    
}