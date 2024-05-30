import { auth } from "./auth"


export default auth((req) => {
    const protectedRoutes = '/favorites' || '/book/*' || '/books' || '/search' || '/api';
    if (!req.auth?.user && req.nextUrl.pathname === protectedRoutes) {
        const newUrl = new URL("/sign-in", req.nextUrl.origin) 
        return Response.redirect(newUrl)
      }
  })

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}