import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Skip decoding for now
  return NextResponse.next();
}

export const config = {
  matcher: ["/profile", "/dashboard/:path*"],
};
