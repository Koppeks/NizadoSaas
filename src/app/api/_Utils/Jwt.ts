import { jwtVerify, SignJWT } from "jose"

const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET_KEY as string)

interface EncriptUserId {
  userId: string
}

export async function signToken(payload:EncriptUserId, expire: string | number = "1h") {
  const expiry = typeof expire === 'number' ? expire : Math.floor(Date.now() / 1000) + 60 * 60;

  return await new SignJWT({userId: payload.userId})
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime(expiry)
    .sign(secret);
}

export async function verifyToken(token:string) {
  try {
    return (await jwtVerify(token, secret)).payload;
  } catch (error: any) {
    if (error.code === 'ERR_JWT_EXPIRED') return 'TokenExpired';
    else if(error.code === 'ERR_JWS_SIGNATURE_VERIFICATION_FAILED') return 'TokenSignatureFailed';
    return null;
  }
}