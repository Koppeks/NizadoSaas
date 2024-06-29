import jwt from "jsonwebtoken"

const secret = process.env.JWT_SECRET_KEY as string

export function signToken(payload:object, expire: string | number = "1h") {
  return jwt.sign(payload, secret,{expiresIn: expire})
}

export function verifyToken(token:string) {
  try {
    return jwt.verify(token, secret)
  } catch (error: any) {
    if(error.expiredAt) return "TokenExpired"
    return null
  }
}