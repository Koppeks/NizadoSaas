import { NextRequest, NextResponse } from "next/server";
import { decript } from "./libs/TokenHandler";

export async function middleware(request: NextRequest) {
  const currentPath = request.nextUrl.pathname;
  const cookie = request.cookies.get("token")?.value;

  //Change visitorEndpoint to match the allowed endpoints
  // const visitorEndpoints = ["/sign-in", "/sign-up", "/forgot-password", "/"];

  // const goodEndpoint = visitorEndpoints.some(
  //   (endpoint) => endpoint == currentPath
  // );
  if (!cookie) return NextResponse.redirect(new URL("/", request.url));
  try {
    //Decript
    await decript(cookie);
    return NextResponse.next();
  } catch (error) {
    console.log(error);
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }
}

// export const config = {
//   matcher: [
//     // '/((?!.*\\.|api\\/).*)'
//     "/((?!_next/static|_next/image|favicon.ico).*)",
//   ],
// };

export const config = {
  matcher: ["/hub", "/hub/:path*"]
}
