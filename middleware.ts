import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const session = req.cookies.get("admin_auth")?.value;
  const isLoginPage = req.nextUrl.pathname === "/admin/login";

  if (!session && !isLoginPage) {
    return NextResponse.redirect(
      new URL("/admin/login", req.url)
    );
  }

  if (
    session !== process.env.ADMIN_SESSION_SECRET &&
    !isLoginPage
  ) {
    return NextResponse.redirect(
      new URL("/admin/login", req.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};