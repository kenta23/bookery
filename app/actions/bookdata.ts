'use server'

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { redirect } from "next/navigation";



export async function addToFavorites(bookId: string) {
    const session = await auth();
    const prisma = new PrismaClient().$extends(withAccelerate());
    let res;

    if(!session?.user) {
           return redirect('/');
    }
   try {
      const checkIsFavorite = await prisma.favoriteBooks.findFirst({
           where: {
              bookId
           }
      })

      if(checkIsFavorite) { 
          const idTodelete = await prisma.favoriteBooks.findFirst({
               where: {
                   bookId,
               } 
       })

         res = await prisma.favoriteBooks.delete({
              where: {
                id: idTodelete?.id
              }
          })
      }
      else {
         res = await prisma.favoriteBooks.create({ 
            data: {
               bookId,
               user: {
                 connect: { id: session.user.id }
               }  
            }
        })
      }
      
      console.log('RESPONSE', res);
      return res;

    } catch (error) {
       console.log(error);
       throw new Error();
   }
    
}
