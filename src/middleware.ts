import { NextRequest, NextResponse } from "next/server";
import { decript } from "./app/api/_Utils/Jwt";

export async function middleware(request: NextRequest) {
  const currentPath = request.nextUrl.pathname;
  const cookie = request.cookies.get("token")?.value;

  //Change visitorEndpoint to match the allowed endpoints
  const visitorEndpoints = ["/sign-in", "/sign-up", "/forgot-password", "/"];

  const goodEndpoint = visitorEndpoints.some(
    (endpoint) => endpoint == currentPath
  );
  if (currentPath.startsWith("/api")) {
    return NextResponse.next();
  } else {
    if (!cookie) {
      if (!goodEndpoint) {
        return NextResponse.redirect(new URL("/", request.url));
      }
    } else {
      const verified = await decript(cookie);
      console.log("----------------------------------------------------")
      console.log(verified)
      if (verified == "TokenExpired" || verified == "TokenSignatureFailed") {
        if (!goodEndpoint) {
          return NextResponse.redirect(
            new URL("/sign-in", request.url)
          );
        }
      } else if (goodEndpoint)
        return NextResponse.redirect(new URL(`/${currentPath}`, request.url));
    }
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    // '/((?!.*\\.|api\\/).*)'
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};

/*
import { NextRequest, NextResponse } from "next/server"
import { decript } from "./_Utils/Jwt"

export async function authMiddleware(request:NextRequest) {
  const cookie = request.cookies.get("token")?.value

  console.log("-----------------------------------")
  console.log(cookie)

  if(!cookie) return ({code: "S003", message: "Not authorized"})
  const verified = await decript(cookie)
  if(verified == "TokenExpired") return ({code: "S006", message: "The token its expired"})
  return NextResponse.json(verified)
}
*/
