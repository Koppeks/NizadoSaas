import { errorHandler } from "@/app/api/_Utils/ErrorHandling"
import { successAuth } from "@/app/api/_Utils/SuccessHandling"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: Request) {
  try {

    throw "authResult"
  } catch (error:any) {
    return errorHandler(error)
  }
}