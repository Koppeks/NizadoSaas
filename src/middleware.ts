import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./app/api/_Utils/Jwt";
import { cookies } from "next/headers";

export async function middleware(request: NextRequest) {

  const tokenCookie = cookies().get("token")
  const currentPath = request.nextUrl.pathname;

  try {
    if (!tokenCookie || tokenCookie.value == null) {
      if(currentPath !== "/sign-in"){
        return NextResponse.redirect(new URL("/sign-in", request.url));
      }
    }else{
      const verified = await verifyToken(tokenCookie.value)
      if(verified == "TokenExpired") {
        if(currentPath !== "/sign-in"){
          return NextResponse.redirect(new URL("/sign-in", request.url));
        }
      } else if(currentPath == "/sign-in") return NextResponse.redirect(new URL("/hub", request.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.error(error);
    return NextResponse.redirect(new URL("/", request.url));
  }
}


export const config = {
  matcher: [
    '/((?!.*\\.|api\\/).*)'
    // '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ],
};