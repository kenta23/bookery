import { auth } from "./auth";


export default auth((req) => {
     
    //if user is not authenticated when visiting dashboard
    
   /* if(req.nextUrl.pathname === '/' && !req.auth.user) {
         return Response.redirect(req.url.replace(req.nextUrl.pathname, '/login'));
    } */
        
})