import { NextResponse } from "next/server"
import { verifyToken } from "../_Utils/Jwt"

export async function authMiddleware(request:Request) {
  const authRequest = request.headers.get("Authorization")
  if(authRequest == null) return ({code: "S003", message: "Not authorized"})
  const token = authRequest.split(' ')[1]
  if(token == null) return({code: "S007", message: "Bearer contains an error"})
  const verified = await verifyToken(token)
  if(verified == "TokenExpired") return ({code: "S006", message: "The token its expired"})
  return NextResponse.json(verified)
}