import { authMiddleware } from "@/app/api/_Middleware/Auth"
import { errorHandler } from "@/app/api/_Utils/ErrorHandling"
import { successAuth } from "@/app/api/_Utils/SuccessHandling"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const authResult = await authMiddleware(request)
    if(authResult instanceof NextResponse){
      return successAuth("Autorizado")
    }
    throw authResult
  } catch (error:any) {
    return errorHandler(error)
  }
}