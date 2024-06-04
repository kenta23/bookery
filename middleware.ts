import { auth } from "./auth"


export default auth((req) => {
    const protectedRoutes = ['/favorites', '/book', '/api'];
    const isProtected = protectedRoutes.some(route => req.nextUrl.pathname.startsWith(route));

    if (!req.auth?.user && isProtected) {
        const newUrl = new URL("/sign-in", req.nextUrl.origin) 
        return Response.redirect(newUrl)
      }
  })

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}