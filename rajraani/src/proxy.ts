import { NextResponse, type NextRequest } from "next/server";

/**
 * A first gate in front of the admin: no session cookie, no admin.
 *
 * The real check is `requireAdmin()` in the protected layout, in every admin
 * page and in every action. This gate exists because a layout alone is not
 * enough: on an in-app move between admin screens Next.js renders only the new
 * page and skips the layout. Without a check in the page itself, a request
 * that claimed the layout was already on screen got the page's data with no
 * sign-in at all — customer messages and orders included. This covers any
 * admin screen added later that forgets its own check.
 *
 * It only looks for the cookie. Whether the session is valid is decided on
 * the server by `currentAdmin()`, which reads the database.
 */
const SESSION_COOKIE = "rj_admin";

/** Matches `DEV_AUTH_BYPASS` in lib/auth/session.ts. */
const DEV_AUTH_BYPASS = process.env.NODE_ENV !== "production" && process.env.ADMIN_AUTH !== "strict";

export function proxy(request: NextRequest) {
  if (DEV_AUTH_BYPASS || request.cookies.has(SESSION_COOKIE)) return NextResponse.next();
  if (request.nextUrl.pathname.startsWith("/admin/api/")) {
    return new Response("Sign in first.", { status: 401 });
  }
  return NextResponse.redirect(new URL("/admin/login", request.url));
}

export const config = {
  matcher: ["/admin", "/admin/((?!login).*)"],
};
