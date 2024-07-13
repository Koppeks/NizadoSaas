import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./app/api/_Utils/Jwt";
import { cookies } from "next/headers";

export async function middleware(request: NextRequest) {

  const tokenCookie = cookies().get("token")

  try {
    if (!tokenCookie) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    if(tokenCookie.value == null) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    const verified = await verifyToken(tokenCookie.value)
    if(verified == "TokenExpired") {
      return NextResponse.redirect(new URL("/login", request.url));
    } 
    return NextResponse.next();
  } catch (error) {
    console.error(error);
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/hub"],
};