import { jwtVerify, SignJWT } from "jose"

const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET_KEY as string)

export async function signToken(payload:object, expire: string | number = "1h") {
  const expiry = typeof expire === 'number' ? expire : Math.floor(Date.now() / 1000) + 60 * 60;

  return await new SignJWT({payload})
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime(expiry)
    .sign(secret);
}

export async function verifyToken(token:string) {
  try {
    const payload = await jwtVerify(token, secret);
    return payload;
  } catch (error: any) {
    if (error.code === 'ERR_JWT_EXPIRED') return 'TokenExpired';
    return null;
  }
}