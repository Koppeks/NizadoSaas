import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./app/api/_Utils/Jwt";
import { cookies } from "next/headers";

export async function middleware(request: NextRequest) {
  const tokenCookie = cookies().get("token")
  const currentPath = request.nextUrl.pathname;
  //Change visitorEndpoint to match the allowed endpoints
  const visitorEndpoints = ["/sign-in", "/sign-up", "/forgot-password", "/"]
  const goodEndpoint = visitorEndpoints.some((endpoint) => endpoint == currentPath)
  try {
    if (!tokenCookie || tokenCookie.value == null) {
      if(!goodEndpoint){
        return NextResponse.redirect(new URL("/", request.url));
      }
    }else{
      const verified = await verifyToken(tokenCookie.value)
      if(verified == "TokenExpired" || verified == "TokenSignatureFailed") {
        if(!goodEndpoint){
          return NextResponse.redirect(new URL("/sign-in", request.url));
        }
      } else if(goodEndpoint) return NextResponse.redirect(new URL("/hub", request.url));
    }
    return NextResponse.next();
  } catch (error) {
    console.log(error)
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: [
    '/((?!.*\\.|api\\/).*)'
    // '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ],
};