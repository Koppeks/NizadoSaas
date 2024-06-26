import { NextResponse } from "next/server"
import { verifyToken } from "../_Utils/Jwt"

export function authMiddleware(request:Request) {

  const authRequest = request.headers.get("Authorization")
  if(authRequest == null) return new NextResponse(JSON.stringify({message: "Token cannot be null", code: "S003"}), {status: 400})
  const token = authRequest.split(' ')[1]
  const verified = verifyToken(token)
  if(verified == null) return new NextResponse(JSON.stringify({message: "Token not verified", code: "S002"}), {status:400}) 
  return NextResponse.next()
  
}