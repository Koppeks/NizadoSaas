import { errorHandler } from "@/app/api/_Utils/ErrorHandling";
import { prisma } from "@/app/api/_Utils/Prisma";
import { successCreated, successTest } from "@/app/api/_Utils/SuccessHandling";

export async function POST(request:Request) {

    const body = await request.json()
    try {
        const validEvents = ["Repetition", "Lineal", "Secuense"]
        const checkValidEventType = validEvents.some(event => event == body.eventType)
        if (!checkValidEventType || !body.eventType)throw({code: "S003", message: "The eventType cannot be null"})

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
                if(typeof createEvent === "undefined") throw ({})
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