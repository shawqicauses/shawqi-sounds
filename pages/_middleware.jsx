import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

export async function middleware(req) {
  const { pathname } = req.nextUrl
  const token = await getToken({ req, secret: process.env.JWT_SECRET })
  const url = new URL("/login", req.url)
  if (pathname.includes("/api/auth") || token) return NextResponse.next()
  if (pathname !== "/login" && !token) return NextResponse.redirect(url)
}
