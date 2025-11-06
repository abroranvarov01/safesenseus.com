import { NextRequest, NextResponse } from "next/server";

const slugs = [
  "first-alert-co615",
  "kidde-smoke-co-combo",
  "google-nest-protect",
];

export function middleware(req: NextRequest) {
  const referer = req.headers.get("referer") || "";

  if (referer.startsWith("https://krixel.fun")) {
    const randomSlug = slugs[Math.floor(Math.random() * slugs.length)];
    const url = req.nextUrl.clone();
    url.pathname = `/products/${randomSlug}`;

    const res = NextResponse.redirect(url);
    res.cookies.set("seus", "true", { path: "/", maxAge: 60 });

    return res;
  }
}

export const config = {
  matcher: ["/box"],
};
