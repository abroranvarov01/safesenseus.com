import { NextRequest, NextResponse } from "next/server";

const slugs = [
  "smico100-ac-interconnect",
  "kidde-hardwired-monoxide",
  "first-alert-co710",
  "kidde-battery-monoxide",
  "first-alert-pc1210",
  "ring-listener",
  "x-sense-sc07-mr51",
  "kidde-kn-copp-b-lpm",
  "smoke-co-detector",
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
