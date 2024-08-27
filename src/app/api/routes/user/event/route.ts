import { errorHandler } from "@/app/api/_Utils/ErrorHandling";
import { decript } from "@/libs/TokenHandler";
import prisma from "@/libs/Prisma";
import { successCreated, successRequest, successTest } from "@/app/api/_Utils/SuccessHandling";
import { NextRequest } from "next/server";
import { cookieValidator } from "@/app/api/_Utils/cookieValidator";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const authToken = request.cookies.get("token");
  try {
    if (!authToken) throw { code: "S003", message: "Token not found" };
    const validInfoToken = await decript(authToken.value);
    if (!validInfoToken || validInfoToken === "TokenError")
      throw { code: "S003", message: "Token is invalid or expired" };
    if (!validInfoToken.userId || validInfoToken.userId == "")
      throw { code: "S003", message: "Incorrect user id" };

    const validEvents = ["Repetition", "Lineal", "Secuense"];
    const checkValidEventType = validEvents.some(
      (event) => event == body.eventType
    );

    if (!checkValidEventType)
      throw { code: "S003", message: "The eventType cannot be null" };
    else if (!body.eventType)
      throw { code: "S004", message: "The eventType is incorrect" };

    let event;

    switch (body.eventType) {
      case "Repetition":
        if (!body.timeFrame || !body.repeatedDays)
          throw { code: "S003", message: "Time or days where not found" };
        const createEvent = await prisma.event.create({
          data: {
            title: body.title,
            description: body.description || "",
            color: body.color || "",
            eventType: body.eventType.toUpperCase(),
          },
        });
        if (typeof createEvent === "undefined")
          throw { code: "S003", message: "The event was not created." };
        await prisma.repetition.create({
          data: {
            repeatedDays: body.repeatedDays,
            timeFrame: body.timeFrame,
            eventId: createEvent.id,
          },
        });
        event = await prisma.event.findUnique({
          where: { id: createEvent.id },
          include: { repetition: true },
        });
        await prisma.user_Event.create({
          data: {
            userId: `${validInfoToken.userId}`,
            eventId: createEvent.id,
          },
        });
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

    if (event == null)
      throw { code: "S001", message: "The event was not found or created" };
    return successCreated("Exito", event);
  } catch (error: any) {
    return errorHandler(error);
  }
}
export async function GET(request: NextRequest) {
  try {
    const cookie = request.cookies.get("token")?.value;
    if (!cookie)
      throw {
        code: "S003",
        message: "The token of the user is either invalid or expired",
      };
    const tokenDecript = (await decript(cookie)) as {
      userId: string;
      exp: number;
    };
    if (!tokenDecript) throw { code: "S006", message: "Expired or incorrect token" };
    const userId = tokenDecript.userId;
    const allEventsRelatedUser = await prisma.user_Event.findMany({where: { userId: userId }});
    let events:object[] = []

    for (const ev of allEventsRelatedUser) {
        const event = await prisma.event.findFirst({where: {id: ev.eventId}, include: {repetition: true, lineal: true, secuense: true}})
        if (event) events.push(event)
    }

    return successCreated("Correct", events);
  } catch (error: any) {
    return errorHandler(error);
  }
}
export async function DELETE(request:NextRequest) {
  const eventId = request.nextUrl.searchParams.get("eventId")
  try {
    const cookieDecripted = await cookieValidator(request)
    
    if(!eventId) throw ({code: "S003", message: "missing eventId"})

    const deleteSequence = prisma.secuence.deleteMany({where: {eventId: eventId}})
    const deleteRepetition = prisma.repetition.deleteMany({where: {eventId: eventId}})
    const deleteLineal = prisma.lineal.deleteMany({where: {eventId: eventId}})
    const deleteMiddleTable = prisma.user_Event.deleteMany({where: {eventId: eventId, userId: cookieDecripted.userId}})
    const deleteEvent = prisma.event.delete({where: {id: eventId}})

    const transaction = await prisma.$transaction([deleteSequence, deleteRepetition, deleteLineal,deleteMiddleTable, deleteEvent])

    return successRequest("Success", transaction)
  } catch (error:any) {
    return errorHandler(error)
  }
}