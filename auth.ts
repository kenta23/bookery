import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { PrismaNeon } from "@prisma/adapter-neon"
import { Pool } from "@neondatabase/serverless"
import Github from 'next-auth/providers/github'
import Facebook from 'next-auth/providers/facebook'
import Google from 'next-auth/providers/google'
import Twitter from 'next-auth/providers/twitter'
import { Provider } from "next-auth/providers"


const prisma = new PrismaClient().$extends(withAccelerate());

const providers: Provider[] = [
  Github({
    clientId: process.env.AUTH_GITHUB_ID,
    clientSecret: process.env.AUTH_GITHUB_SECRET,
  }),
  Google({
    clientId: process.env.AUTH_GOOGLE_ID,
    clientSecret: process.env.AUTH_GOOGLE_SECRET,
  }),
  Twitter,
];


export const providerStyle = [
  {
    id: "google",
    name: "Google",
    style: "border-green-500"
  },
  {
    id: "facebook",
    name: "Facebook",
    style: "border-blue-500"
  },
  {
    id: "github",
    name: "GitHub",
    style: "border-gray-500"
  },
  {
    id: "twitter",
    name: "Twitter",
    style: "border-[#1DA1F3]"
  }
];

export const provideMap = providers.map((provider) => {
  if (typeof provider === "function") {
    const providerData = provider();
    const style = providerStyle.find(s => providerData.name === s.name)?.style || '';
    return { id: providerData.id, name: providerData.name, style }
  } else {
    return { id: provider.id, name: provider.name, style: '' }
  }
})

export const { handlers, signIn, signOut, auth } = NextAuth({
     adapter: PrismaAdapter(prisma),
     providers,
     pages: {
         signIn: '/sign-in'
     }
})