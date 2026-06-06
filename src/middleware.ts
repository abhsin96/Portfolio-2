import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Set cache headers for HTML pages to leverage Vercel Edge caching
  if (
    request.nextUrl.pathname === "/" ||
    request.nextUrl.pathname.endsWith(".html")
  ) {
    response.headers.set(
      "Cache-Control",
      "public, s-maxage=3600, stale-while-revalidate=86400",
    );
  }

  // Set cache headers for static assets
  if (request.nextUrl.pathname.match(/\.(js|css|png|jpg|jpeg|svg|ico|webp)$/)) {
    response.headers.set(
      "Cache-Control",
      "public, max-age=31536000, immutable",
    );
  }

  return response;
}

export const config = {
  matcher: [
    "/",
    "/about",
    "/projects",
    // Match static assets
    "/((?!api|_next|static|public).*)",
  ],
};
