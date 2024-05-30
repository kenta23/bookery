import { auth, provideMap, signIn, signOut } from "@/auth"
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
 


export default async function SignIn() {
  const session = await auth();

    return (
      <div className="flex place-items-center w-full h-screen">
           <div className="h-[400px] shadow-lg space-y-6 w-fit min-w-[420px] m-auto border-[1px] border-b-gray-300 flex-row gap-6 items-center justify-center">
        <div className="flex flex-col items-center">
          <Image src={"main logo.svg"} width={1000} height={1000} className="size-[150px]" alt="Logo" />
          <h1 className="text-yellow text-[25px]">Sign in to your account</h1>
        </div>

      <div className="border px-6 py-2 h-auto space-y-6"> 
       {/**SIGN IN WITH GOOGLE */}
          <form
              action={async () => {
                "use server";
                await signIn("google", { redirectTo: '/'});
              }}
              className=""
            >
              <button className={`drop-shadow-md border px-8 py-3 shadow-sm text-secondaryColor w-full border-gray-600 rounded-xl`}>
                   <span className="text-[20px] font-medium">Sign in with Google</span>
               </button>     
            </form>

          {/**SIGN IN WITH GITHUB */}
            <form
              action={async () => {
                "use server";
                await signIn("github", { redirectTo: '/'});
              }}
              className="flex flex-col space-y-3"
            >
               <button className={`drop-shadow-md border px-8 py-3 shadow-sm text-secondaryColor w-full border-gray-600 rounded-xl`}>
                   <span className="text-[20px] font-medium">Sign in with Github</span>
               </button>      
            </form>
            
        </div>
      </div>
      </div>
    );
}