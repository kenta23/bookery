import Booknavbar from "@/app/components/booknavbar";



export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
       <section className="bg-[#F8F6EA]"> 
           <Booknavbar />
           {children}    
       </section>
   )
}