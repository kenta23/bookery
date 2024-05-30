import { auth } from "@/auth";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";


export async function GET(req: Request, res: Response) {
    const session = await auth();
    const prisma = new PrismaClient().$extends(withAccelerate());

    if(!session?.user) {
           return redirect('/');
    }
   try {
      const data = await prisma.favoriteBooks.findMany({
          where: {
             userid: session.user.id 
          },  
      })
      
      console.log('RES FROM BACKEND ', res);
      return NextResponse.json(data, { status: 200 }) ;

    } catch (error) {
       console.log(error);
      return NextResponse.json(error, { status: 400 }) ;
   }
    
}