import { auth, provideMap, signIn, signOut } from "@/auth"
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
 


export default async function SignIn() {
  const session = await auth();

  if(session) {

    return (
      <div className="min-h-screen w-full border flex flex-col md:flex-row gap-4 items-center justify-center">
        <div className="flex flex-col px-6 py-2 gap-6 items-center">
          <Image src={"main logo.svg"} width={200} height={200} alt="Logo" />
          <h1 className="text-yellow text-[36px]">Sign in to your account</h1>
        </div>

        <div className="border px-6 py-2 ">
          <form
            className="space-y-4"
            action={async (formData) => {
              "use server";
              await signIn("credentials", formData);
            }}
          >
            <div className="flex gap-3 items-start flex-col">
              <label className="input bg-white input-warning flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="text"
                  className="grow w-[350px] max-w-sm"
                  placeholder="Email"
                />
              </label>

              <label className="input bg-white input-warning flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  placeholder="Password"
                  className="grow w-[350px] max-w-sm"
                />
              </label>
            </div>

            <button
              type="submit"
              className="drop-shadow-md bg-[#ac6616] px-4 py-2 shadow-sm text-white border-none outline-none w-full"
            >
              Log in
            </button>
          </form>

          {/**HORIZONTAL LINE */}

          <div className="flex flex-row items-center space-x-3 self-center mx-auto justify-center my-6">
            <div className="h-[1px] bg-[#ac6616] w-24" />
            <p className="text-[#ac6616]">Or sign in using</p>
            <div className="h-[1px] bg-[#ac6616] w-24" />
          </div>

          {Object.values(provideMap).map((provider) => (
            <form
              key={provider?.id}
              action={async () => {
                "use server";
                await signIn();
              }}
              className="flex flex-col space-y-3"
            >
              <button className={cn(`drop-shadow-md border px-4 py-2 shadow-sm text-secondaryColor w-full ${provider.style}`)}>
                  Sign in with {provider?.name}
               </button>
             
            </form>
          ))}


          <div className="flex text-yellow my-4 justify-between items-center w-full" >
              <Link href={'/sign-up'} className="hover:text-[#553e23] transition-all duration-150 ease-in-out">
                 <p>Sign up</p>
              </Link>

              <Link  href={'/forgot-password'} className="hover:text-[#553e23] transition-all duration-150 ease-in-out">
                 <p>Forgot password?</p>
              </Link>
          </div>
        </div>
      </div>
    );
  }
}