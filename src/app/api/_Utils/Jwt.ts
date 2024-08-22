import { jwtVerify, SignJWT } from "jose"

const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET_KEY as string)



export async function encrypt(userId:string, expire?: Date) {

  const expireDate = !expire ? `2d` : expire

  return await new SignJWT({userId: userId})
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime(expireDate)
    .sign(secret);
}

export async function decript(token:string) {
  try {
    return (await jwtVerify(token, secret)).payload;
  } catch (error: any) {
    if (error.code === 'ERR_JWT_EXPIRED') return 'TokenExpired';
    else if(error.code === 'ERR_JWS_SIGNATURE_VERIFICATION_FAILED') return 'TokenSignatureFailed';
    return null;
  }
}