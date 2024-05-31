import { auth } from "@/auth";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { NextApiRequest } from "next";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export const runtime = 'edge';


export async function GET(req: NextRequest) {
    const session = await auth();
    const prisma = new PrismaClient().$extends(withAccelerate());

    if(!session?.user) {
           return redirect('/');
    }
    try {
        const searchParams = req.nextUrl.searchParams;
        const bookId = searchParams.get('bookId');  

        if(!bookId) {
             return NextResponse.json("No book id", { status: 401 })
        }
       
        const data = await prisma.favoriteBooks.findFirst({ 
             where: { 
                 userid: session.user.id,
                 bookId: bookId as string
             } ,
        })
        console.log('BOOKD ID FROM BACKEND', bookId);

  
          return NextResponse.json(data, { status: 200 })
  
    } catch (error) {
        return NextResponse.json(error, { status: 400 })
  }
}