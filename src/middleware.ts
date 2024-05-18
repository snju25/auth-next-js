import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  //get the path from url in next js
  const path = request.nextUrl.pathname
  // check its its a login and signup path returns true or false
  const isPublicPath = path === "/login" ||  path === '/signup'

  //checks if the token exist in the cookies if not fill with empty string
  const token = request.cookies.get('token')?.value || ''

  //if isPUblicPath true and token exist 
  if(isPublicPath && token){
    return NextResponse.redirect(new URL('/profile', request.nextUrl)) // redirects users to home page if they are already logged in. 
  }

  //if the! public path dn no token
  if(!isPublicPath && !token){
    return NextResponse.redirect(new URL('/login', request.nextUrl))
  }

}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/profile/:path*',
    '/login',
    '/signup',
  ],
}