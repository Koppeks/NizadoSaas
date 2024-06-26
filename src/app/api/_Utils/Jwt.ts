import jwt from "jsonwebtoken"

const secret = process.env.JWT_SECRET_KEY as string

export function signToken(payload:object, expiresIn: string | number = "1h") {
  return jwt.sign(payload, secret,{expiresIn})
}

export function verifyToken(token:string) {
  try {
    return jwt.verify(token, secret)
  } catch (error: any) {
    return null
  }
}