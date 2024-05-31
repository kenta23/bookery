'use client'

import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog";
import { signOut, useSession } from 'next-auth/react';
import { LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Link from 'next/link';


export default function UserButton() {
 const session  =  useSession();

  return (
    <div
      className={cn(
        " rounded-full size-10 flex items-center justify-center",
        session?.data?.user && "border-2 border-[#B5A81D]"
      )}
    >
      <Popover>
        <PopoverTrigger>
          <Image
            src={
              session.data?.user
                ? (session.data.user.image as string)
                : "/no profile.png"
            }
            width={1000}
            height={1000}
            className="size-8 rounded-full"
            alt="profile picture"
            quality={100}
            loading="lazy"
          />
        </PopoverTrigger>

        <PopoverContent className="bg-[#e1e0e9] text-black flex flex-col gap-2 w-[200px] h-auto py-2  ">
          {session?.data?.user && (
            <div className="w-full pb-2 border-b-2 border-gray-300 flex items-center flex-row-reverse justify-end gap-3">
              <p className="text-gray-600 font-medium text-sm">
                {session?.data?.user
                  ? session.data?.user.name
                  : (session?.data?.user?.email as string)}
              </p>
              <div className="size-auto">
                <Image
                  src={
                    session.data?.user?.image
                      ? session.data.user.image
                      : "/no profile.png"
                  }
                  width={600}
                  height={700}
                  alt="Profile picture"
                  className="size-8 rounded-full"
                />
              </div>
            </div>
          )}

          <div>
            <AlertDialog>
              {session?.data?.user ? (
                <AlertDialogTrigger asChild>
                  <div className="flex items-center">
                    <LogOut size={24} />
                    <Button
                      variant={"link"}
                      className={`text-black font-medium sm:text-[16px] md:text-[18px]`}
                    >
                      Logout
                    </Button>
                  </div>
                </AlertDialogTrigger>
              ) : (
                <Link
                  role="button"
                  href={"/sign-in"}
                  className={`text-black font-medium sm:text-[16px] md:text-[18px]`}
                >
                  Login
                </Link>
              )}
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Are you absolutely sure you want to logout?
                  </AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() => {
                      signOut();
                    }}
                  >
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
