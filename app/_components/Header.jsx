"use client";

import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import React from "react";

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="flex justify-between items-center p-6 md:px-20 shadow-md ">
      <Image src="/logo.png" alt="logo" width={200} height={200} />

      <div className="hidden md:flex border p-2 rounded-lg bg-gray-200 w-96">
        <input type="text" className="bg-transparent w-full outline-none" />
        <Search />
      </div>

      {isSignedIn ? (
        <div className="flex gap-3">
          <div className="flex gap-2">
            <ShoppingCart />
            <label className="p-1  px-2 rounded-full bg-slate-200">0</label>
          </div>
          <UserButton />
        </div>
      ) : (
        <div className="flex gap-5">
          <SignInButton mode="modal">
            <Button variant="outline">Login</Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button>Sign Up</Button>
          </SignUpButton>
        </div>
      )}
    </div>
  );
}
//52:36
export default Header;
