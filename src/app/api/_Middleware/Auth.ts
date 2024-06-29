import { NextResponse } from "next/server"
import { verifyToken } from "../_Utils/Jwt"

export function authMiddleware(request:Request) {
  const authRequest = request.headers.get("Authorization")
  if(authRequest == null) return ({code: "S003"})
  const token = authRequest.split(' ')[1]
  const verified = verifyToken(token)
  if(verified == "TokenExpired") return ({code: "S006"})
  return NextResponse.json(verified)
}