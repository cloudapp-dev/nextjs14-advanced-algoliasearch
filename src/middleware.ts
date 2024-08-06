import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";
import { fallbackLng, locales } from "@/app/i18n/settings";

export async function middleware(request: NextRequest, event: NextFetchEvent) {
  const { pathname, search } = request.nextUrl;

  //Entfernt den FallbackLng aus dem Pathname, sofern dieser vorhanden ist
  if (
    pathname.startsWith(`/${fallbackLng}/`) ||
    pathname === `/${fallbackLng}`
  ) {
    return NextResponse.redirect(
      new URL(
        pathname.replace(
          `/${fallbackLng}`,
          pathname === `/${fallbackLng}` ? "/" : ""
        ),
        request.url
      ),
      301
    );
  }

  // Check if the pathname is missing any locale
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Füght den FallbackLng vor den Pathname ein, sofern keine Sprache im Pathname vorhanden ist
  if (pathnameIsMissingLocale) {
    const RewriteUrl = request.nextUrl;
    RewriteUrl.pathname = `/${fallbackLng}${pathname}`;

    return NextResponse.rewrite(new URL(RewriteUrl, request.url));
  }
}

export const config = {
  /*
   * Match all request paths except for the ones starting with:
   * - api (API routes)
   * - _next/static (static files)
   * - _next/image (image optimization files)
   * - favicon.ico (favicon file)
   */
  matcher: [
    "/((?!api|sitemap.xml|robots.txt|_next/static|_next/image|favicons|images|favicon.ico).*)",
  ],
};
