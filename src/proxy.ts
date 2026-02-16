import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function proxy(request: NextRequest) {
  const response = NextResponse.next();

  // Block common attack patterns
  const url = request.nextUrl.pathname.toLowerCase();
  const blockedPatterns = ["/wp-admin", "/wp-login", "/admin", ".php", ".env"];

  if (blockedPatterns.some((pattern) => url.includes(pattern))) {
    return NextResponse.rewrite(new URL("/not-found", request.url));
  }

  return response;
}

export const config = {
  matcher: "/:path*",
};
