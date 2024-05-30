import { Metadata } from "next";
import Booknavbar from "../components/booknavbar";


export const metadata: Metadata = {
    title: 'My favorites',
    description: 'favorite books', 
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
       <section className="bg-[#F8F6EA]"> 
           <Booknavbar />
           {children}     
       </section>
   )
}