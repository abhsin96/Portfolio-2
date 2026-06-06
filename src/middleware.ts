import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Set cache headers for all HTML pages to leverage Vercel Edge caching
  const pathname = request.nextUrl.pathname;
  const isHtmlPage =
    pathname === "/" || !pathname.includes(".") || pathname.endsWith("/");

  if (isHtmlPage) {
    // Cache HTML at edge for 1 hour, allow stale content for 24 hours while revalidating
    response.headers.set(
      "Cache-Control",
      "public, s-maxage=3600, stale-while-revalidate=86400",
    );
  }

  // Set immutable cache headers for static assets (images, fonts, JS, CSS)
  if (
    pathname.match(
      /\.(js|css|png|jpg|jpeg|gif|svg|ico|webp|woff|woff2|ttf|eot)$/,
    )
  ) {
    response.headers.set(
      "Cache-Control",
      "public, max-age=31536000, immutable",
    );
  }

  return response;
}

export const config = {
  matcher: [
    // Match all routes except Next.js internals and static files
    "/((?!_next|api|static|public|favicon\\.ico).*)",
  ],
};
