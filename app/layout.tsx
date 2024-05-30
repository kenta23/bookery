import type { Metadata } from "next";
import {  Aleo, Inter } from "next/font/google";
import "./globals.css";
import './newsletterbg.css'
import ReactQueryProvider from "./providers/ReactQueryProvider";
import Script from "next/script";
import Footer from "./components/footer";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });


const aleo = Aleo({
     subsets: ['latin'],
     weight: ["200", "400", "500", "600", "800"],
     fallback: ['inter', 'sans-serif']
})
export const metadata: Metadata = {
  title: "Bookery",
  description: "Shop now at our #1 online bookstore",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={aleo.className}>
         <ReactQueryProvider>
              <SessionProvider>
                 {children}
                 <Toaster />
              </SessionProvider>
         </ReactQueryProvider>
      </body>
    </html>
  );
}
